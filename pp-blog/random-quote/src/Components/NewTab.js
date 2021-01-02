import React, { Component } from 'react'
import { Tabs } from 'antd';
import Quote from './Quote';


const { TabPane } = Tabs;

export class NewTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            Api:["http://api.quotable.io/random", "http://api.quotable.io/random","http://api.quotable.io/random"]
        }
    }
    getTabs = () => {
        return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Inspire" key="1">
                <Quote tag={this.state.Api[0]} key = "1" />
            </TabPane>
            <TabPane tab="Random" key="2">
              <Quote tag={this.state.Api[1]} key = "2"/>
            </TabPane>
            <TabPane tab="Faith" key="3">
                <Quote tag={this.state.Api[2]} key = "3"/>
            </TabPane>
      </Tabs>
        )
    }
    
    render() {
        return (
            <div>
                {this.getTabs()}
            </div>
        )
    }
}

export default NewTab
