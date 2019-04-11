import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Create from './create';
import Delete from './delete';
import Edit from './edit';
import List from './listAll';

class App extends Component {
  render() {
    return (

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/createProduct">Create</Link>
              </li>
              <li>
                <Link to="/deleteProduct">Delete</Link>
              </li>
              <li>
                <Link to="/editProduct">Edit</Link>
              </li>
              <li>
                <Link to="/listProduct">List</Link>
              </li>
            </ul>
            <Route path='/createProduct' component={Create}/>
            <Route path='/deleteProduct' component={Delete}/>
            <Route path='/editProduct' component={Edit}/>
            <Route path='/listProduct' exact component={List}/>
          </div>
        </Router>

    );
  }
}

export default App;
