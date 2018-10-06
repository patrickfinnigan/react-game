import React from "react";
import "./Card.css";


// console.log says the button was clicked 

const Card = props => (
    <div className="card" key={props.id}>
        <div className="img-container">
            <img alt={props.id} src={props.image} />
        </div>
    </div>
);


export default Card;