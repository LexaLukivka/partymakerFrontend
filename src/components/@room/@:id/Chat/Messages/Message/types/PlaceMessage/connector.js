import { connect } from 'react-redux'
import actions from 'src/redux/action'
import { bindActionCreators } from 'redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => {
  return ({
    actions: {
      rooms: {
        update: bindActionCreators(actions.rooms.update, dispatch),
      },
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)
