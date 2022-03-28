import React from "react";

function RenderNames(props) {
  //console.log(filteredNames);
  return props.names
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((value, index) => {
      return (
        <p key={index} className={value.sex}>
          {value.name}
        </p>
      );
    });
}

export default RenderNames;
