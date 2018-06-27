import { connect } from 'react-redux';
import Content from '../components/content';

const leftNavOpenMult = 0.8;

const mapStateToProps = (state) => {
	const leftNavMultiplier = state.leftNavOpen ? leftNavOpenMult : 1
	return {
		leftNavOpen: state.leftNavOpen.desktop,
		zoomLevel: state.zoomLevel * leftNavMultiplier,
	}
}

const ContentContainer = connect(mapStateToProps)(Content);

export default ContentContainer;
