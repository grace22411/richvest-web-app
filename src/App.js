import React from 'react'
import { NewContextProvider } from './NewsContext';
import News from './components/News';
import Caption from './components/Caption';

function App() {
  return (
    <div>
      <NewContextProvider>
      <Caption />
     
      <News />
      </NewContextProvider>
      </div>
  );
}

export default App;
