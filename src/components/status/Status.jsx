import "./Status.css";
import Data from "../../constants/posts";

const Status = () => {
  const handleSlide = (direction) => {
    const slider = document.getElementsByClassName("carousel-body")[0];
    if (direction === "left") slider.scrollBy(-200, 0);
    else slider.scrollBy(200, 0);
  };

  return (
    <section className="check">
      <div className="arrow-btn left-icon" onClick={() => handleSlide("left")}>
        <img
          src="https://www.svgrepo.com/download/135316/left-arrow.svg"
          alt="left-angle"
        />
      </div>
      <div
        className="arrow-btn right-icon"
        onClick={() => handleSlide("right")}
      >
        <img
          src="https://www.svgrepo.com/download/27797/right-arrow.svg"
          alt="left-angle"
        />
      </div>
      <div className="carousel-body">
        {Data.map((item) => {
          return (
            <>
              <section className="avatar-detail">
                <div className="avatar-box">
                  <img
                    className="avatar-profile-image"
                    src={item.postImage}
                    alt=""
                  />
                </div>
                <p className="avatar-name">{item.user}</p>
              </section>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Status;
