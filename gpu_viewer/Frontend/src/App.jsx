import React, { useState } from "react";

function LilBroApp() {

  const [gpu, setGpu] = useState("RTX-OMG-4090");
  const [fps, setFps] = useState(420);
  const [heat, setHeat] = useState(69);

  function handleGpuChange(e) {
    setGpu(e.target.value);
  }
  function boostFPS() {
    setFps(fps + 10);
  }
  function coolDown() {
    setHeat(heat - 1);
  }

  return (
    <div style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", margin: 42, background: "#f0f5ff", padding: 20, borderRadius: 12 }}>
      <h1>💻 lil bro gpu viewer 😎</h1>
      <div>
        <label>
          🤖 gpu name:
          <input value={gpu} onChange={handleGpuChange} style={{ marginLeft: 8 }} />
        </label>
      </div>
      <div>🎮 fps: <b>{fps}</b></div>
      <div>🔥 heat: <b>{heat}°C</b></div>
      <button onClick={boostFPS} style={{ margin: 4 }}>boost fps 🚀</button>
      <button onClick={coolDown} style={{ margin: 4 }}>cool down 🧊</button>
      <p>powered by lil bro™</p>
    </div>
  );
}
export default LilBroApp;
