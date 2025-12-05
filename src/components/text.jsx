import React, { useState } from "react";

export default function text() {
  const [text, setText] = useState("");

  const lowercase = () => {
    setText(text.toLowerCase());
  };

  const Uppercase = () => {
    setText(text.toUpperCase());
  };

  const ClearAll = () => {
    setText("");
  };

  const CopyAll = () => {
    navigator.clipboard.writeText(text);
  };

    const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    };

  return (
    <div className="container mt-5">
      <h1>Enter the text to analyze bellow</h1>
      <div className="input-group mb-3">
        <textarea
          className="form-control"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="With textarea"
          id="textarea"
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary mt-3 me-2"
        onClick={lowercase}
      >
        Lower Case
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3 me-2 "
        onClick={Uppercase}
      >
        Upper Case
      </button>
       <button type="button" className="btn btn-primary mt-3 me-2"  onClick={handleSpaces}>
        Remove Extra Spaces
      </button>
      <button type="button" className="btn btn-primary mt-3 me-2" onClick={ClearAll}>
        Clear All
      </button>
      <button type="button" className="btn btn-primary mt-3 me-2"  onClick={CopyAll}>
        Copy Text
      </button>
      <h2 className=" mt-3">Your text summery</h2>
      <h6 className="container ">{text.split(/\s+/).filter((e) => e.length !== 0).length} words and {text.length} characters </h6>
      <h2 className=" mt-3">Preview</h2>
      <h6 className="container ">{text}</h6>
    </div>
  );
}
