import React from 'react';  
import ReactDOM from 'react-dom';  

import { BrowserRouter ,Route,Router,Switch} from 'react-router-dom'  ;
import './index.css';  

import App from './App';
import About from './Component/Body/About';
import Home from './Component/Body/Home';
import Contact from './Component/Body/Contact';  

import Header from './Component/Header/Header';

import Footer from './Component/Footer/Footer';

  const routing = (
    <BrowserRouter>
      <div>
        <Header />
        
        <Switch>
         
        <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        
          
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
  
  ReactDOM.render(routing, document.getElementById("root"));
