import React from 'react';
import BookList from './components/BookList';
import BookList2 from './components/BookList2';
import NewBookForm from './components/NewBookForm';
import Songs from './components/Songs';
import BookContextProvider from './contexts/BookContext ';
import BookContextProvider2 from './contexts/BookContext2';


function App() {
  return (
    <div className="App">
      <Songs />
  
      <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <BookContextProvider2>
         <BookList2/>
         <NewBookForm />
          </BookContextProvider2>
    </div>
  );
}

export default App;
