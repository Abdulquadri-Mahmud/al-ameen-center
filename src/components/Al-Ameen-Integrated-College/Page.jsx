
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
    </Box>
  )
}
