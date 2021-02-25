import React, { Component } from 'react'
import '../styles/main.css'

class PersonalInfo extends Component {
    

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            email: '',
            phone: ''
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
            <div className="personal-info-container">
               
                
                <span className="badge name" id="name" data-placeholder="Full Name" onKeyPress={(e) => this.handleChange(e)} contentEditable="true"></span>
                <br></br>
                   
                <span className="address badge" id="address" data-placeholder="Full Address" onKeyPress={(e) => this.handleChange(e)} contentEditable="true"></span>
                <br></br>
                
                <span className="phone sub-info badge" id="email" data-placeholder="Phone Number" onKeyPress={(e) => this.handleChange(e)} contentEditable="true"></span>
               
                <span className="email sub-info badge" id="phone" data-placeholder="Email Address" onKeyPress={(e) => this.handleChange(e)} contentEditable="true"></span>
              
                
            </div>
        )
    }
}

export default PersonalInfo;