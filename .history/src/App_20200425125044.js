import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Form from './containers/Form';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Form/>
    </div>
    </Provider>
  );
}

export default App;
