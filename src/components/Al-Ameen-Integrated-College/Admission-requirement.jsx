import React from 'react';
import { Box, Heading, Text, UnorderedList,ListItem } from '@chakra-ui/react';

export default function AdmissionRequirement() {
  return (
    <div>
      <Box pt={7} px={{md: 10, base: 5}}>
            <Heading fontSize={25}>Who is this for (Admission Requirements)</Heading>
            <Text pt={3} fontSize={{md: 16, base: 16}} fontWeight={600}>
                For parents who wants their kids to have best of both worlds.
            </Text>
            <UnorderedList pt={3} fontWeight={600} fontSize={{md: 16, base: 16}}>
                <ListItem lineHeight={2}>To be admitted, a child must have completed primary school education (Pry 5 or 6 depending)</ListItem>
                <ListItem lineHeight={2}>Must already be able to read the Qur'an</ListItem>
                <ListItem lineHeight={2}>He or she must be at least 9 years old and aged 11 max</ListItem>
                <ListItem lineHeight={2}>Mode of instruction is Arabic and English to maximize learning but leraner does not need to know any Arabic at resumption.</ListItem>
            </UnorderedList>
        </Box>
    </div>
  )
}
