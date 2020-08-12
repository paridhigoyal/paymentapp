
import {connect} from 'react-redux'
import CashOnDeliveryOrderDetail from '../components/CashOnDeliveryOrderDetail'
import {cashOnDelivery} from '../actions/index'

const mapStateToProps = (state) => ({
  
 cashondelivery: state.cashondelivery,
 
 
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(cashOnDelivery())
  
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CashOnDeliveryOrderDetail )