import { Component } from 'react';

import Content from './components/Content';
import Subject from "./components/Subject";
import TOC from "./components/TOC";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
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
   var _title, _desc = null;
   if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
   }else if (this.state.mode ==='read'){
     _title = this.state.contents[0].title;
     _desc = this.state.contents[0].desc;
   }
   return(
     <div className="App">
       {/*<Subject title="WEB" sub="hello, react!"></Subject>*/}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
            onChangePage = {function(){
              alert('subject alert');
            }.bind(this)}
       </Subject> 

        {/* <header>
          <h1><a href='/' onclick={function(e){
            console.log(e);
            e.preventDefault();
            //this.state.mode ='welcome'
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
         </header> */}
       <TOC data={this.state.contents}></TOC>
       <Content title={_title} desc={_desc}></Content>
     </div>
   );
 }
}

export default App;

