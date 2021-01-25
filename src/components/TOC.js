import { Component } from 'react';

class TOC extends Component{
    render(){
        console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      console.log(data.length);
      while(i < data.length){
        lists.push(<li key={data[i].id}>
          <a href={"/content/"+data[i].id}
          data-id={data[i].id}
          onClick = {function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}>
            {data[i].title}</a></li>);
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

  export default TOC;