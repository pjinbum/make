import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate('/')

  const goHome = () => {
    navigate('/')
  }
  return (
    <div><h1>About Page</h1>  
        <Outlet></Outlet>
        {/* 아울랫을 안해주면 링크로 가져온 것들이 작동을 안함 */}

        <Link to='/about/member'>
        <button>Click 멤버로 이동</button>
        </Link>
        <Link to='/about/location'>
        <button>Click 로케이션으로 이동</button>
        </Link>
        <button onClick={goHome}>Home으로 이동</button>
        <button onClick={()=>{navigate('/about/location')}}> Location 으로 이동</button>
        
    </div>
  )
}

export default About