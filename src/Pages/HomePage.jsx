import Banner from "../Components/Banner";
import CallUs from "../Components/CallUs";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";

const HomePage = () => {
    return (
        <>
        <Banner/>
        <Category/>
        <PopularMenu/>
        <CallUs/>
        <Featured/>
        </>
    );
};

export default HomePage;