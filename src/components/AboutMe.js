import React from 'react'
import '../styles/rootStyle.css'
import '../styles/aboutMeStyle.css'

const AboutMe = () => {
	return (
		<div className="aboutMe-container page-section" id="aboutMe">
			<div className="section-header about-header">
				<span className="header-code-start">&lt;</span>
				<h1>About Me</h1>
				<span className="header-code-end">/&gt;</span>
			</div>
			<div className="about-content">
				<h3>It's still magic, even if you know how it's done.</h3>
				<span className="citation">-Terry Pratchett, A Hat Full of Sky</span>
				<p>
					Regardless of how much I learn, I am forever mesmerised by the scope of technology in the modern world.
				</p>
				<p>
					Since the moment I wrote my first lines of HTML code in Notepad on a Windows XP desktop PC at the age of 14, I was captivated, and wanted to be a part of this revolution.
				</p>
				<p>
					Upon gaining a degree in Computer Science, I started my own coding and maths academy, growing to a turnover of £1million within 5 years.
				</p>
				<p>
					All the while, still offering my developer services on a freelance basis, working on both small individual builds and larger team based projects, creating websites, apps, databases, writing algorithms for machine learning and much more.
				</p>
				<p>
					I have been riding my childhood tech dreams ever since I first opened that Notepad file at the age of 14.
				</p>
			</div>
		</div>
	)
}

export default AboutMe