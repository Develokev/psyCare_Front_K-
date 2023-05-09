import { useEffect } from "react";
import { useUserStore } from "../../Auth/Hooks/useUserStore";
import { useForm } from "../../Hooks/useForm";
import { usePatientAppoStore } from "../Hooks/usePatientAppoStore";

export const NewAppoPatientForm = ({state}) => {


  const { handleChange, form } = useForm();

  const {createAppo, errorMessage} = usePatientAppoStore()

  const onClick = (ev) => {

      ev.preventDefault();

      createAppo(form)
  }

  return (

    <>
    
    <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">

          <form>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        className="mb-3 block text-base font-medium text-[#07074D]">
                        User ID
                        </label>
                        <input
                        onChange={handleChange}
                        type="text"
                        name="user_id"
                        id="fName"
                        defaultValue={state.user_id}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>
            </div>

            <div className="-mx-3 flex flex-wrap">

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]">
                    Appointment Date
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    name="appodate"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]">
                    Appointment Time
                  </label>
                  <input
                    onChange={handleChange}
                    type="time"
                    name="appotime"
                    id="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Session type
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                    onChange={handleChange}
                    type="radio"
                    name="appotype"
                    id="radioButton1"
                    className="h-5 w-5"
                    value='online'
                    />
                <label
                    className="pl-1 text-base font-medium text-[#07074D]">
                    online
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="appotype"
                    id="radioButton2"
                    className="h-5 w-5"
                    value='face-to-face'
                  />
                  <label
                    className="pl-1 text-base font-medium text-[#07074D]">
                    face-to-face
                  </label>
                </div>
              </div>
            </div>
            

            <div>
              <button
                onClick={onClick}
                className="hover:shadow-form rounded-md bg-teal-600 hover:bg-emerald-700 py-3 px-8 text-center text-base mt-3 font-semibold text-white outline-none"
              >
                Book session
              </button>
            </div>
          </form>
        </div>
      </div>
    
    
    </>
  )
}

