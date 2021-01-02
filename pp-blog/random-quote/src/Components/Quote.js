import React, {Component} from 'react';
import { quote_list } from './Constants/QuoteConstant';
import axios from 'axios';
import './Styles/Quote.css';

export class Quote extends Component {
    constructor(props){
        super(props);
        this.state = {
            content : "",
            author : ""
        }
    }

    getRandomQuoteText = () => {
        return (
            <div>
                {this.state.content}
            </div>
        )
    }



    getRandomQuoteWriter = () => {
        return (
            <div>
                {this.state.author}
            </div>
        )
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.key !== prevProps.key){
            axios.get(this.props.tag)
            .then(response => {
                console.log(response)
                this.setState({
                    content : response.data.content,
                    author : response.data.author
                })
            })
            .catch(e => {
                console.log(e);
            })
        }
    }

    componentDidMount(){
        axios.get(this.props.tag)
            .then(response => {
                console.log(response);
                this.setState({
                    content : response.data.content,
                    author : response.data.author
                })
            })
            .catch(e => {
                console.log(e);
            })
    }

    render(){
        // let randomValue = Math.floor(Math.random()*10)
        // let randomIndex = randomValue % 5;
        return(
            <div className="randomQuoteContainer">
                {this.getRandomQuoteText()}
                {this.getRandomQuoteWriter()}
            </div>
        )
    }
}

export default Quote