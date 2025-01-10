import { useEffect,useState } from 'react'
import axios from 'axios'
import '../App.css'

function AddModules() {
    const [module, setModule] = useState({
        name: "",
        code: "",
    });

    const handleChange = e => {
        setModule({
            ...module,
            [e.target.name]: e.target.value,
        })
    }

    const addModule = e => {
        const addCard = {
            name: module.name,
            code: module.code,
        }

        axios.post("http://localhost:2800/addModule", addCard)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }



    return (
        <>
            <h1>
                Add Module Page
            </h1>
            <input type="text" name="name" placeholder="name" onChange={handleChange} />
            <input type="text" name="code" placeholder="code" onChange={handleChange} />
            <p>{module.name}</p>
            <p>{module.code}</p>
            <button type="submit" onClick={addModule}>submit</button>
        </>


    )
}

export default AddModules
