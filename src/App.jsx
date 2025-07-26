import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'
const App = () => {
  
  const [loading, setloading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setloading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen w-screen bg-zinc-800'>
      <div className='w-full h-full'>
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>

      </div>

    </div>
  ) : null
}

export default App