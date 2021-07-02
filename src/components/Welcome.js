import React from 'react'
import '../styles/rootStyle.css'
import '../styles/welcomeStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock, faUserCircle, faCode, faFolderOpen, faUniversity, faAddressCard} 
	from '@fortawesome/free-solid-svg-icons'

const Welcome = () => {
	return (
		<div className="welcome-container">
			<div className="welcome-hero">
				<span className="code-start">&lt; </span>
				<h1>Mr Annup Raj Kapur</h1>
				<span className="code-end"> /&gt;</span>
			</div>
			<div className="welcome-subtext">
				<p>Developer by day</p>
			</div>
			<div className="welcome-subtext-fun">
				<p>
					<span className="welcome-evil">Evil genius </span>
					by night
				</p>
			</div>
		</div>
	)
}

export default Welcome