import React, { Component } from 'react';
import { EducationHeader } from './Education.js'
import '../styles/main.css'





class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            experienceCount: 1,
            experiences: []
        }
    }

    createFirstBullet(e) {
        if(e.target.value == '' && e.target.id == "responsibilities" ) {
            e.target.value += "• ";
        }
    }

    //  handleChange(e) {
       
    //     e.target.blur();
    //     if(e.key == "Enter" && e.target.id == "responsibilities") {
    //         e.preventDefault();
    //         e.target.focus();
            
    //         let dot = "•";
            
    //         console.log('it detected');
    //         e.target.value += `\n${dot} `;
    //         // if(e.target.value == '' && e.target.id == "responsibilities" ) {
    //         //     e.target.value += "• ";
    //         // }
    //     } else {
    //     e.target.focus();
    //      this.setState({
    //          [e.target.id]: e.target.textContent
    //     })
    //     }
        
    //  }

    render() {
        return (
            <div>
                <EducationHeader title="Skills" userID="skills"></EducationHeader>

                <div className="sub-heading-container skills-container" id="major-container">
                    <textarea className="responsibilities skills" id="responsibilities left-skills skills" placeholder="Type skills as you see fit" contentEditable="true" ></textarea>
                    <textarea className="responsibilities skills" id="responsibilities right-skills skills" placeholder="Type skills as you see fit" contentEditable="true" ></textarea>
                </div>

                {/* {this.state.experiences.map((experience, index) => {
                    return <ExperienceContent key={index}></ExperienceContent>
                })} */}

                {/* <button className="add-button bottom-button" onClick={() => this.addExperience()}>Add Experience</button>
                <button className="delete-Button bottom-button" onClick={() => this.deleteExperience()}>Delete Experience</button> */}

            </div>
        )
    }
}

export default Skills;