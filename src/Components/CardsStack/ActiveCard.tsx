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
    <Card isHistory={false}>
      <Placeholder />
    </Card>
  ) : (
    assembleCard(lastCard, false)
  );

  return (
    <motion.div className="flex flex-col justify-center items-center py-8">
      {currentCard}
    </motion.div>
  );
}
