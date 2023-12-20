import video from "../assets/Cute_Tiger_Meow.mp4";
import { useState, useRef } from "react";

const FirstTask = () => {
  // First task functions
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoHeightSize, setVideoHeightSize] = useState(850);
  const [videoWidthSize, setVideoWidthSize] = useState(1200);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleSize = () => {
    if (videoHeightSize == 850) {
      setVideoHeightSize(980);
    } else {
      setVideoHeightSize(850);
    }

    if (videoWidthSize == 1200) {
      setVideoWidthSize(1600);
    } else {
      setVideoWidthSize(1200);
    }
  };

  return (
    <div>
      <h1>Cute tiger video with controls</h1>
      <video height={"850"} width={"1200"} controls>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <h2>This is the "controls" function of video</h2>

      <h1>Cute tiger video with autoplay muted</h1>
      <video height={"850"} width={"1200"} autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <h2>This is the "autoplay and muted" function of video</h2>

      <div className="customBtn">
        <h1>Cute tiger video with custom buttons</h1>
        <video ref={videoRef} height={videoHeightSize} width={videoWidthSize}>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>

        <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={handleSize}>
          {videoHeightSize == 850 ? "Biger" : "Smaller"}
        </button>
      </div>

      <h2>This is the "custom buttons" function of video</h2>
    </div>
  );
};

export default FirstTask;
