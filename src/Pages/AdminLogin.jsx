// GameAdminLogin.jsx - Email icon reverted to Mail icon

import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react'; // Re-importing Mail icon

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const numericRegex = /\d/;

    if (!numericRegex.test(password)) {
      setError('Password must contain at least one numeric value.');
      return;
    }

    setError('');
    console.log('Login successful!', { email, password });
    alert('Validation Passed! Proceeding to login...');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        
        <div className="text-center pb-4 mb-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Game Admin Panel</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to start your session</p>
        </div>

        <form onSubmit={handleLogin}>
          
          {/* Email Input - REVERTED TO MAIL ICON (text-gray-400) */}
          <div className="mb-4">
            <div className="relative flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition duration-150 ease-in-out">
              <input
                type="email"
                placeholder="Email"
                className="w-full py-2 pl-4 pr-10 focus:outline-none bg-transparent"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Reverted to Mail icon with standard text-gray-400 color */}
              <span className="absolute right-0 top-0 h-full flex items-center pr-3 text-gray-400">
                <Mail className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Password Input - Lock icon (text-gray-400) */}
          <div className="mb-2">
            <div className="relative flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition duration-150 ease-in-out">
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 pl-4 pr-10 focus:outline-none bg-transparent"
                aria-label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute right-0 top-0 h-full flex items-center pr-3 text-gray-400">
                <Lock className="w-5 h-5" />
              </span>
            </div>
          </div>
          
          {error && (
            <p className="text-red-500 text-sm mt-1 mb-4">{error}</p>
          )}

          <div className="flex justify-start space-x-2 mt-6">
            
            <button
              type="submit"
              className="px-4 py-2 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out shadow-md"
            >
              LOGIN
            </button>
            
            <button
              type="button"
              className="px-4 py-2 text-white font-medium rounded-md bg-red-600 hover:bg-red-700 transition duration-150 ease-in-out shadow-md"
              onClick={() => { /* Handle Home action */ }}
            >
              HOME
            </button>

          </div>
        </form>
        
      </div>
      
      <div className="absolute bottom-4 right-4 text-sm text-blue-500 cursor-pointer">
        Show desktop
      </div>
    </div>
  );
};

export default AdminLogin;