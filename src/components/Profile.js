import React from 'react'
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Profile = ({mySkills}) => {
	return (
		<>	
			<Navbar />
			<Welcome />
			<AboutMe />
			<Skills mySkills={mySkills}/>
			<Projects />
		</>
	)
}

export default Profile
