import { AppoEditForm } from "../Components/AppoEditForm"
import { NavBarAdmin } from "../Components/NavBarAdmin"
import { useAdminAppoStore } from "../Hooks/useAdminAppoStore"

export const AppoEditFormPage = () => {

    const {appoTable, errorMessage} = useAdminAppoStore()

  return (

    <>
    
      <header>
          <NavBarAdmin />
      </header>

      <div className="centerDiv">
        <p>Admin Panel</p>
      </div>

      <h2 className="text-emerald-800 text-center text-2xl">Edit an appointment</h2>
      
      <AppoEditForm
      key={errorMessage}
      state={appoTable}
      />
    
    </>
  )
}
