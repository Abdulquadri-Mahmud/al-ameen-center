import { Box,Flex, Heading, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import EstateDesigns from '../components/Al-Ameen-estate/EstateDesigns';
import MainHeader from '../components/Al-Ameen-estate/Main-Page/MainHeader';
import Footer3 from '../components/Footer3';

export default function EstateDesign() {
  return (
    <div>
      <div className="h-1 fixed top-0 bg-red-600 w-full scroll-watcher"></div>
      <MainHeader/>
      <Box mt={{md:'12vh', base: '12vh'}}>
        <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
            <Heading color={'white'} fontWeight={500} fontSize={30} textAlign={'center'}>Estate Designs</Heading>
            <Box color={'white'} mt={5}>
                <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                <span> / </span>
                <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
            </Box>
        </Flex>
      </Box>
      <EstateDesigns/>
      <Footer3/>
    </div>
  )
}
