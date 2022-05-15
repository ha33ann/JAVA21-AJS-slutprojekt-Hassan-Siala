export default function CartPage({ userName, updateLogInStatus, total, totalPrice, totalDog1, totalDog2, totalDog3, totalDog4, totalDog5 }) {

    function product1() {
        if (totalDog1 > 0) {
            return (
                <>
                    <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" ></img>
                    <p>amount: {totalDog1}</p>
                </>
            )
        }
    }
    function product2() {
        if (totalDog2 > 0) {
            return (
                <>
                    <img src="https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg" ></img>
                    <p>amount: {totalDog2}</p>
                </>
            )
        }
    }
    function product3() {
        if (totalDog3 > 0) {
            return (
                <>
                    <img src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" ></img>
                    <p>amount: {totalDog3}</p>
                </>
            )
        }
    }
    function product4() {
        if (totalDog4 > 0) {
            return (
                <>
                    <img src="https://i.natgeofe.com/n/3faa2b6a-f351-4995-8fff-36d145116882/domestic-dog_16x9.jpg" ></img>
                    <p>amount: {totalDog4}</p>
                </>
            )
        }
    }
    function product5() {
        if (totalDog5 > 0) {
            return (
                <>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg" ></img>
                    <p>amount: {totalDog5}</p>
                </>
            )
        }
    }

    function handleClick(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
    }


    function purchase(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
        alert("You purchased " + total + " products with the price of: " + totalPrice + "SEK")
    }

    return (

        <>
            <h1>Thank you for ordering, {userName}</h1>
            <h1>Total products: {total}</h1>
            <h1>Total price: {totalPrice}SEK</h1>
            <h1>Press purchase to buy the items</h1>
            {product1()}
            {product2()}
            {product3()}
            {product4()}
            {product5()}
            <button onClick={purchase}>Purchase</button>
            <button onClick={handleClick}>Log Out</button>
        </>
    )
}