import { CardModel } from "../Contexts/CardContext";
import { GetCookie } from "./Helpers";

function createFailedObj() {
  const obj: CardModel = {
    videoUrl: "",
    videoName: "",
    videoDesc: "",
    thumbnail: "failed",
    formats: [],
  };
  return obj;
}

async function FetchVideoInfo(inputEl: string): Promise<CardModel> {
  const encodedUrl = encodeURIComponent(inputEl);
  const fullUrl = `${import.meta.env.VITE_BACKEND_URL}/YtDl/RequestVideoInfo`;

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-User-ID": GetCookie("userID"),
      },
      body: JSON.stringify({
        videoUrl: encodedUrl,
      }),
    });
    if (!response.ok) {
      return createFailedObj();
    }

    const obj: CardModel = await response.json();

    if (obj) {
      obj.videoUrl = inputEl;
      return obj;
    }
    return createFailedObj();
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
    return createFailedObj();
  }
}

export default FetchVideoInfo;
