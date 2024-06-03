import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from './FeedbackForms/Feeling';
import Understanding from './FeedbackForms/Understanding';
import Supports from './FeedbackForms/Support';
import Comments from './FeedbackForms/Comments';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Results from './FeedbackForms/Results';
import Success from './FeedbackForms/Success';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
      <Route
            path='/'
            exact
          >
      <Feelings />
      </Route>
      <Route
            path='/understanding'
            exact
          >
      <Understanding />
      </Route>
      <Route
            path='/support'
            exact
          >
      <Supports />
      </Route>
      <Route
            path='/comments'
            exact
          >
      <Comments />
      </Route>
      <Route
            path='/results'
            exact
          >
      <Results />
      </Route>
      <Route
            path='/success'
            exact
          >
      <Success />
      </Route>

      </Router>
    </div>
  );
}

export default App;


{/* <Router>
        <nav className='navbar'>
          <ul>
            <li>
              <NavLink
                to='/'
                exact
                activeClassName='active'
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to='/order-details'>Customer Info</NavLink>
            </li>
            <li>
              <NavLink
                to='/checkout'
                activeClassName='active'
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </nav>
        <Container
          sx={{
            mb: 3,
          }}
        >
          <Route
            path='/'
            exact
          >
            <Menu />
          </Route>
          <Route
            path='/order-details'
            exact
          >
            <OrderForm />
          </Route>
          <Route
            path='/checkout'
            exact
          >
            <Checkout />
          </Route>
          <Route
            path='/admin'
            exact
          >
            <AdminPage fetchOrder={fetchOrder} />
          </Route>
          <Route
            path='/order/:id'
            exact
          >
            <OrderDetails />
          </Route>
        </Container>
      </Router>
    </div>
  );
} */}