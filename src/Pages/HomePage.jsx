import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import CallUs from "../Components/CallUs";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";
import Testimonials from "../Components/Testimonial";

const HomePage = () => {
    return (
        <>
        <Helmet> 
             <title>Bistro Boss Restraurant</title>
         </Helmet>
        <Banner/>
        <Category/>
        <PopularMenu/>
        <CallUs/>
        <Featured/>
        <Testimonials/>
        </>
    );
};

export default HomePage;