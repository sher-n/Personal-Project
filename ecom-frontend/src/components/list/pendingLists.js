import { Box, Flex, Grid, GridItem, Button, Image, AspectRatio, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button5 from "../button/button5";
import axios from "../../config/axios";
import { useEffect, useState } from "react";


const PendingLists = (props) => {
    const [nameEdit, setNameEdit] = useState("")
    const [priceEdit, setPriceEdit] = useState("")
    const [editToggle1, setEditToggle1] = useState(false);
    const [customerName, setCustomerName] = useState("")
    useEffect(() => {

      axios.get(`/profiles/${props.customer_id}`, {}).then((res) => {
        console.log("res.data===>",res.data)
        setCustomerName(res.data)
        return;
        
      }).catch(e => console.log(e));
    },[]);

    const removeProduct=() => {
        axios.delete(`/pendinglist/${props.id}`, {}).then(res => { 
            console.log(res.data)
            
              return;
          });
          alert(`Removed ${props.product_name} from pending list.`);
          window.location.reload();

    }


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'THB',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

    return  ((<Grid templateColumns="repeat(12, 1fr)" gap={5} marginBottom={20}>
    <GridItem
      colSpan={8}
      h="30"
      bg="white"
      gridRow="auto"
    >
    <Grid templateColumns="repeat(5, 1fr)" gap={3}>
<GridItem w="100%" h="20" colSpan={2} bg="white">
<Box h="20" display="block">
<AspectRatio maxW="200px" ratio={16 / 9}>
  <Image src={props.link} alt="some pic" objectFit="cover" />
</AspectRatio>
</Box>
</GridItem>
<GridItem w="100%" h="20" colSpan={3} bg="white">
<Grid templateRows="repeat(2, 1fr)" alignItems="center" gap={1}>
{editToggle1? <Input placeholder="change product name" onChange={(e) => setNameEdit(e.target.value)}
              variant="unstyled" type="text" background="white" required/> :  <Box w="100%" h="10" ><strong>{props.product_name} from {customerName}</strong></Box>}
{editToggle1? <Input placeholder="change price" onChange={(e) => setPriceEdit(e.target.value)}
              variant="unstyled" type="text" background="white" required/> :  <Box w="100%" h="10" >{formatter.format(props.price)}</Box>}


</Grid>
</GridItem>
</Grid>
    </GridItem>
    <GridItem colSpan={4} >
    <Box
    h="20%"
    bg="white"
    d="flex"
    justifyContent="center"
    flexWrap="wrap"
  >
    
    <Box w={5}  />
    <Button5 onClick={removeProduct} value="DELIVERED" color="white" bg="#DF684E" variant="solid" />
  </Box>
  </GridItem>
  </Grid>
  ))
}

export default PendingLists