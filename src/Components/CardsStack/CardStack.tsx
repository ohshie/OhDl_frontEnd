import CardHistory from "./CardHistory/CardHistory";
import { CardModel, UseCardContext } from "../../Contexts/CardContext";
import { motion } from "framer-motion";
import VideoThumbnail from "../Card/VideoThumbnail";
import VideoTitle from "../Card/VideoTitle";
import CardButtons from "../Card/CardButtons";
import Placeholder from "../Card/Placeholder";
import Card from "../Card";

function assembleCard(card: CardModel) {
  return (
    <>
      <VideoThumbnail thumbnailUrl={card.thumbnail} />
      <div className="flex flex-col justify-between leading-normal gap-2 p-4 w-1/2">
        <VideoTitle videoTitle={card.videoName}></VideoTitle>
        <CardButtons></CardButtons>
      </div>
    </>
  );
}

function CardStack() {
  const { cards } = UseCardContext();

  const lastCard = cards[cards.length - 1];

  if (!lastCard) return;

  const currentCard = lastCard.isLoading ? (
    <Card content={<Placeholder />} />
  ) : (
    <Card content={assembleCard(lastCard)} />
  );

  return (
    <motion.div className="flex flex-col justify-center items-center">
      {currentCard}
      <CardHistory />
    </motion.div>
  );
}

export default CardStack;
