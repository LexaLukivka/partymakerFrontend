import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as events from 'src/redux/event/list/action'

const initMapStateToProps = store => ({
  events: store.event.listReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    events: bindActionCreators(events, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
