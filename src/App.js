import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import UnderDev from './components/UnderDev';

import Profile from './components/Profile';

function App() {

  const [mySkills] = useState(
    [
      {id:0, skill:"HTML5", value:100},
      {id:1, skill:"CSS3", value:100},
      {id:2, skill:"XML", value:100},
      {id:3, skill:"PHP", value:100},
      {id:4, skill:"Javascript", value:100},
      {id:5, skill:"SQL (MySQL & Oracle)", value:100},
      {id:6, skill:"NoSQL (MongoDB etc)", value:90},
      {id:7, skill:"Java", value:80},
      {id:8, skill:"Python", value:90},
      {id:9, skill:"C#", value:80},
      {id:10, skill:"Swift", value:80},
      {id:11, skill:"REACT", value:90},
      {id:12, skill:"JSON", value:90},
      {id:13, skill:"Node.js", value:70},
      {id:14, skill:"Vue.js", value:70},
      {id:15, skill:"D3.js", value:70},
      {id:16, skill:"AJAX", value:60},
      {id:17, skill:"Wordpress", value:90},
      {id:18, skill:"Object Oriented Programming", value:100},
      {id:19, skill:"Functional Programming", value:100},
      {id:20, skill:"Implementing APIs", value:100},
      {id:21, skill:"Responsive Web Design & Development", value:100},
      {id:22, skill:"Algorithms & Data Structures", value:100},
      {id:23, skill:"Front-End Development Libraries", value:100},
      {id:24, skill:"Data Visualisation", value:100},
      {id:25, skill:"GitHub", value:100},
      {id:26, skill:"Visual Studio Code", value:100},
      {id:27, skill:"XCode", value:100},
      {id:28, skill:"Atom", value:60},
      {id:29, skill:"Eclipse", value:60},
      {id:30, skill:"Adobe Dreamweaver", value:60},
      {id:31, skill:"Microsoft Office", value:100},
      {id:32, skill:"Microsoft Teams", value:100}
    ]
  )

  const [isDev] = useState(
    true);
    
  let output = '';
  
  if (isDev===true){
      output = <UnderDev />
    }
  else{
    output = <Profile mySkills={mySkills} />
  }


  return (
    <div className="App">
      {output}
    </div>
  );
}

export default App;