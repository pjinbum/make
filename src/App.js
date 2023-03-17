import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes , Route , Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './Router/About';
import Home from './Router/Home'
import { useNavigate } from 'react-router-dom';
import Products from './Router/Products';
import ProductDetail from './Router/ProductDetail';


function App() {
  return (

    <div className="App" style={{width : '100vw' , display : 'flex' , justifyContent : 'center'}}>
      <Routes>
        {/* Route 안에 속성값이 두개가 들어간다 path / element 
            1.path : 페이지의 주소 URL 
            2.element : path 주소로 이동했을때 보여줄 페이지 */}
        <div>
          <Link to='./about'> about로 이동</Link>
          <Link to='./home'> Home으로 이동</Link>
        </div>
         
         
         
        <Route path='/' element={<button style={{backgroundColor : 'yellowgreen'}}><h1>메인 페이지</h1></button>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Products' element={<Products></Products>}></Route>
        <Route path='/Products/:id' element={<ProductDetail></ProductDetail>}></Route>
        {/* :/(뒤에 id 값은 매개변수임) 를 뒤에 해주면  브라우져에서 뒤에 슬러쉬 하고 아무거나 눌렀을때 프로 덕트 디테일로  */}

        <Route path='/ProductDetail' element={<ProductDetail></ProductDetail>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
