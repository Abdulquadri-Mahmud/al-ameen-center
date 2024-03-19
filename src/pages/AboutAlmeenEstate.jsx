import { Box,Flex, Heading, Text, } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Footer3 from '../components/Footer3';
import aboutImg from '../components/Al-Ameen-estate/estate-design-img/image12.jpg'; 
import MainHeader from '../components/Al-Ameen-estate/Main-Page/MainHeader';
import OurHouses from '../components/Al-Ameen-estate/OurHouses';

import image1 from '../components/Al-Ameen-estate/estate-design-img/image1.jpg';
import image2 from '../components/Al-Ameen-estate/estate-design-img/image2.jpg';
import image3 from '../components/Al-Ameen-estate/estate-design-img/image3.jpg';
import image11 from '../components/Al-Ameen-estate/estate-design-img/image11.jpg';
import image12 from '../components/Al-Ameen-estate/estate-design-img/image12.jpg';
import image7 from '../components/Al-Ameen-estate/estate-design-img/image7.jpg';


export default function AboutAlmeenEstate() {
  return (
    <>
        <Box>
          <MainHeader/>
        </Box>
        <Box>
            <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
                <Heading color={'white'} fontWeight={500} fontSize={30}>About Al-Ameen Estate</Heading>
                <Box color={'white'} mt={5}>
                    <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                    <span> / </span>
                    <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
                    <span> / </span>
                    <Link to={'/al-ameen-estate-faq'} className='font-semibold text-1xl underline'>FAQ</Link>
                </Box>
            </Flex>
        </Box>
        <Box w={'full'} bg={useColorModeValue('.', 'gray.800')} px={{md:10, base: 5}} py={{md:10, base: 10}}>
            <Flex alignItems={'center'} justifyContent={'space-around'} flexWrap={'wrap'}>
              <Box w={{md:'45%', base: '100%'}}>
                <img src={aboutImg} alt="" className='rounded'/>
              </Box>
              <Box w={{md:'45%', base: '100%'}} pt={{md:0, base: 7}}>
                <Heading fontSize={{md:'2rem', base: 25}} fontWeight={500} textAlign={'start'}>
                  About Al-Ameen Estate
                </Heading>
                <Text pt={4} fontWeight={600} lineHeight={2} textAlign={'start'}>
                  Al-Ameen Estate is a gated Muslim community located along Oluodo Road, Ikorodu, Lagos.  Its perimeter is secured with electrical systems. It is divided into a service area and an accommodation area separated by a concrete fence. It currently houses a Centre for Quran Memorization and Ratibi masjid and playground. Future infrastructural development within the service area includes a mall, a nursery/primary school, an hospital and an amusement park. Houses within the estate are arranged in rows of 4-bedroom semi-detached duplexes.  A huge opportunity for Muslim families that want to live in a serene, safe, secure, serviced Muslim environment
                </Text>
              </Box>
            </Flex>
        </Box>
        <OurHouses/>
        <Box py={10}>
            <Heading fontSize={25} fontWeight={600} textAlign={'center'} pb={8}>
                Estate Design & Pictures
            </Heading>
            <Flex  justifyContent={'center'} px={{base:2, md: 3}} gap={4} flexWrap={'wrap'} rounded={10} maxW={{md:'80%', base: '100%'}} mx={'auto'} py={{md:10, base: 3}} bg={useColorModeValue('gray.200', 'gray.800')}>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={image1} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={image2} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={image3} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={image11} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={image12} alt="house" className='rounded-[10px]'/>
                </Box>
                <Box width={{md:'30%', base: '100%'}}>
                  <img src={image7} alt="house" className='rounded-[10px]'/>
                </Box>
          </Flex>
        </Box>
        <Footer3/>
    </>
  )
}
