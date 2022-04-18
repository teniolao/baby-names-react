import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import RenderNames from "./RenderNames";
import Favourites from "./Favourites";
import RenderMale from "./RenderMale";
import RenderFemale from "./RenderFemale";

function filterNames(typedValue) {
  return babyNamesData.filter((value) =>
    value.name.toLowerCase().includes(typedValue.toLowerCase())
  );
}

function App() {
  const [arrayOfNames, setArrayOfNames] = useState(babyNamesData);
  const [favName, setFaveName] = useState(""); // view fav name
  const [allNames, setAllNames] = useState(true); // view all names
  const [maleNames, setMaleNames] = useState(false); // view male name
  const [femaleNames, setFemaleNames] = useState(false); // view female name
  const [message, setMessage] = useState(
    "Click on a name to add  to Favourites:"
  ); // change fav message

  function RenderAllNames() {
    setAllNames(true);
    setFemaleNames(false);
    setMaleNames(false);
  }

  function RenderMaleNames() {
    setMaleNames((prevState) => !prevState);
    setAllNames(false);
    setFemaleNames(false);
  }

  function RenderFemaleNames() {
    setFemaleNames((prevState) => !prevState);
    setAllNames(false);
    setMaleNames(false);
  }

  function addFavouriteNames(event) {
    setFaveName((setValue) => [
      ...setValue,
      <button>{event.target.name}</button>,
    ]);
    setMessage("Favourites: ");
  }

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
          <button onClick={RenderAllNames} className="all-button">
            All
          </button>
          <button className="girl-button" onClick={RenderFemaleNames}>
            Girls
          </button>
          <button className="boy-button" onClick={RenderMaleNames}>
            Boys
          </button>
          <Favourites message={message} favName={favName} />
          <hr />

          {allNames && (
            <RenderNames
              names={arrayOfNames}
              addFavouriteNames={addFavouriteNames}
            />
          )}

          {maleNames && (
            <RenderMale
              names={arrayOfNames}
              addFavouriteNames={addFavouriteNames}
            />
          )}

          {femaleNames && (
            <RenderFemale
              names={arrayOfNames}
              addFavouriteNames={addFavouriteNames}
            />
          )}
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
