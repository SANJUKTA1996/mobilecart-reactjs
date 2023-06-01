import React from 'react';
function Header(props){
    console.warn("Header",props.data)

    return(
        <div>
            <div className='ad-to-cart img'>
                <span className='cart-count'>{props.data.length}</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukMMVW4SDI35yDeyR_Vfxg4DCbpblu_WnOb2U4lm3gNjt_xw9RmaPpZSSm-mXbN8EQNs&usqp=CAU"/>
            </div>
           
        </div>
    )

}
export default Header;