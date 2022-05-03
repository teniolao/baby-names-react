import React from "react";

const RenderNames = ({ dataSet, handleClick }) => {
  // dataSet is the mapped data passed as props to RenderNames
  const { id, name, sex } = dataSet;
  return (
    <button key={id} className={sex} onClick={() => handleClick(dataSet)}>
      {name}
    </button>
  );
};

export default RenderNames;
