import { useEffect } from "react";
import "./index.css";

import CardContext from "./Contexts/CardContext";
import TitleAndForm from "./Components/TitleAndForm";

import { GetCookie } from "./Services/Helpers";
import ActiveCard from "./Components/CardsStack/ActiveCard";
import CardHistory from "./Components/CardsStack/CardHistory/CardHistory";

function App() {
  useEffect(() => {
    if (!GetCookie("userID")) {
      const uniqueId = crypto.randomUUID();
      document.cookie = `userID=${uniqueId}; max-age=604800; SameSite=Strict; path=/`;
    }
  }, []);

  return (
    <>
      <CardContext>
        <TitleAndForm />
        <ActiveCard />
        <CardHistory />
      </CardContext>
    </>
  );
}

export default App;
