import MainHeader from '../components/Al-Ameen-Integrated-College/Main-Page/MainHeader'
import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ProgramDetails from '../components/Al-Ameen-Integrated-College/ProgramDetails';
import AdmissionCycle from '../components/Al-Ameen-Integrated-College/AdmissionCycle';
import Footer2 from '../components/Footer2';
import AdmissionRequirement from '../components/Al-Ameen-Integrated-College/Admission-requirement';

export default function AboutalmeenIntegratededu() {
  return (
    <>
        <div className="h-1 fixed top-0 bg-purple-800 w-full scroll-watcher"></div>
        <MainHeader/>
        <Box mt={{md:'12vh', base: '12vh'}}>
            <Flex justifyContent={'center'} position={'relative'} flexDirection={'column'} alignItems={'center'} className='contact'>
                <Heading color={'white'} fontSize={{md:30, base: 25}} fontWeight={500} textAlign={'center'}>About <br /> Al-Ameen Integrated Education College</Heading>
                <Box color={'white'} mt={5}>
                    <Link to={'/'} className='font-semibold text-1xl underline'>Home</Link>
                    <span> / </span>
                    <Link to={'/contact'} className='font-semibold text-1xl underline'>contact</Link>
                    <span> / </span>
                    <Link to={'/al-ameen-integrated-college-faq'} className='font-semibold text-1xl underline'>FAQ</Link>
                </Box>
            </Flex>
        </Box>
        <ProgramDetails/>
        <AdmissionRequirement/>
        <AdmissionCycle/>
        {/* <FAQ/> */}
        <Box w={{base: '100%', md: '60%'}} mx={'auto'} textAlign={'center'}>
          <Heading fontSize={25} fontWeight={500}>Special Note on Holidays</Heading>
          <Text fontWeight={500} pt={4}>Our holidays are minimal. Not more than 8 weeks max per year built around the Eids and late December. We do short internal breaks and sports time is on our program of activities for mental breaks.</Text>
        </Box>
        <Footer2/> 
    </>
  )
}
