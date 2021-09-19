import { Box, Flex, Button, Heading, Center } from "@chakra-ui/react";
import Button2 from "../button/button2";
import { Link } from "react-router-dom";

const NavbarGuest = (props) => {
  return (
    <Box bg="#FDF8E7">
<Flex bg="#FDF8E7" justifyContent="space-between">
  <Box p="2" margin={3} >
    <Link to={localStorage.getItem("ACCESS TOKEN") ? "/user" : "/"}><Heading size="lg"> Shop & Chill </Heading></Link>
  </Box>
  <Box bg="#FDF8E7" h="10%"  d="flex" justifyContent="center" flexWrap="wrap">
          <Box bg="#FDF8E7">
  <Button flexShrink={2} marginTop={5} marginBottom={3}  size="md" borderRadius="xl" bg="#6D4D36" colorScheme="orange" mr="2">
      CONTACT
    </Button>
    <Link to="/login"><Button  size="md" marginTop={5} marginBottom={3} borderRadius="xl" bg="#6D4D36" colorScheme="orange" mr="2">
      LOGIN
    </Button></Link>
    <Link to="/register"><Button size="md" marginTop={5} marginBottom={3} borderRadius="xl" bg="#6D4D36" colorScheme="orange" mr="2">
      REGISTER
    </Button></Link>
    </Box>
  </Box>
</Flex>
    </Box>
  );
};

export default NavbarGuest;
