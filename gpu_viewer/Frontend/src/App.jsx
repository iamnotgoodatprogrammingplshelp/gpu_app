import React, { useState } from "react";

function LilBroApp() {
  const [gpu, setGpu] = useState("RTX-OMG-4090");
  const [fps, setFps] = useState(420);
  const [heat, setHeat] = useState(69);
  const [brand, setBrand] = useState("NVIDIA");
  const [history, setHistory] = useState([]);

  function handleGpuChange(e) {
    setGpu(e.target.value);
  }
  function handleBrandChange(e) {
    setBrand(e.target.value);
    setGpu(""); // reset GPU name when brand changes
  }
  function boostFPS() {
    setFps(fps + 10);
    setHistory([{ type: "boost", value: fps + 10, time: new Date().toLocaleTimeString() }, ...history]);
  }
  function coolDown() {
    setHeat(heat - 1);
    setHistory([{ type: "cool", value: heat - 1, time: new Date().toLocaleTimeString() }, ...history]);
  }
  function resetAll() {
    setGpu("RTX-OMG-4090");
    setFps(420);
    setHeat(69);
    setBrand("NVIDIA");
    setHistory([]);
  }

  // Change visual based on heat
  let heatEmoji = "😊";
  if (heat > 85) heatEmoji = "🥵";
  else if (heat > 75) heatEmoji = "😅";
  else if (heat < 50) heatEmoji = "🧊";

  // Simple warning
  const warning =
    heat > 85
      ? "⚠️ Your GPU is way too hot! Chill it 😱"
      : fps > 600
      ? "💨 That's some serious speed!"
      : "";

  return (
    <div style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", margin: 42, background: "#f0f5ff", padding: 20, borderRadius: 12, maxWidth: 400 }}>
      <h1>💻 lil bro gpu viewer 😎</h1>
      <div>
        <label>
          🏢 Brand:
          <select value={brand} onChange={handleBrandChange} style={{ marginLeft: 8, marginRight: 8 }}>
            <option>NVIDIA</option>
            <option>AMD</option>
            <option>Intel</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          🤖 gpu name:
          <input value={gpu} onChange={handleGpuChange} style={{ marginLeft: 8 }} placeholder="Enter GPU model"/>
        </label>
      </div>
      <div>🎮 fps: <b>{fps}</b>{fps > 700 ? " 🤯" : ""}</div>
      <div>🔥 heat: <b>{heat}°C</b> {heatEmoji}</div>
      {warning && <div style={{ color: "crimson", margin: 6 }}>{warning}</div>}
      <button onClick={boostFPS} style={{ margin: 4 }}>boost fps 🚀</button>
      <button onClick={coolDown} style={{ margin: 4 }}>cool down 🧊</button>
      <button onClick={resetAll} style={{ margin: 4, background: "#fffbe6" }}>reset 🔄</button>
      <p>powered by lil bro™</p>
      <div style={{ marginTop: 12, background: "#fff", padding: "8px 12px", borderRadius: 8 }}>
        <b>History:</b>
        <ul style={{ fontSize: "0.9em" }}>
          {history.length === 0 && <li>No actions yet</li>}
          {history.map((entry, idx) => (
            <li key={idx}>
              [{entry.time}] {entry.type === "boost" ? "🚀 boosted fps to " : "🧊 cooled down to "}
              <b>{entry.value}{entry.type === "boost" ? " fps" : "°C"}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default LilBroApp;
