import React from 'react';
import {Route} from 'react-router-dom';
import MyPostListView from './containers/MyPostListView.js'
import MyPostDetail from './containers/MyPostDetail.js'

class BaseRouter extends React.Component {
    render() {
        return (
            <div>

            <Route exact path="/" component={MyPostListView} />
            <Route exact path="/:postID" component={MyPostDetail} />

            </div>
        );
    }
}

export default BaseRouter
