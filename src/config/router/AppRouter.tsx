import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/home-page/HomePage'
import LoginPage from '../../pages/login-page/LoginPage'
import TermsConditions from '../../pages/terms-conditions/TermsConditions'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/terms-and-conditions' element={<TermsConditions/>}/>
            <Route path='/propr-home' element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter