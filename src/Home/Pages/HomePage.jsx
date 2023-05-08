import {NavBarUser} from '../../Home/Components/NavBarHome'
import {Link} from 'react-router-dom'

export const HomePage = () => {

  return (

    <>
      <header>
          <NavBarUser /> 
      </header>

      <div className="flex items-center justify-center bg-slate-800 font-bold text-white">

        <div className='centerDiv ml-5'>
          <img src="/src/assets/core/logo_psyCare_white_sm.png" alt="PsyCare Logo" />
        </div>

        <div className=" text-center space-y-12">
          <div className="text-center text-5xl font-bold mt-12">

            <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
              <span className="animate-word-delay-3 col-span-full row-span-full">Sanitary</span>
              <span className="animate-word col-span-full row-span-full">For the mind</span>
              <span className="animate-word-delay-1 col-span-full row-span-full">For the soul</span>
              <span className="animate-word-delay-2 col-span-full row-span-full">From home</span>
              <span className="animate-word-delay-4 col-span-full row-span-full">Face-to-face</span>
            </div>

          </div>

        <p className=" text-white">
          Let's have a nice process together, <Link to="/login" className=" text-indigo-500 no-underline hover:text-rose-300">please, log in here</Link>
        </p>
  </div>
</div>
    </>
  )
}
