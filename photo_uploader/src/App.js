import React, { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Your custom CSS if needed
import user_image_frame_1 from "./asset/user_image_frame_1.png";
import user_image_frame_2 from "./asset/user_image_frame_2.png";
import user_image_frame_3 from "./asset/user_image_frame_3.png";
import user_image_frame_4 from "./asset/user_image_frame_4.png";

function App() {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageStyle, setImageStyle] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClosePreview = () => {
    setImagePreview(null);
  };

  const handleFrameClick = (frame) => {
    if (frame === 1) {
      setImagePreview(imagePreview);
      // Reset image style to default (no mask)
      setImageStyle("");
    } else {
      switch (frame) {
        case 2:
          // Apply style for frame 2
          setImageStyle("mask-overlay");
          break;
        case 3:
          // Apply mask image for frame 3
          setImageStyle("mask-overlay2");
          break;
        case 4:
          // Apply style for frame 4
          setImageStyle("mask-overlay3");
          break;
        case 5:
          // Apply style for frame 5
          setImageStyle("mask-overlay4");
          break;
        default:
          setImageStyle("");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col navbar navbar-light bg-light justify-content-between align-items-center">
          <div className="back-icon">
            <IoChevronBackSharp />
          </div>
          <div className="heading">Add Image/Icon</div>
        </div>
      </div>

      {imagePreview && (
        <div className="image-preview-overlay">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="image-preview-container">
              <h3>Uploaded Image</h3>
              <button className="close-button" onClick={handleClosePreview}>
                &times;
              </button>
              <img
                src={imagePreview}
                alt="Image Preview"
                className={`image-preview-container ${imageStyle}`}
              />
              <div className="mask-overlay"></div>
              <div className="frame-buttons">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleFrameClick(1)}
                >
                  Default Image
                </button>
                <button
                  className="btn btn-outline-secondary "
                  onClick={() => handleFrameClick(2)}
                >
                  <img
                    src={user_image_frame_1}
                    alt="Frame 2"
                    className="frame-icon"
                  />
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleFrameClick(3)}
                >
                  <img
                    src={user_image_frame_2}
                    alt="Frame 3"
                    className="frame-icon"
                  />
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleFrameClick(4)}
                >
                  <img
                    src={user_image_frame_3}
                    alt="Frame 4"
                    className="frame-icon"
                  />
                </button>
                <button
                  className="btn btn-outline-secondary "
                  onClick={() => handleFrameClick(5)}
                >
                  <img
                    src={user_image_frame_4}
                    alt="Frame 5"
                    className="frame-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conditional rendering to hide the buttons when image preview is open */}
      <div className={`row mt-3 justify-content-center ${imagePreview ? 'd-none' : ''}`}>
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="col text-center" id="imageContainer">
            <h3>Upload Image</h3>
            <input
              type="file"
              id="fileInput"
              className="file-input"
              onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className="btn btn-primary">
              Choose From File
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
