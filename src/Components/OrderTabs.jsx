import FoodCard from "./FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-10/12 mx-auto">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;








// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import FoodCard from "./FoodCard";

// const OrderTab = ({ items }) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + "</span>";
//         },
//     };
//     return (
//         <div >

//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className='grid md:grid-cols-3 gap-10'>
//                         {
//                             items.map(item => <FoodCard
//                                 key={item._id}
//                                 item={item}
//                             ></FoodCard>)
//                         }
//                     </div>

//                 </SwiperSlide>

//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;