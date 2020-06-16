import React from 'react'
import axios from "axios"
import MyForm from "../components/Form"
import { Button } from "antd"
class MyPostDetail extends React.Component {
    state = {
        post : {}
    }

    componentDidMount() {
        console.log("k")
        const postID = this.props.match.params.postID
        axios.get(`http://3.34.100.138:8000/api/post/${postID}/`)
            .then(res => {
                this.setState({
                    post : res.data
                })
            })
    }

    handleDelete = e => {
        const postID = this.props.match.params.postID
        console.log(postID)
        axios.delete(`http://3.34.100.138:8000/api/post/${postID}/`).then( res=> {
            console.log(res)
        // this.forceUpdate()
        })
        .then(err => console.log(err))
        
        this.props.history.push('/')
        window.location.reload()
    }

    render() {
        console.log("MyPostDetail render")

        return (
            <div>
            <p>{this.state.post.title}</p>
            <p>{this.state.post.desc}</p>
            <MyForm requestType="put" postID={this.props.match.params.postID} bntType="Update"/>
            <form onSubmit={this.handleDelete.bind(this)}>
                <Button type="danger" htmlType="submit">Delete</Button>
            </form> 
            </div>
        )
    
    }
}

export default MyPostDetail

