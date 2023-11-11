import TitleText from "./TitleText";
import FormAndButton from "./FormAndButton/FormAndButton";

const TitleAndForm = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center z-10">
      <TitleText />
      <FormAndButton />
    </div>
  );
};

export default TitleAndForm;
