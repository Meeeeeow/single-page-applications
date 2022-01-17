import React from "react";
import './Singlebox.styles.css';
export const SingleBox =({title,body,img,col})=>(
    <div className={`box box-${col} ${col === 'pink' || col === 'purple' ? "box-down" : ""}`}>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={img} alt=""></img>
    </div>
)