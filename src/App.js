import Header from './components/header/Header';
import Home from './pages/home/Home';
import Icon from './pages/icon/Icon';
import Footer from './components/footer/Footer';
import Terms from './pages/policies/Terms';
import Privacy from './pages/policies/Privacy';
import NotFound from './pages/notfound/NotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';


if (process.env.NODE_ENV === "production"){
  ReactGA.initialize('UA-205113461-1');
  ReactGA.pageview(window.location.pathname + window.location.search); 
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/c/:slug">
            <Icon />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route status={404}>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
