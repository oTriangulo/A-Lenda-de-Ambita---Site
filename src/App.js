import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '.components/Header.js';
import Navbar from '.components/Navbar.js';

// Páginas da Wiki
import Home from './pages/Home';
import Personagens from './pages/Personagens';
import Lugares from './pages/Lugares';
import Elementos from './pages/Elementos';
import OMundo from './pages/OMundo';
import Galeria from './pages/Galeria';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personagens" component={Personagens} />
          <Route path="/lugares" component={Lugares} />
          <Route path="/elementos" component={Elementos} />
          <Route path="/omundo" component={OMundo} />
          <Route path="/galeria" component={Galeria} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
