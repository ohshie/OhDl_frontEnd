import { ReactElement } from "react";

function VideoThumbnail({
  thumbnailUrl,
}: {
  thumbnailUrl: string;
}): ReactElement {
  return (
    <img
      className="block object-cover object-center w-1/2"
      src={thumbnailUrl}
      loading="lazy"
      decoding="async"
    />
  );
}

export default VideoThumbnail;
