import PlaceholderImage from "./PlaceholderImage";
import PlaceholderSpinner from "./PlaceholderSpinner";

interface PlaceholderProps {
  isLoading: boolean;
  isDownloading: boolean;
  timeToDl: number;
}

const Placeholder: React.FC<PlaceholderProps> = ({
  isLoading,
  isDownloading,
  timeToDl,
}) => {
  if (isLoading) {
    return (
      <div className="relative w-full h-full">
        <PlaceholderImage></PlaceholderImage>
        <PlaceholderSpinner timeToDl={0}></PlaceholderSpinner>
      </div>
    );
  } else if (isDownloading) {
    return (
      <div className="relative w-full h-full">
        <PlaceholderImage></PlaceholderImage>
        <PlaceholderSpinner timeToDl={timeToDl}></PlaceholderSpinner>
      </div>
    );
  }
};

export default Placeholder;
