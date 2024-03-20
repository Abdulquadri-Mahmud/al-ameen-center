import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import { Box, Flex, } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { FaLongArrowAltDown } from 'react-icons/fa'

export default function Page() {
  return (
    <Box>
        <Header/>
        <AboutUs/>
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3}>
          <FaLongArrowAltDown className='text-red-600 text-2xl animate-bounce'/>
          <Link to={'/about-al-ameen-estate'} className='text-center font-semibold text-1xl underline text-red-600'>More About Al-Ameen Estate</Link>
        </Flex>
    </Box>
  )
}
