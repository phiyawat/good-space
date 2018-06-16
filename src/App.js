import React, { Component } from 'react'
import Login from './components/Login'
import ListView from './components/ListView'
import './App.css'

class App extends Component {
  render() {
    return (
       <div>
       <Login/>
       <ListView/>
       </div>
    )
  }
}

export default App;
