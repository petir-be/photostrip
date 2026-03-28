import Webcam from "react-webcam";
import "./App.css";
import Frame1 from "./components/Frame1";
import { useCallback, useRef, useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const webcamRef = useRef<Webcam>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  // const [photoCount, setPhotoCount] = useState(0);

  const downloadStrip = async () => {
    console.log("clicked");
    const frame = frameRef.current;
    console.log("frame:", frame);

    if (!frame) return;

    try {
      const canvas = await html2canvas(frame, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const data = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = data;
      link.download = "photostrip.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const capture = useCallback(() => {
    if (webcamRef.current === null) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    setImages((prev) => {
      const updated = [...prev, imageSrc];
      return updated.slice(0, 3);
    });
  }, [webcamRef, setImgSrc]);

  return (
    <div className="flex">
      <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" />
      <Frame1
        image1={images[0]}
        image2={images[1]}
        image3={images[2]}
        ref={frameRef}
      />

      <button onClick={capture}>Capture photo</button>
      <button className="p-5 bg-red-500" onClick={downloadStrip}>
        download
      </button>

      {imgSrc && <img src={imgSrc} />}
    </div>
  );
}

export default App;
