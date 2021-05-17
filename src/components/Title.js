import React from "react";


export default function Title({ title, text }) {
  return (
        <div className="section-title">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
  );
};
