import React from 'react'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import github from '../img/github.png'
import git from '../img/git.png'

const Skills = () => {
    return (
        <div>
            <h1>
            Skills
            </h1>
            
                <ol>
                    <li><strong>HTML</strong>  <img src={html} className="html" alt={html}/></li>
                    <li><strong>CSS</strong>  <img src={css} className="css" alt={css}/></li>
                    <li><strong>JavaScript</strong>  <img src={js} className="html" alt={js}/></li>
                    <li><strong>React</strong>  <img src={react} className="react" alt={react}/></li>
                    <li><strong>Github</strong>  <img src={github} className="github" alt={github}/></li>
                    <li><strong>Git</strong>  <img src={git} className="git" alt={git}/></li>
                    
                </ol>
            
            

        </div>
    )
}
export default Skills