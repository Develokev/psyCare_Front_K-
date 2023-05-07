import { useDispatch, useSelector } from "react-redux"
import { masterFetch } from "../../api/fetch"
import { deleteAppoReducer, showAppos } from "../../Store/Slices/adminAppoTableSlice"


export const useAdminAppoStore = () => {

    const {appoTable, errorMessage} = useSelector(state => state.appoList)

    const dispatch = useDispatch()

    const getAppos = async () => {

        try {
            
            const petition = await masterFetch('/admin/appointments/')

            const appointments = petition.data.rows

            console.log('esto es appointments', appointments)

            dispatch(showAppos(appointments))

        } catch (error) {
            
            console.log(error)
        }
    }

    const deleteAppo = async (appo_id) => {

        try {
            
            await masterFetch(`/admin/appointments/${appo_id}`, 'DELETE', appo_id)

            const newPetition = await masterFetch('/admin/appointments/')

            const newList = newPetition.data.rows

            dispatch(deleteAppoReducer(newList))

        } catch (error) {
            
            console.log('FAILED deleteAppo', error)
        }
    }

  return {

    appoTable,
    errorMessage,
    getAppos,
    deleteAppo
  }
}
