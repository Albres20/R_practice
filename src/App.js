//import logo from './logo.svg';
import React from 'react';
import './App.css';
import tasks from './sample/tasks.json'; // almcacenamos en una variable tasks
import Tasks from './components/tasks.js';


class App extends React.Component{
  state = {
    tasks:tasks
  }
  render(){
    return <div>
        
      {
        <Tasks tasks={this.state.tasks}/>
      }
    </div>
      
  }
}
export default App;


