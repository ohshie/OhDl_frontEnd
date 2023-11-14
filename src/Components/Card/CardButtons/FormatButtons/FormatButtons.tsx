import { UseCardContext, VideoFormat } from "../../../../Contexts/CardContext";
import ServeMedia from "../../../../Services/ServeMedia";

type FormatButtonProps = {
  format: VideoFormat;
  videoUrl: string;
};

function FormatButton({ format, videoUrl }: FormatButtonProps) {
  const { cards, setTimeToDl, setIsDownloading } = UseCardContext();

  async function onClick() {
    const lastCard = cards[cards.length - 1];
    if (!lastCard) return;

    setIsDownloading(true);
    setTimeToDl(format.timeToDl);

    await ServeMedia(videoUrl, format.formatCode);

    setIsDownloading(false);
  }

  let color: string;
  if (format.oneFile) {
    color = "bg-green-500";
  } else color = "bg-yellow-500";
  return (
    <button
      name="format-button"
      onClick={onClick}
      data-videocode={[format.formatCode, videoUrl]}
      className={`p-4 text-center flex-grow border-2 transition duration-300 ease-in-out ${color} border-black hover:shadow-[4px_4px_0px_0px_#f6e05e,8px_8px_0px_0px_#f6ad55]`}
    >
      {format.height}p
      <p className="text-xs font-light">{format.frameRate}fps</p>
    </button>
  );
}

export default FormatButton;
