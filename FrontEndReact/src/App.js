import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Student from './Components/StudentDashboard/student';

function App() {
  return (
    <div>
      <Router>
        <StudentDashboard path="/"></StudentDashboard>
      </Router>
    </div>
  );
}
const StudentDashboard= () => {
  return <Student/>
}
export default App;




