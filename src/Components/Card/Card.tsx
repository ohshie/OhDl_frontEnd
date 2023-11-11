import { motion } from "framer-motion";
import { ReactElement } from "react";

function Card({
  children,
  isHistory,
}: {
  children: ReactElement;
  isHistory: boolean;
}) {
  let content: ReactElement;
  if (isHistory) {
    content = (
      <motion.div
        initial={{ y: -50, x: 0 }}
        animate={{ y: 0, x: 0 }}
        className={`flex col-start-1 row-start-1 h-64 w-full lg:w-1/2 flex-row border-4 bg-green-600 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0)]`}
      >
        {children}
      </motion.div>
    );
  } else {
    content = (
      <div
        className={`flex col-start-1 row-start-1 h-64 w-full lg:w-1/2 flex-row border-4 bg-green-600 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0)]`}
      >
        {children}
      </div>
    );
  }

  return content;
}

export default Card;
