import { NavBarPatient } from "../Components/NavBarPatient"
import {Link} from 'react-router-dom'

export const BidiCodePage = () => {


  return (

    <>

    <NavBarPatient />

    <div className="centerDiv w-fit mx-auto">

        <img src="/src/assets/core/bidi.png" alt="BIDI code"/>

        <Link to="/patient-dash" className="rounded-lg bg-cyan-800 px-3 py-2 text-base m-1 font-medium text-white transition duration-200 hover:bg-cyan-950 active:bg-cyan-800">
            <p className="text-center">Back</p>
        </Link>

    </div>

    
    
    
    </>
    
  )
}
