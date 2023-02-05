import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlane } from "../store/plane/planeSlice";
import '../styles/product.css';
import { Link } from "react-router-dom";
import Header from '../partials/header';
import Room from "./room";
import { addItem } from "../store/cart/cartSlice";

const ProductPart = ({image_gal_5, image_gal_4, image_gal_3, image_gal_2, image_gal_1, ID, planeImage, title, name, category, materials, description, size, price}) => {
    const [room, setRoom] = useState(true);
    const [tub, setTub] = useState(1);

    const { id } = useParams();
    const dispatch = useDispatch();
    const { plane } = useSelector((state) => state.plane);

    useEffect(() => {
      dispatch(getPlane(id));
    }, [dispatch, id]);

    const onClickAdd = () => {
        const item = {
            ID,
            planeImage,
            title,
            name,
            price
        };
        dispatch(addItem(item));
    }

    return room ? (
            <>
                <Header/>
                <div className="product">
                    <div className="product-columns">
                        <div className="product-column-left">
                            <div className="product-column-left-content">
                            <div className="pr-hide">
                                <Link to="/" className="product-column-right-back">
                                    <p className="product-column-right-back-text product-column-right-back-text-arrow">Back</p>
                                </Link>
                                <h3 className="product-column-right-back-title">Wallowing Breeze </h3>
                                <p className="product-column-right-back-text">Hettie Richards</p>
                                    </div>
                                <div className="product-column-left-content-sl">
                                    <div className={tub === 1 ? "product-column-left-slider slider-for" : "hide"}>
                                        <img className="product-column-left-slider-img" src={planeImage} alt="" />
                                    </div>
                                    <div className={tub === 2 ? "product-column-left-slider slider-for" : "hide"}>
                                        <img className="product-column-left-slider-img" src={image_gal_2} alt="" />
                                    </div>
                                    <div className={tub === 3 ? "product-column-left-slider slider-for" : "hide"}>
                                        <img className="product-column-left-slider-img" src={image_gal_3} alt="" />
                                    </div>
                                    <div className={tub === 4 ? "product-column-left-slider slider-for" : "hide"}>
                                        <img className="product-column-left-slider-img" src={image_gal_4} alt="" />
                                    </div>
                                    <div className={tub === 5 ? "product-column-left-slider slider-for" : "hide"}>
                                        <img className="product-column-left-slider-img" src={image_gal_5} alt="" />
                                    </div>
                                </div>
                                <div className="tabs">
                                    <div onClick={() => setTub(1)} className={tub === 1 ? "tabs-link" : "tabs-link opas"}>
                                        <img src={planeImage} alt="" />
                                    </div>
                                    <div onClick={() => setTub(2)} className={tub === 2 ? "tabs-link" : "tabs-link opas"}>
                                        <img src={image_gal_2} alt="" />
                                    </div>
                                    <div onClick={() => setTub(3)} className={tub === 3 ? "tabs-link" : "tabs-link opas"}>
                                        <img src={image_gal_3} alt="" />
                                    </div>
                                    <div onClick={() => setTub(4)} className={tub === 4 ? "tabs-link" : "tabs-link opas"}>
                                        <img src={image_gal_4} alt="" />
                                    </div>
                                    <div onClick={() => setTub(5)} className={tub === 5 ? "tabs-link" : "tabs-link opas"}>
                                        <img src={image_gal_5} alt="" />
                                    </div>
                                </div>
                            <div className="product-column-left-bottom">
                                <div onClick={() => setRoom(false)} className="product-column-left-bottom-box">
                                    <div className="left-ico"></div>
                                    <p className="product-column-left-bottom-box-text">View in a room</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="product-column-right">
                            <div className="product-column-right-content">
                            <div className="product-column-right-block">
                                <div className="pr-show">
                                <Link to="/" className="product-column-right-back">
                                    <p className="product-column-right-back-text product-column-right-back-text-arrow">Back</p>
                                </Link>
                                <h3 className="product-column-right-back-title">{title}</h3>
                                <p className="product-column-right-back-text">{name}</p>
                                </div>
            
                                <p className="product-column-right-back-info">{materials}<br/>{size}<br/>{category}</p>
            
                                <p className="product-column-right-back-info">{description}</p>
                            </div>
                            <div className="product-column-right-block-last">
                                <h3 className="product-column-right-block-last-price">&#36; {price}</h3>
                                <button onClick={onClickAdd} className="product-column-right-block-last-send">Add to cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        
       ) : (
        plane && (
            <Room roomSize={plane.size} roomImg={plane.image} getBack={() => setRoom(true)} />
        )
       )
}

export default ProductPart;


















// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getPlane } from "../store/plane/planeSlice";
// import '../styles/product.css';
// import { Link } from "react-router-dom";
// import Header from '../partials/header';
// import Room from "./room";
// import { addItem } from "../store/cart/cartSlice";

// const ProductPart = ({ID, planeImage, title, name, category, materials, description, size, price}) => {
//     const [room, setRoom] = useState(true);

//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const { plane } = useSelector((state) => state.plane);

//     useEffect(() => {
//       dispatch(getPlane(id));
//     }, [dispatch, id]);

//     const onClickAdd = () => {
//         const item = {
//             ID,
//             planeImage,
//             title,
//             name,
//             price
//         };
//         dispatch(addItem(item));
//     }

//     return room ? (
//             <>
//                 <Header/>
//                 <div className="product">
//                     <div className="product-columns">
//                         <div className="product-column-left">
//                             <div className="product-column-left-content">
//                             <div className="pr-hide">
//                                 <Link to="/" className="product-column-right-back">
//                                     <p className="product-column-right-back-text product-column-right-back-text-arrow">Back</p>
//                                 </Link>
//                                 <h3 className="product-column-right-back-title">Wallowing Breeze </h3>
//                                 <p className="product-column-right-back-text">Hettie Richards</p>
//                                     </div>
//                                 <div className="product-column-left-content-sl">
//                                 <div className="product-column-left-slider slider-for">
//                                     <img className="product-column-left-slider-img" src={planeImage} alt="" />
//                                 </div>
//                                 </div>
//                             <div className="product-column-left-bottom">
//                                 <div onClick={() => setRoom(false)} className="product-column-left-bottom-box">
//                                     <div className="left-ico"></div>
//                                     <p className="product-column-left-bottom-box-text">View in a room</p>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                         <div className="product-column-right">
//                             <div className="product-column-right-content">
//                             <div className="product-column-right-block">
//                                 <div className="pr-show">
//                                 <Link to="/" className="product-column-right-back">
//                                     <p className="product-column-right-back-text product-column-right-back-text-arrow">Back</p>
//                                 </Link>
//                                 <h3 className="product-column-right-back-title">{title}</h3>
//                                 <p className="product-column-right-back-text">{name}</p>
//                                 </div>
            
//                                 <p className="product-column-right-back-info">{materials}<br/>{size}<br/>{category}</p>
            
//                                 <p className="product-column-right-back-info">{description}</p>
//                             </div>
//                             <div className="product-column-right-block-last">
//                                 <h3 className="product-column-right-block-last-price">&#36; {price}</h3>
//                                 <button onClick={onClickAdd} className="product-column-right-block-last-send">Add to cart</button>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
        
//        ) : (
//         plane && (
//             <Room roomSize={plane.size} roomImg={plane.image} getBack={() => setRoom(true)} />
//         )
//        )
// }

// export default ProductPart;
