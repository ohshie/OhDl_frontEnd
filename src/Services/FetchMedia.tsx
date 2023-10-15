import { GetCookie, ExtractFileName } from "./Helpers";

const beUrl: string = import.meta.env.VITE_BACKEND_URL;
async function FetchMedia(url: string, videoFormat: string) {
  let fullUrl: string, payload: string;
  if (videoFormat === "audioOnly") {
    fullUrl = `${beUrl}/YtDl/RequestAudioOnly`;
    payload = JSON.stringify({ VideoUrl: url });
  } else {
    fullUrl = `${beUrl}/YtDl/RequestVideo`;
    payload = JSON.stringify({ VideoUrl: url, FormatCode: videoFormat });
  }

  const cookie: string = GetCookie("userID");

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-User-ID": cookie,
      },
      body: payload,
    });

    const contentDisposition = response.headers.get("Content-Disposition");
    const fileName = ExtractFileName(contentDisposition);

    return { blob: await response.blob(), fileName: fileName };
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
  }
}

export default FetchMedia;
