import { LoginForm } from "../Components/LoginForm"
import { NavBarUser} from "../../Home/Components/NavBarHome";

export const LoginPage = () => {

  return (

    <>
      <header>
          <NavBarUser /> 
      </header>

      <LoginForm />
    </>
  )
}
