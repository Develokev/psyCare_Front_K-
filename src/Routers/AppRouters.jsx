import {Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from '../Home/Pages/HomePage'
import { LoginPage, RegisterPage } from '../Auth/Page'
import { useUserStore } from '../Auth/Hooks/useUserStore'
import { useEffect } from 'react'
import { DashboardPage } from '../Private/Pages/DashboardPage'
import { PatientDashboardPage } from '../Public/Pages/PatientDashboardPage'

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

            <Route path='dashboard' element={<DashboardPage />} />


            <Route path='/*' element={<Navigate to={'home'} />} />

        </Routes>
    
    </>

  )
}
