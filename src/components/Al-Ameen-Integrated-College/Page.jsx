
import { Box,Flex, } from '@chakra-ui/react';
import Header from './Header';
import ProgramDetails from './ProgramDetails';
import { Link } from 'react-router-dom';
import { FaLongArrowAltDown } from "react-icons/fa";
import AdmissionRequirement from './Admission-requirement';


export default function Page() {
  return (
    <Box py={{md:10, base: 5}}>
        <Header/>
        <ProgramDetails/>
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3}>
          <FaLongArrowAltDown className='text-purple-700 text-2xl animate-bounce'/>
          <Link to='/about-al-ameen-integrated-edu' className='text-purple-700 text-center font-semibold text-1xl underline'>More About Al-Ameen Integrated Education</Link>
        </Flex>
    </Box>
  )
}
