import React from 'react';
function Home(props) {
    console.log("home", props);
    return (
        <div>
            <h1> Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://s3.amazonaws.com/images.seroundtable.com/google-vanish-1580301557.jpg" alt="Mobile" />
                </div>

                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>  item Price: $100.00
                    </span>
                </div>

                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;