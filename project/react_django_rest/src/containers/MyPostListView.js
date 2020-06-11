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
        axios.get(`http://3.34.100.138:8000/api/post/`)
            .then(res => {
                this.setState({
                    posts : res.data
                })
            })
    }

    render() {
        console.log("mplv render");
        console.log(this.state.posts.length)
        return (
            <div>
            <MyPost data={this.state.posts} />
            <h2>Create Post</h2>
            <MyForm requestType="post" postID={null} bntType="Create" />
            </div>
        )
    
    }
}

export default MyPostList

