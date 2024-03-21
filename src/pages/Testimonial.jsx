import MainHeader from "../components/AlAlmeenQuranMemo/MainHeader";
import { Box,Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ITHubTestimonial from "../components/ITHubTestimonial";

export default function Testimonial() {
  return (
    <>
      <div className="h-1 fixed top-0 bg-green-600 w-full scroll-watcher"></div>
      <MainHeader/>
        <Box mt={{md:'12vh', base: '12vh'}}>
            <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
                <Heading color={'white'} fontWeight={500} fontSize={30} textAlign={'center'}>Our Testimonials</Heading>
                <Box color={'white'} mt={5}>
                    <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                    <span> / </span>
                    <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
                </Box>
            </Flex>
        </Box> 
        <Box>
          <ITHubTestimonial/>
        </Box>
        <Footer/>
    </>
  )
}
