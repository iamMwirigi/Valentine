import React from "react";
import MemeGenerator from "./MemeGenerator";
import val from "./assets/val.mp4";
import { FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./style.css";

function App() {
  const handlePlayVideo = () => {
    const video = document.getElementById("valentine-video");
    if (video) {
      video.play().catch((error) => console.error("❌ Video play failed", error));
    }
  };

  return (
    <div className="container">
      <h1>Valentine's Day Meme Generator </h1>
      <p>For all the single legends out there, here’s your daily dose of humor! 😂</p>

      {/* Meme Card */}
      <div className="meme-card">
        <MemeGenerator />
      </div>

      {/* Video Card */}
      <div className="video-card">
        <h2>Anyway...</h2>
        <video 
  id="valentine-video" 
  controls 
  playsInline 
  width="100%" 
  onLoadedData={() => console.log("🎥 Video Loaded Successfully!")}
  onError={(e) => console.error("❌ Error loading video", e)}
>
  <source src={val} type="video/mp4" />
  <source src="/valentine-video.webm" type="video/webm" />
  <source src="/valentine-video.ogv" type="video/ogg" />
  Your browser does not support the video tag.
</video>


        <button onClick={handlePlayVideo} className="play-btn">
          ▶ Play Video
        </button>
      </div>

      <p className="footer">Made with ❤️ (and a little bit of loneliness).</p>

      <div className="social-links">
        <a href="https://x.com/mwi_mwirigi" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.instagram.com/mwirigi_404/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </div>

    </div>
  );
}

export default App;
