import React from 'react'

const Welcome = () => {
	return (
		<div className="welcome-container">
			<h1 className="welcome-hero">
				<span className="code-start">&lt; </span>
				Mr Annup Raj Kapur
				<span className="code-end"> /&gt;</span>
				<span className="name-pronounce">--Pronounced: ah-NOOP</span>
			</h1>
			<p className="welcome-subtext">Developer By Day</p>
			<p className="welcome-subtext welcome-subtext-fun">
				<span className="welcome-evil">Evil genius</span>
				by night
			</p>
		</div>
	)
}

export default Welcome