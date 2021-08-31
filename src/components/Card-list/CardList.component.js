import React from "react";
import "./CardList.component.css";
import CardListTags from "./Card-List-Tags/Card-List-Tags.component";

const CardList = function (props) {
  // props.children
  //   return <div className="cardList">{props.children}</div>;

  return (
    <div className="cardList">
      {props.string.map((string) => (
        <CardListTags key={string.id} string={string} />
      ))}
    </div>
  );
};

export default CardList;
