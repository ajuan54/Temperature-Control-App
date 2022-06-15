import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(50);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 86) return;
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 69) {
      setTemperatureColor("hot");
    }

    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 48) return;
    const newTemperature = temperatureValue - 1;

    if (newTemperature < 69) {
      setTemperatureColor("cold");
    }

    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°F
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
}
