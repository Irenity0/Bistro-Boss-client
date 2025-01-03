import { Helmet } from "react-helmet-async";
import Cover from '../Components/Cover'
import banner from '../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import useMenu from '../hooks/useMenu'
import OrderTab from "../Components/OrderTabs";
import { useParams } from "react-router-dom";

const ShopPage = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const dessert = menu.filter(item => item.category === 'dessert') 
    const soup = menu.filter(item => item.category === 'soup') 
    const salad = menu.filter(item => item.category === 'salad') 
    const pizza = menu.filter(item => item.category === 'pizza') 
    const drinks = menu.filter(item => item.category === 'drinks') 

    return (
        <>
        <Helmet> 
            <title>Bistro Boss | Shop</title>
        </Helmet>
        <Cover img={banner} title={'Our Shop'} paragraph={'Would you like to try a dish?'}></Cover>
        <Tabs className={'w-10/12 mx-auto mt-6'} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soups</Tab>
                <Tab>Desserts</Tab>
                <Tab>Drinks</Tab> 
            </TabList>
            <TabPanel>
                <OrderTab items={salad}></OrderTab>
            </TabPanel>
            
            <TabPanel>
                <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            
            <TabPanel>
                <OrderTab items={soup}></OrderTab>
            </TabPanel>
            
            <TabPanel>
                <OrderTab items={dessert}></OrderTab>
            </TabPanel>
            
            <TabPanel>
                <OrderTab items={drinks}></OrderTab>
            </TabPanel>
        </Tabs>
        </>
    );
};

export default ShopPage;