import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5 }) {
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }
  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  if (loading)
    return <div className="loading">Loading Images, Please wait!</div>;
  if (error) return <div className="error">Error fetching data: {error}</div>;

  if (error === null)
    return (
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="left-arrow"
        />
        {images && images.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.download_url}
                className={currentImage === index ? "activeBtn" : "inactiveImg"}
              />
            ))
          : null}
        <BsArrowRightCircleFill onClick={handleNext} className="right-arrow" />
        <span className="indicator">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={
                    currentImage === index ? "activeBtn" : "inactiveBtn"
                  }
                ></button>
              ))
            : null}
        </span>
      </div>
    );
}
