import PlaceholderImage from "./PlaceholderImage";
import PlaceholderSpinner from "./PlaceholderSpinner";

function Placeholder() {
  return (
    <div className="relative w-full h-full">
      <PlaceholderImage></PlaceholderImage>
      <PlaceholderSpinner></PlaceholderSpinner>
    </div>
  );
}

export default Placeholder;
