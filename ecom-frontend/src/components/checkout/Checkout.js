import {
  Box,
  Flex,
  Grid,
  GridItem,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import Button2 from "../button/button2";
import Button3 from "../button/button3";
import { Link } from "react-router-dom";
import Button4 from "../button/button4";
import NavbarBack from "../navbar/navbarBack";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { useParams, withRouter } from "react-router-dom";

const CheckOut = (props) => {
  let { productId } = useParams();
  const [ProductDetailData, setProductDetail] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get(`/store/${productId}`, {})
      .then((res) => {
        console.log("res===>", res.data);
        setProductDetail(res.data);
        return;
      })
      .catch((e) => console.log(e));

    axios
      .get("/profiles", {})
      .then((res) => {
        console.log("res===>", res.data);
        setUserData(res.data);
        return;
      })
      .catch((e) => console.log(e));
  }, []);

  const handleBuy = () => {
    axios
      .post(`/checkout/${productId}`, {})
      .then((res) => {
        console.log("res===>", res.data);
        alert(res.data.message);
        props.history.push("/user");
        return;
      })
      .catch((e) => console.log(e));

      axios.put("/profiles/balance", { balance: userData.balance - ProductDetailData.price }).then((res) => {
        console.log(res.data);
        return;
      });
      alert(`Thank, we will send ${ProductDetailData.product_name} to you soon`)
      window.location.reload();
  };

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
              <Box marginLeft={35}><strong>CHECKOUT</strong></Box>
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
              <div style={{display: "block", position: "relative"}}>
              <AspectRatio marginBottom={10} w="25vw" h="30vh" ratio={4/3} justifyContent="center" >
                  <Image src={ProductDetailData.link} borderRadius={25} />
                </AspectRatio>
                </div>
                <Box w="5vw"/>
                <Grid
                  templateRows="repeat(5, 1fr)"
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
                      <div>{formatter.format(userData.balance)}</div>
                    </strong>
                  </GridItem>

                  <div>PRICE :</div>
                  <GridItem colSpan={2}>
                    <strong>
                      <div>{formatter.format(ProductDetailData.price)}</div>
                    </strong>
                  </GridItem>

                  <GridItem fontSize="md">SUBTOTAL :</GridItem>
                  <GridItem colSpan={2} rowSpan={1}>
                    <strong>
                      <div>
                        {formatter.format(
                          userData.balance - ProductDetailData.price
                        )}
                      </div>
                    </strong>
                  </GridItem>
                </Grid>
              </Box>
        
        </Box>
              <Box
                bg="white"
                d="flex"
                justifyContent="center"
                flexWrap="wrap"
              >
                <Button4 onClick={handleBuy} bg="#DF684E" value="CHECKOUT" />
            </Box>
    </div>
  );
};

export default withRouter(CheckOut);
