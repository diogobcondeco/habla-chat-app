import { useState, useEffect } from 'react'
import './App.css'
import { connect, sendMsg } from './api'
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory'

function App() {
	const [state, setState] = useState({
		chatHistory: []
	})

	useEffect(() => {
		connect((msg) => {
			console.log("New Message");
			setState({
				chatHistory: [...state.chatHistory, msg]
			})
			console.log(state);
		})
	}, [state])

	const send = () => {
		console.log("hello");
		sendMsg("hello");
	}

	return (
		<div className="App">
			<Header />
			<ChatHistory chatHistory={state.chatHistory} />
			<button onClick={send}>Hit</button>
		</div>
	)
}

export default App
