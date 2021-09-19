import { Box , Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Button2 = (props) => {
    return (
        <Link to={props.to}><Button onClick={props.onClick} colorScheme="orange" borderRadius="xl" bg={props.bg? props.bg: "#6D4D36"} color={props.color? props.color : "white"} px={8} marginX={3} h={16} fontSize={20}>
  {props.value}
</Button></Link>
    )
}

export default Button2;