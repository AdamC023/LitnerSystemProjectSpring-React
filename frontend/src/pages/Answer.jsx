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
    }, []);

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
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        setReload(!reload)
    }
    function handleIncorrect(){

    }

    return(
        <>
            {card.filter(card => card.correct === false).map(card => {

                return(
                    <div key={card.card_id}>
                        <h1>{card.question}</h1>
                        <input type="text" onChange={onAnswerChange}/>
                        <button value={card.card_id} onClick={handleSubmit}>Submit</button>
                        <button  onClick={() => handleCorrect(card)}>Correct</button>
                        <button onClick={handleIncorrect}>Incorrect</button>
                        {submitted[card.card_id] ? <p>{card.answer}</p> : <p></p>}
                    </div>
                )
            })}
            <AddCard{...module_code.code}/>
        </>

    )
}


export default Answer
