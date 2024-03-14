import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
                        <Flex justifyContent={'center'} alignItems={'center'} boxSize={10} border={'2px'} borderColor={'gray.700'} borderRadius={5} cursor={'pointer'} position={'absolute'} top={10} left={3}>
                            <IoClose className='cursor-pointer font-semibold text-3xl text-gray-700' onClick={closeSideBar}/>
                        </Flex>
                        <Flex flexDirection={'column'} mt={20} gap={5} padding={10}>
                            <Link className='font-semibold text-black' to='/'>Home</Link>
                            <Flex flexDirection={'column'}>
                                <SidebarAccordion/>
                            </Flex>
                            <Link className='font-semibold text-black' to='/contact'>Contact Us</Link>
                            <Link className='font-semibold text-black' to='/ourhouses'>Our Houses</Link>
                            <Link className='font-semibold text-black' to='/estate-design'>Estate Design</Link>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}
