import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home
        </div>
    )
}

function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><NavLink to="/topics/1/">HTML</NavLink></li>
                <li><NavLink to="/topics/2/">CSS</NavLink></li>
                <li><NavLink to="/topics/3/">JS</NavLink></li>
            </ul>
            <Switch>
            <Route path="/topics/1">HTML is</Route>
            <Route path="/topics/2">CSS is</Route>
            <Route path="/topics/3">JS is</Route>
            </Switch>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            Contact
        </div>
    )
}

function App() {
    return (
        <div>
            <h2>Hello Route React</h2>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route path="/topics"><Topics></Topics></Route>
                <Route path="/contact"><Contact></Contact></Route>
                <Route path="/">Not Found</Route>
            </Switch>
        </div>
    )

}

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
