import Webcam from "react-webcam";
import "./App.css";
import Frame1 from "./components/Frame1";
import { useCallback, useRef, useState } from "react";

function App() {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [photoCount, setPhotoCount] = useState(0);

  const capture = useCallback(() => {
    if (webcamRef.current === null) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    setImages((prev) => {
      const updated = [...prev, imageSrc];
      return updated.slice(0, 3); // keep only 3 latest images
    });
  }, [webcamRef, setImgSrc]);

  return (
    <div className="flex">
      <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" />
      <Frame1 image1={images[0]} image2={images[1]} image3={images[2]}/>

      <button onClick={capture}>Capture photo</button>

      {imgSrc && <img src={imgSrc} />}
    </div>
  );
}

export default App;
