import { CardModel } from "../Contexts/CardContext";
import FetchVideoInfo from "./FetchVideoInfo";

export default async function handleSubmit(
  providedUrl: string,
  setCards: React.Dispatch<React.SetStateAction<CardModel[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  let newCard: CardModel = {
    videoUrl: providedUrl,
    videoName: "",
    videoDesc: "",
    thumbnail: "",
    formats: [],
  };

  setCards((prevCards) => [...prevCards, newCard]);

  setIsLoading(true);

  newCard = await FetchVideoInfo(providedUrl);

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
  setIsLoading(false);
}
