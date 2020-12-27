import React, {Component} from 'react';
import './Styles/Heading.css';

export class Heading extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className = "heading">
                Random Quote Generator
            </div>
        )
    }
}

export default Heading;