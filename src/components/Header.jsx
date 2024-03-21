import { Box, Image, Flex} from '@chakra-ui/react';
import logo1 from '../assets/logo/logo1.png';
import { Link } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import Themes from './Themes';
import Accordions from './Accordions';
import Sidebar from './Sidebar';

export default function Header() {

  return (
    <>
        <Box position={'sticky'} top={0} zIndex={100} w={'full'}>
            <Flex justifyContent={'space-between'} alignItems={'center'} py={3} px={{base: 2, md: 5}} boxShadow={'md'} bgColor={useColorModeValue('gray.200', 'gray.800')}>
                <Box boxSize={'50px'}>
                    <Link href='/'>
                        <Image src={logo1} alt='logo' maxW={'full'} maxH={'full'} rounded='5px'/>
                    </Link>
                </Box>
                <Box display={{base: 'none', md: 'block'}}>
                    <Flex gap={5} justifyContent={'center'} alignItems={'center'} >
                        <Box pl={4}>
                            <Link href='/' fontSize={16} fontWeight={600}>Home</Link>
                        </Box>
                        <Box>
                            <Accordions/>
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
    </>
  )
}
