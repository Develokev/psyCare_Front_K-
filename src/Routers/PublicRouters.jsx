import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import { useEffect } from "react"
import { useUserStore } from "../Auth/Hooks/useUserStore"
import { PrivateRouters } from "./PrivateRouters"
import { PatientDashboardPage } from '../Public/Pages/PatientDashboardPage'
import { NewAppoPage } from '../Public/Pages/NewAppoPage'
import { HomeRouters } from './HomeRouters'

export const PublicRouters = () => {

  const {user, roleCheck} = useUserStore()

  useEffect(() => {

    roleCheck()
  }, [])


  console.log('esto e user.role', user.role)

    if(user.role != 'patient') {
      return <Navigate to={'/'} />
    }

  return (
    
    <>

      <Outlet />

    </>

  )
}
