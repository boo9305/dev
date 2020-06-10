import React from 'react';
import Header from './metarial_blog/Header';

import Posts from './Post';

import Main from './metarial_blog/Main';

import store from './store/store'
import './Design.css';
//const Post = 
const post = Posts;

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
];

class Design extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header title="Blog" sections={sections} />
                 <Main posts={post}></Main>
            </div>
        )
    }
}

export default Design
