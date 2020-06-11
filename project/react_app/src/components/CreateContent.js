import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log("create content render")
        return (
            <dir>
            <h1>Create</h1>
            <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(e.target.title.value, e.target.desc.value)
                }.bind(this)}
            >
            <p><input type="text" name="title" placeholder="title"/></p>
            <p><textarea id="" name="desc" placeholder="descripter" cols="30" rows="10"></textarea></p>
            <p><input type="submit"/></p>
            </form>
            </dir>
        );
    }
}


export default CreateContent
