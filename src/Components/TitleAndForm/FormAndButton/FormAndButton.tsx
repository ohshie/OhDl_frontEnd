import UrlForm from "./UrlForm";
import SubmitButton from "./SubmitButton";
import FormContext from "../../../Contexts/FormContext";

const FormAndButton = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/2 sm:flex-row gap-2 justify-evenly">
      <FormContext>
        <UrlForm />
        <SubmitButton />
      </FormContext>
    </div>
  );
};

export default FormAndButton;
