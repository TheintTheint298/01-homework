import { useState } from "react";

export default function ImageGallery({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="container">
      <div>
        <img className="main-image" src={activeImage} alt="Active" />
      </div>
      <div className="image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${img}`}
            onClick={() => setActiveImage(img)}
            style={{
              border: activeImage === img ? "3px solid blue" : "1px solid gray",
              opacity: activeImage === img ? 0.5 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
