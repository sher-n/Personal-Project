import { Box, Flex, Grid } from "@chakra-ui/react";
import Button2 from "../button/button2";
import { Link } from "react-router-dom";
import Button3 from "../button/button3";
import LocalStorage from "../../service/LocalStorage";
import React, { useState, useEffect } from "react";
import axios from "../../config/axios";

const NavbarUser = (props) => {
  const [storeURLPath,setStoreURLPath] = useState(0);
const [user, setUser] = useState([]);

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
    props.setRole("guest");
  };
  return (
    <div>
      <Box
        display="flex"
        bg="#FDF8E7"
        p={1}
        color="white"
        flexWrap="wrap"
      >
        <Flex bg="#FDF8E7" p={1} alignContent="right"><Grid templateColumns="repeat(6, 1fr)" gap={2}>
        <Flex bg="#FDF8E7" p={1} justifyContent="flex-start">
          <Link to="/">
            <Box
              bg="#FDF8E7"
              color="black"
              fontSize={30}
              marginLeft={5}
            >
              Shop & Chill
            </Box>
          </Link>
        </Flex>
          <Box />

          <Link to="/profile">
            <Button3
              variant="link"
              bg="#FDF8E7"
              color="black"
              value={"Welcome, " + user.username}
            />
          </Link>

          {storeURLPath > 0 ? (<Button2 to="/mystore" value="MY STORE" />
          ) : (<Button2 to="/emptystore" value="MY STORE" />
          )}
          <Link to="/cart"><Button2 value="MY CART" /></Link>
          <Button2 onClick={logout} value="LOGOUT" />
        </Grid>
        </Flex>
        </Box>
     
    </div>
  );
};

export default NavbarUser;
