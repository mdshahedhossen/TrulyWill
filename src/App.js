import './App.css';
import { Routes, Route} from "react-router-dom";
import Banner from './Pages/Home/Banner';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
