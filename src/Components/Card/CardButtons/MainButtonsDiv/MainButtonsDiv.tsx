import { VideoFormat } from "../../../../Contexts/CardContext";
import FormatButton from "../FormatButtons";

function prepareFormats(videoFormats: VideoFormat[]) {
  if (videoFormats.length < 3) {
    return videoFormats;
  }

  return videoFormats.slice(-3);
}

function createButtons(topFormats: VideoFormat[], videoUrl: string) {
  const buttons: JSX.Element[] = [];
  topFormats.forEach((f) => {
    const button = (
      <FormatButton
        key={f.formatCode + " " + videoUrl}
        format={f}
        videoUrl={videoUrl}
      />
    );
    buttons.push(button);
  });
  return buttons;
}

function MainButtonsDiv({
  formats,
  videoUrl,
}: {
  formats: VideoFormat[];
  videoUrl: string;
}) {
  const topFormats = prepareFormats(formats);
  const buttons = createButtons(topFormats, videoUrl);

  return (
    <div className="flex flex-row gap-2 justify-evenly font-semibold">
      {buttons}
    </div>
  );
}

export default MainButtonsDiv;
