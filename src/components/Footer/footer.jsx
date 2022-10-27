import "./footer.scss";

const footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__logo">Logo Ipsum</div>
          <div className="footer__description">
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Integer
            gravida vitae ultrices urna et porttitor malesuada.
          </div>
        </div>
        <div className="footer__wrapper">
          <div className="footer__column-header">Get in touch</div>
          <div className="footer__address">
            <div className="footer__icon">Icon</div>
            <div className="footer__address-text">
              123 Rivington Street, London
            </div>
          </div>
          <div className="footer__email">
            <div className="footer__icon">Icon</div>
            <div className="footer__address-text">hello@teamclimate.com</div>
          </div>
          <div className="footer__phone">
            <div className="footer__icon">Icon</div>
            <div className="footer__address-text">+44 0207705123</div>
          </div>
        </div>
        <div className="footer__wrapper">
          <div className="footer__column-header">Recent Post</div>
          <div className="footer__blog-post">
            <div className="footer__icon">Icon</div>
            <div className="footer__address-text">
              The EU needs to hold the financial sector in global deforestation
            </div>
          </div>
          <div className="footer__blog-post">
            <div className="footer__icon">Icon</div>
            <div className="footer__address-text">
              The EU needs to hold the financial sector in global deforestation
            </div>
          </div>
        </div>
        <div className="footer__wrapper">
          <div className="footer__column-header">Join a Newsletter</div>
          <div className="footer__email-form">
            <label className="footer__input-label" htmlFor="">
              Your Email
            </label>
            <input
              className="footer__input"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="footer__button">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
