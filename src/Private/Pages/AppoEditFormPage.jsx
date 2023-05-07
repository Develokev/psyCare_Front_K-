import { AppoEditForm } from "../Components/AppoEditForm"
import { NavBarAdmin } from "../Components/NavBarAdmin"

export const AppoEditFormPage = () => {


  return (

    <>
    
    <header>
        <NavBarAdmin />
    </header>

    <div>
      <p>Admin Panel</p>
    </div>

    <h2 className="text-emerald-800 text-center text-2xl">Edit an appointment</h2>
    
    <AppoEditForm />
    
    </>
  )
}
