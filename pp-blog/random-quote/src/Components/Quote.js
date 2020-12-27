import React, {Component} from 'react';
import { quote_list } from './Constants/QuoteConstant';
import './Styles/Quote.css';

export class Quote extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    getRandomQuoteText = (randomIndex) => {
        return (
            <div>
                {quote_list[randomIndex].Quote}
            </div>
        )
    }

    getRandomQuoteWriter = (randomIndex) => {
        return (
            <div>
                {quote_list[randomIndex].By}
            </div>
        )
    }

    render(){
        let randomValue = Math.floor(Math.random()*10)
        let randomIndex = randomValue % 5;
        return(
            <div className="randomQuoteContainer">
                {this.getRandomQuoteText(randomIndex)}
                {this.getRandomQuoteWriter(randomIndex)}
            </div>
        )
    }
}

export default Quote