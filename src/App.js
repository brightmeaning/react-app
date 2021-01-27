import { Component } from 'react';

import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control"

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      subject:{title:'WEB' , sub:'world wide web'},
      welcome:{title:'Welcome' , desc:'Hello React'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for design ...'},
        {id:3, title:'JS', desc:'JS is for interactive ...'}
      ]
    }
  }
 render(){
   console.log('app render');
   var _title, _desc, _article = null;
   if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
   }else if (this.state.mode ==='read'){
     var i = 0;
     while(i< this.state.contents.length){
       var data = this.state.contents[i];
       if(data.id === this.state.selected_content_id){
         _title = data.title;
         _desc = data.desc;
         break;
       }
       i = i + 1;
     }
    //  _title = this.state.contents[0].title;
    //  _desc = this.state.contents[0].desc;
    _article = <ReadContent title={_title} desc={_desc}></ReadContent>
   }else if (this.state.mode ==='create'){
    _article = <CreateContent onSubmit={function(_title,_desc){
      //add content to this.state.contents
      this.max_content_id = this.max_content_id + 1;
      // this.state.contents.push(
      // {id:this.max_content_id, title:{_title}, desc:{_desc}});
      // this.setState({
      //   contents: this.state.contents
      // });
      var _contents = this.state.contents.concat(
        {id:this.max_content_id, title:_title, desc:_desc}
      );
        this.setState({
          contents:_contents
        });
    }.bind(this)}></CreateContent>
   }
   return(
     <div className="App">
       {/*<Subject title="WEB" sub="hello, react!"></Subject>*/}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
            }.bind(this)}>
       </Subject> 
       <TOC onChangePage ={function(id){
         this.setState({
           mode:'read',
           selected_content_id : Number(id)
          });
       }.bind(this)}
       data={this.state.contents}></TOC>
       <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          });
       }.bind(this)}></Control>
       {/* 가변적으로 변형 */}
       {/* <ReadContent title={_title} desc={_desc}></ReadContent> */}
       {_article}
     </div>
   );
 }
}

export default App;

