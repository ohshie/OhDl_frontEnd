import Card from "../Components/Card";
import CardButtons from "../Components/Card/CardButtons";
import VideoThumbnail from "../Components/Card/VideoThumbnail";
import VideoTitle from "../Components/Card/VideoTitle";
import { CardModel } from "../Contexts/CardContext";

export default function assembleCard(card: CardModel) {
  return (
    <Card key={card.videoUrl}>
      <>
        <VideoThumbnail thumbnailUrl={card.thumbnail} />
        <div className="flex flex-col justify-between leading-normal gap-2 p-4 w-1/2">
          <VideoTitle videoTitle={card.videoName} />
          <CardButtons content={card.formats} videoUrl={card.videoUrl} />
        </div>
      </>
    </Card>
  );
}
