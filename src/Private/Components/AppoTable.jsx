import { useAdminAppoStore } from "../Hooks/useAdminAppoStore";

export const AppoTable = (appoTable) => {

    const {appo_id,apponame,appodate,appotime,appotype,name,last_name,status} = appoTable
    const {errorMessage, deleteAppo, getAppo} = useAdminAppoStore()

    const onClick = (ev) => {

        ev.preventDefault();

        deleteAppo(appo_id)
    }

    const onClickUpdate = (ev) => {

        ev.preventDefault();

        getAppo(appo_id)
    }

  return (

    <>
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Patient</span>
                    {name} {last_name}
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Name</span>
                    {apponame}
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Date</span>
                    {appodate}
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Time</span>
                    <span className="rounded bg-amber-100 py-1 px-3 text-xs font-bold">{appotime}</span>
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Type</span>
                    {appotype}
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                    <span className="rounded bg-slate-400 py-1 px-3 text-xs font-bold">{status}</span>
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Appo ID</span>
                    {appo_id}
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Modify</span>

                    <button
                    onClick={onClickUpdate}
                    type="submit"
                    className="text-blue-400 hover:text-blue-600 underline">
                        <span className="material-symbols-outlined">
                        edit_note
                        </span>
                    </button>

                    <button
                    onClick={onClick}
                    type="submit"
                    className="text-blue-400 hover:text-blue-600 underline">
                        <span className="material-symbols-outlined text-red-400">
                        delete_forever
                        </span>
                    </button>
                </td>     
            </tr>
    </>
  )
}
