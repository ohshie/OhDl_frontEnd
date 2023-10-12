import { VideoFormat, UseCardContext } from "../../../../Contexts/CardContext";

type FormatButtonProps = {
  format: VideoFormat;
  videoUrl: string;
};

function FormatButton({ format, videoUrl }: FormatButtonProps) {
  const { fetchMedia } = UseCardContext();
  async function onClick() {
    await fetchMedia(videoUrl, format.formatCode);
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
