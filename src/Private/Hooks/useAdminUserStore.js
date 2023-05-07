import { useDispatch, useSelector } from "react-redux"
import { masterFetch } from "../../api/fetch"
import { deleteUser, showUsers } from "../../Store/Slices/adminUserTableSlice"

export const useAdminUserStore = () => {

    const {userTable, errorMessage} = useSelector(state => state.userList)

    const dispatch = useDispatch()

    const getUsers = async () => {

      try {
        
        const petition = await masterFetch('/admin/users/')

        const users = petition.data.rows
       
        dispatch(showUsers(users))

      } catch (error) {
        
        console.log(error)
      }
    }

    const deletePatient = async (user_id) => {

      try {
        
        await masterFetch(`/admin/users/${user_id}`, 'DELETE', user_id)

        const newPetition = await masterFetch('/admin/users/')

        const newList = newPetition.data.rows

        dispatch(deleteUser(newList))

      } catch (error) {
        
        console.log('FAILED deletePatient', error)

      }
    }

  return {

      userTable,
      errorMessage,
      getUsers,
      deletePatient
  }
}
