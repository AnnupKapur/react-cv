import React from 'react'
import '../styles/rootStyle.css'
import '../styles/navStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock, faUserCircle, faCode, faFolderOpen, faUniversity, faAddressCard} 
	from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
	return (
		<div className="nav-container">
			<ul className="nav-bar">

			<a href="#welcome">
				<li className="nav-item">
					<span className="nav-icon">
						<FontAwesomeIcon icon={faHandSpock} />
					</span>
					<span className="nav-text">Welcome</span>
				</li>
			</a>

			<a href="#aboutMe">
				<li className="nav-item">
					<span className="nav-icon">
						<FontAwesomeIcon icon={faUserCircle} /></span>
					<span className="nav-text">About Me</span>
				</li>
			</a>

				<li className="nav-item">
					<span className="nav-icon">
						<FontAwesomeIcon icon={faCode} /></span>
					<span className="nav-text">Skills</span>
				</li>

				<li className="nav-item">
					<span className="nav-icon">
						<FontAwesomeIcon icon={faFolderOpen} /></span>
					<span className="nav-text">Projects</span>
				</li>

				<li className="nav-item">
					<span className="nav-icon">
						<FontAwesomeIcon icon={faUniversity} /></span>
					<span className="nav-text">Work &amp; Study</span>
				</li>

				<li className="nav-item">
					<span className="nav-icon">
						<FontAwesomeIcon icon={faAddressCard} /></span>
					<span className="nav-text">Contact</span>
				</li>

			</ul>
		</div>
	)
}

export default Navbar
