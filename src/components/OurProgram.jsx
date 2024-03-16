import { Box, Heading, Text, } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export default function OurProgram() {

  return (
    <>
        <Box my={{base:10, md: 10}} p={3} width={{base: '100%', md:'70%'}} mx={'auto'}>
            <Heading fontSize={25} textAlign={'center'} pb={7}>Our Progams</Heading>
            <Accordion allowMultiple>
                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                            Our flagship program 
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel p={5} fontWeight={600} lineHeight={2}>
                    Our flagship program is a full-time boarding program which should last at least 1 year subject to the learning rate of each individual learner and the basics that has been learnt before admission into ACQM. As a minimum, a learner should prepare for one year. 
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                            Weekend Program
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                    We run a weekend only program for learners who have not yet decided to commit to the full-time program. Resumption is immediately after Asr on Fridays and departure is after Asr on Sundays. 
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                            Holiday Program
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                        We run short Full Time boarding Programs during the school holidays available on request. Please contact our Customer Service desk early enough to reserve a place for your ward ahead of any school holidays.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem p={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' fontWeight={600} textAlign='left'>
                            Holiday in Nigeria Program
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontWeight={600} lineHeight={2}>
                    This is a dedicated fun filled learning program for our diaspora over the summer holidays. It has to be fun-filled because of the huge change in environment for these kids and to enhance their learning. Particular attention is also paid to the diet of such kids not necessarily in terms of nutrients but in terms of options
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Box pt={10}>
                <Heading fontSize={25} fontWeight={500}>Key Deliverables (in-shaa Allah)</Heading>
                <Box pt={2}>
                    <Text pt={3} fontWeight={500}>Qur’an memorisation program</Text>
                    <Text pt={3} fontWeight={500}>Excellent behavioural adabs</Text>
                    <Text pt={3} fontWeight={500}>Confidence in using transactional Arabic words in basic conversations</Text>
                </Box>
            </Box>
        </Box>
    </>
  )
}
