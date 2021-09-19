import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  Box,
  Center
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button4 from "../components/button/button4";
import InputComponent from "../components/input/input";
import NavbarBack from "../components/navbar/navbarBack";
import LocalStorage from "../service/LocalStorage";
import axios from "../config/axios";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        LocalStorage.setToken(res.data.token);
        props.setRole("user");
        props.history.push("/user");
      })
      .catch((e) => {
        alert("wrong username or password");
        console.log(e);
      });
  };

  return (
    <div>
      <NavbarBack to="/" />
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          background="white"
          alignItems="center"
          w="sm"
          p={15}
          rounded={6}
        >
                  <Center w="md" h={65} background="#243C49" borderRadius="lg" color="white" colorScheme="linkedin">
          <strong>SIGN IN</strong>
        </Center>
          <br />
          <FormControl id="register">
            <InputComponent
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              variant="filled"
              type="text"
              background="white"
              required
            />
            <br />
            <InputComponent
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              variant="filled"
              type="password"
              background="white"
              required
            />
            <br />
          </FormControl>
          <Button
            onClick={loginUser}
            borderRadius="3xl"
            w="sm"
            bg="#6D4D36"
            colorScheme="orange"
          >
            {" "}
            LOG IN
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default withRouter(Login);

{
  /* <Flex height="100vh" alignItems="center" justifyContent="center">
  <Flex direction="column" background="white" p={20} rounded={6}>
    <Button h="20" w="15" background="linkedin.500" colorScheme="linkedin">
      LOG IN
    </Button>
    <br />
    <FormControl id="register">
      <br />
      <InputComponent
        placeholder="youremail@email.com"
        mb={3}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <InputComponent
        placeholder="password"
        variant="filled"
        mb={3}
        type="password"
      />
      <br />
    </FormControl>
    <Link to="/user">
      <Button
        borderRadius="3xl"
        bg="#6D4D36"
        margin="10px"
        colorScheme="orange"
      >
        {" "}
        LOG IN
      </Button>
    </Link>
  </Flex>
</Flex>; */
}
