import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Image,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import CartItem from "../carditem/carditem";

const Body = () => {

  const [productListsFashion, setProductListsFashion] = useState([]);
  const [productListsCar, setProductListsCar] = useState([]);
  const [productListsSport, setProductListsSport] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    axios.get("/store/fashion", {}).then((res) => {
      console.log("res.data===>",res.data)
      setProductListsFashion(res.data)
      
    }).catch(e => console.log(e));

    axios.get("/store/car", {}).then((res) => {
      console.log("res.data===>",res.data)
      setProductListsCar(res.data)
      
    }).catch(e => console.log(e));

    axios.get("/store/sport", {}).then((res) => {
      console.log("res.data===>",res.data)
      setProductListsSport(res.data)
      
    }).catch(e => console.log(e));
  },[]);
    

  return (
    <Box h="90%" w="100%" bg="white" display="flex" justifyContent="center"   >
        <Box w="70%" h="100%" bg="white">
        <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    justifyContent="center">
      <GridItem colSpan={6} bg="white">
        <Tabs>
          <TabList fontSize="3xl">
            <Tab fontSize="2xl">FASHION</Tab>
            <Tab fontSize="2xl">SPORT</Tab>
            <Tab fontSize="2xl">CAR</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid
                minChildWidth="300px" 
                gap={2}
                
              >
                {productListsFashion.map(props => (<CartItem id={props.id} product_name={props.product_name} price={props.price} link={props.link} description={props.description} />))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
            <SimpleGrid
                minChildWidth="300px" 
                gap={2}
                
              >
                {productListsSport? productListsSport.map(props => (<CartItem id={props.id} product_name={props.product_name} price={props.price} link={props.link} description={props.description} />)) : ""}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
            <SimpleGrid
                minChildWidth="300px" 
                gap={2}
                
              >
                {productListsCar?.map(props => (<CartItem id={props.id} product_name={props.product_name} price={props.price} link={props.link} description={props.description} />))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
        </Box>
    </Box>
  );
};

export default Body;
