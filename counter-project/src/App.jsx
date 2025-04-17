import { useState } from "react";
import "./App.css";  // Import the CSS file

const App = () => {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncrement = () => {
    setValue(value + 1);
    if (value >= 20) {
      setMessage("You've reached the limit!");
      setTimeout(() => {
        setMessage("");
      }, 1000);

      setValue(value);
    }
  };

  const handleDecrement = () => {
    setValue(value - 1);
    if (value <= 0) {
      setValue(0);
      setMessage("Can't go below zero!");
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
  };

  return (
    <div className="container">
      <p>Value: {value}</p>
      <p className={message ? "message" : ""}>{message}</p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
};

export default App;
