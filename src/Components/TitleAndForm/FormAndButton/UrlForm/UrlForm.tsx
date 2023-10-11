import { useFormContext } from "../../../../Contexts/FormContext";

function UrlForm() {
  const { providedUrl, setProvidedUrl } = useFormContext();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProvidedUrl(event.target.value);
  };

  return (
    <input
      onChange={handleInput}
      value={providedUrl}
      name="urlInput"
      type="url"
      id="input-el"
      autoComplete="off"
      placeholder="Paste video url here"
      className="flex-grow border-4 p-6 transition duration-100 border-black text-base sm:text-xl focus:outline-none focus:shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
    ></input>
  );
}

export default UrlForm;
