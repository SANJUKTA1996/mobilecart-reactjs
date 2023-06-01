import {  connect } from "react-redux";
import { addToCart } from "../Services/Action/action";

import Header from "../Components/Header";
const mapStateToProps=state=>({
   // data:state
   data:state.cardItems
})
const mapDispatchToprops=dispatch=>({

})
export default connect(mapStateToProps,mapDispatchToprops)(Header)
