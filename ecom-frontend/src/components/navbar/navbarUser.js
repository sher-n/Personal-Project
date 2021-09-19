import { Box, Flex, Grid, Button, Center, Heading } from "@chakra-ui/react";
import Button2 from "../button/button2";
import { Link } from "react-router-dom";
import Button3 from "../button/button3";
import LocalStorage from "../../service/LocalStorage";
import React, { useState, useEffect } from "react";
import axios from "../../config/axios";
import "./styles.css";

const NavbarUser = (props) => {
  const [storeURLPath,setStoreURLPath] = useState(0);
const [user, setUser] = useState([]);
const [toggleBar, setToggleBar] = useState(false)

useEffect(() => {
  // Update the document title using the browser API
  axios.get("/users", {}).then((res) => {
    console.log("user===>",res.data)
    setUser(res.data[0]);
    return;
    
  }).catch(e => console.log(e));
  
  axios.get("/store", {}).then((res) => {
    console.log("amount product===>",res.data.length)
    setStoreURLPath(res.data.length);
    return;
    
  }).catch(e => console.log(e));
},[]);


  const logout = () => {
    LocalStorage.removeToken();
    window.location.reload();
  };
  return (
    <Box bg="#FDF8E7">
<Flex bg="#FDF8E7" justifyContent="space-between">
  <Box p="2" margin={3} >
    <Link to={localStorage.getItem("ACCESS TOKEN") ? "/user" : "/"}><Center><Heading> Shop & Chill </Heading></Center></Link>
  </Box>
  <Box bg="#FDF8E7" h="10%"  d="flex" justifyContent="center" flexWrap="wrap">
  <Link to="/profile">
        <Button bg="#FDF8E7" h="50px" marginTop={4} color="black" mr="3" fontSize="lg"><strong>
  Welcome, {user.username}</strong>
</Button>
          </Link>
          <Box bg="#FDF8E7">
  <Link to={storeURLPath > 0 ? "/mystore" : "/emptystore"}><Button flexShrink={2} marginTop={5} marginBottom={3}  size="md" borderRadius="xl" bg="#6D4D36" colorScheme="orange" mr="2">
      MY STORE
    </Button></Link>
    <Link to="/cart"><Button  size="md" marginTop={5} marginBottom={3} borderRadius="xl" bg="#6D4D36" colorScheme="orange" mr="2">
      MYCART
    </Button></Link>
    <Button onClick={logout} size="md" marginTop={5} marginBottom={3} borderRadius="xl" bg="#6D4D36" colorScheme="orange" mr="2">
      LOGOUT
    </Button>
    </Box>
  </Box>
</Flex>
    </Box>
  );
};

export default NavbarUser;
