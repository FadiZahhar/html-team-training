import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    //he uses the promise syntex since fetch returns a promise
    //the default behaivior if fetch is that it does not trogger the erorr on 404 it trigrs it on network error so the turn around here is to explore the retuned json oject befor we proceeed and add it as a user
    fetch(url)
      .then((resp) => {
        //make sure there is no error response
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          console.log('404 ')
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        //login is a value in the user object so we are distucturing
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('network error')
      })
  }, [])
  if (isLoading) {
    return (
      <>
        <h2>loading...</h2>;
      </>
    )
  }
  if (isError) {
    return (
      <>
        <h2>Error...</h2>;
      </>
    )
  }
  return <h2>{user}</h2>
}

export default MultipleReturns
