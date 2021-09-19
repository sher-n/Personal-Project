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
import axios from "axios";
import { Link } from "react-router-dom";
import Button1 from "../button/button1";

const  CartItem = (props) => {



  const addCart = () => {
    axios.post('/cart',{
      product_name: props.product_name
    }).then(res => {
      console.log(res);
      alert(res.data.message);
      props.history.push("/user");
    }).catch(e => console.log(e));
  }
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'THB'
  });
  
    return (
        <div>
        <Box
          bg="#FDF8E7"
          maxW="sm"
          borderWidth="1px"
          margin="10px"
          borderRadius="xl"
          overflow="scroll"
        >
          <AspectRatio maxW="90%" ratio={4 / 3} margin={5} >
           <Link to={`/productdetail/${props.id}`} ><Image borderRadius="xl" src={props.link} /></Link>
          </AspectRatio>
          <Box p="2">
            <Box d="flex" flexDirection="column" marginTop={-5} marginLeft={5} marginBottom={5}>
              <Box><strong>{props.product_name}</strong><Box>{formatter.format(props.price)}</Box></Box>
              <Box></Box>
              
            </Box>

            <Box d="flex" justifyContent="space-between" margin={2}>
            
              <Button1 onClick={addCart} bgColor="#9F6D23" value="CART" />
              <Link to={`/checkout/${props.id}`}><Button1 bgColor="#E47711" value="BUY" /></Link>
            </Box>
          </Box>
        </Box>
      </div>
    )
  }

  export default CartItem;