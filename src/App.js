import React, { useState } from "react";
import { motion } from "framer-motion";
import body from "./images/corp.png";
import hand from "./images/mana.png";
import mouth from "./images/gura.png";

import "./App.css";

function App() {
  const [rotate, setRotate] = useState(0);
  const [top, setTop] = useState(116);
  const [disableButton, setDisableButton] = useState(false);

  const goToInitialState = () => {
    setDisableButton(true);
    setRotate(rotate + 105);
    setTop(top + 15);

    setTimeout(function () {
      setRotate(rotate);
      setTop(top);
    }, 3000);

    setTimeout(function () {
      setDisableButton(false);
    }, 6001);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <img src={body} alt="body" className="body" />
        <motion.img
          style={{ originX: 0.7, zIndex: -1 }}
          animate={{ rotate: rotate }}
          transition={{ duration: 3 }}
          src={hand}
          alt="hand"
          className="hand"
        />
        <motion.img
          src={mouth}
          animate={{ top: top }}
          transition={{ duration: 3 }}
          alt="mouth"
          className="mouth"
        />
      </div>
      <div className="button-div">
        <button
          disabled={disableButton}
          onClick={() => {
            goToInitialState();
          }}
        >
          HAI NOROC!
        </button>
      </div>
    </div>
  );
}

export default App;
