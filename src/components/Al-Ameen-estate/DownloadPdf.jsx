import React from 'react'

export default function DownloadPdf() {
    const downloadFile = () => {
        const pdfUrl = '../../../public/FAQAlAmeenEstate.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'FAQ-Al-Ameen-Estate.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }
  return (
    <div className='flex justify-center pt-10'>
      <button className='bg-black text-white font-semibold rounded w-[200px] p-3' onClick={downloadFile}>
        Downoad FAQ PDF
      </button>
    </div>
  )
}
