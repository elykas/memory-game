
import { Card } from '../../data/data'
import "./CardItem.css"



interface CardItemProps {
    card: Card;
    onClick: (card: Card) => void;
    isFlipped: boolean;
  }

const CardItem: React.FC<CardItemProps> = ({card, onClick, isFlipped }) => {
   
    return (
        <button className={`card ${isFlipped ? 'flipped' : 'card-close'}`} onClick={() => onClick(card)}>
        {isFlipped ? <span className="card-value">{card.value}</span> : null}
      </button>
    );
  };
  export default CardItem;
  