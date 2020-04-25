import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {Form} from './containers/Form';
import {Posts} from './containers/Posts'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Form/>
      <Posts style={{}}/>
    </div>
    </Provider>
  );
}

export default App;
