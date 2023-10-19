function VideoTitle({ videoTitle }: { videoTitle: string }) {
  return (
    <p className="text-lg font-bold overflow-hidden text-ellipsis h-1/4">
      {videoTitle}
    </p>
  );
}

export default VideoTitle;
