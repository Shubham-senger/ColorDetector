import React, { useEffect, useRef } from 'react';
import speakColor from '../utils/speakColor';

export default function CameraFeed({ onColorDetected, voiceOn }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        console.error('Camera error:', err);
      }
    }
    enableCamera();
  }, []);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const rect = videoRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    const pixel = ctx.getImageData(x, y, 1, 1).data;

    const rgb = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    onColorDetected(rgb);
    if (voiceOn) speakColor(rgb);
  };

  return (
    <div>
      <video ref={videoRef} onClick={handleClick} width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
    </div>
  );
}