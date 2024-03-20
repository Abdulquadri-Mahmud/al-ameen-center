import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SidebarAccordion() {
  return (
    <Flex flexDirection={'column'} gap={5}>
        <Box className="accordion">
            <input type="checkbox" id="sideDropdown1" className='cursor-pointer hidden'/>
            <label htmlFor="sideDropdown1" className="cursor-pointer relative font-medium text-black">About Us</label>
            <Box className="sidebarContent flex flex-col gap-3 absolute left-4 h-[0px] w-[90%] overflow-hidden shadow-md duration-200 z-10" 
              bgColor={useColorModeValue('green.600', 'gray.800')}>
                <Flex flexDirection={'column'} gap={6} pt={6} px={5}>
                    <Link to='/about-al-ameen-estate' className='font-medium text-white pt-4 hover:text-green underline'>Al-Ameen Estate</Link>
                    <Link to='/about-al-ameen-quran-memo' className='font-medium text-white pt-4 hover:text-green underline'>Al-Ameen Center For <br /> Quran Memorisation (ACQM)</Link>
                    <Link to='/about-al-ameen-integrated-edu' className='font-medium text-white pt-4 hover:text-green underline'>Al-Ameen Integrated Education College</Link>
                </Flex>
            </Box>
        </Box>
        <Box className="accordion">
            <input type="checkbox" id="sideDropdown2" className='cursor-pointer hidden'/>
            <label htmlFor="sideDropdown2" className="cursor-pointer relative font-medium text-black">FAQ</label>
            <Box className="sidebarContent flex flex-col gap-3 absolute left-4 h-[0px] w-[90%] overflow-hidden shadow-md duration-200 z-10" 
              bgColor={useColorModeValue('green.600', 'gray.800')}>
                <Flex flexDirection={'column'} gap={6} pt={6} px={5}>
                    <Link to='/al-ameen-estate-faq' className='font-medium text-white pt-4 hover:text-green underline'>Al-Ameen Estate FAQ</Link>
                    <Link to='/al-ameen-integrated-college-faq' className='font-medium text-white pt-4 hover:text-green underline'>Al-Ameen Integrated Education College FAQ</Link>
                </Flex>
            </Box>
        </Box>
    </Flex>
  )
}
