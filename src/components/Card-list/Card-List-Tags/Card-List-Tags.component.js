import React from "react";
import "./Card-Style.css";

const CardListTags = (props) => {
  return (
    <div className="container">
      <div>
        <img alt="picture" src={`https://robohash.org/${props.string.id}?set=set1`}></img>
        <h1>{props.string.name}</h1>
      </div>
    </div>
  );
};

export default CardListTags;
