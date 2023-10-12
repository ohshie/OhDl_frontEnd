import { CardModel, UseCardContext } from "../../../../Contexts/CardContext";
import { useFormContext } from "../../../../Contexts/FormContext";
import FetchVideoInfo from "./FetchVideoInfo";

const SubmitButton = () => {
  const { providedUrl } = useFormContext();
  const { setIsLoading } = UseCardContext();
  const { isRequested, setIsRequested } = UseCardContext();
  const { setCards } = UseCardContext();

  const onClick = async () => {
    if (!isRequested) setIsRequested(true);
    setIsLoading(true);
    const obj: CardModel = await FetchVideoInfo(providedUrl);
    obj.videoUrl = providedUrl;
    setCards((prevCards) => [...prevCards, obj]);
    setIsLoading(false);
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
