import React ,{Component} from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import './App.css';
import Page1 from './Components/OrganizerDashboard/page1';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Page1}/>
      </Switch>
    </BrowserRouter>
  );
  }
}


export default App;
