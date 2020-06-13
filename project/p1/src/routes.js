import React from 'react';
import {Route} from 'react-router-dom';
import MyPostListView from './containers/MyPostListView.js'
import MyPostDetail from './containers/MyPostDetail.js'
import Login from "./containers/Login.js"

class BaseRouter extends React.Component {
    render() {
        return (
            <div>

            <Route exact path="/" component={MyPostListView} />
            <Route exact path="/post/:postID/" component={MyPostDetail} />
            <Route exact path="/login/" component={Login}/>

            </div>
        );
    }
}

export default BaseRouter
