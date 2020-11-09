import React ,{Component} from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import './App.css';
import Page1 from './Components/OrganizerDashboard/page1';
import Page2 from './Components/OrganizerDashboard/page2';
import Page3 from './Components/OrganizerDashboard/page3';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
      </Switch>
    </BrowserRouter>
  );
  }
}


export default App;
