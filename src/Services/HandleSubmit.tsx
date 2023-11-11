import { CardModel } from "../Contexts/CardContext";
import FetchVideoInfo from "./FetchVideoInfo";

export default async function handleSubmit(
  providedUrl: string,
  setCards: React.Dispatch<React.SetStateAction<CardModel[]>>
) {
  let newCard: CardModel = {
    isLoading: true,
    videoUrl: providedUrl,
    videoName: "",
    videoDesc: "",
    thumbnail: "",
    formats: [],
  };

  setCards((prevCards) => [...prevCards, newCard]);

  newCard = await FetchVideoInfo(providedUrl);
  newCard.isLoading = false;

  if (newCard.thumbnail === "failed") {
    setCards((prevCards) =>
      prevCards.filter((card) => card.videoUrl !== providedUrl)
    );
  } else {
    setCards((prevCards) => {
      return prevCards.map((card) =>
        card.videoUrl === providedUrl ? newCard : card
      );
    });
  }
}
