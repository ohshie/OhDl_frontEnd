import MainButtonsDiv from "./MainButtonsDiv";
import ExtraButtons from "./Extrabutton";
import { UseCardContext } from "../../../Contexts/CardContext";

function CardButtons() {
  const { cards } = UseCardContext();
  const card = cards[cards.length - 1];
  if (!card) return <>"shit is broken af"</>;

  return (
    <>
      <MainButtonsDiv
        formats={card.formats}
        videoUrl={card.videoUrl}
      ></MainButtonsDiv>
      <ExtraButtons videoUrl={card.videoUrl}></ExtraButtons>
    </>
  );
}

export default CardButtons;
