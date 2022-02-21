import React, {useState} from 'react';
import {useFetch} from './useFetch';


const url = 'https://swapi.dev/api/people';

const Example = () => {

const {loading, products} = useFetch(url);
console.log(products);

return (
    <div>
       
        <h2>{loading ? 'loading..'  : 'data' } </h2>
       
    </div>
    );
};




export default Example;