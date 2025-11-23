import React from "react";

export default function PlayButton() {
  return (
    <div className="fixed bottom-6 right-6 z-10">
      <a
        href="https://wa.me/7068892978"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-105 transition duration-300">
          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-9 h-9 fill-white"
          >
            <path d="M16.001 3.2c-7.045 0-12.8 5.754-12.8 12.8 0 2.259.589 4.462 1.708 6.4l-1.792 6.4 6.579-1.728c1.855.988 3.94 1.509 6.101 1.509h.004c7.045 0 12.8-5.755 12.8-12.8S23.046 3.2 16.001 3.2zm0 23.467h-.003a10.61 10.61 0 01-5.396-1.475l-.386-.23-3.907 1.028 1.056-3.78-.252-.395a10.62 10.62 0 01-1.68-5.76c0-5.873 4.78-10.654 10.654-10.654 5.872 0 10.653 4.781 10.653 10.654 0 5.873-4.781 10.654-10.653 10.654zm5.861-7.947c-.321-.161-1.89-.93-2.184-1.036-.293-.108-.507-.162-.72.161-.213.321-.826 1.035-1.013 1.248-.187.214-.374.24-.694.08-.32-.161-1.351-.498-2.574-1.59-.952-.848-1.594-1.896-1.78-2.216-.187-.321-.02-.494.14-.654.144-.143.32-.374.48-.561.161-.187.214-.321.32-.534.106-.214.53-.4-.027-.561-.08-.161-.72-1.79-.987-2.453-.26-.626-.527-.54-.72-.54-.187-.013-.4-.013-.614-.013-.214 0-.56.08-.853.4-.293.32-1.12 1.095-1.12 2.668 0 1.573 1.147 3.087 1.307 3.307.16.214 2.254 3.44 5.46 4.82.763.33 1.358.527 1.822.674.765.243 1.46.209 2.013.127.614-.093 1.89-.773 2.157-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.214-.614-.374z" />
          </svg>
        </div>
      </a>

<div className="fixed bottom-23 right-4 z-10">
  <a
    href="https://wa.me/91XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="w-20 h-20 bg-red-600 rounded-full shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-105 transition duration-300">

      {/* Blinking ONLINE PLAY Text */}
      <span className="text-white text-xs font-bold animate-pulse text-center leading-tight">
        ONLINE<br/>PLAY
      </span>

    </div>
  </a>
</div>

    </div>

    
  );
}