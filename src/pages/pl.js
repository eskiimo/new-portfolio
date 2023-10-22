import React, { useEffect, useState } from "react";
import "./pl.css";

export default function Palestine() {
  const [text, setText] = useState("FREE PALESTINE");
  const change = () => {
    setText(text + " FREE PALESTINE");
    console.log(text.length);
  };

  setInterval(() => {
    // change();
  }, 1000);
  return (
    <div id="pl">
      <h1>
        {" "}
        FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE
        PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE
        FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE
        PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE
        FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE
        PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE
        FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE PALESTINE FREE
      </h1>
    </div>
  );
}
