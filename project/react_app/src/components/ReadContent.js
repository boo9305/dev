import React, { Component } from 'react';



class ReadContent extends Component {
    render() {
        console.log("content render")
        console.log(this.props.title)
        return (
            <dir>
            <h1>{this.props.title}</h1>
            {this.props.desc}
            </dir>
        );
    }
}


export default ReadContent
