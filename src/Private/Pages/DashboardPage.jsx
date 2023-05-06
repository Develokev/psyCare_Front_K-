import { useEffect } from "react"
import { NavBarAdmin } from "../Components/NavBarAdmin"
import { PatientsTable } from "../Components/PatientsTable"
import { useAdminUserStore } from "../Hooks/useAdminUserStore"

export const DashboardPage = () => {

    const {userTable, errorMessage, getUsers} = useAdminUserStore()

    useEffect(() => {

        getUsers()
  
      }, [])

  return (

    <>

    <header>
        <NavBarAdmin />
    </header>

    <div>
      <p>esto es ADMIN Dashboard</p>
    </div>

    <h2>Patients</h2>

    <table className="border-collapse w-full">
        <thead>
            <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Last Name</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Email</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Role</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Edit</th>
            </tr>
        </thead>

        <tbody>

    {
        userTable.map(item => (
            
            <PatientsTable
            {...item}
            />
        ))
    }
        </tbody>
    </table>
    

    </>
  )
}
