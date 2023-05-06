import { useDispatch, useSelector}  from 'react-redux'
import { onLogin, onRegister } from '../../Store/Slices/userSlice'
import { getLocal, setLocal } from '../../Helpers/localStorage'
import {useNavigate} from 'react-router-dom'
import { masterFetch } from '../../api/fetch'


export const useUserStore = () => {

    const {user, errorMessage} = useSelector(state => state.user)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const loginStart = async (form) => {

        try {
            
            const petition = await masterFetch('/auth/login', 'POST', form)

            const token = petition.token

            const user = petition.user

            setLocal(user)
    
            dispatch(onLogin(user))

            navigate("/patient-dash");
    
        } catch (error) {
            
            console.log('FAILED loginStart')
        }
    }

    const registerStart = async (form) => {

        try {
            
            const petition = await masterFetch('/admin/users/', "POST", form)

            const token = petition.dataRole.token

            const newUser = petition.dataRole

            setLocal(newUser)

            dispatch(onRegister(newUser))

            navigate("/patient-dash");

        } catch (error) {
            
            console.log('FAILED registerStart')
        }
    }

    const roleCheck = () => {

        const userLocalData = getLocal()

        dispatch(onLogin(userLocalData))
    }


  return {

    user,
    errorMessage,
    loginStart,
    registerStart,
    roleCheck
  }
}
