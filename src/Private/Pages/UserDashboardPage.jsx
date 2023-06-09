import { useEffect } from "react"
import { NavBarAdmin } from "../Components/NavBarAdmin"
import { PatientsTable } from "../Components/PatientsTable"
import { useAdminUserStore } from "../Hooks/useAdminUserStore"

export const UserDashboardPage = () => {

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
      <p>Admin Panel</p>
    </div>

    <h2 className="text-emerald-800 text-center text-2xl">Patients</h2>

    <table className="border-collapse w-full">
        <thead>
            <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Last Name</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Email</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Role</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Modify</th>
            </tr>
        </thead>

        <tbody>

    {
        userTable.map(item => (
            
            <PatientsTable
            key={item.id}
            {...item}
            />
        ))
    }
        </tbody>
    </table>
    

    </>
  )
}
