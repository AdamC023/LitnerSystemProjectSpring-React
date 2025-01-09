import { useEffect,useState } from 'react'
import axios from 'axios'
import '../App.css'

function AddCard() {
    const [card, setCard] = useState({
        answer: "",
        question: "",
        correct: false,
    });

    const handleChange = e => {
        setCard({
            ...card,
            [e.target.name]: e.target.value,
        })
    }

    const addCard = e => {
        const addCard = {
            question: card.question,
            answer: card.answer,
            correct: card.correct,
        }
        console.log("Card to submit: " + addCard.question+ " " + addCard.answer);
        axios.post("http://localhost:2800/cards", addCard)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
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
            <input type="text" name="answer" placeholder="question" onChange={handleChange} />

            <input type="text" name="question" placeholder="answer" onChange={handleChange} />
            <p>{card.question}</p>
            <p>{card.answer}</p>
            <button type="submit" onClick={addCard}>submit</button>
        </>


    )
}

export default AddCard
