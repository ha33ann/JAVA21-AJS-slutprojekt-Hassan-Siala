import { useState } from "react";
import ProductDetails from "./ProductDetails";


export default function ShopPage({ updateLogInStatus, userName, totalProducts, totalPriceMain, totalDogs }) {

    const Product1 = {
        name: "Max",
        url: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        price: 100,
        info: "Get this cute dog for ONLY 100 SEK!!",
        id: 1
        
    }

    const Product2 = {
        name: "Charlie",
        url: "https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg",
        price: 200,
        info: "Get this cute dog for ONLY 200 SEK!!",
        id: 2

    }
    const Product3 = {
        name: "Teddy",
        url: "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
        price: 300,
        info: "Get this cute dog for ONLY 300 SEK!!",
        id: 3

    }
    const Product4 = {
        name: "Bear",
        url: "https://i.natgeofe.com/n/3faa2b6a-f351-4995-8fff-36d145116882/domestic-dog_16x9.jpg",
        price: 400,
        info: "Get this cute dog for ONLY 400 SEK!!",
        id: 4

    }

    const Product5 = {
        name: "Milo",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg",
        price: 500,
        info: "Get this cute dog for ONLY 500 SEK!!",
        id: 5

    }

    const [sum, setSum] = useState(0);
    const [Price, setPrice] = useState(0);
    const [Dog1, setDog1] = useState(0);
    const [Dog2, setDog2] = useState(0);
    const [Dog3, setDog3] = useState(0);
    const [Dog4, setDog4] = useState(0);
    const [Dog5, setDog5] = useState(0);

    function totalSum(price, id) {
        setSum(sum + 1)
        setPrice(Price + price)

        if (id == 1){
            setDog1(Dog1 + 1);
        }
        else if (id == 2){
            setDog2(Dog2 + 2);
        }
        else if (id == 3){
            setDog3(Dog3 + 1);
        }
        else if (id == 4){
            setDog4(Dog4 + 1);
        }
        else {
            setDog5(Dog5 + 1);
        }

    }

    function removeFromSum(price) {
        setSum(sum - 1);
        setPrice((sum - 1) * price)

        if (id == 1){
            setDog1(Dog1 - 1);
        }
        else if (id == 2){
            setDog2(Dog2 - 1);
        }
        else if (id == 3){
            setDog3(Dog3 - 1);
        }
        else if (id == 4){
            setDog4(Dog4 - 1);
        }
        else {
            setDog5(Dog5 - 1);
        }
    }

    function clickToHomePage(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
    }

    function goToCart() {
        totalProducts(sum);
        totalPriceMain(Price);
        totalDogs(Dog1, Dog2, Dog3, Dog4, Dog5);
        updateLogInStatus("Cart");
    }


    return (
        <>
            <h1>Welcome {userName}</h1>

            <div className="sticky-box">

                <p>Products: {sum}</p>
                <button onClick={goToCart}>Go to cart</button>
                <button onClick={clickToHomePage}>Log Out</button>

            </div>

            <br />
            <ProductDetails pInfo={Product1} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductDetails pInfo={Product2} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductDetails pInfo={Product3} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductDetails pInfo={Product4} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductDetails pInfo={Product5} totalSum={totalSum} removeFromSum={removeFromSum} />

        </>
    )
}