import { CardModel, UseCardContext } from "../../../../Contexts/CardContext";
import { useFormContext } from "../../../../Contexts/FormContext";
import handleSubmit from "../../../../Services/HandleSubmit";

function safetyCheck(providedUrl: string, cards: CardModel[]): boolean {
  if (providedUrl === "") return false;

  try {
    Boolean(new URL(providedUrl));
  } catch (e) {
    console.log(e);
    return false;
  }

  const checkForSameCard = cards.find((card) => card.videoUrl === providedUrl);
  if (checkForSameCard) return false;

  return true;
}

const SubmitButton = () => {
  const { providedUrl } = useFormContext();
  const { cards, setCards, setIsLoading } = UseCardContext();

  const onClick = async () => {
    if (!safetyCheck(providedUrl, cards)) return;

    await handleSubmit(providedUrl, setCards, setIsLoading);
  };

  return (
    <button
      onClick={onClick}
      id="input-btn"
      className="bg-yellow-400 p-6 font-bold border-4 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-base sm:text-xl border-black transition duration-100"
    >
      FETCH DATA
    </button>
  );
};

export default SubmitButton;
