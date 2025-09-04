import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import './App.css'

const App = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
    
      <RouterProvider router={router} />
    </div>
  )

}

export default App