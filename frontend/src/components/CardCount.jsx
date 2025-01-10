import axios from "axios";
import {useEffect, useState} from "react";

function CardCount({code}){
    const [cardCount, setCardCount] = useState(0)

    useEffect(() => {
    axios.get(`http://localhost:2800/cards/getModuleCardCount/${code}`)
        .then(res => {
            console.log(res.data)
            return (
                setCardCount(res.data)
            )
        })
        .catch(err => {
            console.log(err)
        })
    },[code])

    return(
        <h1>{cardCount}</h1>
    )

}

export default CardCount;