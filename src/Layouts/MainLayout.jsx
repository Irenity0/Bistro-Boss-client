import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div>
            { noHeaderFooter || <Navbar/>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;