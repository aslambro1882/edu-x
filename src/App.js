import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import ContactUS from './components/ContactUS/ContactUS';
import CourseDetails from './components/CourseDetails/CourseDetails';

// Declaring Context APi
export const PremiumContext = createContext()

function App() {
  const premium = <FontAwesomeIcon icon={faCrown} />
  return (
    <PremiumContext.Provider value={premium}>
      {/* Using React Router */}
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/courses'>
            <Courses />
          </Route>
          <Route path='/course/:courseId'>
            <CourseDetails />
          </Route>
          <Route path='/teacher'>
            <Teachers />
          </Route>
          <Route path='/about'>
            <AboutUS />
          </Route>
          <Route path="/contact">
            <ContactUS />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </PremiumContext.Provider>
  );
}

export default App;
