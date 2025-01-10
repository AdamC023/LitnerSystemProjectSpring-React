import { useEffect,useState } from 'react'
import axios from 'axios'
import '../App.css'
import AddModules from "./AddModules.jsx";
import CardCount from "../components/CardCount.jsx";

function Modules() {
    const [modules, setModules] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:2800/modules/getModules")
        .then(res => {
                setModules(res.data)
                console.log("Modules: ")
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })


    }, []);

    return (
        <div>
            <h1>Hello World!</h1>
            {modules.map(module => (

                <div >
                    <h1>{module.name}</h1>
                    <p>{module.code}</p>
                    <CardCount code={module.code}/>
                </div>
            ))}
            <AddModules/>
        </div>
    )
}

export default Modules