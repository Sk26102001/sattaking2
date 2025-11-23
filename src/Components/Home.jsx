import React, { useState, useEffect } from 'react';
import logo from "../assets/logo1.png";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-19T19:30:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col justify-center items-center p-4 overflow-hidden relative">

      {/* Background Wave */}
      <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-20" viewBox="0 0 1440 320" fill="none">
        <path d="M0 160 L1440 96 L1440 320 L0 320 Z" fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* LIVE RESULT */}
      <div className="relative z-10 bg-red-600/90 backdrop-blur-sm border border-red-500/50 rounded-full px-6 py-2 mb-6 animate-pulse">
        <span className="text-sm font-bold tracking-wider">LIVE RESULT</span>
      </div>

      {/* Date & Time */}
      <div className="text-center mb-6 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-light text-yellow-400/80 mb-2">19 Nov 2025</h2>
        <p className="text-lg md:text-xl text-gray-300">07:30 PM IST</p>
      </div>

      {/* News */}
      <div className="text-center mb-8 animate-dip-dip">
        <p className="text-xl md:text-2xl font-semibold text-yellow-300 tracking-wide">
          खबर: रूको और देखो
        </p>
      </div>

      {/* 🔥 Faridabad First, THEN Waiting */}
      <div className="text-center mb-12 animate-bounce-slow">
        
        {/* Faridabad UP */}
        <p className="text-xl md:text-2xl text-gray-400 font-medium mb-3">
          Faridabad
        </p>

        {/* WAITING DOWN */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r 
           from-yellow-400 via-amber-300 to-orange-500 bg-clip-text 
           text-transparent mt-2">
          WAITING
        </h1>
      </div>

      {/* Button */}
      <button className="relative z-10 bg-gradient-to-r from-yellow-500 to-amber-600 
        hover:from-yellow-400 hover:to-amber-500 text-black font-bold px-8 py-4 
        rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 
        mb-12 text-lg">
        GO TO GUESSING
      </button>

      {/* Logo & Contact */}
      <div className="relative z-10 text-center space-y-4 mb-8 animate-fade-in-delayed">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 max-w-sm mx-auto shadow-xl">
          <img
            src={logo}
            alt="Satta King 786 Logo"
            className="mx-auto h-16 sm:h-20 w-auto drop-shadow-2xl mb-3"
          />
          <p className="text-sm text-gray-300 font-medium">
            For Any Information Contact: 0129-4567890
          </p>
        </div>
      </div>

      {/* Golden Star Floating */}
      <div className="absolute top-20 right-10 opacity-10 animate-float">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="#fbbf24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes dip-dip {
          0%, 50% { opacity: 1; transform: scale(1); }
          51%, 100% { opacity: 0.3; transform: scale(0.95); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1.2s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-dip-dip { animation: dip-dip 2s ease-in-out infinite; }
      `}</style>

    </div>
  );
};

export default Home;
