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
      const isMobile = window.innerWidth <= 768;
      const baseScroll = isMobile ? 525 : 390;
      const rawScroll =
        (scrollY / (documentHeight - windowHeight)) * baseScroll;

      const maxScroll = isMobile ? 520 : 244;
      const scrollPercent = Math.max(0, Math.min(rawScroll, maxScroll));

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
            className="h2-about"
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
        <div className="Timeline_Content-2">
          <div className="about-2">
            <h2>The birth of Bernice Bakery</h2>
            <div className="Timeline-Image-2">
              <img
                src="https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-6.jpg?v=1716391225&width=700"
                alt="Detailed description of the image"
                className="Parallax_Image_2"
                style={{
                  transform: "translate3d(0px, -10.2579%, 0px) scale(1.2, 1.2)",
                }}
              />
            </div>
          </div>
          <div className="about-p2">
            <p className="p-p2">
              Honing his vast culinary experience, and channeling into a
              catering company for many years, allowed Jami to gather the
              strength to open up a location where more people could come and
              discover his delectable creations. The idea had been bouncing
              around for a long while and with the help of his architect
              partner, Carlos, a space was found in a cozy corner of Saint
              Henri. The idea behind the space was meant to evoke the feeling of
              walking into a familiar kitchen pantry where your mom or
              grandmother would be baking away for loved ones.
            </p>
            <p className="p-p2">
              The early 2020 opening was postponed due to construction delays,
              and then postponed yet again due to a little pandemic…..
              nevertheless, the doors were opened in August of that year. Right
              from the start, the bakery provided a counter full of goodies to
              be picked up and taken away. Eventually, once it was permissible,
              the space became filled with lots of “workers-from-home”, new moms
              and dads, neighbourhood locals as well as out-of-towners.
            </p>
          </div>
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
          <h2>The gift that keeps on giving</h2>
          <p>
            Ever since the doors opened, countless cakes and cookies have been
            enjoyed and delighted over. As the days and years have passed, the
            counter offerings have changed, and evolved, depending on the
            availability of ingredients, the wants and desires of the customers
            and the constantly innovative recipes that Jami and the team put
            forth.
          </p>
          <p>
            Jami believes food should both comfort and nourish the soul. His
            goal is that through his baking, he is able to provide the same
            feelings to others. That part was taught to him by his late
            grandmother. It was not only through her baking skills but through
            all her doings that she exuded love.
          </p>
          <p>
            It is in honour of her beautiful spirit, Bernice bakery bears her
            name. We hope that every person who walks through these doors leaves
            a bit sweeter and with a bit more love.
          </p>
        </div>
        <div className="Timeline-Image">
          <img
            src="https://bernicebakery.com/cdn/shop/files/bernicefrontcounter.jpg?v=1712175696&width=1440"
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
        ></div>

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
