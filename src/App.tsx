import React from 'react';
import AppRouter from './config/router/AppRouter';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';
import SplashScreen from './pages/splash-screen/Index';
import TermsConditions from './pages/terms-conditions/TermsConditions';

function App() {
  return (
    <div className='w-[20%] h-[70vh] bg-white text-black'>
      {/* <SplashScreen/> */}
      <AppRouter/>
      {/* <LoginPage/> */}
      {/* <TermsConditions/> */}
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
