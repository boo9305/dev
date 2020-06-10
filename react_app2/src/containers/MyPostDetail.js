import React from 'react'
import MyPost from '../components/MyPost.js'
import axios from "axios"

class MyPostDetail extends React.Component {
    state = {
        post : {}
    }

    componentDidMount() {
        console.log("k")
        const postID = this.props.match.params.postID
        axios.get(`http://3.34.134.21:8000/api/post/${postID}`)
            .then(res => {
                this.setState({
                    post : res.data
                })
            })
    }

    render() {
        return (
            <div>
            <p>{this.state.post.title}</p>
            <p>{this.state.post.desc}</p>
            
            </div>
        )
    
    }
}

export default MyPostDetail

