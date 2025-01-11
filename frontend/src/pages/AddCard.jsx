import { useEffect,useState } from 'react'
import axios from 'axios'
import '../App.css'
import {useParams} from "react-router-dom";

function AddCard() {
    const code = useParams();
    console.log("this code",code.code)
    const [addCard, setAddCard] = useState({
        answer: "",
        question: "",
        correct: false,
        module: {
            code:code.code,
            name:""
        },
    });
    const [date, setDate] = useState()
    //const[cardList, setCardList] = useState([])
    const[modules, setModules] = useState([]);

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
        setAddCard({
            ...addCard,
            [e.target.name]: e.target.value,
        })
    }



    useEffect(() => {
        console.log("Updated card:", addCard);
    }, [addCard]);

    const checkDate = e => {
        console.log("date",date)
        console.log(Date.now())
    }
    return (
        <>
            <div>
            <input type="text" name="question" placeholder="question" onChange={handleChange}/>
            <input type="text" name="answer" placeholder="answer" onChange={handleChange}/>
            <button type="submit" onClick={checkDate}>submit</button>
            <p>{addCard.question}</p>
            <p>{addCard.answer}</p>
            <p>{addCard.module.code}</p>

            </div>
            </>


    )
}

export default AddCard
