import { useState } from 'react';
import './App.css';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/0SYX2qYPODE';



  const handleShowVideo = () => {
    setShowVideo(true); 
  };

  return (
    <>
      <div>
        <h1>Donald J Trump</h1>
        <h2>78 years old</h2>
        <h3>Hates Biden and her puppet Kamala</h3>
        <h4>Hobby: Making liberals cry</h4>

        <button onClick={handleShowVideo}>Watch Video</button>

        {showVideo && (
          <div className="container">
            <h5>Video</h5>
            <iframe
              src={videoUrl}
              title="video"
             
              
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
