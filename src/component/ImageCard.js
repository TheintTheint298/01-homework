import { Suspense, use } from "react";

const styles = {
  container: { padding: "40px", textAlign: "center", fontFamily: "sans-serif" },
  skeleton: {
    width: "100%",
    maxWidth: "500px",
    height: "300px",
    backgroundColor: "#eee",
    margin: "0 auto",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#888",
  },
  card: {
    maxWidth: "500px",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  image: { width: "100%", height: "auto", display: "block" },
  content: { padding: "20px" },
};

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject("Image load failed");
  });
};

const imagePromise = loadImage(
  "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);

function NatureImage() {
  const imgSrc = use(imagePromise);

  return (
    <div style={styles.card}>
      <img src={imgSrc} alt="Nature" style={styles.image} />
      <div style={styles.content}>
        <h3>Beautiful Nature</h3>
        <p>Image after load</p>
      </div>
    </div>
  );
}

export default function ImageCard() {
  return (
    <div style={styles.container}>
      <h1>Image Preloader with use()</h1>

      <Suspense fallback={<div style={styles.skeleton}>Loading Image...</div>}>
        <NatureImage />
      </Suspense>
    </div>
  );
}
