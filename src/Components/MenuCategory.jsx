import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({items, title, paragraph, coverImg}) => {
    return (
        <>
        {title && <Cover img={coverImg} title={title} paragraph={paragraph}></Cover>}
        <div className="grid lg:grid-cols-2 gap-4 w-10/12 mx-auto">
        {items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
        </div>
        </>
    );
};

export default MenuCategory;