import React from 'react'
import MyPost from '../components/MyPost.js'
import axios from "axios"

import MyForm from '../components/Form'

import { connect } from 'react-redux'

class MyPostList extends React.Component {
    state = {
        posts: [
        ]
    }

    componentDidMount() {
    //UNSAFE_componentWillReceiveProps(newProps) {
        //console.log("newProps : ", newProps)
        //console.log("newProps : ", newProps.token)
        axios.defaults.headers = {
            "Content-Type" : "application/json",
            Authorization : `Token ${this.props.token}`
        }
        console.log("axios : ", axios.defaults)
        axios.get(`http://3.34.100.138:8000/api/post/`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            }).catch(err => {
                console.log(err)
                this.setState({
                    posts: []
                })
            })
        
            
    }

    render() {

        console.log("MyPostListView render" , this.props.token);
        console.log(this.state.posts.length)
        return (
            <div>
                {
                    //this.props.token ?
                    <div>
                        <MyPost data={this.state.posts} />
                        <h2>Create Post</h2>
                        //<MyForm requestType="post" postID={null} bntType="Create" />
                    </div>
                    //:
                    //<p>Please Login</p>
                     
                }

            </div>

        )

    }
}


const mapReduxStateToReactProps = state => {
    return {
        token : state.token
    }
}

export default connect(mapReduxStateToReactProps, null)(MyPostList)

