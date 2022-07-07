import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 0// optional, default to 1.
  },
};
const ButtonGroup = ({ next, previous, showButton, goToSlide, ...rest }) => {
  const theme = useTheme();
  const { carouselState: { currentSlide, totalItems } } = rest;
  return (
    <MobileStepper
      variant={totalItems < 5 ? "dots" : 'progress'}	//'dots'| 'progress' | 'text'
      steps={totalItems - 1}
      position="static"
      activeStep={currentSlide}
      nextButton={
        <Button
          size="small"
          onClick={next}
          disabled={currentSlide === totalItems - 2}
        >
          下一個
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={previous} disabled={currentSlide === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          上一個
        </Button>
      }
    />

  );
};

export default function App({ children }) {
  const [showButton, setShowButton] = React.useState(false)
  return (
    <div
      style={{ position: 'relative' }}
      onMouseLeave={() => setShowButton(false)}
      onMouseOver={() => setShowButton(true)}>
      <Carousel
        swipeable
        draggable={false}
        responsive={responsive}
        ssr
        autoPlaySpeed={1000000}
        keyBoardControl
        transitionDuration={0}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup showButton={showButton} />}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {children}
      </Carousel>
    </div>
  )
}
