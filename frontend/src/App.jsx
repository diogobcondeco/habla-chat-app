import { useEffect } from 'react'
import './App.css'
import { connect, sendMsg } from './api'
import Header from './components/Header/Header'

function App() {
	useEffect(() => {
		connect()
	}, [])

	const send = () => {
		console.log("hello");
		sendMsg("hello");
	}

	return (
		<div className="App">
			<Header />
			<button onClick={send}>Hit</button>
		</div>
	)
}

export default App
