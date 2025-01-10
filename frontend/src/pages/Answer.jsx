import { useEffect,useState } from 'react'
import axios from 'axios'
import '../App.css'

function Answer() {
    const [answer,setAnswer] = useState("")
    const [card, setCard] = useState({
        answer: "",
        card_id: null,
        correct: false,
        module: {
            code:"",
            name:"",
        },
        question: "",

    });

    useEffect(() => {
        axios.get("http://localhost:2800/cards/getCards")
            .then(res => {
                console.log(res.data)
                setCard(res.data[0])

            })
        .catch(err =>{
            console.log(err)

        })
    },[])

    function onAnswerChange(e){
        setAnswer(e.target.value)
        console.log(answer)
    }

    function handleSubmit(){
        setAnswer(document.getElementById("answer").value)
        console.log("Submited" + answer)

    }

    function handleCorrect(){
        setCard(prevCard => {
            const updatedCard = {...prevCard, correct: true};

            console.log("UPDATED" +updatedCard.correct)
            axios.post("http://localhost:2800/cards/answered/", card)
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            return updatedCard;
        });

    }
    function handleIncorrect(){
        setCard(card.correct = false)
        console.log(card.correct)
    }
    return(
        <>

        <h2>{card.question}</h2>
            <input type="text" id="answer" name="answer" placeholder="answer" onChange={onAnswerChange}/>
            <button onClick={handleSubmit}>submit</button>
            <p>{answer}</p>
            <button onClick={handleCorrect}>click if you got it right</button>
            <button onClick={handleIncorrect}>click if you got it wrong</button>
        </>

    )
}


export default Answer
