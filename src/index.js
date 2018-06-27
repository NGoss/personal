import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Viewer from './components/viewer'
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import './reset.css'

const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<Viewer />
	</Provider>,
	document.getElementById('root'))
registerServiceWorker()
