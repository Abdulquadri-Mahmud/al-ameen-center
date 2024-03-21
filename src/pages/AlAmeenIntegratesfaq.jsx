import Header from '../components/Header';
import { Box, Heading, Flex} from '@chakra-ui/react';
import FAQ from '../components/Al-Ameen-Integrated-College/FAQ';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom';
import MainHeader from '../components/Al-Ameen-Integrated-College/Main-Page/MainHeader';

export default function AlAmeenIntegratesfaq() {
  return (
    <Box>
      <div className="h-1 fixed top-0 bg-purple-700 w-full scroll-watcher"></div>
      <MainHeader/>
      <Box mt={{md:'12vh', base: '12vh'}}>
        <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} w={'full'} className='contact'>
            <Heading color={'white'} fontSize={{md:30, base: 25}} fontWeight={500} textAlign={'center'}>Al-Ameen <br /> Integrated Education FAQ</Heading>
            <Box color={'white'} mt={5}>
                <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                <span> / </span>
                <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
            </Box>
        </Flex>
        <Box mt={10}>
          <FAQ/>
        </Box>
      </Box>
      <Footer2/>
    </Box>
  )
}
