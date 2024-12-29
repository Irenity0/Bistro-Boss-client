import { useState } from "react";
import SectionTitle from "./SectionTilie";
import { useEffect } from "react";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular') 
            setMenu(popularItems)
        });
    }, [])
    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle heading={"From our menu"} subHeading={"Check It Out"}></SectionTitle>
        <div className="grid lg:grid-cols-2 gap-4">
        {menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
        </div>
        </div>
    );
};

export default PopularMenu;