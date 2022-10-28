import "./questions.scss";
import img from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";
const Quiz = () => {
  return (
    <section className="quiz">
      <div className="quiz__title">Home</div>
      <img src={img} alt="" />{" "}
      <form action="" className="quiz__form">
        <div className="quiz__question">
          <label htmlFor="warehouse" className="form__label">
            How many types of lightbulbs do you have?
          </label>
          <select
            className="form__select"
            type="select"
            name="lightbulb"
            id="lightbulb"
          >
            <option className="form__option-placeholder"> Incandescent</option>
            <option className="form__option-placeholder"> Halogen</option>
            <option className="form__option-placeholder"> LED</option>
          </select>
        </div>
        <div className="quiz__question">
          <label htmlFor="warehouse" className="form__label">
            What type of house?
          </label>
          <select
            className="form__select"
            type="select"
            name="lightbulb"
            id="lightbulb"
          >
            <option className="form__option-placeholder"> 0-10</option>
            <option className="form__option-placeholder"> 11-20</option>
            <option className="form__option-placeholder"> 21-30</option>
          </select>
        </div>
        <div className="quiz__question">
          <label htmlFor="warehouse" className="form__label">
            How many types of lightbulbs do you have?
          </label>
          <select
            className="form__select"
            type="select"
            name="lightbulb"
            id="lightbulb"
          >
            <option className="form__option-placeholder"> 0-10</option>
            <option className="form__option-placeholder"> 11-20</option>
            <option className="form__option-placeholder"> 21-30</option>
          </select>
        </div>
        <div className="quiz__question">
          <label htmlFor="warehouse" className="form__label">
            How often to you take a bath?
          </label>
          <select
            className="form__select"
            type="select"
            name="lightbulb"
            id="lightbulb"
          >
            <option className="form__option-placeholder">0 times a week</option>
            <option className="form__option-placeholder">
              1-2 times a week
            </option>
            <option className="form__option-placeholder">
              3-5 times a week
            </option>
            <option className="form__option-placeholder">
              5-7 times a week
            </option>
          </select>
        </div>
        <div className="quiz__question">
          <label htmlFor="warehouse" className="form__label">
            Do you have roof insulation?
          </label>
          <select
            className="form__select"
            type="select"
            name="lightbulb"
            id="lightbulb"
          >
            <option className="form__option-placeholder">Yes </option>
            <option className="form__option-placeholder">No </option>
          </select>
        </div>{" "}
        <div className="results__buttons">
          <button className="results__btn-left">back</button>
          <Link to="/quiz" className="results__btn-right">
            Next
          </Link>
        </div>
      </form>
    </section>
  );
};
export default Quiz;
