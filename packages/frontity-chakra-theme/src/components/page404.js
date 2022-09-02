import { Box, Heading, Text, Button } from '@chakra-ui/react';
import SearchForm from './search/search-form';

const Page404 =({state}) =>{
  return(
    <>
    <Box backgroundColor={'briefstory.bg'} height={{base: '100%', md: '50%', xl: '25%',}}>
      <Box pb="60px">
      <Box  mt="-60px" width="100%" marginTop={'50px'} textAlign={"center"} fontSize={['sm', 'md', 'lg', 'xl']}>
        <Heading pt="100px"  fontWeight="medium">
          Error 404
        </Heading>
      </Box>
      <Box pt="100px"
          fontSize={['sm', 'md', 'lg', 'xl']}
           maxW="1400px"
          position="relative"
          mx="auto"
          width="100%"
          textAlign={'center'}
          >
      <Text maxW="600px" mx="auto" p={'20px'}>
        Aucun article trouvé
      </Text>
      <Text maxW="600px" mx="auto" pb={'20px'} fontSize='sm'>
        Utilisez le formulaire de texte ci dessous pour trouver la page que vous recherchez
      </Text>
      <Box>
      <SearchForm bg="rgba(24, 22, 23, 0.9)"/>
      </Box>
      </Box>
      </Box>
    </Box>
    </>
  )
};

export default Page404;