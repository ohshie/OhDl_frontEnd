import { ReactElement } from "react";
import { motion } from "framer-motion";

function Card({ content }: { content: ReactElement }) {
  return (
    <motion.div
      initial={{ y: -50, x: 0 }}
      animate={{ y: 0, x: 0 }}
      className="flex h-64 w-full lg:w-1/2 flex-row overflow-hidden justify-between z-10 border-4 bg-green-600 border-black gap-4 shadow-[5px_5px_0px_0px_rgba(0,0,0)]"
    >
      {content}
    </motion.div>
  );
}

export default Card;
