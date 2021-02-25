import React, { Component } from 'react'
import { EducationHeader } from './Education.js'
import '../styles/main.css'


class ExperienceContent extends Component {

    constructor(props){
        super(props)

        this.state = {
            company: '',
            dateStart: '',
            dateEnd: '',
            position: '',
            location: '',
            responsibilities: ''
        }
    }

    createFirstBullet(e) {
        if(e.target.value == '' && e.target.id == "responsibilities" ) {
            e.target.value += "• ";
        }
    }

     handleChange(e) {
       
        e.target.blur();
        if(e.key == "Enter" && e.target.id == "responsibilities") {
            e.preventDefault();
            e.target.focus();
            
            let dot = "•";
            
            console.log('it detected');
            e.target.value += `\n${dot} `;
            // if(e.target.value == '' && e.target.id == "responsibilities" ) {
            //     e.target.value += "• ";
            // }
        } else {
        e.target.focus();
         this.setState({
             [e.target.id]: e.target.textContent
        })
        }
        
     }
    
    render() {
        return (
            <div>
                {/* <button className="responsiblity-button" onClick={() => this.addResponsibility()}>Add Responsibility</button> */}
                <div className="sub-heading-container">
                    <span className="sub-heading badge" id="company" data-placeholder="Place of Employment" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                    <span id="dateEnd" className="sub-heading-date badge" data-placeholder="End M Y" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                    <span className="date-dash badge">-</span>
                    <span id="dateStart" className="sub-heading-date badge" data-placeholder="Start M Y" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                </div>
                <br></br>
                   
                <div className="sub-heading-container" id="major-container">
                    <span className="sub-heading-descriptor badge" id="position" data-placeholder="Position" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                    <span className="employment-location badge" id="location" data-placeholder="location" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                </div>
                <br></br>
                <div className="sub-heading-container responsiblities-container" id="major-container">
                    <textarea className="responsibilities badge" id="responsibilities" placeholder="Responsibilities... type enter for new bulletpoint" contentEditable="true" onKeyPress={(e) => this.handleChange(e)} onClick={(e) => this.createFirstBullet(e)}></textarea>
                </div>
                <br></br>



                
                <br></br>



            </div>
        )
    }
}

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            experienceCount: 1,
            experiences: [<ExperienceContent key="0"></ExperienceContent>]
        }
    }

    async addExperience() {
        console.log("clicked");
        await this.setState((prevState) => ({
             experiences: prevState.experiences.concat((<ExperienceContent key={prevState.experiences.length}></ExperienceContent>))

        }))
    }

    async deleteExperience() {
        let currentEdArray = this.state.experiences;
        await console.log(currentEdArray);
        await currentEdArray.pop();

        await this.setState((prevState) => ({
            experiences: currentEdArray
        }))
    }

    render() {
        return (
            <div>
                <EducationHeader title="Experience"></EducationHeader>

                {this.state.experiences.map((experience, index) => {
                    return <ExperienceContent key={index}></ExperienceContent>
                })}

                <button className="add-button bottom-button" onClick={() => this.addExperience()}>Add Experience</button>
                <button className="delete-Button bottom-button" onClick={() => this.deleteExperience()}>Delete Experience</button>

            </div>
        )
    }
}

export default Experience;