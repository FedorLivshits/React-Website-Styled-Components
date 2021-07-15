import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {GlobalStyle} from './globalStyles'
import Navbar from './components/Navbar/Navbar'

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
		</Router>
	)
}

export default App
