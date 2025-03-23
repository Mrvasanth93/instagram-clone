import React from "react";
import "./Create.css";
const Create = () => {
  return (
    <div className="create">
      <div className="create__container">
        <h3 className="create__title">Create new post</h3>
        <div className="create__drag">
          <img
            src="https://i.etsystatic.com/34485599/r/il/dee909/5140040715/il_570xN.5140040715_7bjs.jpg"
            alt=""
            className="create__logo"
          />
        </div>
        <p className="create__drop">Drag photos and videos here</p>
        <input type="file" id="fileInput" style={{ display: "none" }} />
        {/* Button to open file dialog */}
        <div className="create__label">
          <label htmlFor="fileInput" className="create__button">
            Select from Computer
          </label>
        </div>
      </div>
    </div>
  );
};

export default Create;
