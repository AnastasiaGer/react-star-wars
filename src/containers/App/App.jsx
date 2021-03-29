import styles from './App.module.css';
import PeoplePage from '@containers/PeoplePage/PeoplePage.jsx';
import HomePage from '@containers/HomePage/HomePage.jsx';
import {NavLink, Route, BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter> 
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/people" exact> People</NavLink>

      <Route path="/" exact component={HomePage} />
      <Route path="/people" exact component={PeoplePage} />
    </BrowserRouter>
    </>
  )
}

export default App;
