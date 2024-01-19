import react, { useEffect, useState } from "react";
import data from "./TestimonialsData";
import leftArrow from "./images/left.png";
import rightArrow from "./images/right.png";
import auta from "./images/Rectangle 31.png";
import starRate from "./images/Group 45.png";

function Testimonials() {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  useEffect(() => {
    if (count > data.length - 1) {
      setCount(0);
    }
    if (count < 0) {
      setCount(data.length - 1);
    }
  }, [count, people]);
  return (
    <div id="testimonials">
      <h1 className="header">Testimonials</h1>
      <p className="sub-heading">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular.{" "}
      </p>
      <div className="testimonials-btn-container">
        <div className="left">
          <img src={leftArrow} onClick={() => setCount(count - 1)}></img>
        </div>

        <div className="right">
          <img src={rightArrow} onClick={() => setCount(count + 1)}></img>
        </div>
      </div>

      {people.map((person, personIndex) => {
        const { image, id, name, title, text } = person;
        let position = "nextSlide";

        if (personIndex === count) {
          position = "activeSlide";
        }
        if (
          personIndex === count - 1 ||
          (count === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <div className="green-container">
            <div key={id} className={`green ${position}`}>
              <img src={image} alt={name}></img>
              <div className="testimonials-text">
                <div className="stars">
                  <img src={starRate}></img>
                </div>
                <h3 className="name">{name}</h3>
                <p className="job">{title}</p>
                <p className="para1">{text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Testimonials;
