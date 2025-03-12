import React, { useState } from "react";
import "../Body/Newsletter.scss";
import Button from "react-bootstrap/Button";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle the subscription, such as an API call.
    console.log("Submitted:", email);
  };

  return (
    <div className="Newsletter_Container">
      <h2
        className="Cool_Text_Anim Lines"
        aria-label="Get 15% off your first order"
      >
        Get 15% off your first order
      </h2>
      <p>Subscribe to our newsletter and get 15% off your first purchase!</p>
      <form
        method="post"
        action="/contact#newsletter_id"
        id="newsletter_id"
        acceptCharset="UTF-8"
        className="Newsletter Form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form_type" value="customer" />
        <input type="hidden" name="utf8" value="✓" />
        <div className="Newsletter__Inner">
          <input type="hidden" name="contact[tags]" value="newsletter" />
          <input
            type="email"
            name="contact[email]"
            className="Form__Input"
            aria-label="Email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="dark" className="btn-join">
            JOIN
          </Button>
        </div>
      </form>
      <div className="Newsletter_Floating_Img Parallax_Back Left">
        <img
          src="//bernicebakery.com/cdn/shop/files/cake_full.svg?v=1714513357"
          alt=""
        />
      </div>
      <div className="Newsletter_Floating_Img Parallax_Front Right">
        <img
          src="//bernicebakery.com/cdn/shop/files/cookie_full.svg?v=1716373865"
          alt=""
        />
      </div>
    </div>
  );
}

export default Newsletter;
