import { Box, Button,Heading, Text} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Collapse } from '@chakra-ui/react';

import { useState } from 'react';

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

export default function ITHubTestimonial() {

    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    
  return (
    <Box width={'100%'} px={{md:5, base: 3}} py={10} mt={10} bg={useColorModeValue('white', '')}>
        <Box maxW={{md: '70%', base: '100%'}} mx={'auto'}>
            <Box>
                <Heading fontSize={25} fontWeight={500} textAlign={'center'}>Testimonial From Al-Ameen IT Hub</Heading>
                <Heading pt={5} fontSize={16} textAlign={'center'} fontWeight={500}>
                    From someone who had absolutely no idea what software development means(always looked like jargons) to someone who fell in love with it. Shukran Ya Rabbi.
                </Heading>
            </Box>
            <Box bg={'white'} p={1} borderRadius={7} mt={4}>
                <Slider {...settings} className='p-2'>
                  <Box color={useColorModeValue('black', 'black')}>
                    <Text py={2} fontWeight={500}>
                        Alhamdulillahi robbil alameen, I had a memorable experience in Al-Ameen Institute. 
                        From being a newbie and eventually falling in love with software development and 
                        meeting amazing people who impacted me intellectually and spiritually. 
                        The course started from the basics which are HTML and CSS before advancing to JAVASCRIPT. 
                    </Text>
                    <Collapse in={show} startingHeight={0}>
                      <Text py={2} fontWeight={500}>
                          Accommodation and meals were of the utmost best, students' voices were always 
                          heard and overall conducive environment for learning.  Just like the students 
                          always say "Home Away From Home." 
                          I thank the program director(Engr. T. Tawfiq. T. Agbaje), 
                          the instructor, the ustadhs, staffs, my colleagues as well as my younger ones. 
                          (May Allah count them among the shaded people on the last day).
                      </Text>
                      <Text py={2} fontWeight={500}>
                          I also thank my dad who encouraged me to take this huge step in life.
                          May Allah reserve for him the highest level of Jannah(Aljannah Firdaws) 
                          and may Allah SWT make this knowledge beneficial to me and the ummah at
                          large fi Dunyah Wal Akhirah. (Ameen).
                      </Text>
                      <Text fontWeight={900}>From Mutmainah Adewoye, 400L medical student(2024)</Text>
                    </Collapse>
                    <button className='font-medium border-none outline-none hover:bg;green-600' onClick={handleToggle}>
                      Show { show ? 'Less' : 'More'}
                    </button>
                  </Box>
                  <Box color={useColorModeValue('black', 'black')}>
                    <Text py={2} fontWeight={500}>
                        Alhamdulillahi robbil alameen, I had a memorable experience in Al-Ameen Institute. 
                        From being a newbie and eventually falling in love with software development and 
                        meeting amazing people who impacted me intellectually and spiritually. 
                        The course started from the basics which are HTML and CSS before advancing to JAVASCRIPT. 
                    </Text>
                    <Collapse in={show} startingHeight={0}>
                      <Text py={2} fontWeight={500}>
                          Accommodation and meals were of the utmost best, students' voices were always 
                          heard and overall conducive environment for learning.  Just like the students 
                          always say "Home Away From Home." 
                          I thank the program director(Engr. T. Tawfiq. T. Agbaje), 
                          the instructor, the ustadhs, staffs, my colleagues as well as my younger ones. 
                          (May Allah count them among the shaded people on the last day).
                      </Text>
                      <Text py={2} fontWeight={500}>
                          I also thank my dad who encouraged me to take this huge step in life. May Allah reserve for him the highest level of Jannah(Aljannah Firdaws) and may Allah SWT make this knowledge beneficial to me and the ummah at large fi Dunyah Wal Akhirah. (Ameen).
                      </Text>
                      <Text fontWeight={900}>From Mutmainah Adewoye, 400L medical student(2024)</Text>
                    </Collapse>
                    <button className='font-medium border-none outline-none hover:bg;green-600' onClick={handleToggle}>
                      Show { show ? 'Less' : 'More'}
                    </button>
                  </Box>
                </Slider>
            </Box>
        </Box>
    </Box>
  )
}
