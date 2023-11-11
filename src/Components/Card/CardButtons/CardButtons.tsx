import MainButtonsDiv from "./MainButtonsDiv";
import ExtraButtons from "./Extrabutton";
import { VideoFormat } from "../../../Contexts/CardContext";

function CardButtons({
  content,
  videoUrl,
}: {
  content: VideoFormat[];
  videoUrl: string;
}) {
  return (
    <>
      <MainButtonsDiv formats={content} videoUrl={videoUrl} />
      <ExtraButtons videoUrl={videoUrl} />
    </>
  );
}

export default CardButtons;
