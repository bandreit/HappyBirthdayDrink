import React, { useState } from "react";
import { motion } from "framer-motion";
import party from "./images/party.svg";
import body from "./images/corp.png";
import hand from "./images/mana.png";
import mouth from "./images/gura.png";

import "./App.css";

function App() {
  const [rotate, setRotate] = useState(0);
  const [rotateMouth, setRotateMouth] = useState(0);
  const [top, setTop] = useState(116);
  const [disableButton, setDisableButton] = useState(false);

  const goToInitialState = () => {
    setDisableButton(true);
    setRotate(rotate + 105);
    setTop(top + 15);
    setRotateMouth(rotateMouth - 40);

    setTimeout(function () {
      setRotate(rotate);
      setTop(top);
      setRotateMouth(rotateMouth);
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
          style={{ originX: 0.6, originY: 0.5 }}
          animate={{ rotate: rotateMouth }}
          transition={{ duration: 3 }}
          alt="mouth"
          className="mouth"
        />
      </div>
      <motion.div
        className="card"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        <img src={party} alt="Party" />
      </motion.div>
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
