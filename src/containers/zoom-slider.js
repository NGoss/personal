import { connect } from 'react-redux';
import ZoomSlider from '../components/zoom/zoom-slider';
import { setZoomLevel } from '../actions';

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleZoomChange: (event) => {
			dispatch(setZoomLevel(parseInt(event.target.value)));
		}
	};
};

const ZoomSliderContainer = connect(mapStateToProps, mapDispatchToProps)(ZoomSlider);

export default ZoomSliderContainer;
