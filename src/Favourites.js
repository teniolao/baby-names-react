import React from "react";




function Favourites(props) {
  return <div className="fav-container">{props.message} {props.favName}</div>;
}

export default Favourites;
