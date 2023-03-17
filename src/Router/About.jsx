import React from 'react'
import { Link } from 'react-router-dom';

const About  = () => {
    const navigate = useNavigate('/')
     // useNavigate 함수를 리턴한다
     /* 함수의 파라미터 안에 내가 이동하고 싶은 경로 작성 */
     //함수 안에서 사용할 때는 useNavigate를 사용하는 게 좋다
     // 메뉴 (li-a) 처럼 함수 호출 없이 이동할 때는 Link 사용
        navigate('/')
    }
  return (
    <div>
        <div>About page</div>
        <Link to='./about' ></Link>
        {/* 함수의 파라미터 안에 내가 이동하고 싶은 경로 작성 */}
        <button onClick={()=> {navigate}}></button>
        <button onClick={()=> {goHome}}></button>
    </div>
  )


export default About ;