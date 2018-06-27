import { connect } from 'react-redux'
import LeftNavPanel from '../components/left-nav-panel'
import { closeLeftNav } from '../actions'

const mapStateToProps = (state) => {
	return {
		leftNavOpen: state.leftNavOpen,
		user: state.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLeftNavClose(isMobile) {
			return isMobile
				? () => {dispatch(closeLeftNav('mobile'))}
				: () => {dispatch(closeLeftNav('desktop'))}
		}
	}
}

const LeftNavPanelContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavPanel)

export default LeftNavPanelContainer
