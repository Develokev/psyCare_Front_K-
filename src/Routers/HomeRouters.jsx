import {Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from '../Home/Pages/HomePage'
import { LoginPage, RegisterPage } from '../Auth/Page'
import { useEffect } from 'react'
import { useUserStore } from '../Auth/Hooks/useUserStore'

export const HomeRouters = () => {

  const {user, roleCheck} = useUserStore()

    useEffect(() => {

      roleCheck()
    }, [])

  return (

    <>

        <Routes>



        </Routes>

    
    </>
  )
}

