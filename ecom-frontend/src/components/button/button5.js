import { Box , Flex ,Link, Button} from "@chakra-ui/react";

const Button5 = (props) => {
    return (
            <Button marginBottom={3} onClick={props.onClick} bg={props.bg} color={props.color? props.color : "white"} variant={props.variant} fontSize={20} colorScheme="orange" size="md">
  {props.value}
  </Button>
    )
}

export default Button5;