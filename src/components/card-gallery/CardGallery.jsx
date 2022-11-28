import React from "react";
import "./card-gallery.css";
import useModal from "./useModal";
import Modal from "./Modal";

const CardGallery = ({ infoImage }) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button onClick={toggle}>
        <div className="card-gallery">
          <article id="3685" className="location-listing">
            <p className="location-title">{infoImage.description}</p>
            <div className="location-image">
              <img
                src={infoImage.url}
                alt={infoImage.title}
                height="300"
                width="300"
              />
            </div>
          </article>
        </div>
      </button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        infoImageIMG={infoImage.url}
        infoDescription={infoImage.description}
      />
    </>
  );
};

export default CardGallery;
