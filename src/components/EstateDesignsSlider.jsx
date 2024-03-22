import React from 'react';
import { Box, Flex, Heading} from '@chakra-ui/react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/img/image1.jpg';
import img2 from '../assets/img/image4.jpg';
import img3 from '../assets/img/image5.jpg';
import img4 from '../assets/img/image6.jpg';
import img5 from '../assets/img/image1.jpg';
import img6 from '../assets/img/image1.jpg';
import img7 from '../assets/img/image12.jpg';
import img8 from '../assets/img/image11.jpg';

function SampleNextArrow(props) {
  
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", 
            
        }}
        onClick={onClick}
      />
    );
  }

export default function EstateDesignsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
        ]
      };
  return (
    <Box maxW={{md: '90%', base: '100%'}} p={2} mx={'auto'} padding={10}>
        <Box mb={6}>
            <Heading textAlign={'center'} fontWeight={500} fontSize={25}>Estate Design</Heading>
        </Box>
        <Slider {...settings}>
            <Box width={'300px'} p={1}>
                <img className='rounded' src={img2} width={'full'} height={'full'} alt="estate design" />
            </Box>
            <Box width={'300px'} p={1}>
                <img className='rounded' src={img1} width={'full'} height={'full'} alt="estate design" />
            </Box>
            <Box width={'300px'} p={1}>
                <img className='rounded' src={img3} width={'full'} height={'full'} alt="estate design" />
            </Box>
            <Box width={'300px'} p={1}>
                <img className='rounded' src={img4} width={'full'} height={'full'} alt="estate design" />
            </Box>
            <Box width={'300px'} p={1}>
                <img className='rounded' src={img7} width={'full'} height={'full'} alt="estate design" />
            </Box>
            <Box width={'300px'} p={1}>
                <img className='rounded' src={img8} width={'full'} height={'full'} alt="estate design" />
            </Box>
            <Box width={'300px'} p={1}>
                <img className='rounded' src={img5} width={'full'} height={'full'} alt="estate design" />
            </Box>
            <Box width={'300px'} p={1}>
                <img className='rounded' src={img6} width={'full'} height={'full'} alt="estate design" />
            </Box>
        </Slider>
    </Box>
  )
}
