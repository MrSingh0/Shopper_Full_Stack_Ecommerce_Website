import React, {createContext, useState} from "react";
import all_product from '../Components/Assets/all_product';


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let index=0; index<all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider= (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId)=>{
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}));
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product) => product.id ===Number(item));
                totalAmount += itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    
    const contextValue = {getTotalCartAmount, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;


// import React, {createContext, useEffect, useState} from "react";
// import all_product from "../Components/Assets/all_product";

// export const ShopContext = createContext(null);

// const getDefaultCart = () =>{
//     let cart = {};
//     for(let index=0; index < all_product.length+1; index++){
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProvider= (props) =>{

//     const [all_product, setAll_Products] = useState([]);
//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     useEffect(() => {
//         console.log("Inside Use Effect Block");
//         fetch('http://localhost:4000/allproducts')
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("Data from server:", data);
//                 setAll_Products(data);
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }, []);
    
    

//     const addToCart = (itemId)=>{
//         setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}));
//     }

//     const removeFromCart = (itemId) =>{
//         setCartItems((prev) =>({...prev, [itemId]:prev[itemId]-1}))
//     }

//     const getTotalCartAmount = () =>{
//         let totalAmount = 0;
//         for(const item in cartItems){
//             if(cartItems[item]>0){
//                 let itemInfo = all_product.find((product) => product.id ===Number(item));
//                 totalAmount += itemInfo.new_price*cartItems[item];
//             }
//         }
//         return totalAmount;
//     }

//     const getTotalCartItems = ()=>{
//         let totalItem = 0;
//         for(const item in cartItems){
//             if(cartItems[item]>0){
//                 totalItem+=cartItems[item];
//             }
//         }
//         return totalItem;
//     }
    
//     const contextValue = {getTotalCartAmount, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart};

//     return(
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;