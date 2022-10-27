import "./navbar.scss";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar__container">
        <div className="navbar__section">
          <p className="navbar__logo">Logo</p>
        </div>
        <ul className="navbar__section">
          <li className="navbar__item">Home</li>
          <li className="navbar__item">About</li>
          <li className="navbar__item">Project</li>
          <li className="navbar__item">Service</li>
          <li className="navbar__item">Contact</li>
        </ul>
        <div className="navbar__section">
          <button className="navbar__button">Login</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
