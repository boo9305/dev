import React from 'react'
import MyPost from '../components/MyPost.js'
import axios from "axios"

import MyForm from '../components/Form'
class MyPostList extends React.Component {
    state = {
        posts : [
        ] 
    }

    componentDidMount() {
        console.log("k")
        axios.get(`http://3.34.134.21:8000/api/post/`)
            .then(res => {
                this.setState({
                    posts : res.data
                })
            })
    }

    render() {
        return (
            <div>
            <MyPost data={this.state.posts} />
            <h2>Create Post</h2>
            <MyForm />
            </div>
        )
    
    }
}

export default MyPostList

