import React, { useState } from "react";

export default function Form(props) {
  const handleOnChange = (event) => {
    console.log("OnChange was clicked");
    setText(event.target.value);
    console.log("I am updated test", text);
  };
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "success");
  };

  const OnhandleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const OnhandleClearClick = () => {
    console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear", "success");
  };

  const OnhandleRemoveSpaceClick = () => {
    console.log("Remove Space was clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const OnhandleCopyClick = () => {
  
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "rgb(1 39 48)" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(1 39 48)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={OnhandleUpClick}>
          Convert to Lowercase{" "}
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={OnhandleRemoveSpaceClick}
        >
          Remove Extra Spaces{" "}
        </button>
        <button className="btn btn-primary m-2" onClick={OnhandleCopyClick}>
          Copy{" "}
        </button>
        <button className="btn btn-primary m-2" onClick={OnhandleClearClick}>
          Clear{" "}
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
