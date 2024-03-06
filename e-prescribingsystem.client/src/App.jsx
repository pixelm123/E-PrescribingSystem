// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import FAQ from './components/FAQ/FAQ';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
