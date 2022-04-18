import React from "react";

const RenderFemale = (props) => {
  return (
    <div>
      {props.names
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((value, index) => {
          if (value.sex === "f")
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
};

export default RenderFemale;
