import { useState, useEffect } from 'react'
import './App.scss'
import { connect, sendMsg } from './api'
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput/ChatInput'

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

	const send = (event) => {
		if (event.keyCode === 13) {
			sendMsg(event.target.value);
			event.target.value = "";
		}
	}

	return (
		<div className="App">
			<Header />
			<ChatHistory chatHistory={state.chatHistory} />
			<ChatInput send={send} />
		</div>
	)
}

export default App
