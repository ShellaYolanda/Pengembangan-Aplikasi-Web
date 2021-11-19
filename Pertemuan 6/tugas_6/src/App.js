import React, {Component} from 'react';
import './css/bootstrap.min.css';
import Foto from "./Foto.jpg";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

class App extends Component {
  constructor(){
    super()
    this.state = {
      isAuth : false
    }
  }

  render(){
      const LoginButton = withRouter (({history}) =>(
        <button onClick={()=>{
          this.setState({isAuth : true})
          history.push('/profile')
        }}>Login</button>
      ))
      const LogoutButton = withRouter (({history}) =>(
        <button onClick={()=>{
          this.setState({isAuth : false})
          history.push('/login')
        }}>Logout</button>
      ))
      return(
        <Router>
          <div>
            <ul style={{listStyle: 'none'}}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/news'>News</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
            </ul>
  
            <Switch>
              <Route path='/' exact render={()=> <div>Ini halaman Home</div>} />
              <Route path='/news' render={()=> <div>Ini halaman News</div>} />
              <Route path='/login' render={()=> <LoginButton />} />
              <Route path='/profile' render={()=> this.state.isAuth ? <div>Ini 
                halaman Profile <br /> <LogoutButton /> </div> : <Redirect
                to='/login'/>} />
            </Switch>
          </div>
        </Router>
      )
    }
}

export default App;
