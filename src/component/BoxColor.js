import { useState } from "react";

export default function BoxColor() {
  const [color, setColor] = useState("pink");

  function handleColorChange(e) {
    e.target.value ? setColor(e.target.value) : setColor("pink");
  }
  return (
    <>
      <div>
        <div className="box" style={{ backgroundColor: color }}></div>
        <label className="label">Enter Color:</label>
        <input className="color-input" onChange={handleColorChange} />
      </div>
    </>
  );
}
