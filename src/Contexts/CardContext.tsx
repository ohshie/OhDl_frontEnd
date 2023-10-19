import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

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
  isLoading: boolean;
  videoUrl: string;
  videoName: string;
  videoDesc: string;
  thumbnail: string;
  formats: VideoFormat[];
}

type CardContext = {
  cards: CardModel[];
  setCards: Dispatch<SetStateAction<CardModel[]>>;
  addToCardHistory: (card: ReactElement) => void;
  cardHistory: ReactElement[];
  setCardHistory: Dispatch<SetStateAction<ReactElement[]>>;
};

type CardContextProvider = { children: ReactNode };

export const CardContext = createContext<CardContext | null>(null);

export default function CardContextProvider({ children }: CardContextProvider) {
  const [cards, setCards] = useState<CardModel[]>([]);
  const [cardHistory, setCardHistory] = useState<ReactElement[]>([]);

  function addToCardHistory(card: ReactElement) {
    setCardHistory((prev) => [card, ...prev]);
  }

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        cardHistory,
        setCardHistory,
        addToCardHistory,
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
