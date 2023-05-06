import { useEffect, useState } from "react"
import { masterFetch } from "../api/fetch"

export const useFetch = (url,method,body) => {

    const [data, setData] = useState([]);

    const getData = async () => {

        const petition = await masterFetch(url,method,body)

        setData(petition)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
        data
  )
}
