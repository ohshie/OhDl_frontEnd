import { UseCardContext } from "../../Contexts/CardContext";
import { motion } from "framer-motion";
import Placeholder from "../Card/Placeholder";
import Card from "../Card";
import assembleCard from "../../Services/AssembleCard";

export default function ActiveCard() {
  const { cards } = UseCardContext();

  const lastCard = cards[cards.length - 1];
  if (!lastCard) return;

  const currentCard = lastCard.isLoading ? (
    <Card _zIndex="z-10">
      <Placeholder />
    </Card>
  ) : (
    assembleCard(lastCard)
  );

  return (
    <motion.div className="flex flex-col justify-center items-center py-8">
      {currentCard}
    </motion.div>
  );
}
