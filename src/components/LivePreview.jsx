import { useEffect, useRef } from 'react'; 
import "./LivePreview.css";

export default function LivePreview({videoRef}) {
  return (
    <div className="preview-wrapper">
      <div className="preview">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}