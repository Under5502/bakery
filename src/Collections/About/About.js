/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import "../About/About.scss";
import { motion } from "framer-motion";

function About() {
  const [scroll, setScroll] = useState(0);
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const rawScroll = (scrollY / (documentHeight - windowHeight)) * 320;
      const scrollPercent = Math.max(0, Math.min(rawScroll, 204));

      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const events = [
    {
      id: "event_KwADYX",
      image: "VANILLE_804bc794-6c20-4a6a-b5a1-c267603a85c5.svg",
      width: 40,
      height: 19,
    },
    {
      id: "event_y4D64K",
      image: "VACHE_5a7f30f0-346c-473e-b770-8017e022e2b1.svg",
      width: 40,
      height: 25,
    },
    {
      id: "event_6c77pR",
      image: "cookie_b8046837-de86-4692-bac5-2ebe2b627f60.svg",
      width: 40,
      height: 22,
    },
  ];

  return (
    <div className="about-container">
      <div className="about">
        <div className="Collection-about">
          <h2
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
          >
            ABOUT US
          </h2>
          <motion.div
            className="Cool_Anim-about"
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
          >
            <p>
              <span>
                We are a cozy and charming local bakehouse in the Saint Henri
                neighborhood of Montreal. Best known for our cookies and
                birthday cake! Additionally, we feature an array of freshly
                baked pastries and cakes that showcase both traditional recipes,
                like our grandmother used to bake, and more current and
                innovative flavors.
              </span>
            </p>
            <p>
              <span
                aria-label=""
                className="c-mrkdwn__br"
                data-stringify-type="paragraph-break"
              ></span>
              <span>
                Our customers are drawn to our warm atmosphere, friendly staff,
                third wave coffee, and the delightful aroma of baked goods that
                fills the air. With our focus on quality ingredients and
                attention to detail, Bernice Bakery has become a beloved spot
                for both locals and visitors seeking a taste of homemade
                goodness
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* ////////////// */}

      {/* /////////// */}

      <motion.div
        className="Timeline-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={fadeInUp}
      >
        <div className="Timeline_Content">
          <h2>A passion for baking</h2>
          <p>
            Jami’s love for baking came from a combination of his father owning
            a bakery called Pegroids in the early 80’s, and the love his
            grandmother Bernice had for cooking, baking, and hospitality.
          </p>
          <p>
            One of Jami’s fondest memories as a child was going up to the second
            floor of his father’s bake shop (the pastry department) where he got
            to play with all the different piping bags. He claims to still
            remember the smell and taste of the confectioner sugar mixed with
            vanilla and butter.
          </p>
          <p>
            It was only later, in his teenage years, that he began to explore
            the art of baking. Jami believes baking was a tool and outlet to
            express his true self in an artistic way. Later in his early
            twenties, he decided to pursue a career in culinary arts and pastry
            arts in New York City. Having his culinary education, and his innate
            talent, has allowed him to work in various restaurants both in
            Manhattan and Montréal.
          </p>
        </div>
        <div className="Timeline-Image">
          <img
            src="//bernicebakery.com/cdn/shop/files/E6C8ACD2-2F67-4B56-9765-9B0AA5F638DC_1.jpg?v=1729211080&width=1440"
            alt="Detailed description of the image"
            width="344"
            height="293"
            className="Parallax_Image"
            style={{
              transform: "translate3d(0px, -10.2579%, 0px) scale(1.2, 1.2)",
            }}
          />
        </div>
      </motion.div>

      {/* .///////////////// */}

      <motion.div
        className="Timeline-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={fadeInUp}
      >
        <div className="Timeline_Content">
          <h2>A passion for baking</h2>
          <p>
            Jami’s love for baking came from a combination of his father owning
            a bakery called Pegroids in the early 80’s, and the love his
            grandmother Bernice had for cooking, baking, and hospitality.
          </p>
          <p>
            One of Jami’s fondest memories as a child was going up to the second
            floor of his father’s bake shop (the pastry department) where he got
            to play with all the different piping bags. He claims to still
            remember the smell and taste of the confectioner sugar mixed with
            vanilla and butter.
          </p>
          <p>
            It was only later, in his teenage years, that he began to explore
            the art of baking. Jami believes baking was a tool and outlet to
            express his true self in an artistic way. Later in his early
            twenties, he decided to pursue a career in culinary arts and pastry
            arts in New York City. Having his culinary education, and his innate
            talent, has allowed him to work in various restaurants both in
            Manhattan and Montréal.
          </p>
        </div>
        <div className="Timeline-Image">
          <img
            src="//bernicebakery.com/cdn/shop/files/E6C8ACD2-2F67-4B56-9765-9B0AA5F638DC_1.jpg?v=1729211080&width=1440"
            alt="Detailed description of the image"
            width="344"
            height="293"
            className="Parallax_Image"
            style={{
              transform: "translate3d(0px, -10.2579%, 0px) scale(1.2, 1.2)",
            }}
          />
        </div>
      </motion.div>
      {/*  */}
      <motion.div
        className="Timeline-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={fadeInUp}
      >
        <div className="Timeline_Content">
          <h2>A passion for baking</h2>
          <p>
            Jami’s love for baking came from a combination of his father owning
            a bakery called Pegroids in the early 80’s, and the love his
            grandmother Bernice had for cooking, baking, and hospitality.
          </p>
          <p>
            One of Jami’s fondest memories as a child was going up to the second
            floor of his father’s bake shop (the pastry department) where he got
            to play with all the different piping bags. He claims to still
            remember the smell and taste of the confectioner sugar mixed with
            vanilla and butter.
          </p>
          <p>
            It was only later, in his teenage years, that he began to explore
            the art of baking. Jami believes baking was a tool and outlet to
            express his true self in an artistic way. Later in his early
            twenties, he decided to pursue a career in culinary arts and pastry
            arts in New York City. Having his culinary education, and his innate
            talent, has allowed him to work in various restaurants both in
            Manhattan and Montréal.
          </p>
        </div>
        <div className="Timeline-Image">
          <img
            src="//bernicebakery.com/cdn/shop/files/E6C8ACD2-2F67-4B56-9765-9B0AA5F638DC_1.jpg?v=1729211080&width=1440"
            alt="Detailed description of the image"
            width="344"
            height="293"
            className="Parallax_Image"
            style={{
              transform: "translate3d(0px, -10.2579%, 0px) scale(1.2, 1.2)",
            }}
          />
        </div>
      </motion.div>

      {/* Scroll  */}

      <div className="scrollable-timeline">
        <div
          className="Timeline_Line Cool_Anim Fade"
          style={{ transform: "translate(-50%, 0%)", opacity: 1 }}
        >
          <div className="Timeline_Inner" style={{ height: "5.1713%" }}></div>
          {events.map((event) => (
            <a key={event.id} href={`#${event.id}`} className="Timeline_Anchor">
              <div className="Contain_Fluid">
                <img
                  className="img-timeline"
                  src={`//bernicebakery.com/cdn/shop/files/${event.image}?v=1738794346&width=100`}
                  alt=""
                  srcSet={`//bernicebakery.com/cdn/shop/files/${event.image}?v=1738794346&width=40 40w`}
                  width={event.width}
                  height={event.height}
                />
              </div>
            </a>
          ))}
        </div>

        {/* /////////////////// */}

        <div
          className="Timeline_Line-2 Cool_Anim Fade"
          style={{ height: `${scroll}%` }}
        >
          <div className="Timeline_Inner"></div>
          {events.map((event) => (
            <a key={event.id} href={`#${event.id}`} className="Timeline_Anchor">
              <div className="Contain_Fluid"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
