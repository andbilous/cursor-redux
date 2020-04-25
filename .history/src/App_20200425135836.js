import React from 'react';
import './App.css';
import {Row,Col} from 'reactstrap';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {Form} from './containers/Form';
import {Posts} from './containers/Posts'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Row>
        <Col><Form/></Col>
      </Row>
      <Row>
        <Col>   <Posts style={{marginTop:'100px'}}/></Col>
      </Row>
   
    </div>
    </Provider>
  );
}

export default App;
