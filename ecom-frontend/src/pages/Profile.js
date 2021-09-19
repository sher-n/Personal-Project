import { Box, Flex, Grid, GridItem, Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button4 from "../components/button/button4";
import NavbarBack from "../components/navbar/navbarBack";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import InputComponent from "../components/input/input";
import LocalStorage from "../service/LocalStorage";
import NavbarUser from "../components/navbar/navbarUser";

const Profile = (props) => {
  const [storeURLPath,setStoreURLPath] = useState(0);

  const [userData, setUserData] = useState({});
  const [nameEdit, setNameEdit] = useState("");
  const [balanceEdit, setBalancEdit] = useState(0);
  const [bioEdit, setBioEdit] = useState("");
  const [addressEdit, setAddressEdit] = useState("");
  const [editToggle1, setEditToggle1] = useState(true);
  const [editToggle3, setEditToggle3] = useState(true);
  const [editToggle4, setEditToggle4] = useState(true);

  useEffect(() => {
    // Update the document title using the browser API
    axios.get("/store", {}).then((res) => {
      console.log("res===>",res.data.length)
      setStoreURLPath(res.data.length)
      return;
      
    }).catch(e => console.log(e));
    // Update the document title using the browser API
    axios
      .get("/profiles", {})
      .then((res) => {
        console.log("res===>", res.data);
        setUserData(res.data);
        return;
      })
      .catch((e) => console.log(e));
  }, []);

  const submitChangeName = () => {
    setEditToggle1(true);
    axios.put("/profiles/name", { name: nameEdit }).then((res) => {
      console.log(res.data);
      return;
    });
    window.location.reload();
  };
  const submitCAddBalance = () => {
    axios.put("/profiles/balance", { balance: balance + 10000 }).then((res) => {
      console.log(res.data);
      return;
    });
    window.location.reload();
  };
  const submitChangeBio = () => {
    setEditToggle3(true);
    axios.put("/profiles/bio", { bio: bioEdit }).then((res) => {
      console.log(res.data);
      return;
    });
    window.location.reload();
  };
  const submitChangeAddress = () => {
    setEditToggle4(true);
    axios.put("/profiles/address", { address: addressEdit }).then((res) => {
      console.log(res.data);
      return;
    });
    window.location.reload();
  };
  const logout = () => {
    LocalStorage.removeToken();
    props.setRole("guest");
  };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "THB",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const { id, name, bio, address, balance } = userData;
  return (
    <div>
      <NavbarUser to="/user" />
      <Box h="90vh" w="100%" bg="white" display="flex" justifyContent="center">
        <Box w="60%" h="100%" bg="white" display="block">
          <Box h="30%" alignSelf="center">
            <br />
            <Box fontSize="xl">
              <strong>PROFILE</strong>
            </Box>
          </Box>
          <Box h="30%" bg="white" d="flex" justifyContent="center">
            <Grid
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(3, 1fr)"
              gap={4}
              justifyItems="center"
              alignSelf="center"
              fontSize="lg"
              flexWrap="wrap"
            >
              <Box marginTop={2}>
                <strong>NAME</strong>
              </Box>
              <Box marginTop={2}>
                {editToggle1 ? (
                  <Box>{name}</Box>
                ) : (
                  <Input
                    placeholder="change your name"
                    onChange={(e) => setNameEdit(e.target.value)}
                    variant="unstyled"
                    type="text"
                    background="white"
                    required
                  />
                )}
                <Box>______________________</Box>
              </Box>
              {editToggle1 ? (
                <Button
                  onClick={() => setEditToggle1(false)}
                  borderRadius="xl"
                  w="min"
                  bg="#6D4D36"
                  colorScheme="orange"
                >
                  {" "}
                  EDIT
                </Button>
              ) : (
                <Button
                  onClick={submitChangeName}
                  borderRadius="xl"
                  w="min"
                  bg="#6D4D36"
                  colorScheme="orange"
                >
                  {" "}
                  OK
                </Button>
              )}

              <Box marginTop={2}>
                <strong>WALLET BALANCE</strong>
              </Box>
              <Box marginTop={2}>
                <Box>{formatter.format(balance)}</Box>
                <Box>______________________</Box>
              </Box>
              <Button
                borderRadius="xl"
                w="min"
                bg="#6D4D36"
                colorScheme="orange"
                onClick={submitCAddBalance}
              >
                {" "}
                ADD
              </Button>
              <Box marginTop={2}>
                <strong>BIO</strong>
              </Box>
              <Box marginTop={2}>
                {editToggle3 ? (
                  <Box>{bio}</Box>
                ) : (
                  <Input
                    placeholder="change your bio"
                    onChange={(e) => setBioEdit(e.target.value)}
                    variant="unstyled"
                    type="text"
                    background="white"
                    required
                  />
                )}
                <Box>______________________</Box>
              </Box>
              {editToggle3 ? (
                <Button
                  onClick={() => setEditToggle3(false)}
                  borderRadius="xl"
                  w="min"
                  bg="#6D4D36"
                  colorScheme="orange"
                >
                  {" "}
                  EDIT
                </Button>
              ) : (
                <Button
                  onClick={submitChangeBio}
                  borderRadius="xl"
                  w="10"
                  bg="#6D4D36"
                  colorScheme="orange"
                >
                  {" "}
                  OK
                </Button>
              )}
              <Box marginTop={2}>
                <strong>ADDRESS</strong>
              </Box>
              <Box marginTop={2}>
                {editToggle4 ? (
                  <Box>{address}</Box>
                ) : (
                  <Input
                    placeholder="change your address"
                    onChange={(e) => setAddressEdit(e.target.value)}
                    variant="unstyled"
                    type="text"
                    background="white"
                    required
                  />
                )}
                <Box>______________________</Box>
              </Box>
              {editToggle4 ? (
                <Button
                  onClick={() => setEditToggle4(false)}
                  borderRadius="xl"
                  w="min"
                  bg="#6D4D36"
                  colorScheme="orange"
                >
                  {" "}
                  EDIT
                </Button>
              ) : (
                <Button
                  onClick={submitChangeAddress}
                  borderRadius="xl"
                  w="min"
                  bg="#6D4D36"
                  colorScheme="orange"
                >
                  {" "}
                  OK
                </Button>
              )}
            </Grid>
          </Box>
          <Box h="20%" />
          <Box
            h="20%"
            bg="white"
            d="flex"
            justifyContent="center"
            flexWrap="wrap"
          >
            {storeURLPath ? 
            (<Link to="/mystore">
              <Button4 value="MY STORE" />
            </Link>) : (<Link to="/emptystore">
              <Button4 value="MY STORE" />
            </Link>)}
            <Button4 onClick={logout} value="LOG OUT" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
