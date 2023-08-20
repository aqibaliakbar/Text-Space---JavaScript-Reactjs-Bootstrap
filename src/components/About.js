import React from "react";

export default function About(props) {
  return (
    <div id="About" className={`container bg-${props.mode} `}>
      <h1 className={`text-${props.mode === "light" ? "dark" : "light"} my-3`}>
        About Us
      </h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              } border-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              } border-${props.mode === "light" ? "dark" : "light"}`}
            >
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count and character count. Change it into
              Uppercase or Lowercase. Remove Repetition of words.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collasped bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              } border-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              } border-${props.mode === "light" ? "dark" : "light"}`}
            >
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collasped bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              } border-${props.mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              } border-${props.mode === "light" ? "dark" : "light"}`}
            >
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
