import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export const MenuContext = createContext(null)

const MenuContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("")
    const [foodlist,setFoodList] =useState([])

    const addToCart =async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else if (cartItems[itemId] > 9) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}}) 
        }
    }
    useEffect(() => {
        for (const item in cartItems) {
            if (cartItems[item] > 9) {
                alert(`only can add 10 items`);
                break; // Assuming you want to trigger the alert only once
            }
        }
    }, [cartItems]);

    const removeFromCart =async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = foodlist.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    const loadCartData=async (token)=>{
        const response= await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    const contextValue = {
        foodlist,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <MenuContext.Provider value={contextValue}>
            {props.children}
        </MenuContext.Provider>
    )
}
export default MenuContextProvider;