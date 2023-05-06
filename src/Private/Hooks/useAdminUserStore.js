import { useDispatch, useSelector } from "react-redux"
import { masterFetch } from "../../api/fetch"
import { showUsers } from "../../Store/Slices/adminUserTableSlice"

export const useAdminUserStore = () => {

    const {userTable, errorMessage} = useSelector(state => state.userList)

    const dispatch = useDispatch()

    const getUsers = async () => {

      try {
        
        const petition = await masterFetch('/admin/users/')

        const users = petition.data.rows

        console.log('esto es users en useAdmin', users)
       
        dispatch(showUsers(users))

      } catch (error) {
        
        console.log(error)
      }
    }
    console.log('esto es user table', userTable)

  return {

      userTable,
      errorMessage,
      getUsers
  }
}
