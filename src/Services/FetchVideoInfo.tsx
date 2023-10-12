import { CardModel } from "../Contexts/CardContext";
import { GetCookie } from "./Helpers";

async function FetchVideoInfo(inputEl: string): Promise<CardModel | undefined> {
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
      return;
    }

    const obj: CardModel = await response.json();

    return obj;
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
  }
}

export default FetchVideoInfo;
