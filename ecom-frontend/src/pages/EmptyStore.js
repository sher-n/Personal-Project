import { Box , Flex, Grid } from "@chakra-ui/react";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import { Link } from "react-router-dom";
import Button4 from "../components/button/button4";
import NavbarBack from "../components/navbar/navbarBack";
import NavbarUser from "../components/navbar/navbarUser";

const EmptyStore = (props) => {
    
    return (
        <div><NavbarUser />
        <Box h="90vh" w="100%" bg="white" display="flex" justifyContent="center">
        <Box w="60%" h="100%" bg="white" display="block">
        <Box h="30%" alignSelf="center">
          <br />
          <Box fontSize="xl"><strong></strong></Box>
        </Box>
            <Box h="20%" bg="white" d="flex" justifyContent="center">
                
                <div><strong>YOU HAVE NO OWN PRODUCT TO SELL.</strong></div>     
            </Box>
            <Box h="20%" bg="white" d="flex" justifyContent="center">
            <Link to="/registerproduct"><Button4 value="ADD PRODUCT TO SELL" /></Link>
            </Box>
        </Box>
        </Box>
        </div>
    )
}

export default EmptyStore;