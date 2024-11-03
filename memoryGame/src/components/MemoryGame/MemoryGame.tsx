import React, { useEffect, useState } from 'react'
import {Card, data} from "../../data/data"
import "./MemoryGame.css"
import CardItem from '../CardItem/CardItem'

const MemoryGame:React.FC = () => {

  const [cards,setData] = useState<Card[]>(data);
  
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const handleCardClick = (card: Card) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card.id)) {
      setFlippedCards(prev => [...prev, card]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      if (card1.value === card2.value) {
        // If the cards match, add their IDs to matchedCards
        setMatchedCards(prev => [...prev, card1.id, card2.id]);
      }
      // Reset flipped cards after a delay
      setTimeout(() => setFlippedCards([]), 2000);
    }
  }, [flippedCards]);

  return (
    <div className='MemoryGame'>
        {cards.map(card => {
          return  <CardItem 
          key={card.id}
          card = {card}
          onClick={handleCardClick}
          isFlipped={flippedCards.includes(card) || matchedCards.includes(card.id)}
          />
        })}
    </div>
  )
}

export default MemoryGame