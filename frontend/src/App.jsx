import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect, sendMsg } from './api'

function App() {
	// const [count, setCount] = useState(0)

	useEffect(() => {
		connect()
	}, [])

	const send = () => {
		console.log("hello");
		sendMsg("hello");
	}

	return (
		<div className="App">
			<button onClick={send}>Hit</button>
		</div>
	)
}

export default App
