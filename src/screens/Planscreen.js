import React from "react";
import "./Planscreen.css";

function Planscreen() {
  return (
    <div className="planscreen">
      <div className="plan">
        <div className="planinfo">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plan">
        <div className="planinfo">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plan">
        <div className="planinfo">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Planscreen;
