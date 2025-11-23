// RegisterPage.jsx

// import React, { useState } from 'react';
// // आप चाहें तो lucide-react से Lock या User आइकॉन इस्तेमाल कर सकते हैं, पर यहाँ सादगी के लिए मैंने सिर्फ़ इनपुट पर ध्यान दिया है।

// const Register = () => {
//     // State to handle form inputs (Optional, but good practice for React forms)
//     const [formData, setFormData] = useState({
//         fullName: '',
//         userName: '',
//         mobile: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your registration logic here
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//         console.log('Registration Data:', formData);
//         alert('Registration attempted!');
//     };

//     return (
//         // Main container with the dark pink/maroon gradient background
//         <div className="min-h-screen flex flex-col bg-blue-300" style={{ background: 'linear-gradient(to bottom right, #880e4f, #c2185b)' }}>

//             {/* Content Area (Padded to keep the footer visible at the bottom) */}
//             <div className="flex-grow flex items-center justify-center p-4">
//                 <div className="w-full max-w-lg">
                    
//                     {/* Header */}
//                     <h1 className="text-4xl font-normal text-white mb-8 text-center tracking-wider">
//                         REGISTER
//                     </h1>

//                     {/* Registration Form */}
//                     <form onSubmit={handleSubmit} className="space-y-4">
                        
//                         {/* Full Name */}
//                         <input
//                             type="text"
//                             name="fullName"
//                             placeholder="Full Name"
//                             value={formData.fullName}
//                             onChange={handleChange}
//                             className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
//                             required
//                         />

//                         {/* User Name */}
//                         <input
//                             type="text"
//                             name="userName"
//                             placeholder="User Name"
//                             value={formData.userName}
//                             onChange={handleChange}
//                             className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
//                             required
//                         />

//                         {/* Mobile */}
//                         <input
//                             type="tel"
//                             name="mobile"
//                             placeholder="Mobile"
//                             value={formData.mobile}
//                             onChange={handleChange}
//                             className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
//                             required
//                         />

//                         {/* Password Fields Row */}
//                         <div className="flex space-x-4 pt-2">
//                             {/* Password */}
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="w-1/2 p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
//                                 required
//                             />

//                             {/* Confirm Password */}
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 placeholder="Confirm Password"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                                 className="w-1/2 p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
//                                 required
//                             />
//                         </div>

//                         {/* Register Button */}
//                         <div className="pt-6 flex justify-center">
//                             <button
//                                 type="submit"
//                                 className="bg-white text-gray-800 font-semibold py-2 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-150 ease-in-out uppercase text-sm"
//                             >
//                                 Register
//                             </button>
//                         </div>
//                     </form>

//                     {/* Login Link */}
//                     <div className="text-center mt-6 text-white text-sm">
//                         <span className="text-opacity-90">Allready have Account! </span>
//                         <a href="#" className="font-semibold text-white underline hover:text-gray-200">
//                             Login Her
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Component (as requested in the copy.png) */}
//             <div className="w-full bg-amber-700 p-3 flex flex-col items-center justify-center shadow-lg">
                
//                 {/* 10A ONLINE Button/Badge */}
//                 <div className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md shadow-md mb-2 text-xs cursor-pointer">
//                     10A ONLINE
//                 </div>

//                 {/* Copyright Text (Updated as per copy.png) */}
//                 <p className="text-white text-xs font-normal text-opacity-80">
//                     © 2023 Copyright GALIZ.com
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;
// RegisterPage.jsx
// RegisterPage.jsx

// RegisterPage.jsx

// RegisterPage.jsx

import React, { useState } from 'react';

const Register = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        mobile: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Registration:", formData);
    };

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                background: "linear-gradient(to bottom right, #ffffff, #dff1ff)"
            }}
        >

            {/* CONTENT */}
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-lg">

                    <h1 className="text-4xl font-normal text-gray-800 mb-8 text-center tracking-wider">
                        REGISTER
                    </h1>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-sm border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 text-gray-900"
                            required
                        />

                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            value={formData.userName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-sm border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 text-gray-900"
                            required
                        />

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full p-3 rounded-sm border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 text-gray-900"
                            required
                        />

                        {/* PASSWORD ROW */}
                        <div className="flex space-x-4 pt-2">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-1/2 p-3 rounded-sm border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 text-gray-900"
                                required
                            />

                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-1/2 p-3 rounded-sm border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 text-gray-900"
                                required
                            />
                        </div>

                        {/* Button */}
                        <div className="pt-6 flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-150 uppercase text-sm"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    {/* LOGIN LINK */}
                    <div className="text-center mt-6 text-gray-700 text-sm">
                        Already have an Account?{" "}
                        <a href="/login" className="font-semibold underline text-blue-700 hover:text-blue-900">
                            Login Here
                        </a>
                    </div>

                </div>
            </div>

            {/* FOOTER */}
            <div className="w-full bg-blue-500/20 p-3 flex flex-col items-center justify-center">

                <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md shadow-md mb-2 text-xs cursor-pointer">
                    10A ONLINE
                </div>

                <p className="text-gray-700 text-xs opacity-90">
                    © 2023 Copyright GALIZ.com
                </p>

            </div>
        </div>
    );
};

export default Register;


