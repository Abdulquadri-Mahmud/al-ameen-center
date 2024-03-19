import React from 'react'
import { Box, Image, Flex, Input,FormLabel, Checkbox, Button } from '@chakra-ui/react';
import logo1 from '../../Logo/logo3.jpg';
import { Link } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';
import Themes from '../../../components/Themes';
import Accordions from '../../../components/Accordions';
import Sidebar from '../../../components/Sidebar';

export default function MainHeader() {
  return (
    <div>
        <Box>
            <Flex position={'sticky'} left={0} top={0} zIndex={100} w={'full'}  justifyContent={'space-between'} alignItems={'center'} py={3} px={{base: 2, md: 10}} boxShadow={'md'} bgColor={useColorModeValue('gray.200', 'gray.800')}>
                <Box boxSize={'50px'}>
                    <Link to='/'>
                        <Image src={logo1} alt='logo' maxW={'full'} maxH={'full'} rounded='5px'/>
                    </Link>
                </Box>
                <Box display={{base: 'none', md: 'block'}}>
                    <Flex gap={5} justifyContent={'center'} alignItems={'center'} >
                        <Box>
                            <Link to='/' className='font-semibold'>Home</Link>
                        </Box>
                        <Box>
                            <Accordions/>
                        </Box>
                        <Box pl={4}>
                            <Link to='/testimonial' className='font-semibold'>Testimonial</Link>
                        </Box>
                    </Flex>
                </Box>
                <Box display={{base: 'none', md: 'block'}}>
                    <Themes/>
                </Box>
                <Box display={{base: 'block', md: 'none'}}>
                    <Sidebar />
                </Box>
            </Flex>
        </Box>
    </div>
  )
}
