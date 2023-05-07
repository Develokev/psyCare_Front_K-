import { useAdminUserStore } from "../Hooks/useAdminUserStore"

export const PatientsTable = (userTable) => {

    const {user_id,name,last_name,email,role} = userTable
    const { errorMessage, deletePatient} = useAdminUserStore()

    const onClick = (ev) => {

        ev.preventDefault();
        
        deletePatient(user_id)
    }

  return (

    <>
        
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ID</span>
                    {user_id}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Name</span>
                    {name}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Last Name</span>
                    {last_name}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                    <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">{email}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Role</span>
                    {role}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Modify</span>

                    {/* <button
                    type="submit"
                    className="text-blue-400 hover:text-blue-600 underline">
                        Edit
                    </button> */}

                    <button
                    onClick={onClick}
                    type="submit"
                    className="text-blue-400 hover:text-blue-600 underline">
                        <span className="material-symbols-outlined text-red-400">
                        delete_forever
                        </span>
                    </button>
                </td>
            </tr>
    </>

  )
}

