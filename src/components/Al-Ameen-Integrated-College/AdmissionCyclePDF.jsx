import React from 'react';
import { Button } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function AdmissionCyclePDF() {
    const downloadFile = () => {
        const pdfUrl = '../../../public/Calendar.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Calendar.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }
  return (
    <div className='flex justify-center pb-5'>
        <Button bg={useColorModeValue('purple.900', 'white')} height={'50px'} width={'290px'} color={useColorModeValue('white','black')} _hover={{bg: 'gray.600', color: 'white'}} onClick={downloadFile}>
            Downoad Admissin Cycle PDF
        </Button>
    </div>
  )
}

