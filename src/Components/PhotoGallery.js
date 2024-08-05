/**
 * Renders a photo gallery.
 * @component
 */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";
import Image1 from "../Assets/Assembly.png";
import Image2 from "../Assets/Receptiondesk.png";
import Image3 from "../Assets/Landscape.png";
import Image4 from "../Assets/Landscape2.png";
import Image5 from "../Assets/Swingassembly.png";
import Image6 from "../Assets/Chestdrawer.png";
import Image7 from "../Assets/Dishwasher.png";
import Image8 from "../Assets/Letterbox.png";
import Image9 from "../Assets/Gazebo.png";
import Image10 from "../Assets/Officechairs.png";
import Image11 from "../Assets/Gardenbed.png";

/**
 * Custom arrow component for the next button in the slider.
 * @param {Object} props - Arrow component props
 * @returns {JSX.Element} Next arrow component
 */

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#81dd0b",
        marginLeft: 10,
      }}
      onClick={onClick}
    />
  );
}
/**
 * Custom arrow component for the previous button in the slider.
 * @param {Object} props - Arrow component props
 * @returns {JSX.Element} Previous arrow component
 */

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#81dd0b",
        marginRight: 10,
      }}
      onClick={onClick}
    />
  );
}

/**
 * Component for displaying a photo gallery using a slider.
 * @returns {JSX.Element} PhotoGallery component JSX
 */
export default function PhotoGallery() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <div>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" sx={{ pt: 2 }}>
              {" "}
              Projects Gallery
            </Typography>
          </Box>
        </div>
      </Box>
{/* Container for the slider */}
      <Container maxWidth="xxl" sx={{ bgcolor: "white" }}>
        <Container maxWidth="xl">
          <div className="slider-container">
            <Slider {...settings} className="custom-slider">
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image1}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image2}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image3}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image4}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image5}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image6}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image7}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image8}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image9}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image10}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="slide-content">
                <div className="image-wrapper">
                  <img
                    src={Image11}
                    alt="wall mounting"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </Container>
    </>
  );
}
