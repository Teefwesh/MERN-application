import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="express"
            src="https://res.cloudinary.com/presh9/image/upload/v1652519113/favicon_gc0q2d.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="Card"
            src="https://res.cloudinary.com/presh9/image/upload/v1652519113/logo_jdneo3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
