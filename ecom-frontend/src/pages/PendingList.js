import { Box , Flex, Grid, GridItem } from "@chakra-ui/react";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import { Link } from "react-router-dom";
import NavbarBack from "../components/navbar/navbarBack";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import PendingLists from "../components/list/pendingLists";
import NavbarUser from "../components/navbar/navbarUser";

const PendingList = (props) => {

  const [pendingLists, setPendingLists] = useState([])
    
  useEffect(() => {
    // Update the document title using the browser API
    axios.get("/pendinglist", {}).then((res) => {
      console.log("res===>",res.data)
      setPendingLists(res.data)
      console.log("pdlist data=> ",pendingLists);
      return;
      
    }).catch(e => console.log(e));
    
  },[]);

    return (
      <div>
      
    <div>
      <NavbarUser to="/user" />
      <Box h="80vh" w="100%" bg="white" display="flex" justifyContent="center">
        <Box w="5%" />
        <Box>
          <Box w="100%" h="100%" bg="white" display="block">
            <Box h="10vh" alignSelf="center" position="relative"></Box>
            <Box fontSize="xl" position="relative">
              <strong>PENDING LISTS</strong>
            </Box>
            <br />
            { pendingLists ?pendingLists.map(prop => (<PendingLists id={prop.id} product_name={prop.product_name} price={prop.price} link={prop.link} customer_id={prop.customer_id} />)) :  <Box h="20%" bg="white" d="flex" justifyContent="center">
            
            <div><strong>YOU HAVE NO PENDING LIST</strong></div>     
        </Box>}

            
          </Box>
        </Box>
        <Box w="5%" />
      </Box>
      <Box w="10%" />
    </div>
    
        </div>)
}

export default PendingList;