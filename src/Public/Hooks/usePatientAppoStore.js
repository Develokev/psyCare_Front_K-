import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { masterFetch } from "../../api/fetch";
import { createPatAppoReducer } from "../../Store/Slices/patientAppoTableSlice";

export const usePatientAppoStore = () => {

    const {patAppoState, errorMessage} = useSelector(state => state.patAppoList)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const createAppo = async (form) => {

        try {
            
            const petition = await masterFetch('/admin/appointments/create', 'POST', form)

            console.log({petition})

            dispatch(createPatAppoReducer(petition))

            navigate('/patient-dash')

        } catch (error) {
            
            console.log(error)
        }
    }

  return {

    patAppoState,
    errorMessage,
    createAppo
  }
}
