  import React, { useState } from "react";
  import "./Newsletter.scss";
  import Button from "react-bootstrap/Button";
  import { motion } from "framer-motion";

  function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      // Add logic to handle the subscription, such as an API call.
      console.log("Submitted:", email);
    };

    const slideFromBottomLeft = {
      hidden: {
        opacity: 0,
        x: -50,
        y: 50,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
      },
    };

    return (
      <div className="Newsletter_Container">
        <motion.h2
          className="Cool_Text_Anim"
          aria-label="Get 15% off your first order"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={slideFromBottomLeft}
        >
          Get 15% off your first order
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={slideFromBottomLeft}
        >
          Subscribe to our newsletter and get 15% off your first purchase!
        </motion.p>
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
