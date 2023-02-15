import { useState } from "react"
import { useEffect } from "react"
import {useParams} from "react-router-dom"
import arr from '../data'

const Detail= () => {
    
    const {id} = useParams

    const [data, setData] = useState([])

    useEffect(() => {
        setData(arr)
    },[id])


    console.log("data", data);

    const redirectFunc = () =>{
        window.location = "/"
      }
    return(
        <div>
            <button onClick={redirectFunc}>YönlendirHome</button>
            {
                data.map((dat, i) => (
                <div key={i}> {dat.name} </div>
            ))
            }
            {
                data.filter(dt => dt.id === id).map((dat, i) => (
                    <div key={i}> {dat.name} </div>
                ))
            }
        </div>
    )
}

export default Detail