import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import User from './Pages/User/User';
import RegisterRecruiter from './Pages/RegisterRecruiter';
import 'antd/dist/antd.css';
import HomeTemplate from './Templates/HomeTemplate';
import UserTemplate from './Templates/UserTemplate';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import { routesHome, routesUser } from './routers';

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  const showLayoutUser = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <UserTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routesHome)}
        {showLayoutUser(routesUser)}
        <Route path="/login" exact component={Login} />
        {/* <Route path="/user/:id" exact component={User} /> */}
        <Route path="/register" exact component={Register} />
        <Route path="/r-register" exact component={RegisterRecruiter} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
