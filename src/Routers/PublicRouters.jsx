import { PrivateRouters } from "./PrivateRouters"

export const PublicRouters = () => {

  return (

    <>
    
        {user.role == 'admin' ? 

        <PrivateRouters /> :

        <Routes>

            {/* <Route path='home' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route path='/*' element={<Navigate to={'/'} />} /> */}

        </Routes>

        }
    
    </>
  )
}
