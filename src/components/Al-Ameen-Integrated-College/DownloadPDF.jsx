import React from 'react';
import { Button } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function DownloadPdf() {
    const downloadFile = () => {
        const pdfUrl = '../../../public/FAQ-Al-Ameen-Integrated-Education-College.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'FAQ-Al-Ameen-Integrated-Education-College.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }
  return (
    <div className='flex justify-center pt-10'>
        <Button bg={useColorModeValue('black', 'white')} height={'50px'} width={'200px'} color={useColorModeValue('white','black')} _hover={{bg: 'purple.600', color: 'white'}} onClick={downloadFile}>
            Downoad FAQ PDF
        </Button>
    </div>
  )
}
