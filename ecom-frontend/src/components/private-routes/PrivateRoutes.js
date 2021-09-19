import React from "react";
import { Redirect,Switch,Route } from "react-router-dom";
import ConfigRoutes from "../../config/routes";
import CheckOut from "../checkout/Checkout";
import NavbarBack from "../navbar/navbarBack";
import NavbarUser from "../navbar/navbarUser";
import ProductDetail from "../productDetail/ProductDetail";


const PrivateRoutes = (props) => {
    const role = props.role || "guest";
    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoute = ConfigRoutes[role].redirectRoutes;
    return (
        <div>
                <Switch>
                    {allowedRoutes.map(routes => {
                         return (<Route 
                            exact path={routes.url}
                            key={routes.url}
                            
                            ><routes.component setRole={props.setRole} /></Route>
                            )
                    })}
                    <Redirect to={redirectRoute}></Redirect>
    
      </Switch>
      <Switch>
        <Route exact path={`/productdetail/:productId`} key={`/productdetail/:productId`}>
          <NavbarBack setRole={props.setRole} to="/user" />
          <ProductDetail />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={`/checkout/:productId`} key={`/checkout/:productId`}>
          <NavbarUser setRole={props.setRole} to="/user" />
          <CheckOut />
        </Route>
      </Switch>
        </div>
    )
}

export default PrivateRoutes;