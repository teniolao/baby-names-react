import React, { useState } from "react";
import babyNamesData from "./babyNamesData.json";
import "./App.css";
import RenderNames from "./RenderNames";
//import Favourites from "./Favourites";



function App() {
  // const [arrayOfNames, setArrayOfNames] = useState(babyNamesData);
  const [searchTerm, setSearchTerm] = useState(""); // filter search
  const [faveName, setFaveName] = useState([]); // view fav name
  const [filterSex, setFilterSex] = useState("all");
  const [message, setMessage] = useState(
    "Click on a name to add to Favourites"
  ); // change fav message

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const addFavouriteNames = (clickedName) => {
    setFaveName([...faveName, clickedName]);
    setMessage("Click to remove from Favourites ");
  };

  const removeFavouriteNames = (clickedName) => {
    // clickedName is the nameProp passed down from
    const { id } = clickedName;
    //console.log(clickedName)
    setFaveName(
      faveName.filter((fave) => {
        if (fave.id !== id) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="names-container">
          <input
            className="search"
            placeholder="Search for a name..."
            type="text"
            value={searchTerm}
            onChange={handleChange}
          ></input>
          <button onClick={() => setFilterSex("all")} className="all-button">
            All
          </button>
          <button onClick={() => setFilterSex("f")} className="girl-button">
            Girls
          </button>
          <button onClick={() => setFilterSex("m")} className="boy-button">
            Boys
          </button>

          <div className="fav-container">
            Favourites:
            {faveName.map((fave) => (
              <RenderNames dataSet={fave} handleClick={removeFavouriteNames} />
            ))}
          </div>
          {message}
          <hr />

          <div>
            {babyNamesData
              .sort((a, b) => a.name.localeCompare(b.name))
              .filter((dataSet) => {
                const { name, sex, id } = dataSet; // dataSet is the mapped data

                const includesNameSearch = name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
                const faveIds = faveName.map((name) => name.id);
                const isSelectedAsFave = faveIds.includes(id);

                const displaySelectedSex =
                  filterSex === "all" || filterSex === sex;
                return (
                  displaySelectedSex && includesNameSearch && !isSelectedAsFave
                );
              })
              .map((dataSet) => (
                <RenderNames
                  dataSet={dataSet}
                  handleClick={addFavouriteNames}
                />
              ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
