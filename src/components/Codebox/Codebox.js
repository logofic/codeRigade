import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { FiShare2 } from "react-icons/fi";

// The following two imports is for the theme.
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/nord.css";

// This import is for the language syntax highlighting.
// LAZY LOAD THESE IMPORTS
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/python/python";
import "codemirror/mode/php/php";

// Overrides some codemirror classes, don't change order
import "./Codebox.scss";

export default function Codebox() {
  const [options, setOptions] = useState({
    mode: { name: "xml" },
    theme: "material",
    lineNumbers: true,
  });

  return (
    <div className="codebox-container">
      <header>
        <h1>CodeRigade</h1>
      </header>
      <main>
        <div className="controls">
          <div className="control-dropdown">
            <select
              defaultValue={options.mode}
              onChange={(e) => {
                setOptions({ mode: e.target.value });
              }}
            >
              <option value="xml">XML/HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
              <option value="php">PHP</option>
            </select>
          </div>
          <div className="control-icon">
            <span>Share&nbsp;</span>
            <FiShare2 size={15} />
          </div>
          <div className="control-dropdown">
            <select
              defaultValue={options.theme}
              onChange={(e) => {
                setOptions({ theme: e.target.value });
              }}
            >
              <option value="material">Material</option>
              <option value="monokai">Monokai</option>
              <option value="nord">Nord</option>
            </select>
          </div>
        </div>
        <CodeMirror
          value="<h1>I ♥ react-codemirror2</h1>"
          className="code-editor"
          options={options}
          onChange={(editor, data, value) => {
            console.log("Editor: ", editor);
            console.log("Data: ", data);
            console.log("Value: ", value);
          }}
        />
      </main>
    </div>
  );
}