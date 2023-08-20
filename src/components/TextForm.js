import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Remove Repetitive Words Function
  const handleDelDuplicates = () => {
    let wordArr = text.split(" ");
    let newText = wordArr.filter((item, pos) => {
      return wordArr.indexOf(item) === pos;
    });
    newText = newText.join(" ");
    setText(newText);
  };

  // Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  // Text Copy Function
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard", "success");
  };

  // Text Speak Function

  const handleSpeakClick = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
  };

  // Convert to Uppercase Function
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  // Convert to Lowercase Function
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  // Clear Text Function
  const handleClClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Area is cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div id="formUtils" className="container text-center ">
        <h1
          className={`bg-transparent border text-center  py-3 text-${
            props.mode === "light" ? "dark" : "light"
          }  `}
          style={{ color: props.mode === "light" ? "dark" : "light" }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            } `}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-danger  mx-2 my-2"
          type="submit"
          onClick={handleClClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn button1 border  mx-2 my-2 text-${
            props.mode === "light" ? "dark" : "light"
          }  `}
          type="submit"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn button1 border  mx-2 my-2 text-${
            props.mode === "light" ? "dark" : "light"
          } `}
          type="submit"
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn button1 border  mx-2 my-2 text-${
            props.mode === "light" ? "dark" : "light"
          }  `}
          type="submit"
          onClick={handleSpeakClick}
        >
          {" "}
          <i className="bi bi-megaphone mx-2"></i>Read Your Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn button1 border mx-2 my-2 text-${
            props.mode === "light" ? "dark" : "light"
          } `}
          type="submit"
          onClick={handleDelDuplicates}
        >
          Remove Repetitive Words
        </button>
        <button
          disabled={text.length === 0}
          className={`btn button1 border mx-2 my-2 text-${
            props.mode === "light" ? "dark" : "light"
          } `}
          type="submit"
          onClick={handleCopy}
        >
          Copy Text{" "}
        </button>
        <button
          disabled={text.length === 0}
          className={`btn button1 border mx-2 my-2 text-${
            props.mode === "light" ? "dark" : "light"
          } `}
          type="submit"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces{" "}
        </button>
      </div>

      <div
        className={`container border my-3 text-${
          props.mode === "light" ? "dark" : "light"
        } `}
      >
        <h2 className=" text-center my-3">Your Text Summary</h2>
        <p className=" text-center">
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} Words and{" "}
          {text.replace(/\s+/g, "").length} Characters
        </p>
        <p className=" text-center">
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read{" "}
        </p>
        <h2 className=" text-center">Preview</h2>
        <p className=" text-center">
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
