import React, { Component } from 'react';
import Subject from './components/Subject.js' 
import TOC from './components/TOC.js' 
import ReadContent from './components/ReadContent.js' 
import CreateContent from './components/CreateContent.js' 
import UpdateContent from './components/UpdateContent.js' 
import Control from './components/Control.js' 

class App extends Component {
    constructor(props) {
        super(props)
        this.max_content_id = 2
        this.state = {
            mode:'welcome',
            selected_content_id:2,
            subject:{title : 'WEB', sub: 'world wide web!'},
            welcome:{title:'welcome', desc: 'hello, React!!'},
            contents:[
                {id:1 , title :'HTML', desc:"HTML is for information"},
                {id:2 , title :'CSS', desc:"HTML is for design"}
            ]
        }
    }

    getReadContent() {
        var i =0;
        while(i < this.state.contents.length) {
            var data = this.state.contents[i]
            if (data.id === this.state.selected_content_id) {
                return data;
                break;
            }
            i++
        }
    
    }
    getContent() {
        var _article, _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
            var _content = this.getReadContent()
            _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
        } else if (this.state.mode === 'create') {
            _article = <CreateContent onSubmit={function(_title, _desc){
                this.max_content_id++
                var _contents = Array.from(this.state.contents)
                _contents.push(
                    {id: this.max_content_id, title:_title, desc:_desc})
                this.setState({
                    contents:_contents,
                    mode:"read",
                    selected_content_id:this.max_content_id
                })
                console.log(_title,_desc)
            }.bind(this)}></CreateContent>
            
        } else if (this.state.mode === 'update') {
            var _data = this.getReadContent();
            _article = <UpdateContent data={_data} onSubmit={
                function(_id, _title, _desc){
                    var _contents = Array.from(this.state.contents)
                    var i = 0;

                    while( i < _contents.length) {
                        if (_contents[i].id === _id) {
                            _contents[i] = {id:_id , title:_title, desc:_desc}
                            break;
                        }
                        i++;
                    }

                    this.setState({
                        contents:_contents,
                        mode : "read"
                })
                console.log(_title,_desc)
            }.bind(this)}></UpdateContent>
            
        }
        return _article
    }

    render() {
        console.log("app render")

        return (
            <div className="App">
            <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function() {
                this.setState({mode:'welcome'})
            }.bind(this)}></Subject>

            {/*<Subject title="React11" sub="For UI"></Subject>*/}
            <TOC onChangePage={function(id){
                console.log(id)
                this.setState({
                    mode:'read',
                    selected_content_id:Number(id)
                })
            }.bind(this)} 
            
            data={this.state.contents}></TOC>
            <Control onChangeMode={function(_mode){
                if (_mode === "delete") {
                    if (window.confirm) {
                        var _contents = Array.from(this.state.contents)
                        var i = 0;
                        while( 1 < _contents.length) {
                            if(_contents[i].id === this.state.selected_content_id){
                                _contents.splice(i,1);
                                break;
                            }
                            i++;
                        }
                    }
                    this.setState({
                        contents:_contents,
                        mode:"welcome"
                    })
                }
                this.setState({
                    mode : _mode
                }) 
            }.bind(this)}></Control>
            
            {this.getContent()}
            
            </div>
        );
    }
}

export default App;
