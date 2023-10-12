import { useEffect } from "react";
import "./index.css";

import CardContext from "./Contexts/CardContext";
import TitleAndForm from "./Components/TitleAndForm";
import Card from "./Components/Card";

import { GetCookie } from "./Services/Helpers";

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
        <Card />
      </CardContext>
    </>
  );
}

export default App;
