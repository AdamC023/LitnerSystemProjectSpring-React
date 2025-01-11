import { useEffect,useState } from 'react'
import axios from 'axios'
import '../App.css'
import {useParams} from "react-router-dom";
import AddCard from "./AddCard.jsx";

function Answer() {
    const [answer,setAnswer] = useState("")
    const [card, setCard] = useState([]);
    const [reload,setReload] = useState(false)
    const [submitted, setSubmitted] = useState([false,]);
    const module_code = useParams();
    const [addCard, setAddCard] = useState({
        answer: "",
        question: "",
        correct: false,
        module: {
            code:module_code.code,
            name:""
        },
    });



    console.log("module code",module_code.code)
    console.log("module name",module_code.name)
    useEffect(() => {
        axios.get(`http://localhost:2800/cards/getCards/${module_code.code}`)
            .then(res => {
                console.log("Response: ",res.data)
                if (res.data.length > 0) {
                    console.log("Cards: ",res.data)
                    setCard(res.data)
                    for(let i = 0; i < res.data.length; i++){
                        setSubmitted(prevState => {
                            prevState[i+1] = false;
                            return prevState;
                        });
                    }
                } else {
                    // Handle case when there are no cards returned

                }
            }).catch(err => {
            console.error("Error fetching data:", err);
            setCard({
                answer: "",
                correct: false,
                question: "none present",
                module: {
                    code: "",
                    name: ""
                },
                card_id: null
            });
        });
    }, [reload]);

    function onAnswerChange(e){
        setAnswer(e.target.value)
        console.log(answer)
        console.log(card)
    }

    function handleSubmit(e) {
        setSubmitted(prevState => {
            // Create a new copy of the previous state to avoid direct mutation
            const updatedState = { ...prevState };

            // Update the state for the specific card (or item) based on e.target.value
            updatedState[e.target.value] = true;

            // Log the updated state (for debugging purposes)
            console.log(updatedState);

            // Return the new state object to set it as the new state
            return updatedState;
        });
    }

    function handleCorrect(card){
        setCard(prevState => {
            card.correct = true
            return prevState;
        })
        axios.post("http://localhost:2800/cards/updateTrue", card)
            .then(res => {
                setReload(!reload)
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })


    }
    function handleIncorrect(){

    }
    const addCardPost = e => {
        const addCardPost = {
            question: addCard.question,
            answer: addCard.answer,
            correct: addCard.correct,
            module:{
                code:addCard.module.code,
                name:addCard.module.name,
            }
        }
        axios.post(`http://localhost:2800/cards/addCard`, addCardPost)
            .then(res => {
                setReload(!reload)
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }
    const handleChange = e => {
        setAddCard({
            ...addCard,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <>
            {/* Existing Questions */}
            <div className="flex flex-col space-y-4 mb-10">
                {card.filter(card => card.correct === false).map(card => (
                    <div
                        key={card.card_id}
                        className="bg-white p-6 shadow-lg rounded-lg w-full flex flex-col space-y  group transition-all duration-300 ease-in-out"
                    >
                        {/* Question Display */}
                        <h1 className="text-lg font-semibold">{card.question}</h1>

                        {/* Answer Input and Buttons (Smooth Transition) */}
                        <div
                            className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-300 ease-in-out flex flex-col space-y-4"
                        >
                            {/* Answer Input */}
                            <input
                                type="text"
                                onChange={onAnswerChange}
                                className="mt-2 border border-gray-300 p-2 rounded-lg w-full"
                                placeholder="Enter Answer"
                            />

                            {/* Submit Buttons */}
                            <div className="flex space-x-2">
                                <button
                                    value={card.card_id}
                                    onClick={handleSubmit}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
                                >
                                    Submit
                                </button>
                                <button
                                    onClick={() => handleCorrect(card)}
                                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300"
                                >
                                    Correct
                                </button>
                                <button
                                    onClick={handleIncorrect}
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
                                >
                                    Incorrect
                                </button>
                            </div>
                        </div>

                        {/* Display the correct answer if submitted */}
                        {submitted[card.card_id] ? (
                            <p className="text-gray-700 mt-2">{card.answer}</p>
                        ) : null}
                    </div>
                ))}
            </div>

            {/* Add New Question Form (At the bottom of the page) */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Add New Question</h2>
                <div className="flex flex-col space-y-4">
                    {/* Question Input */}
                    <input
                        type="text"
                        name="question"
                        placeholder="Enter question"
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                    />
                    {/* Answer Input */}
                    <input
                        type="text"
                        name="answer"
                        placeholder="Enter answer"
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                    />
                    <button
                        onClick={addCardPost}
                        className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-all duration-300"
                    >
                        Add Card
                    </button>
                </div>
            </div>
        </>



    )
}


export default Answer
