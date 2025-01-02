import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../assets/styles/Property.scss";

const Property = () => {
  const { id } = useParams();
  const [openCollapse, setOpenCollapse] = useState(null);

  const toggleCollapse = (collapseName) => {
    setOpenCollapse((prev) => (prev === collapseName ? null : collapseName));
  };

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/notfound" replace />;
  }

  const { title, location, tags, host, rating, pictures, description, equipments } = logement;

  return (
    <div className="property">
      <Slideshow images={pictures} />

      <div className="property-header">
        <div className="property-details">
          <h1 className="property-title">{title}</h1>
          <p className="property-location">{location}</p>
          <div className="property-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="property-owner">
          <div className="owner-info">
            <p className="owner-name">{host.name}</p>
            <img src={host.picture} alt={host.name} className="owner-picture" />
          </div>
          <div className="property-rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`star ${index < rating ? "" : "star-empty"}`}>
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="property-collapse">
        <Collapse
          className="description-collapse"
          title="Description"
          content={description}
          isOpen={openCollapse === "description"}
          onClick={() => toggleCollapse("description")}
        />
        <Collapse
          className="equipments-collapse"
          title="Équipements"
          content={
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
          isOpen={openCollapse === "equipments"}
          onClick={() => toggleCollapse("equipments")}
        />
      </div>
    </div>
  );
};

export default Property;























