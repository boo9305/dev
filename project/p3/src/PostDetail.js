import React, { useState ,useEffect} from 'react'
import axios from 'axios'

import { withRouter } from 'react-router-dom' 

const PostDetail = (props) => {
    const [post, setPost] = useState({title : "" , contents : ""})
    useEffect(() => {
        if (post.title === "") {
            const postID = props.match.params.postID
            console.log("postID: ", postID)
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: `Token ${props.token}`
            }
            axios.get(`/file_server/posttest/${postID}/`)
            .then(res => { setPost(res.data) })
            .catch(err => { console.log(err) })    
        }

    })
    const handlePostDetail = () => {
   
    }


    return(
        <div>  
            {post.title}
            {post.contents}
            
        </div>
    )
}

export default withRouter(PostDetail)