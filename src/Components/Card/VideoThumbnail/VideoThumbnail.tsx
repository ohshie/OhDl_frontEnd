import { ReactElement } from "react";
import { UseCardContext } from "../../../Contexts/CardContext";

function VideoThumbnail(): ReactElement {
  const { cards } = UseCardContext();
  const card = cards[cards.length - 1];
  if (!card) return <>"shit if broken"</>;

  return (
    <img
      className="block object-cover object-center w-1/2"
      src={card.thumbnail}
      loading="lazy"
      decoding="async"
    />
  );
}

export default VideoThumbnail;
