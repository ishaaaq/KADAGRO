function GreenerFuture({ clickHandler }) {
  return (
    <div className="greener-future">
      <div className="box"></div>
      <h1>Sustainable Farming Meets Technology: Building a Greener Future</h1>
      <div className="getStarted-btn">
        <button className="btn  GetStarted" onClick={clickHandler}>
          Learn More
        </button>
        <button className="btn learnMore" onClick={clickHandler}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default GreenerFuture;
