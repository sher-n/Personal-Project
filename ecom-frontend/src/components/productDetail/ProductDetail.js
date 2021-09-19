import { Grid, GridItem, AspectRatio, Image, Button, Box} from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import Button4 from "../button/button4";
import NavbarBack from "../navbar/navbarBack";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import LocalStorage from "../../service/LocalStorage";
const ProductDetail = (props) => {
  let { productId } = useParams();
  const [ProductDetailData, setProductDetail] = useState({})

  useEffect(() => {
    // Update the document title using the browser API
    axios.get(`/store/${productId}`, {}).then((res) => {
      console.log("res===>",res.data)
      setProductDetail(res.data);
      return;
      
    }).catch(e => console.log(e));
  },[]);

  const addCart = () => {
    axios.post('/cart',{
      product_name: ProductDetailData.product_name
    }).then(res => {
      console.log(res);
      alert(res.data.message);
      props.history.push("/user");
    }).catch(e => console.log(e));
  }
  
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "THB",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div>


          <br />
            <Box fontSize="xl" w="100vw" alignSelf="flex-start">
              <Box marginLeft={35}><strong>PRODUCT DETAILS</strong></Box>
          <Box bg="white" w="100vw" display="flex" justifyContent="center">
            </Box>
            <br />
            <Box
              h="60%"
              bg="white"
              d="flex"
              justifyContent="center"
              flexWrap="wrap"
            >
              <AspectRatio w="25vw" h="30vh" ratio={16/9} justifyContent="center" >
                  <Image src={ProductDetailData.link} borderRadius={25} />
                </AspectRatio>
                <Box w="5vw"/>
                <Grid
                  templateRows="repeat(7, 1fr)"
                  templateColumns="repeat(3, 1fr)"
                  gap={3}
                  fontSize="md"
                >
                  <Box marginTop={2}>NAME :</Box>
                  <GridItem colSpan={2} marginTop={2}>
                    {/* <div>{product.description}</div> */}
                    <strong>
                      <div>{ProductDetailData.product_name}</div>
                    </strong>
                  </GridItem>

                  <div>YOUR BALANCE :</div>
                  <GridItem colSpan={2}>
                    <strong>
                      <div>{formatter.format(ProductDetailData.price)}</div>
                    </strong>
                  </GridItem>

                  <div>PRICE :</div>
                  <GridItem colSpan={2}>
                    <strong>
                      <div>{formatter.format(ProductDetailData.price)}</div>
                    </strong>
                  </GridItem>

                  <GridItem fontSize="sm">DESCRIPTION :</GridItem>
                  <GridItem colSpan={2} rowSpan={3}>
                    <strong>
                      <div>

                      </div>
                    </strong>
                  </GridItem>
                </Grid>
              </Box>
        
        </Box>
            <Box h="10%" bg="white" d="flex" justifyContent="center" flexWrap="wrap">
                <Button4 onClick={addCart} bg="#243C49" value="CART" />

                    <br />
                    <br />
                    <br />
                    <Link to={`/checkout/${productId}`}><Button4 bg="#DF684E" value="BUY"/></Link>
            </Box>
    
      </div>
  );
};

export default ProductDetail;

// <Grid
// templateRows="repeat(3, 1fr)"
// templateColumns="repeat(3, 1fr)"
// gap={9}
// justifyItems="center" alignSelf="center">

//           <div>NAME :</div>
//           <div>{product.name}</div>
//           <Button2 value="EDIT"/>
//           <div>ID :</div>
//           <div>{product.id}</div>
//           <Button2 value="ADD"/>
//           <div>PRICE :</div>
//           <div>{product.price}</div>
//           <Button2 value="EDIT"/>
//           </Grid>