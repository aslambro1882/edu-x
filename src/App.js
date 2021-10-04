import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Col from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Teachers from './components/Teachers/Teachers';
import AboutUS from './components/AboutUS/AboutUS';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { createContext } from 'react';

export const PremiumContext = createContext()

function App() {
  const premium = <FontAwesomeIcon icon={faCrown} />
  return (
    <PremiumContext.Provider value={premium}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Col></Col>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/teachers'>
            <Teachers></Teachers>
          </Route>
          <Route path='/about'>
            <AboutUS></AboutUS>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </PremiumContext.Provider>
  );
}

export default App;
