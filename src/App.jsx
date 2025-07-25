import React from 'react'

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL) // This will log "Helllo" to the console
  return (
    <>
      <h1>Hello world!</h1>
    </>
  )
}

export default App