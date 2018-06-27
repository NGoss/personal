import { connect } from 'react-redux';
import TopToolbar from '../components/top-toolbar';
import { displayLeftNav } from '../actions';

const mapStateToProps = (state) => {
	return {
		leftNavOpen: state.leftNavOpen.desktop,
		search: state.search,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleLeftNavExpand: (isMobile) => {
			return isMobile
				? () => {dispatch(displayLeftNav('mobile'))}
				: () => {dispatch(displayLeftNav('desktop'))}
		}
	}
}

const TopToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(TopToolbar);

export default TopToolbarContainer;
