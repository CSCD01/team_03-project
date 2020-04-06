import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './cjs/Alert';
import Carousel from './cjs/Carousel';
import Tab from './cjs/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from './cjs/Row';
import Col from './cjs/Col';
import Nav from './cjs/Nav';
import ListGroup from './cjs/ListGroup';

function helper() {
  return([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  )));
}

function App() {
  return (
    <div className="App">
      <ListGroup>
          <ListGroup.Item active>
              <ListGroup.Item>
                1 - active -> normal 
              </ListGroup.Item>
          </ListGroup.Item>
          <ListGroup.Item>
            2 - enabled
          </ListGroup.Item>
          <ListGroup.Item>
            3
          </ListGroup.Item>
          <ListGroup.Item>
            4
          </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default App;
