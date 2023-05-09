import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import { useEffect } from "react"
import { useUserStore } from "../Auth/Hooks/useUserStore"
import { HomeRouters } from './HomeRouters'
import { UserDashboardPage } from '../Private/Pages/UserDashboardPage'
import { AppoDashboardPage } from '../Private/Pages/AppoDashboardPage'
import { AppoEditFormPage } from '../Private/Pages/AppoEditFormPage'
import { PublicRouters } from './PublicRouters'



export const PrivateRouters = () => {

  const {user, roleCheck} = useUserStore()

  useEffect(() => {

    roleCheck()
  }, [])


    if(user.role === 'admin') {
      return <Navigate to={'/user-dashboard'} />
    }

  return (
    
    <>

      <Outlet />

    </>

  )
}

