import { Box, Flex, Grid, GridItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavbarBack from "../components/navbar/navbarBack";
import Button4 from "../components/button/button4";
import LocalStorage from "../service/LocalStorage";
import Button5 from "../components/button/button5";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import StoreLists from "../components/list/storeLists";
import { withRouter  } from "react-router-dom";
import NavbarUser from "../components/navbar/navbarUser";

const MyStore = (props) => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    // Update the document title using the browser API
    axios.get("/store", {}).then((res) => {
      console.log("res===>",res.data)
      setProductData(res.data)
      console.log("prodata => ",productData);
      return;
      
    }).catch(e => console.log(e));
    
    if(!productData) {
      props.history.push("/emptystore");

    }
  },[]);

  return (
    <div>
      <NavbarUser />
      <Box h="90vh" w="100%" bg="white" display="flex" justifyContent="center">
        <Box w="5%" />
        <Box>
          <Box w="100%" h="100%" bg="white" display="block">
            <Box h="10vh" alignSelf="center" position="relative"></Box>
            <Box fontSize="xl" position="relative">
              <strong>STORE LISTS</strong>
            </Box>
            <br />
            {productData.map(prop => (<StoreLists id={prop.id} product_name={prop.product_name} price={prop.price} link={prop.link} />))}

            <Box h="20%" />
            <Box
              h="20%"
              bg="white"
              d="flex"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Link to="/registerproduct">
                <Button4 value="ADD MORE PRODUCT" />
              </Link>
              <br />
              <br />
              <br />
              <Link to="/pendinglist"><Button4  value="DELIVERY PENDING LIST" /></Link>
            </Box>
          </Box>
        </Box>
        <Box w="5%" />
      </Box>
      <Box w="10%" />
    </div>
  );
};

export default withRouter(MyStore);

{/* <GridItem colSpan={2} h="20" bg="papayawhip" >
<Box display="block" justifyContent="center" margin={5}>
<Button5 value="EDIT" color="white" bg="#E47711" variant="solid" />
</Box>
</GridItem>
<GridItem colSpan={2} h="20" bg="papayawhip">
<Box display="block" justifyContent="center" margin={5}>
<Button5 value="REMOVE" color="white" bg="#E47711" variant="solid" />
</Box>

</GridItem> */}