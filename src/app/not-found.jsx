"use client";
import React from 'react';
import { Frown } from 'lucide-react';
import { useRouter } from 'next/navigation';

/**
 * A highly animated and humorous 404 Not Found page component for CLOUDX.
 * This version is element-rich, featuring multiple floating objects and characters
 * to create a dynamic "lost in the cloud" experience, with the central content
 * floating freely over the animated background.
 */
const App = () => {
  const router = useRouter();
  const handleGoHome = () => {
    console.log("Guiding our heroes back to the CLOUDX homepage...");
    router.replace("/")
  };

  return (
    <>
      {/* Custom styles for character animations and entrance effects */}
      <style>
        {`
          /* Base entrance animations (as before) */
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes popIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
          .fade-in-1 { animation: fadeInDown 0.8s ease-out 0.2s forwards; opacity: 0; }
          .fade-in-2 { animation: fadeInDown 0.8s ease-out 0.4s forwards; opacity: 0; }
          .fade-in-3 { animation: fadeInDown 0.8s ease-out 0.6s forwards; opacity: 0; }
          .pop-in-4 { animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards; opacity: 0; }
          .fade-in-5 { animation: fadeInDown 0.8s ease-out 1.0s forwards; opacity: 0; }
          .animate-pulse-slow { animation: pulse-slow 3s infinite; }
          @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

          /* Character Specific Animations */

          /* The Lost Cloud (Cloudy) - More random float */
          @keyframes floatCloud {
            0% { transform: translate(-100px, 0px) scale(1); opacity: 0; }
            15% { opacity: 1; }
            40% { transform: translate(calc(100vw - 200px), 30px) scale(1.1); }
            70% { transform: translate(calc(100vw - 250px), -10px) scale(0.95); }
            100% { transform: translate(-100px, 0px) scale(1); opacity: 0; }
          }
          .animate-cloudy {
            animation: floatCloud 30s ease-in-out infinite alternate;
          }

          /* The Confused Pixel - More FRANTIC bounce and rotation */
          @keyframes bouncePixel {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            10% { transform: translate(80px, -50px) rotate(90deg); }
            35% { transform: translate(150px, 70px) rotate(180deg); }
            60% { transform: translate(-50px, 100px) rotate(-90deg); }
            85% { transform: translate(-100px, -30px) rotate(45deg); }
          }
          .animate-pixel {
            animation: bouncePixel 10s ease-in-out infinite alternate; /* Faster/frantic */
          }
          
          /* New: Main Content Block Float */
          @keyframes mainFloat {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
          }
          .animate-main-float {
              animation: mainFloat 8s ease-in-out infinite;
              text-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for floating text */
          }

          /* The Overworked Server Hamster (Hammy) - Wheel Spin & Hamster Body Jiggle (Slightly faster) */
          @keyframes wheelSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-wheel { animation: wheelSpin 0.4s linear infinite; }

          @keyframes hamsterJiggle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          .animate-hamster { animation: hamsterJiggle 0.8s ease-in-out infinite; }
          
          /* New Comet Trail Element */
          @keyframes cometStreak {
            0% { transform: translate(100vw, 0px) rotate(-45deg); opacity: 0; }
            5% { opacity: 1; }
            95% { opacity: 1; }
            100% { transform: translate(-100px, 100vh) rotate(-45deg); opacity: 0; }
          }
          .animate-comet {
            animation: cometStreak 35s linear infinite; /* Long, smooth travel */
            box-shadow: 0 0 15px rgba(52, 211, 163, 0.8); /* Teal glow */
          }
          
          /* New: Wandering Data Packet */
          @keyframes dataDrift {
              0% { transform: translate(0, 0) rotate(0deg); }
              30% { transform: translate(20vw, 10vh) rotate(90deg); }
              60% { transform: translate(5vw, 5vh) rotate(180deg); }
              100% { transform: translate(0, 0) rotate(270deg); }
          }
          .animate-data-drift {
              animation: dataDrift 25s ease-in-out infinite alternate;
          }


          /* Background Floating Shapes - Increasing number and variance */
          @keyframes floatBgShape {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
            50% { transform: translateY(-30px) rotate(15deg); opacity: 0.1; }
            100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          }
          .animate-bg-float {
            animation: floatBgShape 20s ease-in-out infinite alternate;
          }
          
          /* 404 Glitch Effect (Stronger on hover) */
          @keyframes glitch {
            0%, 100% { text-shadow: 2px 2px #34d399, -2px -2px #06b6d4; }
            25% { text-shadow: -2px 2px #34d399, 2px -2px #06b6d4; }
            50% { text-shadow: 2px -2px #34d399, -2px 2px #06b6d4; }
            75% { text-shadow: -2px -2px #34d399, 2px 2px #06b6d4; }
          }
          .animate-glitch-404:hover {
            animation: glitch 0.2s linear infinite;
          }
        `}
      </style>
      
      {/* Main container: soft gradient background, centered, relative for absolute positioned elements */}
      <div className="min-h-screen bg-gradient-to-br from-white to-teal-50 flex items-center justify-center p-4 sm:p-8 font-sans antialiased overflow-hidden relative">

        {/* --- BACKGROUND ANIMATED ELEMENTS --- */}
        {/* Subtle Floating Shapes (More of them) */}
        <div className="absolute top-1/4 left-[10%] w-24 h-24 bg-teal-200 rounded-full opacity-10 animate-bg-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 right-[15%] w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-bg-float" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-[5%] w-16 h-16 bg-pink-100 rounded-lg opacity-10 animate-bg-float" style={{ animationDelay: '15s', transform: 'rotate(45deg)' }}></div>
        <div className="absolute top-[80%] right-[5%] w-10 h-10 bg-teal-300 rounded-full opacity-15 animate-bg-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[10%] right-[30%] w-12 h-12 bg-blue-100 rounded-lg opacity-10 animate-bg-float" style={{ animationDelay: '12s', transform: 'rotate(20deg)' }}></div>

        {/* Comet Trail (More of them) */}
        <div 
            className="absolute top-0 right-0 w-2 h-20 bg-teal-400 opacity-0 animate-comet" 
            style={{ animationDelay: '10s' }}
        ></div>
        <div 
            className="absolute top-0 right-0 w-2 h-20 bg-teal-400 opacity-0 animate-comet" 
            style={{ animationDelay: '25s' }}
        ></div>
        <div 
            className="absolute top-0 right-0 w-2 h-20 bg-blue-300 opacity-0 animate-comet" 
            style={{ animationDelay: '5s', animationDuration: '40s' }}
        ></div>


        {/* New: Wandering Data Packet (Teal Square) */}
        <div 
            className="absolute top-[30%] right-[30%] w-12 h-12 bg-teal-500/70 border-4 border-teal-600 rounded-md shadow-xl animate-data-drift z-20 flex items-center justify-center text-xs text-white font-bold"
        >
            DATA
        </div>


        {/* --- COMEDY CHARACTERS --- */}

        {/* The Lost Cloud (Cloudy) - FLUFFY VERSION */}
        <div 
          className="absolute top-[15%] left-0 w-40 h-24 animate-cloudy z-10"
          style={{ transform: 'translateX(-100%)', zIndex: 10 }}
        >
          <div className="relative w-full h-full">
            {/* Cloud body components */}
            <div className="absolute w-24 h-24 bg-white rounded-full shadow-lg border border-teal-100" style={{ top: '0', left: '20px' }}></div>
            <div className="absolute w-16 h-16 bg-white rounded-full shadow-md border border-teal-100" style={{ top: '10px', left: '70px' }}></div>
            <div className="absolute w-12 h-12 bg-white rounded-full shadow-sm border border-teal-100" style={{ bottom: '0', left: '0px' }}></div>
            {/* Floating Question Mark */}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-teal-600 font-extrabold text-2xl z-20">?</span>
          </div>
        </div>

        {/* The Confused Pixel */}
        <div className="absolute bottom-[20%] right-[10%] w-10 h-10 bg-yellow-400 border-4 border-yellow-500 rounded-xl shadow-lg flex items-center justify-center animate-pixel z-10">
          <span className="text-xl font-extrabold text-white">X</span>
        </div>

        {/* The Overworked Server Hamster (Hammy) - CUTENESS UPGRADE */}
        <div className="absolute bottom-[5%] left-[5%] z-20">
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Hamster wheel */}
            <div className="w-20 h-20 rounded-full border-4 border-teal-300 bg-gray-100 absolute animate-wheel" style={{ transformOrigin: 'center' }}></div>
            {/* Hamster body */}
            <div className="w-10 h-10 bg-orange-400 rounded-full relative animate-hamster shadow-md border-2 border-orange-500">
              {/* Ears */}
              <div className="absolute w-3 h-3 rounded-full bg-orange-500 -top-2 left-1"></div>
              <div className="absolute w-3 h-3 rounded-full bg-orange-500 -top-2 right-1"></div>
              {/* Hamster head */}
              <div className="w-6 h-6 bg-orange-300 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center border border-orange-400">
                <span className="text-xs -translate-y-px">😵‍💫</span> {/* Dizzy emoji */}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-700 font-semibold mt-2">Hammy's struggling...</p>
        </div>


        {/* --- MAIN CONTENT (CENTERED, FLOATING) --- */}
        <div className="text-center max-w-lg w-full relative z-30 animate-main-float">

          {/* 1. Teal Icon and Large Error Code - Uses fade-in-1 */}
          <div className="flex flex-col items-center justify-center mb-8 fade-in-1">
            <Frown className="w-16 h-16 sm:w-20 sm:h-20 text-teal-500 mb-4 animate-pulse-slow" />
            
            <h1
              className="
                text-8xl sm:text-9xl font-extrabold tracking-tight 
                text-gray-900 transition-all duration-300 cursor-default
                hover:text-teal-600 hover:scale-[1.03] hover:shadow-lg rounded-2xl p-2
                animate-glitch-404
              "
              style={{
                textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                lineHeight: '1',
              }}
            >
              404
            </h1>
          </div>

          {/* 2. Message - Uses fade-in-2 */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 fade-in-2">
            Lost in the CLOUDX
          </h2>
          
          {/* 3. Description - Uses fade-in-3 */}
          <p className="text-lg text-gray-700 mb-10 max-w-md mx-auto fade-in-3">
            Our tiny Cloud, **Cloudy**, seems to have floated away with this page!
            Even **Hammy** the server hamster can't find it, and a **Confused Pixel** fell off! This is awkward.
          </p>

          {/* 4. Action Button: Pop-in animation, interactive shadow and lift on hover. Mentions CLOUDX */}
          <button
            onClick={handleGoHome}
            className="
              inline-flex items-center justify-center
              px-10 py-4 text-lg font-bold leading-6
              text-white bg-teal-600 rounded-full shadow-xl
              transition-all duration-300 ease-in-out
              hover:bg-teal-700 hover:shadow-2xl hover:shadow-teal-400/50
              focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-70
              transform hover:-translate-y-1.5 active:scale-95
              pop-in-4
            "
          >
            Help Guide Cloudy Home!
          </button>

          {/* 5. Decorative Link - Uses fade-in-5 */}
          <div className="mt-8 text-sm text-gray-500 fade-in-5">
            <p>
              Still lost in the aether?
              <a href="/" className="underline text-teal-600 hover:text-teal-700 transition duration-150 font-medium ml-1">
                Ping CLOUDX Support!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
