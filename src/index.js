import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Register  from './components/Register'
import ProjectList from './components/ProjectList'
import ListView from './components/ListView'
import AddProject from './components/AddProject'
import App from './App';
import registerServiceWorker from './registerServiceWorker'

import './index.css';

ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/register" component={Register}/>
        <Route path="/projectList" component={ProjectList}/>
        <Route path="/listView" component={ListView}/>
        <Route path="/addProject" component={AddProject}/>
    </div>
</Router>, document.getElementById('root')
);
registerServiceWorker();
