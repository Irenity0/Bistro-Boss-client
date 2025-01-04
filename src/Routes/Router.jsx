import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import MenuPage from "../Pages/MenuPage";
import ShopPage from "../Pages/ShopPage";
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/SignUpPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/menu",
                element: <MenuPage/>
            },
            {
                path: '/shop/:category',
                element: <ShopPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            }, 
            {
                path: "/register",
                element: <SignUp/>
            }
        ]
    }
]);

export default router;