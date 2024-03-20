import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';
import Themes from './Themes';
import SidebarAccordion from './SidebarAccordion';

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const showSideBar = () => setOpen(true);
    const closeSideBar = () => setOpen(false);
  return (
    <Box>
        <Flex position={'sticky'} top={0} zIndex={100} w={'full'}  justifyContent={'space-between'} alignItems={'center'} py={0} px={{base: 0, md: 10}} bgColor={useColorModeValue('gray.200', 'gray.800')}>
            <Box>
                <Flex gap={3} mr={2}>
                    <Themes/>
                    <IoMdMenu fontSize={'2.5rem'} cursor={'pointer'} onClick={showSideBar}/>
                </Flex>
                <Box>
                    <Box className={`${open ? 'w-72 duration-200' : 'w-0 duration-200'}`} position={'fixed'} top={0} right={0} overflow={'hidden'} bg={'white'} height={'full'}>
                        <Flex justifyContent={'start'} alignItems={'center'} mt={8} ml={3}>
                            <Flex justifyContent={'center'} alignItems={'center'} mr={4} boxSize={10} border={'2px'} rounded={5} borderColor={'gray.700'} p={2}>
                                <IoClose className='cursor-pointer font-semibold text-3xl text-gray-700' onClick={closeSideBar}/>
                            </Flex>
                            <Box>
                                <Text fontWeight={600} fontSize={20}>Al-Ameen IT Hub</Text>
                            </Box>
                        </Flex>
                        <Flex flexDirection={'column'} mt={16} gap={5} padding={10}>
                            <Link className='font-medium text-black' to='/'>Home</Link>
                            <Flex flexDirection={'column'}>
                                <SidebarAccordion/>
                            </Flex>
                            <Link className='font-medium text-black' to='/contact'>Contact Us</Link>
                            <Link to='/testimonial' className='font-medium text-black'>Testimonial</Link>
                            <Link className='font-medium text-black' to='/ourhouses'>Our Houses</Link>
                            <Link className='font-medium text-black' to='/estate-design'>Estate Design</Link>
                        </Flex>
                        <Box>
                            <Text textAlign={'center'} fontWeight={500} fontSize={17} animation={'ease'}>Upcoming Event (A'level School)</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}
