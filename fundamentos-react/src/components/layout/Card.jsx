import "./Card.css";
import React from "react";

export default (props) => {

  const cardStyle = {
    backgroundColor: props.color || '#f00',
    boderColor: props.color || '#f00'
  }

  return (
    <div className="Cor" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content"> 
      {props.children}
      </div>
     
  </div>
  );
};