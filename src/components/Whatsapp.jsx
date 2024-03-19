import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} zIndex={10} position={'fixed'} bottom={{md:10, base: 5}} right={{md:10, base: 5}} width={'45px'} h={'45px'} rounded={'full'} bg={'green.600'}>
        <Link to='https://wa.me/+2349074248867'>
            <FaWhatsapp className='text-gray-100 text-2xl'/>
        </Link>
    </Flex>
  )
}
