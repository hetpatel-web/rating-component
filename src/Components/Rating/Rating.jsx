import React from "react";
import "./Rating.css";
import STAR from "../../Assets/icon-star.svg";

export default function Rating() {
  return (
    <div className="container rating-container">
      <div className="rating-wrapper">
        <img src={STAR} alt="Star" />
        <h2> How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <button className="btn">Submit</button>
      </div>
    </div>
  );
}
