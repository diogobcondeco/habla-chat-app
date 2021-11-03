import React, { useState } from "react"
import "./Message.scss"

const Message = ({message}) => {
	let temp = JSON.parse(message);
	const [state, setState] = useState({
		message: temp
	})

	return <div className="Message">{state.message.body}</div>;
}

export default Message