import React, { useState } from "react";
import CameraFeed from "./components/CameraFeed";
import ColorDisplay from "./components/ColorDisplay";
import ToggleSwitch from "./components/ToggleSwitch";
import "./App.css";

export default function App() {
  const [detectedColor, setDetectedColor] = useState(null);
  const [cameraOn, setCameraOn] = useState(true);
  const [voiceOn, setVoiceOn] = useState(true);

  return (
    <div className="app">
      <div className="content-wrapper">
        <h1 className="animated-title">🎨 Color Detector</h1>

        <div className="toggle-row">
          <ToggleSwitch
            label="Camera"
            isOn={cameraOn}
            onToggle={() => setCameraOn(!cameraOn)}
          />
          <ToggleSwitch
            label="Voice Feedback"
            isOn={voiceOn}
            onToggle={() => setVoiceOn(!voiceOn)}
          />
        </div>

        {cameraOn && (
          <CameraFeed onColorDetected={setDetectedColor} voiceOn={voiceOn} />
        )}

        {detectedColor && <ColorDisplay color={detectedColor} />}
      </div>
    </div>
  );
}
