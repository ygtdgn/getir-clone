import { useState, useEffect } from "react"
import cardsData from 'api/cards.json'

export default function Cards(){

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)
    },
    [])

    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:p-0">
            {cards.length && cards.map(card =>(
                <div className="bg-white p-14 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                    <img className="mb-6 mt-2" src={card.image} alt="" />
                    <h6 className="font-semibold text-lg text-brand-color">{card.title}</h6>
                    <p className="mt-2 text-sm text-gray-600">{card.description}</p>
                </div>
            ))}
        </div>
    )
}