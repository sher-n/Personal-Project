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
import { Link } from "react-router-dom";
import Button1 from "../button/button1";
import Button2 from "../button/button2";
import { useState } from "react/cjs/react.development";

const  CartItemCart = (props) => {
  const [name, setName] = useState("");



  const removeCart = () => {

     axios.delete("/cart", { product_name : String(props.name) }).then((res) =>
        {
          console.log(res.data)
        return
        }).catch(e => console.log(e));
      window.location.reload();
}

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'THB'
  });
  
    return (
      <div style={{ display: "block" }}>
      <Box
        maxW="sm"
        borderWidth="1px"
        margin="10px"
        borderRadius="lg"
        overflow="scroll"
        bg="#FDF8E7"
      >
        <AspectRatio maxW="100%" ratio={4 / 3}>
         <Link to={`/productdetail/${props.product_id}`}><Image src={props.link} /></Link>
        </AspectRatio>
        <Box p="2">
          <Box d="flex" alignItems="baseline">
            <Badge
              borderRadius="full"
              px="2"
              colorScheme="red"
            >
              New
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.name}
          </Box>

          <Box>
            {formatter.format(props.price)}
          </Box>

          <Box d="flex" mt="2" alignItems="center">
          
          </Box>
          <Box d="flex" justifyContent="center">
          
            <Link to={`/checkout/${props.id}`}><Button1 bgColor="#E47711" value="BUY" /></Link>
          </Box>
        </Box>
      </Box>
      <Box d="flex" justifyContent="center">
          <Box />
      <Button2 onClick={removeCart} bg="#DF684E" value="REMOVE" />
      <Box />
          </Box>
          
    </div>
    )
  }

  export default CartItemCart;