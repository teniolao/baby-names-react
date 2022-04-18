import React from "react";

function RenderNames(props) {
  return (
    <div>
      {props.names
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((value, index) => {
          return (
            <button
              name={value.name}
              key={index}
              className={value.sex}
              onClick={props.addFavouriteNames}
            >
              {value.name}
            </button>
          );
        })}
    </div>
  );
}

export default RenderNames;
