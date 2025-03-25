import React, { useState, useEffect, useRef } from "react";
import "./CollectionsCTASection.scss";

const CollectionsCTASection = () => {
  const [scrollY, setScrollY] = useState(0); // state to track scroll position
  const textRef = useRef(null); // ref to access the textPath element

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setScrollY(window.scrollY); // update scrollY when the page is scrolled
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate startOffset based on scrollY
  const startOffset = (scrollY % 1000) * 0.1; // adjust the multiplier for speed of change

  useEffect(() => {
    if (textRef.current) {
      // Set the startOffset dynamically
      textRef.current.setAttribute("startOffset", `${0 + startOffset}%`);
    }
  }, [scrollY]); // Only re-run when scrollY changes

  return (
    <section className="collections-cta-section">
      <div className="text-container">
        <svg
          width="700"
          height="900"
          viewBox="0 0 600 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="arcPath"
              d="M50,250 A250,250 0 0,1 550,350"
              fill="transparent"
            />
          </defs>

          <text fontSize="70" fontFamily="Arial" fontWeight="bold" fill="black">
            <textPath
              ref={textRef}
              href="#arcPath"
              startOffset="10%"
              textAnchor="middle"
            >
              CELEBRATE WITH CAKE
            </textPath>
          </text>
        </svg>
      </div>

      <div className="image-container">
        <img
          src="https://bernicebakery.com/cdn/shop/files/Bernice-6.jpg?v=1727835563&width=500"
          alt="Cake"
          className="cake-image"
        />
        <div className="order-button">
          <a href="/collections/cakes" className="a-a-a">
            ORDER
          </a>
        </div>
      </div>

      <div className="description">
        <p className="cl-p">
          Ordering a cake at Bernice Bakery is a seamless and personalized
          experience. Customers can either visit the bakery in person, over the
          phone, or more conveniently, place an order online.
        </p>
        <p className="cl-p">
          The process begins with selecting from our seasonal variety of cake
          flavors and then choosing your selected day and time for pickup. Keep
          in mind that our cakes are baked to order, and we require at least
          24-hour advance notice. Our cake will most certainly be the delicious
          ending to any of your celebrations!
        </p>
      </div>
    </section>
  );
};

export default CollectionsCTASection;
