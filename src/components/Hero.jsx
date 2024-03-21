import { Box, Text, Stack, Flex, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/img/home.jpg';
import hero2 from '../assets/img/image12.jpg';
import hero3 from '../assets/img/image9.jpg';
import hero4 from '../assets/img/hero.jpg';
import hero5 from '../assets/img/homeimg.jpg';
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

export default function Hero() {
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <Box h={{md:'90vh', base: '100vh'}} w={'full'} mt={{md:'12vh', base: 18}}>
        <Slider {...settings} className=''>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero1})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                    <Stack flexDirection={'column'} w={{base:'full', md: '50%'}}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} lineHeight={1.5} >Welcome <br /> To Al-Ameen Center</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={500}>Al-Ameen Centre is your best in class integrated Islamic Centre cultured to 
                          nurture the development of Muslim minds, within a fun-filled but controlled Islamic environment,
                          amongst the young, the no so young and the not too old to want to live in a Muslim environment.... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>
                              <Link to='/about-al-ameen-quran-memo'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero5})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                    <Stack flexDirection={'column'} w={{base:'full', md: '50%'}}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} lineHeight={1.5} >Welcome <br /> To Al-Ameen Center</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={500}>Al-Ameen Centre is your best in class integrated Islamic Centre cultured to 
                          nurture the development of Muslim minds, within a fun-filled but controlled Islamic environment,
                          amongst the young, the no so young and the not too old to want to live in a Muslim environment.... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>
                              <Link to='/about-al-ameen-quran-memo'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero2})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                    <Stack flexDirection={'column'} w={{base:'full', md: '50%'}}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} lineHeight={1.5} >Welcome <br /> To Al-Ameen Center</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={500}>Al-Ameen Centre is your best in class integrated Islamic Centre cultured to 
                          nurture the development of Muslim minds, within a fun-filled but controlled Islamic environment,
                          amongst the young, the no so young and the not too old to want to live in a Muslim environment.... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>
                              <Link to='/about-al-ameen-quran-memo'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero3})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                    <Stack flexDirection={'column'} w={{base:'full', md: '50%'}}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} lineHeight={1.5} >Welcome <br /> To Al-Ameen Center</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={500}>Al-Ameen Centre is your best in class integrated Islamic Centre cultured to 
                          nurture the development of Muslim minds, within a fun-filled but controlled Islamic environment,
                          amongst the young, the no so young and the not too old to want to live in a Muslim environment.... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>
                              <Link to='/about-al-ameen-quran-memo'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${hero4})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 5, md:32}} zIndex={20} >
                    <Stack flexDirection={'column'} w={{base:'full', md: '50%'}}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} lineHeight={1.5} >Welcome <br /> To Al-Ameen Center</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:17, base: 16}} pt={{md:6, base: 3}} fontWeight={500}>Al-Ameen Centre is your best in class integrated Islamic Centre cultured to 
                          nurture the development of Muslim minds, within a fun-filled but controlled Islamic environment,
                          amongst the young, the no so young and the not too old to want to live in a Muslim environment.... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>
                              <Link to='/about-al-ameen-quran-memo'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
        </Slider>
    </Box>
  )
}
