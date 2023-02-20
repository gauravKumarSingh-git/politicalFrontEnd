import React from "react";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div className="landingContainer">
      <Navbar />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/31/New_Parliament_Building.jpg"
        alt="parliament"
        style={{ width: "100%" }}
      />
      <div className="homeOverlay bg-secondary">
        <div>
          <h3>OUR MOTTO</h3>
          <p className="p-3">Uniting coders for positive change</p>
        </div>
        <div>
          <h3>OUR VALUES</h3>
        <ul>
          <li><strong>Innovation</strong>: We believe in harnessing the power of technology to drive innovation and progress.</li>
          <li><strong>Accessibility</strong>: We believe that technology should be accessible to all</li>
          <li><strong>Equality</strong> : We believe in building a society that is fair and just, with opportunities for all.</li>
          <li><strong>Collaboration</strong> : We believe in the power of collaboration and cooperation to drive change.</li>
          <li><strong>Accountability</strong> : We believe in taking responsibility for our actions and working to make a positive impact on the world.</li>
        </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
