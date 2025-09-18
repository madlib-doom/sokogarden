
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './componets/Home';
// import Addproducr from './componets/Addproduct';
import Signin from './componets/Signin';
import Signup from './componets/Signup';
import Notfound from './componets/Notfound';
import "bootstrap/dist/css/bootstrap.min.css"
import Addproduct from './componets/Addproduct';
import Mpesapayment from './componets/Mpesapayment';

function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header">
      <h1>SokoGarden Buy & Sell Online</h1>
       
      </header>
      <Link to></Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/mpesapayment' element={<Mpesapayment/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
