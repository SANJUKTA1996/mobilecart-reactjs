import React from 'react';
function Home(props){
    //console.warn("Home",props.data)
    console.warn("props",props)

    return(
        <div>
           
            <h1>Heading page in Redux</h1>
            <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png" alt="Iphone"/>
          
            </div>
            <div className='text-wrapper item'>
                <span>I-phone</span>
                <span>Price: $1000.00</span>
            </div>
            <div className='btn-wrapper button'>
                <button onClick={()=>props.addToCartHandler({price:1000,name:'I phone 11pro'})}>Add-To-Cart</button>
            </div>
            <div className='btn-wrapper-btn button  '>
                <button onClick={()=>props.removeToCartHandler()}>Remove-To-Cart</button>
            </div>

            </div>
        </div>
    )

}
export default Home;