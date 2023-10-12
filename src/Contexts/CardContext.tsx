import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import FetchMedia from "../Services/FetchMedia";
import { PrepareDownload } from "../Services/Helpers";

export interface VideoFormat {
  formatCode: string;
  size: string;
  width: number;
  height: number;
  frameRate: number;
  oneFile: boolean;
  bigFile: boolean;
  webmOnly: boolean;
}

export interface CardModel {
  videoUrl: string;
  videoName: string;
  videoDesc: string;
  thumbnail: string;
  formats: VideoFormat[];
}

type CardContext = {
  cards: CardModel[];
  setCards: Dispatch<SetStateAction<CardModel[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isRequested: boolean;
  setIsRequested: Dispatch<SetStateAction<boolean>>;
  fetchMedia: (url: string, type: string) => Promise<void>;
};

type CardContextProvider = { children: ReactNode };

export const CardContext = createContext<CardContext | null>(null);

export default function CardContextProvider({ children }: CardContextProvider) {
  const [cards, setCards] = useState<CardModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequested, setIsRequested] = useState(false);

  const fetchMedia = async (url: string, type: string) => {
    setIsLoading(true);
    const media = await FetchMedia(url, type);
    if (!media) {
      setIsLoading(false);
      return;
    }

    PrepareDownload(media.blob, media.fileName);
    setIsLoading(false);
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        isLoading,
        setIsLoading,
        isRequested,
        setIsRequested,
        fetchMedia,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function UseCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within CardContextProvider");
  }

  return context;
}
