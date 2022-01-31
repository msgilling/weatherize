import Home from './components/Home'
import './App.css';
import WeatherBackground from './components/WeatherBackground';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <WeatherBackground/>

      <Switch>
        {/* <div className="App"> */}
      <Route exact path='/' component={Home}/>
      
    {/* </div> */}
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;
