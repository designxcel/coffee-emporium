import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import CoffeeCollection from "../CoffeeCollection/CoffeeCollection";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Signup from "../Pages/SignUp/Signup";
import Signin from "../Pages/Signin/Signin";
import Users from "../Pages/Users/Users";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import View from "../Pages/View/View";

const Routes = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                errorElement: <Error></Error>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path :"/addcoffee",
                element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
            },
            {
                path: "/updatecoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path : "/signup",
                element :<Signup></Signup>
            },
            {
                path: "/signin",
                element: <Signin></Signin>
            },
            {
                path: "/users",
                element: <Users></Users>,
                loader: ()=>fetch('http://localhost:5000/user')
            },
            {
                path:"/view/:id",
                element: <View></View>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
                
            }
            
        ]
    }
])

export default Routes;