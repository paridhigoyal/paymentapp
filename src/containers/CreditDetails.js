
import {connect} from 'react-redux'
import CreditCardOrderDetail from '../components/CreditCardOrderDetail'
import {creditCard} from '../actions/index'

const mapStateToProps = (state) => ({
  
 creditcard: state.creditcard,
 
 
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(creditCard())
  
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCardOrderDetail)