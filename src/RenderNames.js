import React from "react";
import Favourites from "./Favourites";

function RenderNames(props) {
  const [favName, setFaveName] = React.useState("");

  function addFavouriteNames(event) {
    setFaveName((setValue) => [
      ...setValue,
      <button>{event.target.name}</button>
    ]);
  }
  return (
    <div>
      <Favourites favName={favName} />
      <hr />
      {props.names
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((value, index) => {
          return (
            <button
              name={value.name}
              key={index}
              className={value.sex}
              onClick={addFavouriteNames}
            >
              {value.name}
            </button>
          )
        })}
    </div>
  );
}

export default RenderNames;
