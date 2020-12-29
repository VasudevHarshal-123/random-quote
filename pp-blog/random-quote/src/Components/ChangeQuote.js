import React, {Component} from 'react';
import './Styles/ChangeQuote.css';

export class ChangeQuote extends Component {
    constructor(){
        super();
        this.state = {
            flag:0
        }
    }

    buttonClicked = () => {
        let changeState = this.props.changeState;
        changeState();
    }

    render(){
        return(
            <div className="getRandomNumber" onClick={this.buttonClicked}>
                Get Random Quote
            </div>
        )
    }
}

export default ChangeQuote