import React from 'react';

const SplashScreen = () => {
  return (
    <div 
      className="flex items-center justify-center h-full bg-cover bg-center" 
      style={{ backgroundImage: `url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSejlUPZWzCcWInHrAU71x0IhgHXeIW1NYdcEXTFWDNt17cADSI')` }}
    >
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-lg text-gray-600">Your app is loading...</p>
      </div>
    </div>
  );
}

export default SplashScreen;
