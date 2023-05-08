import { NavBarPatient } from "../Components/NavBarPatient"
import {Link} from 'react-router-dom'

export const PatientDashboardPage = () => {

  return (

    <>

      <header>
          <NavBarPatient /> 
      </header>

      <h2 className="text-cyan-950 text-center text-2xl m-3">Psychologist info:</h2>

      <section className="flex items-center justify-center m-4">

        <article className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs shadow-cyan-800">

          <img src="https://i.etsystatic.com/39965220/r/il/da2517/4676950143/il_570xN.4676950143_1o7r.jpg" alt="psychologist" className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" />

          <h1 className="text-lg text-gray-700"> Paloma Popcorn </h1>

          <h3 className="text-sm text-gray-500 "> Sanitary Psychologist </h3>

          <h3 className="text-sm text-gray-400 ">	Nº de colegiada (X-XXXXX)</h3>

          <p className="text-xs text-justify text-gray-400 mt-4"> Entiendo la psicología como una disciplina basada en el conocimiento científico y la terapia como un lugar donde dichos conocimientos se aplican en un proceso de acompañamiento, basado en la confianza, el respeto y la privacidad, dirigido a objetivos claros y precisos, siempre desde el prisma de la consultante y de sus necesidades.
          </p>

          <p className="text-xs text-justify text-gray-400 mt-4"> Las técnicas psicológicas que forman parte de mi “saber hacer” me permiten ayudar a las personas a superar diversos problemas psicológicos, normalmente caracterizados por síntomas de ansiedad, depresión, estrés, conductas adictivas y desregulación emocional, entre otros. En general, mi trabajo se centra en ayudar a las personas a superar los problemas que subyacen al malestar psicológico, que dificulta vivir la vida en libertad y de manera plena y consciente.
          </p>

          <button className="bg-emerald-600 hover:bg-emerald-900 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">⦁	BIDI CODE  </button>
          <h3 className="text-sm text-gray-600 ">Colegio Oficial de la Psicología de Madrid</h3>

        </article>

      </section>

        <section className="centerDiv my-3">

              <div className="relative flex flex-row">
                  <h4 className="text-xl font-bold text-navy-700 text-cyan-900 mx-2">
                      Links of interest
                  </h4>
              </div>
 
              <div className="centerDiv"> 
        
                  <Link to="#" className="rounded-lg bg-cyan-800 px-3 py-2 text-base m-1 font-medium text-white transition duration-200 hover:bg-cyan-950 active:bg-cyan-800">
                  <p className="text-center">Therapy Specifics</p>
                  </Link> 

                  <Link to="#" className="rounded-lg bg-cyan-800 px-3 py-2 text-base m-1 font-medium text-white transition duration-200 hover:bg-cyan-950 active:bg-cyan-800">
                  <p className="text-center">Data Protection</p>
                  </Link> 

                  <Link to="https://meet.google.com/?authuser=0" className="rounded-lg bg-indigo-800 px-3 py-2 text-base m-1 font-medium text-white transition duration-200 hover:bg-cyan-950 active:bg-cyan-800">
                    <p className="text-center">Online Session</p>
                  <span className="centerDiv material-symbols-outlined">
                        headset_mic
                  </span>
                  </Link>
                  
            </div>

        </section>
      
    </>
  )
}
