import React from 'react';
import Index from './Components/Weather/Index';
import {  ApiProvider } from './Components/UseContext/ContextApi';

const App = () => {
  return (
    <ApiProvider>
   <Index/>
   </ApiProvider>
  );
}

export default App;
