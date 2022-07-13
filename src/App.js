import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/Error/NotFound';
import Navbar from './components/layout/Navbar';
import AddUser from './components/users/AddUser';
import UsersDetails from './components/users/UsersDetails';
import EditUser from './components/users/EditUsers';
import User from './components/users/User';
import QuestionPaper from './components/Question/QuestionPaper';
import AddQuestion from './components/Question/AddQuestion';
import EditQuestion from './components/Question/EditQuestion';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import { Admin, Resource } from 'react-admin';
// import restProvider from 'ra-data-simple-rest';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/user/addUser' component={AddUser} />
          <Route exact path='/user/Details' component={UsersDetails} />
          <Route exact path='/user/question' component={QuestionPaper} />
          <Route exact path='/user/edit/:id' component={EditUser} />
          <Route exact path='/user/:id' component={User} />
          <Route exact path='/question/add' component={AddQuestion} />
          <Route exact path='/question/edit' component={EditQuestion} />
          {/* <Redirect to="/" /> */}
          <Route component={ NotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
