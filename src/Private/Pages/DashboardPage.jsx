import { useEffect } from "react"
import { NavBarAdmin } from "../Components/NavBarAdmin"
import { PatientsTable } from "../Components/PatientsTable"
import { useAdminUserStore } from "../Hooks/useAdminUserStore"

export const DashboardPage = () => {

    const {userList, errorMessage, getUsers} = useAdminUserStore()

    useEffect(() => {

        getUsers()
  
      }, [])

      console.log('esto es user en Dashboard', userList)

  return (

    <>

    <header>
        <NavBarAdmin />
    </header>

    <div>
      <p>esto es ADMIN Dashboard</p>
    </div>

    {
        
    }
    <PatientsTable />

    </>
  )
}
