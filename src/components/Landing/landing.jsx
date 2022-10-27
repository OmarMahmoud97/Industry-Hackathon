import "./landing.scss";
import Navbar from "../Navbar/navbar";

const Landing = () => {
  return (
    <section className="landing">
      <Navbar />
      <div className="landing__container">
        <div className="landing__wrapper">
          <div className="landing__item">
            <h1 className="landing__header">
              Lets Make our Earth Green and Clean
            </h1>
          </div>
          <div className="landing__item-text">
            <div className="landing__bottom">
              <p className="landing__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                natus commodi? Magnam culpa ullam fuga provident nam totam id
                reiciendis! Libero illum rem quibusdam sed est repellendus
                deleniti, adipisci eos.
              </p>
              <div className="landing__buttons">
                <button className="landing__button-left">Start Today</button>
                <button className="landing__button-right">how it works</button>
              </div>
            </div>
          </div>
        </div>
        <div className="landing__wrapper-img">
          <div className="landing__img-container">
            <div src="" alt="" className="landing__img"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
