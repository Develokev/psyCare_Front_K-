import { useEffect } from "react"
import { AppoTable } from "../Components/AppoTable"
import { NavBarAdmin } from "../Components/NavBarAdmin"
import { useAdminAppoStore } from "../Hooks/useAdminAppoStore"

export const AppoDashboardPage = () => {

    const {appoTable, errorMessage, getAppos} = useAdminAppoStore()

    console.log({appoTable})
    
    useEffect(() => {

        getAppos()
  
      }, [])

  return (

    <>

    <header>
        <NavBarAdmin />
    </header>

    <div>
      <p>Admin Panel</p>
    </div>

    <h2 className="text-emerald-800 text-center text-2xl">Appointments</h2>

    <table className="border-collapse w-full">
        <thead>
            <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Appo ID</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Description</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Time</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Type</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Patient</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Modify</th>
            </tr>
        </thead>

        <tbody>

    {
        appoTable.map(item => (
            
            <AppoTable
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
