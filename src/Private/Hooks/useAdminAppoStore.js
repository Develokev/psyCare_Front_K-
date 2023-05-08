import { useDispatch, useSelector } from "react-redux"
import { masterFetch } from "../../api/fetch"
import { deleteAppoReducer, showAppos, updateAppoReducer, showAppo } from "../../Store/Slices/adminAppoTableSlice"
import {useNavigate} from 'react-router-dom'

export const useAdminAppoStore = () => {

    const {appoTable, errorMessage} = useSelector(state => state.appoList)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const getAppos = async () => {

        try {
            
            const petition = await masterFetch('/admin/appointments/')

            const appointments = petition.data.rows

            dispatch(showAppos(appointments))

        } catch (error) {
            
            console.log(error)
        }
    }

    const getAppo = async (appo_id) => {

        try {
            
            const petition = await masterFetch(`/admin/appointments/by-id/${appo_id}`)

            const appointment = petition.data.rows[0]

            console.log('esto es apppointment', appointment)

            dispatch(showAppo(appointment))

            navigate('/appo-edit/');


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

    const updateAppo = async (appo_id, form) => {

        try {

            await masterFetch(`/admin/appointments/${appo_id}`, 'PUT', form)

            const petition = await masterFetch('/admin/appointments/')

            const appointments = petition.data.rows

            dispatch(updateAppoReducer(appointments))

            navigate('/appo-dashboard');

        } catch (error) {
            
            console.log('FAILED updateAppo', error)

        }
    }

  return {

    appoTable,
    errorMessage,
    getAppos,
    getAppo,
    deleteAppo,
    updateAppo
  }
}
