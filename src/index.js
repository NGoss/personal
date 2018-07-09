import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Viewer from './components/viewer'
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import './reset.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const store = createStore(rootReducer)

const palette = {
	primary: {
		light: '#81aee3',
		main: '#005bc6',
		dark: '#003394',
		contrastText: '#fff'
	},
	secondary: {
		main: '#fff',
		contrastText: '#005bc6'
	}
}

const theme = createMuiTheme({
	palette,
	overrides: {
		MuiInput: {
			underline: {
				'&:after': {
					borderBottomColor: palette.primary.main
				}
			}
		},
		MuiFormLabel: {
			root: {
				'&$focused': {
					color: palette.primary.main
				}
			},
			focused: {}
		},
		MuiTabs: {
			indicator: {
				backgroundColor: palette.primary.main
			}
		}
	}
});

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<Viewer />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'))
registerServiceWorker()
