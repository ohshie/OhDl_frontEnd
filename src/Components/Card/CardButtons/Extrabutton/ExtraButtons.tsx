import ServeMedia from "../../../../Services/ServeMedia";

function ExtraButtons({ videoUrl }: { videoUrl: string }) {
  async function onClick() {
    await ServeMedia(videoUrl, "audioOnly");
  }

  return (
    <div className="flex flex-row gap-2 justify-evenly px-6 font-semibold">
      <button
        onClick={onClick}
        id="audioOnly-button"
        data-videocode="audioOnly"
        className="p-2 text-center w-1/2 bg-blue-500 border-2 border-black transition duration-300 ease-in-out hover:shadow-[4px_4px_0px_0px_#f6e05e,8px_8px_0px_0px_#f6ad55]"
      >
        Audio
      </button>
    </div>
  );
}

export default ExtraButtons;
