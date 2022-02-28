import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");
  const change = (event) => {
    setText(event.target.value);
  };
  const toUpperCase = () => {
    setText(text.toUpperCase());
  };
  const toLowerCase = () => {
    setText(text.toLowerCase());
  };
  const clear = () => {
    setText("");
  };
  const copy = () => {
    navigator.clipboard.writeText(text);
  };
  const paste = () => {
    navigator.clipboard.readText().then((clipText) => setText(text + clipText));
  };

  return (
    <div>
      <div className="container my-3">
        <div className="mb-3">
          <div>
            <h3 className={`my-3 ${props.code.txt} `}>
              Enter your text below{" "}
            </h3>
          </div>
          <textarea
            onChange={change}
            value={text}
            placeholder="Enter or paste your text here .."
            className={props.code.box}
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
          <button
            type="button"
            onClick={toUpperCase}
            className={`btn ${props.code.btn} my-3 mx-2`}
          >
            To Upper case
          </button>
          <button
            type="button"
            onClick={toLowerCase}
            className={`btn ${props.code.btn} my-3 mx-2`}
          >
            To Lower case
          </button>
          <button
            type="button"
            onClick={clear}
            className={`btn ${props.code.btn} my-3 mx-2`}
          >
            Clear
          </button>
          <button
            type="button"
            onClick={copy}
            className={`btn ${props.code.btn} my-3 mx-2`}
          >
            copy
          </button>
          <button
            type="button"
            onClick={paste}
            className={`btn ${props.code.btn} my-3 mx-2`}
          >
            Paste
          </button>
          <hr className={`${props.code.hr}`} />
          <h3 className={`${props.code.txt}`}>Text Summary</h3>
          <div className="d-flex flex-row bd-highlight mb-2">
            <span
              className={`${props.code.txt}  m-3`}
              style={{ fontSize: 17, width: 200 }}
            >
              No of character's :&nbsp;
              <b>
                <i>{text.length}</i>
              </b>
            </span>
            <span
              className={`${props.code.txt} m-3`}
              style={{ fontSize: 17, width: 200 }}
            >
              No of Word's :&nbsp;
              <b>
                <i>{text.length === 0 ? "0" : text.split(/\s+/).length}</i>
              </b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
