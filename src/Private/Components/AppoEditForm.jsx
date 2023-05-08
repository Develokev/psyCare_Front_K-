import { useForm } from "../../Hooks/useForm";
import { useAdminAppoStore } from "../Hooks/useAdminAppoStore";

export const AppoEditForm = ({state}) => {


    const { handleChange, form } = useForm();

    const {errorMessage, updateAppo} = useAdminAppoStore()

    const onClick = (ev) => {

        ev.preventDefault();
  
        updateAppo(state.appo_id, form)
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
                        Appointment Name
                        </label>
                        <input
                        onChange={handleChange}
                        type="text"
                        name="apponame"
                        id="fName"
                        defaultValue={state.apponame}
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

            <div className="max-w-2xl mx-auto">

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
                  <select 
                  onChange={handleChange}
                  name="status_id" 
                  id="countries" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Choose a status</option>
                  <option value="1">Pending</option>
                  <option value="2">Confirmed</option>
                  <option value="3">Paid</option>
                  <option value="4">Cancelled</option>
              </select>
            </div>
            

            <div>
              <button
                onClick={onClick}
                className="hover:shadow-form rounded-md bg-teal-600 hover:bg-emerald-700 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    
    
    </>
  )
}
