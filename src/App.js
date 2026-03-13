import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    // <div className="container">
    //   <div>
    //     <img className="main-image" src={activeImage} alt="Active" />
    //   </div>

    //   <div className="img-container">
    //     {images.map((img, index) => (
    //       <img
    //         key={index}
    //         src={img}
    //         alt={`Thumbnail ${img}`}
    //         onClick={() => setActiveImage(img)}
    //         style={{
    //           border: activeImage === img ? "3px solid blue" : "1px solid gray",
    //         }}
    //       />
    //     ))}
    //   </div>
    // </div>
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
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
