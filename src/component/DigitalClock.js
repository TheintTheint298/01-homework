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
};

export default function DigitalClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

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
      </div>
    </div>
  );
}
