import { connect } from "react-redux";
import {addToCart,removeToCart} from '../Services/Action/action'

import Home from "./Home";
const mapStateToProps=state=>({
   // data:state
   data:state.cardItems
})
const mapDispatchToprops=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToprops)(Home)
