import { useEffect } from "react";

import TitleAndForm from "./Components/TitleAndForm";
import Card from "./Components/Card";
import CardContext from "./Contexts/CardContext";

import { useCardContext } from "./Contexts/CardContext";
import { getCookie } from "./Services/Helpers";

function App() {
  useEffect(() => {
    if (!getCookie("userID")) {
      const uniqueId = crypto.randomUUID();
      document.cookie = `userID=${uniqueId}; max-age=604800; SameSite=Strict; path=/`;
    }
  }, []);

  return (
    <>
      <CardContext>
        <TitleAndForm />
        <Card />
      </CardContext>
    </>
  );
}

export default App;
