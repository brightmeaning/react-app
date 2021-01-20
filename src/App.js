import { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length){
      lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      i = i + 1;
    }
    return(
      <nav>
        <ul>
          {/*<li><a href="1.html">HTML</a></li>
          <li><a href="2.html">WEB</a></li>
          <li><a href="3.html">JS</a></li>*/}
          {lists}
        </ul>
      </nav>
    );
  }
}

class Article extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB' , sub:'world wide web'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:1, title:'CSS', desc:'CSS is for design ...'},
        {id:1, title:'JS', desc:'JS is for interactive ...'}
      ]
    }
  }
 render(){
   return(
     <div className="App">
       {/*<Subject title="WEB" sub="hello, react!"></Subject>*/}
       <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
       </Subject>
       <TOC data={this.state.contents}></TOC>
       <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
       <Article title="text" desc="sample"></Article>
     </div>
   );
 }
}

export default App;
