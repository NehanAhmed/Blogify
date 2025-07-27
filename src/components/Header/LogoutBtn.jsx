import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'

import { logout } from '../../store/authSlice'
const LogoutBtn = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button onClick={handleLogout} className='w-[100px] p-2 rouned-lg bg-zinc-800 hover:bg-zinc-600 duration-200'>LogoutBtn</button>
  )
}

export default LogoutBtn