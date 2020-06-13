import React, { Component } from 'react';
import MyLayout from "./containers/Layout.js";

import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
            <MyLayout>
                <BaseRouter></BaseRouter>
            </MyLayout>
            </div>
            </Router>
        );
    }
}

// import axios from 'axios'
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         todo : []
    //     }
    //
    // }
    //
    // myfunc() {
    //     var result= [];
    //     if (this.state.todo.length > 0 ) {
    //         var i = 0
    //         while (i < this.state.todo.length) {
    //             result.push(<div>{this.state.todo[i].username}</div>)
    //             i++
    //         }
    //     }
    //     return result
    // }
    //
    // componentDidMount() {
    //
    //     axios.get('http://3.34.134.21:8000/rest_blog/rest/')
    //     .then(res => {
    //          this.setState({ todo : res.data})
    //     })
    // }
    //
    // Handler(e) {
    //     e.preventDefault()
    //     var _username = e.target.elements.username.value
    //     var _password = e.target.elements.password.value
    //     axios.post('http://3.34.134.21:8000/rest_blog/rest/',
    //         { username : _username , password : _password}
    //     )
    //
    // }
export default App;
