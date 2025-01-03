import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import MenuPage from "../Pages/MenuPage";
import ShopPage from "../Pages/ShopPage";

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
            }
        ]
    }
]);

export default router;