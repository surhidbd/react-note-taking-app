import React,{Component} from 'react';
import NoteTaking from './component/NoteTaking';
import  './component/NoteTaking.css';
class App extends Component {
  render(){
  return (
    <div className="note-taking-app">
      <NoteTaking/>
    </div>
  );
}
}
export default App;
