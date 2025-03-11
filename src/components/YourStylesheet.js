import React from "react";
import "./YourStylesheet.scss"; // Assuming your CSS file is named YourStylesheet.css

const GallerySection = () => {
  const images = [
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-168.jpg?v=1721423202&width=500",
      alt: "Description for image 168",
      width: "500",
      height: "750",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-50.jpg?v=1721423202&width=500",
      alt: "Description for image 50",
      width: "500",
      height: "750",
    },
    {
      src: "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-164.jpg?v=1721423202&width=500",
      alt: "Description for image 123",
      width: "500",
      height: "750",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-59.jpg?v=1721423202&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-160.jpg?v=1716391349&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
    },
    {
      src: "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-4.jpg?v=1721423203&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
    },
  ];

  return (
    <section className="Section Arches_Display_Section Parallax_Wrapper SectionPadded">
      <div
        className="Arches_Display_Heading Centered Parallax_Front"
        style={{ transform: "translate3d(0px, -43.4207%, 0px)" }}
      >
        <h2
          className="SectionTitle Cool_Text_Anim Lines"
          aria-label="The best things in life are sweet"
        >
          <span className="Line" aria-hidden="true">
            The best things in life
          </span>
          <span className="Line" aria-hidden="true">
            are sweet
          </span>
        </h2>
      </div>
      <div className="Arches_Display_Container">
        <div
          className="Arches_Display_Inner Cool_Anim Fade Multiple"
          style={{ transform: "translate(-13.3429px, 0px)", opacity: 1 }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="Window_Image Instant"
              style={{ opacity: 1 }}
            >
              <div
                className="Window_Image_Limit"
                style={{ height: "100%", width: "100%" }}
              >
                <div className="Window_Image_Container Fluid">
                  <img
                    src={image.src}
                    alt={image.alt}
                    srcSet={`${image.src.split("&width=")[0]}&width=352 352w, ${
                      image.src
                    } 500w`}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
