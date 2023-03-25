import React from "react";

function AboutCard({ title, icon, desc, projects }) {
  return (
    <div className="about-card">
      <div className="about-card-1">
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{projects.toString()} project</p>
      </div>
      <div className="about-card-icon">
        <img src={icon} />
      </div>
    </div>
  );
}

export default AboutCard;
