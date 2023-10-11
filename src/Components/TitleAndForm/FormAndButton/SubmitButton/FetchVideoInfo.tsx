import { CardModel } from "../../../../Contexts/CardContext";
import { getCookie } from "../../../../Services/Helpers";

async function FetchVideoInfo(inputEl: string): Promise<any> {
  const encodedUrl = encodeURIComponent(inputEl);
  const fullUrl = "https://localhost:7103/YtDl/RequestVideoInfo";

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-User-ID": getCookie("userID"),
      },
      body: JSON.stringify({
        videoUrl: encodedUrl,
      }),
    });

    const obj: CardModel = await response.json();

    return obj;
  } catch (error) {
    console.log("Whoops, somethings is broken. " + error);
  }
}

export default FetchVideoInfo;
