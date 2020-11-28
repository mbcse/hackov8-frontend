import React ,{Component} from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import './App.css';
import Page1 from './Components/OrganizerDashboard/page1';
import Page2 from './Components/OrganizerDashboard/page2';
import Page3 from './Components/OrganizerDashboard/page3';
import Page4 from './Components/OrganizerDashboard/page4';
import Page5 from './Components/OrganizerDashboard/page5';
import Page6 from './Components/OrganizerDashboard/page6';
import Settings from './Components/OrganizerDashboard/settings';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
        <Route path="/page4" component={Page4}/>
        <Route path="/page5" component={Page5}/>
        <Route path="/page6" component={Page6}/>
        <Route path="/settings" component={Settings}/>
      </Switch>
    </BrowserRouter>
  );
  }
}


export default App;
