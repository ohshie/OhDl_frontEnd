import { ReactElement } from "react";
import { CardModel, UseCardContext } from "../../../Contexts/CardContext";
import assembleCard from "../../../Services/AssembleCard";

function CardHistory() {
  const { cards } = UseCardContext();

  let cardHistory: CardModel[] = [];
  if (cards.length > 1) cardHistory = cards.slice(0, -1);

  const cardsComponent: ReactElement[] = [];

  cardHistory.forEach((card) => cardsComponent.push(assembleCard(card)));

  return <div className={`stack`}>{cardsComponent}</div>;
}

export default CardHistory;
