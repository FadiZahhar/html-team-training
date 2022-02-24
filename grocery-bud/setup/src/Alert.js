import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeAlert(), 3000)
    return () => clearTimeout(timeout)
  }, []) // this will show when this component render

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
