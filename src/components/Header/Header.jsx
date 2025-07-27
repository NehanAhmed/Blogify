import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const Navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      path: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      path: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      path: "/add-post",
      active: authStatus
    },

  ]
  return (
    <header>
      <Container>
        <nav>
          <div>
            <Logo width='100px' />
          </div>
          <div>
            <ul>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => Navigate(item.path)}
                  className='p-2 rounded-lg bg-zinc-800 hover:bg-zinc-600 duration-200'
                  >{item.name}</button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header