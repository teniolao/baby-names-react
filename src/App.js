import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import RenderNames from "./RenderNames";


function filterNames(typedValue) {
  return babyNamesData.filter((value) =>
    value.name.toLowerCase().includes(typedValue.toLowerCase())
  );
}
function App() {
  const [arrayOfNames, setArrayOfNames] = useState(babyNamesData);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="names-container">
          <input
          className="search"
            placeholder="Search for a name..."
            type="text"
            onKeyUp={(event) => {
              setArrayOfNames(filterNames(event.target.value));
            }}
          ></input>
          <RenderNames names={arrayOfNames} />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
