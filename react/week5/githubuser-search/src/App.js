import React from 'react';
import 'tachyons'
import User from './Components/User'
import Home from './Pages/Home'
import About from './Pages/About'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div >
      
      <BrowserRouter>
       {/* responsible for linking */}
         <ul className='f6 fw6 ttu tracked  tc'>
           <li className='link dim white dib mr3 pa4 tc'>
             <Link to="/">Home</Link>
           </li>
           <li className='link dim white dib mr3 pa4 tc'>
             <Link to="/about">About</Link>
           </li>
         </ul>
         
         <Switch>
           <Route 
               path="/" exact component={Home}>
           </Route>

           <Route 
                path="/about" component={About}>
           </Route>

           <Route 
               path="/user/:id" component={User}>
           </Route>
         </Switch>
         
      </BrowserRouter>
    </div>
  );
}

export default App;
