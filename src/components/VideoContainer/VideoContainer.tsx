import { useCallback, useRef, useState } from "react"; // import useCallback
import Webcam from "react-webcam";

const VideoContainer = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [mirrored, setMirrored] = useState<boolean>(false);

  const retake = () => {
    setImgSrc(null);
  };

  // create a capture function
  const capture = useCallback(() => {
    if (webcamRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const imageSrc = (webcamRef.current as any).getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef]);

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          height={600}
          width={600}
          ref={webcamRef}
          mirrored={mirrored}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}
      <div className="btn-container">
        <div className="controls">
          <div>
            <input
              type="checkbox"
              checked={mirrored}
              onChange={(e) => setMirrored(e.target.checked)}
            />
            <label>Mirror</label>
          </div>
        </div>
      </div>
      {imgSrc ? (
        <button onClick={retake}>Retake photo</button>
      ) : (
        <button onClick={capture}>Capture photo</button>
      )}
    </div>
  );
};

export default VideoContainer;
