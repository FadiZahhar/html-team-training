import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

function BookList(){
  return(
    <div>
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}

const Book = () => {
  return(
    <article>
      <Image />
      <Title />
      <Auth />
    </article>
  )
}

const Image = () => (
  <img src='https://tse3.mm.bing.net/th?id=OIP.o0-qbLxYrL764ujuDOgWYAHaE8&pid=Api&P=0&w=241&h=160'
  alt=''/>
)

const Title = () => <h2>the boy</h2>;

const Auth = () => <h4>lea h</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));