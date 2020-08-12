import React from 'react'
import Weather from './features/Weather'
import store from './store';
import { Provider } from 'react-redux';

const App:React.FC<{}> = () => {
  return ( 
    <Provider store={store}>
      <Weather />
    </Provider>
  )
}

export default App

