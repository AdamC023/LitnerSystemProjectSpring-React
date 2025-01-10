import { useEffect,useState } from 'react'
import axios from 'axios'
import '../App.css'

function AddCard() {
    const [card, setCard] = useState({
        answer: "",
        question: "",
        correct: false,
        module: {
            code:""
        },
    });
    //const[cardList, setCardList] = useState([])
    const[modules, setModules] = useState([]);

    const addCard = e => {
        const addCard = {
            question: card.question,
            answer: card.answer,
            correct: card.correct,
            module:{
                ...card.module,
                    code: document.getElementById(card.module.code).value
                }
        }
        console.log("Card to submit: " + addCard.question+ " " + addCard.answer);
        axios.post("http://localhost:2800/cards/addCard", addCard)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {

        axios.get("http://localhost:2800/modules/getModules")
            .then(res => {
                console.log("Modules: ")
                console.log(res)
                console.log(res.data)
                setModules(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    const handleChange = e => {
        setCard({
            ...card,
            [e.target.name]: e.target.value,
        })
    }

    const handleChangeModule = e => {
        setCard({
            ...card,
            module:{
                ...card.module,
                code: e.target.value,
            }
        })
    }



    useEffect(() => {
        console.log("Updated card:", card);
    }, [card]);


    return (
        <>
            <h1>
                Add Card Page
            </h1>
            <input type="text" name="question" placeholder="question" onChange={handleChange}/>
            <input type="text" name="answer" placeholder="answer" onChange={handleChange}/>
            <select name="module" onChange={handleChangeModule}>
                <option value="">None</option>
                {modules.map(module => (
                    <option id={module.code} value={module.code}>{module.name} </option>
                ))}
            </select>
            <p>{card.question}</p>
            <p>{card.answer}</p>
            <p>{card.module.code}</p>
            <button type="submit" onClick={addCard}>submit</button>
        </>


    )
}

export default AddCard
