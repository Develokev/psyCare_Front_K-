import { PrivateRouters } from "./PrivateRouters"


export const HomeRouters = () => {

  return (

    <>

        <Routes>

            <Route path='home' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route path='/*' element={<Navigate to={'/'} />} />

        </Routes>

    
    </>
  )
}

