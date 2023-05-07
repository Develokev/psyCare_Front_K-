
export const AppoEditForm = () => {

  return (

    <>
    
    <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">

          <form>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]">
                        First Name
                        </label>
                        <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="First Name"
                        // defaultValue={}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                    type="date"
                    name="date"
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
                    type="time"
                    name="time"
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
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="h-5 w-5"
                  />
                  <label
                    className="pl-1 text-base font-medium text-[#07074D]"
                  >
                    online
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    className="h-5 w-5"
                  />
                  <label
                    className="pl-1 text-base font-medium text-[#07074D]"
                  >
                    face-to-face
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Appointment Status
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="h-5 w-5"
                    value='pending'
                  />
                  <label
                    className="pl-1 text-base font-medium text-[#07074D]"
                  >
                    pending
                  </label>
                </div>

                <div className="">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    className="h-5 w-5"
                    value='confirmed'
                  />
                  <label
                    className=" text-base font-medium text-[#07074D]"
                  >
                    confirmed
                  </label>
                  <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="h-5 w-5"
                    value='paid'
                  />
                  <label
                    className="pl-1 text-base font-medium text-[#07074D]"
                  >
                    paid
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="h-5 w-5"
                    value='cancelled'
                  />
                  <label
                    className="pl-1 text-base font-medium text-[#07074D]"
                  >
                    cancel
                  </label>
                </div>
                </div>
              </div>
            </div>
            

            <div>
              <button
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
