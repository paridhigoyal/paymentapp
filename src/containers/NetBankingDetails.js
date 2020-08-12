import {connect} from 'react-redux'
import NetBankingOrderDetail from '../components/NetBankingOrderDetail'
import {netBanking} from '../actions/index'

const mapStateToProps = (state) => ({
  
 netbanking: state.netbanking,
 
 
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(netBanking())
  
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetBankingOrderDetail)