import { Helmet } from "react-helmet-async";
import Cover from '../Components/Cover'
import banner from '../assets/menu/banner3.jpg'
import dessertBg from '../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../assets/menu/pizza-bg.jpg'
import saladBg from '../assets/menu/salad-bg.jpg'
import soupBg from '../assets/menu/soup-bg.jpg'
import useMenu from "../hooks/useMenu";
import SectionTitle from '../Components/SectionTilie'
import MenuCategory from "../Components/MenuCategory";

const MenuPage = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert') 
    const soup = menu.filter(item => item.category === 'soup') 
    const salad = menu.filter(item => item.category === 'salad') 
    const pizza = menu.filter(item => item.category === 'pizza') 
    const offered = menu.filter(item => item.category === 'offered') 
    return (
        <>
        <Helmet> 
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <section className="space-y-10">
            {/* main cover */}
        <Cover img={banner} title={'Our Menu'} paragraph={'Would You Like to Take a Dish?'}></Cover>
        <SectionTitle heading={`Today's offer`} subHeading={`Don't Miss`}></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>

        {/* dessert */}
        <MenuCategory items={dessert} title={'Desserts'} coverImg={dessertBg} paragraph={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et maxime dolore amet'}></MenuCategory>

        {/* salad */}
        <MenuCategory items={salad} title={'Salads'} coverImg={saladBg} paragraph={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et maxime dolore amet'}></MenuCategory>

        
        {/* soup */}
        <MenuCategory items={soup} title={'Soup'} coverImg={soupBg} paragraph={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et maxime dolore amet'}></MenuCategory>

        {/* pizza */}
        <MenuCategory items={pizza} title={'Pizza'} coverImg={pizzaBg} paragraph={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et maxime dolore amet'}></MenuCategory>
        </section>
        </>
    );
};

export default MenuPage;