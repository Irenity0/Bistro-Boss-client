import SectionTitle from "./SectionTilie";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular') 

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch("data.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular') 
    //         setMenu(popularItems)
    //     });
    // }, [])
    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle heading={"From our menu"} subHeading={"Check It Out"}></SectionTitle>
        <div className="grid lg:grid-cols-2 gap-4">
        {popular.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
        </div>
        </div>
    );
};

export default PopularMenu;