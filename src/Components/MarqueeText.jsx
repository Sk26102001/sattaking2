import React from "react";

// --- Custom CSS for Marquee Animation ---
const MarqueeStyles = () => (
    <style>
        {`
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
            }
            .animate-marquee {
                /* ब्लर (blur) को ठीक करने के लिए GPU एक्सेलेरेशन को फोर्स किया गया है */
                will-change: transform;
                transform: translate3d(0, 0, 0); /* मुख्य fix */
                
                /* 60s की अवधि (speed) को आप '60s' बदलकर नियंत्रित कर सकते हैं */
                animation: marquee 150s linear infinite; 
            }
        `}
    </style>
);

// --- Marquee Text Component (मुख्य कॉम्पोनेंट) ---
const MarqueeText = () => {
    // स्लैश (/) को कॉमा (,) और स्पेस से बदल दिया गया है, और अंत में "|" ब्रेकर जोड़ा गया है।
    const marqueeText = "MILKING GHAZIABAD SATTA KING, DISAWAR SATTA KING, GALI DISAWAR SATTA, TODAY DELHI SATTA, FARIDABAD DESAWAR SATTA, GHAZIABAD GALI SATTA KING, DESAWAR SATTA KING, FARIDABAD DESAWAR, DELHI GALI SATTA KING | ";
    
    // Marquee प्रभाव बनाने के लिए टेक्स्ट को डुप्लीकेट (duplicate) किया जाता है
    const duplicatedText = marqueeText.repeat(5); // 5 बार दोहराना ताकि यह लूप में सहज लगे

    return (
        // एक Fragment का उपयोग किया जाता है ताकि Styles और Marquee दोनों को रेंडर किया जा सके
        <div className="w-full">
            {/* 1. Custom CSS styles for Keyframes (CSS को सबसे पहले लोड करें) */}
            <MarqueeStyles />
            
            {/* 2. मुख्य Marquee कंटेनर */}
            {/* कलर स्कीम: Light Blue Background (bg-blue-200) और Dark Blue Text (text-blue-900) */}
            <div className="w-full bg-blue-200 overflow-hidden py-1 border-t-4 border-b-4 border-blue-400 shadow-xl">
                <div 
                    className="whitespace-nowrap inline-block font-extrabold text-base text-blue-900 tracking-wider animate-marquee"
                >
                    {duplicatedText}
                </div>
            </div>
        </div>
    );
};

// अब MarqueeText ही डिफ़ॉल्ट रूप से एक्सपोर्ट (export) किया गया है
export default MarqueeText;