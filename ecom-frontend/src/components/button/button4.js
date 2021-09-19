import { Box , Flex ,Link, Button} from "@chakra-ui/react";

const Button4 = (props) => {
    return (
        <Box  as="button"  borderRadius="xl" bg={props.bg? props.bg: "black"}  w="250px" h={14} marginRight={6} >
            <Button onClick={props.onClick} color={props.color? props.color : "white"} variant="link" fontSize={20}>
  {props.value}
  </Button>

</Box>
    )
}

export default Button4;