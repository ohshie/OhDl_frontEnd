import FetchMedia from "./FetchMedia";
import { PrepareDownload } from "./Helpers";

async function ServeMedia(url: string, type: string) {
  const media = await FetchMedia(url, type);
  if (!media) {
    return;
  }

  PrepareDownload(media.blob, media.fileName);
}

export default ServeMedia;
