import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setdata] = useState([])

  const getdata = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setdata(data)
    setLoading(false)
  }

  useEffect(() => {
    getdata()
  }, [url])
  return { loading, data }
}
