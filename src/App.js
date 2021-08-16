import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import 'antd/dist/antd.css';
import About from './Pages/About';
import {BrowserRouter , Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
