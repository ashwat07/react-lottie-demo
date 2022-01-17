import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function App() {
  const loader = useRef(null);
  const play = useRef(null);
  const pause = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: loader.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Pause.json"),
    });
    lottie.loadAnimation({
      container: play.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./loader.json"),
    });
    lottie.loadAnimation({
      container: pause.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Play.json"),
    });
  }, []);

  return (
    <div className="App">
      <h1>Lottie Demo</h1>
      <div className="container" ref={loader}></div>
      <div className="container" ref={play}></div>
      <div className="container" ref={pause}></div>
    </div>
  );
}

export default App;
