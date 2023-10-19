import { motion } from "framer-motion";
import {} from "react";
import { UseCardContext } from "../../../Contexts/CardContext";

function CardHistory() {
  const { cardHistory } = UseCardContext();

  return (
    <motion.div className={`flex flex-col w-full items-center -space-y-48`}>
      {cardHistory.map((card) => (
        <>{card}</>
      ))}
    </motion.div>
  );
}

export default CardHistory;
