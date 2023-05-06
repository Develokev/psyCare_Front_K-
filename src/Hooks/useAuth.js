import { onLogin } from "../Store/Slices/userSlice"
import { masterFetch } from "../api/fetch"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";

export const useAuth = () => {

        const dispatch = useDispatch()

        const loginStart = async (form) => {

        try {
            
            const petition = await masterFetch('/auth/login', 'POST', form)

            const token = petition.token

            const user = petition.user
    
            dispatch(onLogin(user))
    
        } catch (error) {
            
            console.log('FAILED loginStart')
        }
    }

    return {
        loginStart
    }

}

