import React, { useState, useEffect } from 'react'
import { useFetch } from './UseFetch'



const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
 // we are importing our useFetch Hook and utilizing it like any other Hook. 
 //This is where we pass in the URL to fetch data from.
 
  const { loading, products } = useFetch(url)
  console.log(products)

  return (
    <div>

      <h2>{loading ? 'loading..' : 'data'}</h2>
    </div>
  )
}

export default Example