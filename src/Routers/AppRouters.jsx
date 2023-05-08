import {Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from '../Home/Pages/HomePage'
import { LoginPage, RegisterPage } from '../Auth/Page'
import { useUserStore } from '../Auth/Hooks/useUserStore'
import { useEffect } from 'react'
import { PatientDashboardPage } from '../Public/Pages/PatientDashboardPage'
import { UserDashboardPage } from '../Private/Pages/UserDashboardPage'
import { AppoDashboardPage } from '../Private/Pages/AppoDashboardPage'
import { AppoEditFormPage } from '../Private/Pages/AppoEditFormPage'

export const AppRouters = () => {

    const {user, roleCheck} = useUserStore()

    useEffect(() => {

      roleCheck()
    }, [])

  return (

    <>
    
        <Routes>

            <Route path='home' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route path='patient-dash' element={<PatientDashboardPage />} />

            <Route path='user-dashboard' element={<UserDashboardPage />} />
            <Route path='appo-dashboard' element={<AppoDashboardPage />} />
            <Route path='appo-edit' element={<AppoEditFormPage />} />

            <Route path='/*' element={<Navigate to={'home'} />} />

        </Routes>
    
    </>

  )
}
