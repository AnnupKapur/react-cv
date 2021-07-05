import React from 'react'
import EachSkill from './EachSkill'
import '../styles/rootStyle.css'
import '../styles/skillsStyle.css'

const Skills = ({mySkills}) => {
	return (
		<div className="page-section skills-container" id="skills">
			<div className="section-header skills-header">
			<span className="header-code-start">&lt;</span>
				<h1>Skills</h1>
				<span className="header-code-end">/&gt;</span>
			</div>
			<div className="skills-content">
				{
					mySkills.map(skill => (
						<EachSkill skillName={skill.skill} />
					)) 
				}
			</div>
		</div>
	)
}

export default Skills