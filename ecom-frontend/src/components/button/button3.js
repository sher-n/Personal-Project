import { Box , Flex ,Link, Button} from "@chakra-ui/react";

const Button3 = (props) => {
    return (
        <Link to={props.link}><Box as="button"  borderRadius="xl" bg={props.bg? props.bg: "#6D4D36"}  w="max" h={16} marginRight={6} >
            <Button color={props.color? props.color : "white"} variant="link" fontSize={20}>
  {props.value}
  </Button>

</Box></Link>
    )
}

export default Button3;