import VideoThumbnail from "./VideoThumbnail";
import VideoTitle from "./VideoTitle";
import CardButtons from "./CardButtons";
import Placeholder from "./Placeholder";
import { UseCardContext } from "../../Contexts/CardContext";
import { ReactElement } from "react";

function manageLoading(isLoading: boolean) {
  let contentOfCard;

  if (isLoading) {
    contentOfCard = <Placeholder />;
  } else {
    contentOfCard = (
      <>
        <VideoThumbnail />
        <div className="flex flex-col justify-between leading-normal gap-2 p-4 w-1/2">
          <VideoTitle></VideoTitle>
          <CardButtons></CardButtons>
        </div>
      </>
    );
  }

  return contentOfCard;
}

function Card() {
  const { isLoading } = UseCardContext();
  const { isRequested } = UseCardContext();

  if (!isRequested) return;

  const contentOfCard: ReactElement = manageLoading(isLoading);

  return (
    <div className="flex relative h-64 w-full lg:w-1/2 self-center flex-row overflow-hidden justify-between border-4 bg-green-600 border-black gap-4 shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
      {contentOfCard}
    </div>
  );
}

export default Card;
