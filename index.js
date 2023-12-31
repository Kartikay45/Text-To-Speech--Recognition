import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpeechRecognition } from "react-speech-kit";
import    "./index.css";
function App() {
  const [text, setText] = useState();
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => setText(result),
  });
  return (
    <div align="center" className="tet">
      <h2 align="center">Convert Speech to Text: </h2>
      <textarea  value={text}></textarea>
      <p>
        <button onClick={listen}>Listen</button>
        <button onClick={stop}>Stop</button>
      </p>
    </div>
  );
}
const element = <App></App>;
ReactDOM.render(element, document.getElementById("root"));