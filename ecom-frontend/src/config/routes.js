import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import RegisterProduct from "../pages/RegisterProduct";
import Profile from "../pages/Profile";
import EmptyStore from "../pages/EmptyStore";
import MyStore from "../pages/MyStore";
import HomeUser from "../pages/HomeUser";
import PendingList from "../pages/PendingList";
import CheckOut from "../pages/Checkout";
import CartPage from "../pages/CartPage";

const components = {
    home : {
        url: "/",
        component: Home
    },
    register : {
        url: "/register",
        component: Register
    },
    login : {
        url: "/login",
        component: Login
    },
    productdetail : {
        url: "/productdetail/:productId",
        component: ProductDetail
    },
    registerproduct : {
        url: "/registerproduct",
        component: RegisterProduct
    },
    profile : {
        url: "/profile",
        component: Profile
    },
    emptystore : {
        url: "/emptystore",
        component: EmptyStore
    },
    mystore : {
        url: "/mystore",
        component: MyStore
    },
    homeuser : {
        url: "/user",
        component: HomeUser
    },
    cart : {
        url: "/cart",
        component: CartPage
    },
    pendinglist : {
        url: "/pendinglist",
        component: PendingList
    },
    checkout : {
        url: "/checkout/:productId",
        component: CheckOut
    },

}
export default {
    guest : {
        allowedRoutes: [
            components.home,
            components.login,
            components.register,
            components.productdetail,
        ],
        redirectRoutes: "/login"
    },

    user : {
        allowedRoutes: [
            components.home,
            components.login,
            components.register,
            components.productdetail,
            components.registerproduct,
            components.profile,
            components.emptystore,
            components.mystore,
            components.homeuser,
            components.cart,
            components.pendinglist,
            components.checkout

        ],
        redirectRoutes: "/user"
    }
}