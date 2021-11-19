import React, {Component} from 'react';
import logo from './logo.svg';
import './css/bootstrap.min.css'; //import bootstrap
import './App.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';
import Header from './views/Header/Header';

class App extends Component{
  constructor(){
    super();
    //inisial state view
    this.state = {
      view : 'home'
    }
  }
  render(){
    //Functional component View untuk mengatur component yang tampil
    const View = ()=>{
      if(this.state.view == 'home')
      return <Home name='Eden Hazard' />
      else if(this.state.view == 'about')
      return <About />
      else if(this.state.view == 'help')
      return <Help />
    }
    
    return(
      <div>
        <Header getValue={(value)=>this.setState({view:value})} />

        <View />{/*panggil component View*/}
      </div>
    );
  }
}

export default App;
