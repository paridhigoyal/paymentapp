import {connect} from 'react-redux'
import DebitCardOrderDetail from '../components/DebitCardOrderDetail'
import {debitCard} from '../actions/index'

const mapStateToProps = (state) => ({
  
 debitcard: state.debitcard,
 
 
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(debitCard())
  
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DebitCardOrderDetail)