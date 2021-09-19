import { Box, Flex,Grid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button2 from "../button/button2";

const NavbarBack = (props) => {
  return (
    <div>
      <Box display="flex" bg="#FDF8E7" w="100%"  p={1} position={props.position} color="white">
        <Flex bg="#FDF8E7" w="50%" p={1} justifyContent="flex-start" >
        <Link to="/"><Box borderRadius="md" bg="#FDF8E7" color="black" px={4} h={12} alignSelf="center" fontSize={30} position="fixed">
            Shop & Chill
          </Box></Link>
        </Flex>
     
          
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box />
            <Box></Box>
            <Box></Box>
            <Link to={props.to}><Button colorScheme="orange" borderRadius="xl" bg={props.bg? props.bg: "#6D4D36"} color={props.color? props.color : "white"} px={8} marginX={3} h={16} fontSize={20}>
  BACK
</Button></Link>
            <Box></Box>
       
</Grid>
      </Box>
    </div>
  );
};

export default NavbarBack;


{/* <Flex>
<Box p="5">
  <Heading size="md">Shop & Chill</Heading>
</Box>
<Spacer />
<Box>
  <Button margin={5} colorScheme="teal" mr="4">
    Sign Up
  </Button>
  <Button margin={5} colorScheme="teal">Log in</Button>
</Box>
</Flex> */}