import React from "react";

const SearchBox = (placeholder, eventHendler) => {
  return <input type="search" placeholder={placeholder} onChange={eventHendler} />;
};

export default SearchBox;
