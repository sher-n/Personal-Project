import { Box , Flex,Button } from "@chakra-ui/react";

const Button1 = (props) => {
    return (
    <Button onClick={props.onClick} borderRadius="25px" bg={props.bgColor} color="white" px={8} h={12} fontSize={18}  colorScheme="red">
  {props.value}</Button>
    )
}

export default Button1;