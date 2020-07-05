import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Dangkytk from './Dangkytk';
import Logout from './Logout';
import Daxoa from './Daxoa';

class Button extends React.Component{
    render(){
        return (
            <Router>
              <div className="home">
              <div className="dropdown">
               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Tác vụ
               </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">                
                  <a className="dropdown-item">
                    <Link to="/Home">Home</Link>
                  </a>
                  <a className="dropdown-item">
                    <Link to="/Login">Login</Link>
                  </a>
                  <a className="dropdown-item">
                    <Link to="/Dangkytk">Đăng ký tk</Link>
                  </a>
                  <a className="dropdown-item">
                    <Link to="/Logout">Logout</Link>
                  </a>
                  <a className="dropdown-item">
                    <Link to="/Daxoa">Đơn đã xóa</Link>
                  </a>                                               
              </div>
              </div>
                <Switch>
                  <Route exact path="/Home">
                    <Home />
                  </Route>
                  
                  <Route exact path="/Login">
                      <Login />
                  </Route>

                  <Route exact path="/Dangkytk">
                    <Dangkytk />
                  </Route>

                  <Route exact path="/Logout">
                    <Logout />
                  </Route>

                  <Route exact path="/Daxoa">
                    <Daxoa />
                  </Route>

                </Switch>
              </div>
            </Router>
          );
        }    
    }
   export default Button; 