import { useState, useEffect, useCallback } from 'react';

//We have created a new file called useFetch.js
// containing a function called useFetch which contains all of the logic needed to fetch our data.

export const useFetch = (url) => {

   const [loading, setLoading] = useState(true);
   const [products, setProducts] = useState([]);

 const getProducts =async () => {

    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};