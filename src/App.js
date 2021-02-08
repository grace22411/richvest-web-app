import React from 'react'
import { NewContextProvider } from './NewsContext';
import News from './components/News';
import Caption from './components/Caption';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NewContextProvider>
      <Caption />
     
      <News />
      <Footer />
      </NewContextProvider>
      </div>
  );
}

export default App;
