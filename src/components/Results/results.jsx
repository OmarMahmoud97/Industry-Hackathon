import "./results.scss";
import graph from "../../assets/images/graph2.png";
const Results = () => {
  return (
    <section className="results">
      <div className="results__landing">
        <h1 className="results__title">
          The average monthly carbon footprint is
        </h1>
        <h2 className="results__weight">
          624kg <span className="results__co2">CO2</span>
        </h2>
      </div>
      <div className="results__bottom">
        <div className="results__bottom-header">
          Your Carbon Footprint in a nutshell
        </div>
        <div className="results__graph">
          <img className="results__graph-img" src={graph} alt="" />
        </div>
        <div className="results__buttons">
          <button className="results__btn-left">Learn More</button>
          <button className="results__btn-right">Next</button>
        </div>
      </div>
    </section>
  );
};
export default Results;
