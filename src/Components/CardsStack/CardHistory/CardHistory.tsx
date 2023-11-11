import { ReactElement } from "react";
import { UseCardContext } from "../../../Contexts/CardContext";
import assembleCard from "../../../Services/AssembleCard";

function CardHistory() {
  const { cards } = UseCardContext();
  if (cards.length < 2) return;

  const cardsComponent: ReactElement[] = [];

  cards
    .slice(0, -1)
    .forEach((card) => cardsComponent.push(assembleCard(card, true)));

  return <div className={`stack`}>{cardsComponent.reverse()}</div>;
}

export default CardHistory;
