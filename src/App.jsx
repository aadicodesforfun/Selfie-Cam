import { useRef, useEffect, useState } from "react"
import LivePreview from "./components/LivePreview"
import PhotoToggle from "./components/PhotoToggle"
import Button from "./components/Button"
import ShutterButton from "./components/ShutterButton"
import LightningIcon from "./assets/lightning-icon.svg"
import RotateIcon from "./assets/rotate-icon.svg"
import ColorPicker from "./components/ColorPicker"
import "./App.css"

export default function App(){
  const [activeTab, setActiveTab] = useState('photo');
  const videoRef = useRef(null); 

  useEffect(() => {
    let stream = null;
    const getCameraStream = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera: ", err);
      }
    };

    getCameraStream();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => {
          track.stop();
        });
      }
    };
  }, []);
  return(<>
    <LivePreview videoRef={videoRef}/>
    <PhotoToggle activeTab={activeTab} setActiveTab={setActiveTab}/>
    <div className="Buttons">
      <Button src={LightningIcon}/>
      <ShutterButton activeTab={activeTab}/>
      <Button src={RotateIcon}/>
    </div>
    <ColorPicker/>
  </>)
}