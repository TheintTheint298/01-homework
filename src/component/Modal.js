import { useEffect, useRef, useState } from "react";

const styles = {
  openButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ef29c7",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  closeButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ef2957",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },
};
export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Modal Example Using useRef()</h3>
      <button onClick={() => setIsOpen(true)} style={styles.openButton}>
        Open Modal
      </button>

      {isOpen && (
        <div style={styles.overlay}>
          <div ref={modalRef} style={styles.modal}>
            <h2>Modal Title</h2>
            <p>This is modal body.</p>
            <button onClick={() => setIsOpen(false)} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
