import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Page1 from "./Components/OrganizerDashboard/page1";
import Page2 from "./Components/EventForm/page2";
import Participants from "./Components/OrganizerDashboard/participants";
import Utilities from "./Components/OrganizerDashboard/utilities";
import Managers from "./Components/OrganizerDashboard/managers";
import Stats from "./Components/OrganizerDashboard/Stats";
import Settings from "./Components/Settings/settings";
import Stage from "./Components/EventForm/Stage/stage";
import Mode from "./Components/EventForm/Mode/mode";
import Criteria from "./Components/EventForm/Criteria/criteria";
import Faq from "./Components/EventForm/FAQ/faq";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route path="/add_event" component={Page2} />
          <Route path="/participants" component={Participants} />
          <Route path="/utilities" component={Utilities} />
          <Route path="/managers" component={Managers} />
          <Route path="/stats" component={Stats} />
          <Route path="/settings" component={Settings} />
          <Route path="/stage" component={Stage} />
          <Route path="/mode" component={Mode} />
          <Route path="/criteria" component={Criteria} />
          <Route path="/faq" component={Faq} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
