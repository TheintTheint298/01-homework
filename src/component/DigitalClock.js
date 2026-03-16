import { useEffect, useState } from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  clockCard: {
    textAlign: "center",
    backgroundColor: "#1c1a1b",
    padding: "26px",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  dateText: {
    color: "#bd97ba",
    fontSize: "1.2rem",
    marginBottom: "10px",
    letterSpacing: "1px",
  },
  timeText: {
    color: "#d349c8",
    fontSize: "3rem",
    margin: 0,
    textShadow: "0 0 8px rgba(209, 47, 206, 0.5)",
  },
  button: {
    fontSize: "1rem",
    padding: "8px 18px",
    marginTop: "16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#ef2323",
    color: "#fff",
    cursor: "pointer",
  },
};

export default function DigitalClock() {
  const [dateTime, setDateTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isRunning]);

  const timeString = dateTime.toLocaleTimeString();
  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = dateTime.toLocaleDateString(undefined, dateOptions);

  return (
    <div style={styles.container}>
      <div style={styles.clockCard}>
        <p style={styles.dateText}>{dateString}</p>
        <h1 style={styles.timeText}>{timeString}</h1>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{
            ...styles.button,
            backgroundColor: isRunning ? "#ef2323" : "#25ba5b",
          }}
        >
          {isRunning ? "Stop Timer" : "Start Timer"}
        </button>
      </div>
    </div>
  );
}
