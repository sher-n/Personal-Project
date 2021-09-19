import { Grid, GridItem, AspectRatio, Image, Button, Box} from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import Button4 from "../components/button/button4";
import NavbarBack from "../components/navbar/navbarBack";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import { useRouteMatch } from "react-router-dom";
import { Redirect,Switch,Route } from "react-router-dom";


const ProductDetail = (props) => {
  let { path, url } = useRouteMatch();
  console.log("path", path)
  return (
      <div>
      {/* <Switch>
        <Route exact path={`${path}:productId`}>
          <NavbarBack />
          <ProductDetail />
        </Route>
      </Switch> */}
      </div>
  );
};

export default ProductDetail;

// <Grid
// templateRows="repeat(3, 1fr)"
// templateColumns="repeat(3, 1fr)"
// gap={9}
// justifyItems="center" alignSelf="center">

//           <div>NAME :</div>
//           <div>{product.name}</div>
//           <Button2 value="EDIT"/>
//           <div>ID :</div>
//           <div>{product.id}</div>
//           <Button2 value="ADD"/>
//           <div>PRICE :</div>
//           <div>{product.price}</div>
//           <Button2 value="EDIT"/>
//           </Grid>