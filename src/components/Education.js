import React, { Component } from 'react'
import '../styles/main.css'

const Test = (props) => {
    console.log(props);
    return (
        <div className='dummy-class'>
            <h1>is anybody out there</h1>
        </div>
    )
}

//header of the education section!!!
const EducationHeader = (props) => {

    return (
        <div className='education-container' id={props.userID} > 
            <h3 className='main-title'>{props.title}</h3>
            <pre className="underline">_______________________________________________________________________________</pre>
        </div>
    )
}

//Main content of the education Section!!!
class EducationContent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            university: '',
            major: '',
            dateStart: '',
            dateEnd: ''
        }
    }

    async handleChange(e) {
        await this.setState({
             [e.target.id]: e.target.textContent
        })
        await console.log(e.target.textContent);
    }

    render() {
        return (
            <div>
                <div className="sub-heading-container">
                    <span className="sub-heading badge" id="university" data-placeholder="Educational Institution" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                    <span id="dateEnd" className="sub-heading-date badge" data-placeholder="End M Y" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                    <span className="date-dash badge">-</span>
                    <span id="dateStart" className="sub-heading-date badge" data-placeholder="Start M Y" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                </div>
                <br></br>
                   
                <div className="sub-heading-container" id="major-container">
                    <span className="sub-heading-descriptor badge" id="major" data-placeholder="Field of study / major" contentEditable="true" onKeyPress={(e) => this.handleChange(e)}></span>
                </div>

                
                <br></br>
            </div>
        )
    }
        

}

//Combintes education content and education header
class Education extends Component {

    constructor(props) {
        super(props)

        this.state = {
            educationCount: 1,
            educations: [<EducationContent key="0"></EducationContent>]
        }
    }

    async addEducation() {
        console.log("clicked");
        await this.setState((prevState) => ({
             educations: prevState.educations.concat((<EducationContent key={prevState.educations.length}></EducationContent>))

        }))
    }

    async deleteEducation() {
        let currentEdArray = this.state.educations;
        await console.log(currentEdArray);
        await currentEdArray.pop();

        await this.setState((prevState) => ({
           educations: currentEdArray
        }))
    }





    render() {
        return (
            <div className="education-container"> 
                <EducationHeader title="Education"></EducationHeader>
                {/* <EducationContent key="frist-education"></EducationContent> */}
                
                {this.state.educations.map((Educations, index) => {
                    return <EducationContent key={index}></EducationContent>
                })}

                <button className="add-button bottom-button" onClick={() => this.addEducation()}>Add Education</button>
                <button className="delete-Button bottom-button" onClick={() => this.deleteEducation()}>Delete Education</button>
               
                
                
                
            </div>
        )
    }
}

export {Education}
export {EducationHeader}
