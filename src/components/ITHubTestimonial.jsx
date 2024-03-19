import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Text} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <Box width={'100%'} px={{md:5, base: 0}} py={10} mt={10} bg={useColorModeValue('gray.200', '')}>
        <Box maxW={{md: '70%', base: '100%'}} mx={'auto'}>
            <Box>
                <Heading fontSize={25} textAlign={'center'}>Testimonial From Al-Ameen IT Hub</Heading>
                <Heading pt={5} fontSize={16} textAlign={'center'}>
                    From someone who had absolutely no idea what software development means(always looked like jargons) to someone who fell in love with it. Shukran Ya Rabbi.
                </Heading>
            </Box>
            <Box bg={'white'} p={5} borderRadius={7} mt={4}>
                <Slider {...settings}>
                    <Box color={useColorModeValue('black', 'black')}>
                        <Text fontWeight={500}>
                            Alhamdulillahi robbil alameen, I had a memorable experience in Al-Ameen Institute. From being a newbie and eventually falling in love with software development and meeting amazing people who impacted me intellectually and spiritually. The course started from the basics which are HTML and CSS before advancing to JAVASCRIPT. 
                        </Text>
                        <Text py={2} fontWeight={500}>
                            Accommodation and meals were of the utmost best, students' voices were always  heard and overall conducive environment for learning.  Just like the students always say "Home Away From Home." 
                            I thank the program director(Engr. T. Tawfiq. T. Agbaje), the instructor, the ustadhs, staffs, my colleagues as well as my younger ones. (May Allah count them among the shaded people on the last day).
                        </Text>
                        <Text py={2} fontWeight={500}>
                            I also thank my dad who encouraged me to take this huge step in life. May Allah reserve for him the highest level of Jannah(Aljannah Firdaws) and may Allah SWT make this knowledge beneficial to me and the ummah at large fi Dunyah Wal Akhirah. (Ameen).
                        </Text>
                        <Text py={2} fontWeight={900}>From Mutmainah Adewoye, 400L medical student(2024)</Text>
                    </Box>
                    <Box color={useColorModeValue('black', 'black')}>
                        <Text py={2} fontWeight={500}>
                            Alhamdulillahi robbil alameen, I had a memorable experience in Al-Ameen Institute. From being a newbie and eventually falling in love with software development and meeting amazing people who impacted me intellectually and spiritually. The course started from the basics which are HTML and CSS before advancing to JAVASCRIPT. 
                        </Text>
                        <Text py={2} fontWeight={500}>
                            Accommodation and meals were of the utmost best, students' voices were always  heard and overall conducive environment for learning.  Just like the students always say "Home Away From Home." 
                            I thank the program director(Engr. T. Tawfiq. T. Agbaje), the instructor, the ustadhs, staffs, my colleagues as well as my younger ones. (May Allah count them among the shaded people on the last day).
                        </Text>
                        <Text py={2} fontWeight={500}>
                            I also thank my dad who encouraged me to take this huge step in life. May Allah reserve for him the highest level of Jannah(Aljannah Firdaws) and may Allah SWT make this knowledge beneficial to me and the ummah at large fi Dunyah Wal Akhirah. (Ameen).
                        </Text>
                        <Text fontWeight={900}>From Mutmainah Adewoye, 400L medical student(2024)</Text>
                    </Box>
                </Slider>
            </Box>
        </Box>
    </Box>
  )
}
