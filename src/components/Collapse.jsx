import React from "react";
import "../assets/styles/Collapse.scss";

const Collapse = ({ className, title, content, isOpen, onClick }) => {
  return (
    <div className={`collapse ${className} ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={onClick}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default Collapse;























