import { UseCardContext } from "../../../Contexts/CardContext";

function VideoTitle() {
  const { cards } = UseCardContext();
  const card = cards[cards.length - 1];
  if (!card) return <>"shit if broken"</>;

  return (
    <p className="text-lg font-bold overflow-hidden text-ellipsis h-1/4">
      {card.videoName}
    </p>
  );
}

export default VideoTitle;
