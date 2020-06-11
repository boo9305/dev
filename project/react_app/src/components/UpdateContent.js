import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this)
    }
    inputFormHandler(e) {
        this.setState({[e.target.name] : e.target.value }) 
    
    }

    render() {
        console.log(this.props.data)
        console.log("update content render")
        return (
            <dir>
            <h1>Update</h1>
            <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        this.state.id,
                        this.state.title,
                        this.state.desc
                    )
                }.bind(this)}
            >
            <input type="hidden" name="id" value={this.state.id} />
            <p><input type="text" name="title" placeholder="title"
                value = {this.state.title}
                onChange={this.inputFormHandler}
            /></p>
            <p><textarea id="" name="desc" placeholder="descripter" 
                value = {this.state.desc}
                onChange={this.inputFormHandler}
            cols="30" rows="10"></textarea></p>
            <p><input type="submit"/></p>
            </form>
            </dir>
        );
    }
}


export default UpdateContent
