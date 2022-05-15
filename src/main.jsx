import ReactDOM from "react-dom/client";
import { useState } from "react";
import HomePage from "./modules/Homepage";
import ShopPage from "./modules/ShopPage";
import CartPage from "./modules/Cartpage";



function App(){
    const [stateName, setStateName] = useState('');
    function updateUserInfo(userName){
        setStateName(userName);
        console.log(userName);
    }

    const [stateIsLoggedIn, setStateIsLoggedIn] = useState("HomePage");
    function updateLogInStatus(status){
        setStateIsLoggedIn(status)
    }

    const [total, setTotal] = useState(0);
    function totalProducts(tot){
        setTotal(tot);
    }

    const [totalPrice, setTotalPrice] = useState(0);
    function totalPriceMain(tot){
        setTotalPrice(tot);
    }

    const[totalDog1, setTotalDog1] = useState(0);
    const[totalDog2, setTotalDog2] = useState(0);
    const[totalDog3, setTotalDog3] = useState(0);
    const[totalDog4, setTotalDog4] = useState(0);
    const[totalDog5, setTotalDog5] = useState(0);
    function totalDogs(totDog1,totDog2,totDog3,totDog4,totDog5){
        setTotalDog1(totDog1);
        setTotalDog2(totDog2);
        setTotalDog3(totDog3);
        setTotalDog4(totDog4);
        setTotalDog5(totDog5);
    }


    return (
        <>
        {stateIsLoggedIn == "ShopPage" && <ShopPage updateLogInStatus={updateLogInStatus} userName={stateName} totalProducts={totalProducts} totalPriceMain={totalPriceMain} totalDogs ={totalDogs} />}
        {stateIsLoggedIn == "HomePage" && <HomePage updateLogInStatus={updateLogInStatus} updateUserInfo={updateUserInfo}/>}
        {stateIsLoggedIn == "Cart" && <CartPage updateLogInStatus={updateLogInStatus} userName={stateName} total={total} totalPrice={totalPrice} 
        totalDog1 = {totalDog1} 
        totalDog2 = {totalDog2} 
        totalDog3 = {totalDog3} 
        totalDog4 = {totalDog4} 
        totalDog5 = {totalDog5} />}
        </>
    )
}


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);