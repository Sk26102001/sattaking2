import React, { useState } from 'react';
const GameRecordPage = ({ gameName, navigateToHome }) => {
    
    // Jan 2025 वह पहली तारीख है जिससे डेटा शुरू होना चाहिए (बाउंड्री)
    const JAN_2025_BOUNDARY = new Date(2025, 0, 1); 
    
    // 1. मंथ स्टेट इनिशियलाइज़ करें (डिफ़ॉल्ट रूप से आज की मॉक तारीख का मंथ)
    const [currentChartDate, setCurrentChartDate] = useState(MOCK_CURRENT_DATE); 

    /** महीने की तारीख को फ़ॉर्मेट करता है (नेविगेशन बटन के लिए)। */
    const formatMonthLabel = (date, offset) => {
        const d = new Date(date);
        d.setDate(1); 
        d.setMonth(d.getMonth() + offset);
        return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    /** महीने को पूरा फ़ॉर्मेट करता है (हेडर के लिए) */
    const formatFullMonth = (date) => {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    /** पिछले महीने पर नेविगेट करता है। */
    const handlePrevMonth = () => {
        const newDate = new Date(currentChartDate);
        newDate.setMonth(newDate.getMonth() - 1);
        
        if (newDate < JAN_2025_BOUNDARY) {
             setCurrentChartDate(JAN_2025_BOUNDARY);
        } else {
             setCurrentChartDate(newDate);
        }
    };

    /** अगले महीने पर नेविगेट करता है। */
    const handleNextMonth = () => {
        const newDate = new Date(currentChartDate);
        newDate.setMonth(newDate.getMonth() + 1);
        
        // यदि नई तारीख मॉक वर्तमान तारीख से आगे निकल जाती है, तो मॉक वर्तमान तारीख पर सेट करें
        if (newDate > MOCK_CURRENT_DATE) {
            setCurrentChartDate(MOCK_CURRENT_DATE);
        } else {
            setCurrentChartDate(newDate);
        }
    };


    // DYNAMIC DATA GENERATION - अब currentChartDate पर निर्भर करता है
    const { dynamicRegionalDrawData, dynamicChartData } = getDynamicRecordChartData(gameName, currentChartDate);

    // Dynamic strings based on MOCK_CURRENT_DATE
    const today = MOCK_CURRENT_DATE.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const yesterday = new Date(MOCK_CURRENT_DATE);
    yesterday.setDate(yesterday.getDate() - 1);
    
    // Chart title uses the current dynamic month
    const currentMonthYear = formatFullMonth(currentChartDate);
    const headerTitle = `${gameName} Satta King Record Chart ${currentMonthYear}`;
    
    // क्षेत्रीय ड्रा डेटा के लिए कॉलम हेडर
    const dateHeadersRegional = [
        { label: yesterday.toLocaleDateString('en-US', { weekday: 'short' }) + `. ${yesterday.getDate()}th`, key: 'resultWed' },
        { label: new Date().toLocaleDateString('en-US', { weekday: 'short' }) + `. ${new Date().getDate()}th`, key: 'resultThu' },
    ];
    
    // रिकॉर्ड चार्ट के कॉलम हेडर
    const chartHeaders = ['DATE', 'DSWR', 'FRBD', gameName, 'GZBD', 'GALI'];
    const chartKeys = ['date', 'DSWR', 'FRBD', gameName, 'GZBD', 'GALI']; 
    
    // बटन की स्थिति निर्धारित करें 
    const isJan2025 = currentChartDate.getFullYear() === 2025 && currentChartDate.getMonth() === 0;
    const isCurrentMonthMock = currentChartDate.getFullYear() === MOCK_CURRENT_DATE.getFullYear() && 
                               currentChartDate.getMonth() === MOCK_CURRENT_DATE.getMonth();

    // बटन लेबल प्राप्त करें
    const prevMonthLabel = formatMonthLabel(currentChartDate, -1);
    const nextMonthLabel = formatMonthLabel(currentChartDate, 1);

    return (
        <div className="py-2 px-0 sm:px-0 lg:px-0 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="py-4 px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={navigateToHome}
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium p-2 rounded-lg transition duration-200 mb-4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        होम चार्ट पर वापस जाएं
                    </button>
                </div>



                {/* 1. Top Header */}
                <div className="bg-teal-600 text-white text-center py-3 px-4 shadow-lg">
                    <h1 className="text-xl font-bold">{headerTitle}</h1>
                </div>

                {/* 2. Regional Offline Draw Results Table */}
                <div className="bg-white shadow-md mb-6 overflow-hidden border-b-2 border-green-600">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-700 text-white">
                            <tr>
                                <th colSpan="2" className="px-6 py-3 text-left text-sm font-semibold">Regional Offline Draw Results</th>
                                {dateHeadersRegional.map((header, index) => (
                                    <th key={index} className="px-6 py-3 text-center text-sm font-semibold">{header.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-800">
                            {dynamicRegionalDrawData.map((data, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-bold">{data.name}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-500 italic">at {data.time}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-center text-base font-extrabold text-gray-900">{data.resultWed}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-center text-base font-extrabold text-red-600">{data.resultThu}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* 3. Main Record Chart Table */}
                <div className="bg-white shadow-xl mb-6 rounded-lg overflow-x-auto">
                    <h2 className="text-center bg-green-500 text-white text-lg font-bold py-3 rounded-t-lg">
                        {gameName} Satta Result Chart of {currentMonthYear}
                    </h2>
                    <table className="min-w-full divide-y divide-gray-300 table-fixed">
                        <thead className="bg-yellow-400">
                            <tr>
                                {chartHeaders.map((header, index) => (
                                    <th 
                                        key={index}
                                        className={`p-3 text-center text-xs font-extrabold uppercase tracking-wider text-gray-800 w-[12%] ${index === 0 ? 'w-[10%]' : ''}`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {dynamicChartData.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    {chartKeys.map((key, i) => (
                                        <td 
                                            key={i} 
                                            className={`p-3 text-center text-sm font-semibold ${key === 'date' ? 'font-bold text-gray-800' : 'text-gray-800'}`}
                                        >
                                            {row[key] === 'XX'
                                                ? <span className="text-red-600 font-extrabold">XX</span> 
                                                : row[key]
                                            }
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* 4. Month Navigation Buttons (फंक्शनल) */}
                <div className="flex justify-between max-w-sm mx-auto my-8">
                    <button 
                        onClick={handlePrevMonth}
                        // Jan 2025 से पहले जाने पर डिसएबल करें
                        disabled={isJan2025}
                        className={`px-6 py-2 font-bold rounded-lg shadow-lg transition duration-200 
                            ${isJan2025 ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        &larr; {prevMonthLabel}
                    </button>
                    <button 
                        onClick={handleNextMonth}
                        // वर्तमान महीने से आगे जाने पर डिसएबल करें
                        disabled={isCurrentMonthMock}
                        className={`px-6 py-2 font-bold rounded-lg shadow-lg transition duration-200 
                            ${isCurrentMonthMock ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        {nextMonthLabel} &rarr;
                    </button>
                </div>
                
                {/* 5. Footer/Status Bar */}
                <div className="text-center text-sm text-gray-500 mb-6">
                    Updated: {today}. (चार्ट माह: {currentMonthYear})
                </div>

            </div>
        </div>
    );
};
export default GameRecordPage;