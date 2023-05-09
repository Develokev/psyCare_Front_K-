import { useEffect } from "react"
import { getLocal } from "../../Helpers/localStorage"
import { NavBarPatient } from "../Components/NavBarPatient"
import { NewAppoPatientForm } from "../Components/NewAppoPatientForm"
import { usePatientAppoStore } from "../Hooks/usePatientAppoStore"
import { useUserStore } from "../../Auth/Hooks/useUserStore"

export const NewAppoPage = () => {

  const {patAppoState, errorMessage} = usePatientAppoStore()

  const {user} = useUserStore()


  return (

    <>

      <header>
        <NavBarPatient />
      </header>
    
      <h2 className="text-cyan-900 text-center text-2xl my-4">Hi {user.name}, book a therapy session!</h2>

      <NewAppoPatientForm
      key={errorMessage}
      state={user}/>
    
    
    </>
  )
}
