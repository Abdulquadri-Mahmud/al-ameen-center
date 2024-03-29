import { Box,Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function ProgramDetails() {
  return (
    <Box px={{md:10, base: 3}} py={{md:10, base: 5}}>
        <Box>
            <Heading fontSize={25}>
                Program Details
            </Heading>
            <Text pt={7} fontWeight={500} lineHeight={2} fontSize={{md: 16, base: 16}}>
                At the end of the first 4 years after completing the thanawiyyah program, 1.5 years will be spent on the key JSS subjects of Mathematics, English, Civics, Business Studies and Basic Science & Technology (5 subjects) after which students will proceed into a 2.5 Senior Secondary Education in pursuance of whatever career he or she chooses.
                A child should thus be graduating from us at about age 17 as a bonafide Alfa or Alfaress moving into the University to study his or her choice course of study with potential to graduate at 22/23.
                We are in'shaa Allah on track to shortly commence our A'level program which would complement this effort and enable our graduands move into university at 200L if they wish.
                we plan to add A level school (1yr). This A’level school may enable anyone who is particularly age centric cut back 1 year in the university although for us, we think age 23 is great enough as there are even advantages in maturity.
            </Text>
            <Link to='/about-al-ameen-integrated-edu' className='text-purple-700 text-center font-semibold text-1xl underline'>See More</Link>
        </Box>
    </Box>
  )
}
