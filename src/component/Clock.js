import React, { Component } from "react";

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            time : new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time : new Date().toLocaleTimeString()
            })
        },1000)
    }

  render() {
    return <div>
        Time Now : {this.state.time}
        </div>;
  }
}

export default Clock;
