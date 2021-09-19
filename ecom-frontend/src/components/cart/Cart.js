import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Button,
  Grid,
  GridItem,
  Box,
  Image,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import CartItemCart from "../carditem/carditemCart";
import { Link } from "react-router-dom";
import Button4 from "../button/button4";

const Cart = () => {

  const [cartLists, setCartLists] = useState([]);

  useEffect(() => {

    axios.get("/cart", {}).then((res) => {
      console.log("res.data cart===>",res.data)
      setCartLists(res.data)
      return;
      
    }).catch(e => console.log(e));
  },[]);
    
  const haveCarts = () => {
    return (    <Box h="90%" w="100%" bg="white" display="flex" justifyContent="center">
    <Box w="70%" h="100%" bg="white">
    <Grid
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(3, 1fr)"
  gap={4}
justifyContent="center">
  <GridItem colSpan={6} bg="white">

  <Box h="10%" alignSelf="center">
      <br />
      <Box fontSize="xl"><strong>CART</strong></Box>
    </Box>
  <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={2} 
            flexWrap="wrap"
          >
            
            {cartLists.map(props => (<CartItemCart key={props.id} id={props.id} name={props.product_name} product_id={props.product_id} price={props.price} link={props.link} description={props.description} />))}
          </Grid>
</GridItem>
</Grid>
    </Box>
</Box>)
  }

  const haveNoCarts = () => {
    return (<Box h="90vh" w="100%" bg="white" display="flex" justifyContent="center">
    <Box w="60%" h="100%" bg="white" display="block">
    <Box h="30%" alignSelf="center">
      <br />
      <Box fontSize="xl"><strong>CART</strong></Box>
    </Box>
        <Box h="20%" bg="white" d="flex" justifyContent="center">
            
            <div><strong>YOU HAVE NO PRODUCT IN CART.</strong></div>     
        </Box>
        <Box h="20%" bg="white" d="flex" justifyContent="center">
        <Link to="/user"><Button4 value="GO SHOPPING" /></Link>
        </Box>
    </Box>
    </Box>)
  }

  return (
    <div>
          { cartLists.length == 0? haveNoCarts() : haveCarts() }
    </div>
  );
};

export default Cart;
