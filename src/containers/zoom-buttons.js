import { connect } from 'react-redux';
import ZoomSlider from '../components/zoom-buttons';
import { incrementZoomLevel, decrementZoomLevel, toggleFullscreen } from '../actions';

const leftNavOpenMult = 0.8;

const mapStateToProps = (state) => {
	const leftNavMultiplier = state.leftNavOpen ? leftNavOpenMult : 1
	return {
		zoomLevel: state.zoomLevel * leftNavMultiplier,
		fullscreen: state.fullscreen
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleZoomOut: () => {
			dispatch(decrementZoomLevel())
		},
		handleZoomIn: () => {
			dispatch(incrementZoomLevel())
		},
		handleFullscreen: () => {
			dispatch(toggleFullscreen())
		}
	}
}

const ZoomButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ZoomSlider)

export default ZoomButtonsContainer
