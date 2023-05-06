import {Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from '../Home/Pages/HomePage'
import { LoginPage, RegisterPage } from '../Auth/Page'

export const AppRouters = () => {

  return (

    <>
    
        <Routes>

            <Route path='home' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route path='/*' element={<Navigate to={'/'} />} />

        </Routes>
    
    </>

  )
}
