import React, { Component } from 'react';

class PDF extends Component {
    constructor(props) {
        super(props)

        this.state = {
            placeholder: "a placeholder"
        }
    }

    togglePreview() {
        //toggle the visibility of the add buttons
        let skillSec = document.querySelectorAll('#skills');
        let addButtons = document.querySelectorAll(".bottom-button");
        if(addButtons[0].style.display !== "none") {
            addButtons.forEach(button => {
                button.style.display = "none";
            });
            skillSec[0].style.marginTop = '-25px';
            // skillSec[1].style.marginTop = '-20px';  
            // skillSec[2].style.marginTop = '-20px';  
            
        } else {
            addButtons.forEach(button => {
                button.style.display = "initial";
            });
            skillSec.forEach(thing => {thing.style.marginTop = ""});
        }
        this.toggleTextArea();
        
    }

    toggleTextArea() {
        let textAreas = document.querySelectorAll("textarea");
        console.log(textAreas[0].style.border);
        if(textAreas[0].style.border !== "none") {
            textAreas.forEach(button => {
                button.style.border = "none";
                button.style.resize = "none";
            });
        } else {
            textAreas.forEach(button => {
                button.style.border = "";
                button.style.resize = "";
            });
        }
    }



    render() {
        return (
            <div>
                <button className="hide-buttons" onClick={() => this.togglePreview()}>Toggle Production View</button>

            </div>
        )
    }


}

export default PDF;