import "../About/About.scss";
function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="Collection-about">
          <h2>ABOUT US</h2>
          <div className="Cool_Anim-about">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
