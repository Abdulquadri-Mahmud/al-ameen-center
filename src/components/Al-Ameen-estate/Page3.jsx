import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import { Box, Flex, } from '@chakra-ui/react';

export default function Page() {
  return (
    <Box>
        <Header/>
        <AboutUs/>
    </Box>
  )
}
