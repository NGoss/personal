import { connect } from 'react-redux'
import SignIn from '../../components/tools/user-account/sign-in'
import { openSignInModal, closeSignInModal, login } from '../../actions'

const mapStateToProps = (state) => {
	return {
		signInModalOpen: state.signInModal,
		user: state.user,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick() {
			dispatch(openSignInModal())
		},
		signIn(user) {
			dispatch(login(user))
			dispatch(closeSignInModal())
		},
		closeModal() {
			dispatch(closeSignInModal())
		}
	}
}

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignInContainer
