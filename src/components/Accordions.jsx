import { Link } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function Accordions() {
  return (
    <>
        <Flex justifyContent={'center'} gap={{xl:10, md: 7}}>
            <Box className="accordion">
                <input type="checkbox" id="dropdown1" className='cursor-pointer hidden'/>
                <label htmlFor="dropdown1" className="cursor-pointer relative font-semibold">About Us</label>
                <Box className="content z-10 flex flex-col gap-3 absolute left-[50%] top-[50%] translate-x-[-60%] mt-10 h-[0px] md:w-[300px] w-[100%] shadow-md overflow-y-scroll duration-200" bgColor={useColorModeValue('gray.200', 'gray.800')}>
                    <Flex flexDirection={'column'} gap={6} color={useColorModeValue('gray.800', 'white')} pt={16} px={5}>
                        <Link className='font-semibold text-center underline hover:text-green-600 duration-200' to='/about-al-ameen-quran-memo' >Al-Ameen Center For <br /> Quran Memorisation (ACQM)</Link>
                        <Link className='font-semibold text-center underline hover:text-green-600 duration-200' to='/about-al-ameen-integrated-edu' >Al-Ameen Integrated Education College</Link>
                        <Link className='font-semibold text-center underline hover:text-green-600 duration-200' to='/about-al-ameen-estate' >Al-Ameen Estate</Link>
                    </Flex>
                </Box>
            </Box>
            <Box>
                <Link className='font-semibold ' to='/contact'>Contact Us</Link>
            </Box>
            <Box className="accordion">
                <input type="checkbox" id="dropdown2" className='cursor-pointer hidden'/>
                <label htmlFor="dropdown2" className="cursor-pointer relative font-semibold">FAQ</label>
                <Box className="content z-10 flex flex-col gap-3 absolute left-[50%] top-[50%] translate-x-[-60%] mt-10 h-[0px] md:w-[300px] w-[100%] shadow-md overflow-y-scroll duration-200" bgColor={useColorModeValue('gray.200', 'gray.800')}>
                    <Flex flexDirection={'column'} gap={6} color={useColorModeValue('gray.800', 'white')} pt={16} px={5}>
                        <Link className='font-semibold text-center underline hover:text-green-600 duration-200' to='/al-ameen-integrated-college-faq'>Al-Ameen Integrated Education College</Link>
                        <Link className='font-semibold text-center underline hover:text-green-600 duration-200' to='/al-ameen-estate-faq'>Al-Ameen Estate</Link>
                    </Flex>
                </Box>
            </Box>
            <Box className="accordion">
                <input type="checkbox" id="dropdown3" className='cursor-pointer hidden'/>
                <label htmlFor="dropdown3" className="cursor-pointer relative font-semibold">Pages</label>
                <Box className="content z-10 flex flex-col gap-3 absolute left-[50%] top-[50%] translate-x-[-60%] mt-10 h-[0px] md:w-[300px] w-[100%] shadow-md overflow-y-scroll duration-200" bgColor={useColorModeValue('gray.200', 'gray.800')}>
                    <Flex flexDirection={'column'} gap={6} color={useColorModeValue('gray.800', 'white')} pt={16} px={5}>
                        <Link className='font-semibold text-center underline hover:text-green-600 duration-200' to='/ourhouses'>Our Houses</Link>
                        <Link className='font-semibold text-center underline hover:text-green-600 duration-200' to='/estate-design'>Estate Design</Link>
                        <Link className='font-semibold text-center underline hover:text-green-600 duration-200' to='/testimonial'>Testimonial</Link>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </>
  )
}
