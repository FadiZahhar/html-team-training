import React from 'react';
import BookList from './components/BookList';
import Songs from './components/Songs';
import BookContextProvider from './contexts/BookContext ';


function App() {
  return (
    <div className="App">
      <Songs />
  
      <BookContextProvider>
            <BookList />
          </BookContextProvider>
    </div>
  );
}

export default App;
