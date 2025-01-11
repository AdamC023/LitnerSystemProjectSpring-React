import { useEffect,useState } from 'react'
import axios from 'axios'
import '../App.css'
import AddModules from "./AddModules.jsx";
import CardCount from "../components/CardCount.jsx";
import Answer from "./Answer.jsx";
import {Link} from "react-router-dom";

function Modules() {
    const [modules, setModules] = useState([]);
    const [reload,setReload] = useState(false)
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

    const addModule = () => {
        axios.post("http://localhost:2800/modules/addModule", module)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setReload(!reload)
    }
    useEffect(() => {
        axios
            .get('http://localhost:2800/modules/getModules')
            .then((res) => {
                setModules(res.data);
                console.log('Modules: ');
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [reload]);

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
        <>
            <div className="pt-8 pl-8 pr-8">  {/* Added right padding here */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {modules.map(module => (
                        <div
                            key={module.code}
                            className="bg-white text-black p-4 shadow-lg rounded-lg w-full transform transition-transform duration-300 hover:scale-105"
                        >
                            <h1 className="text-2xl font-bold">{module.name}</h1>
                            <p className="text-lg">{module.code}</p>
                            <CardCount code={module.code}/>
                            <Link to={`/answer/${module.code}`}>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-110 hover:rotate-3"
                                >
                                    test
                                </button>
                            </Link>
                        </div>
                    ))}

                    {/* Add Modules Card */}
                </div>

                {/* Same padding as the other cards */}
                <div className="min-h-screen flex flex-col pt-8 pl-8 pr-8">
                    {/* Main content here if any */}
                    <div className="flex-grow"></div>
                    {/* This ensures that content takes up all available space */}

                    {/* Form Container */}
                    <div
                        className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-300 hover:scale-105 fixed bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        {/* Heading */}
                        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Module</h1>

                        {/* Name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="text-lg font-semibold text-gray-700">Module Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter module name"
                                value={module.name}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Code Input */}
                        <div className="mb-6">
                            <label htmlFor="code" className="text-lg font-semibold text-gray-700">Module Code</label>
                            <input
                                type="text"
                                name="code"
                                id="code"
                                placeholder="Enter module code"
                                value={module.code}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            onClick={() => {
                                addModule(module);
                                        setReload(!reload);}}
                            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Add Module
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Modules