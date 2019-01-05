import React from "react";

function List({input}){
  return(
    <div className="list-container">
      <ul className="item-group">{input}</ul>
    </div>
  )
}

export default List;