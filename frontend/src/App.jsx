import { useEffect,useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [card, setCard] = useState({
      answer: "",
      question: "",
    });

  const handleChange = e => {
      setCard({
          ...card,
          [e.target.name]: e.target.value,
      })
  }

  const addCard = e => {
      const addCard = {
          answer: card.answer,
          question: card.question,
      }

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

export default App
