import { Routes, Route, Link } from 'react-router-dom';
import { Home, AboutUs, Error, SignIn, Navbar_1 } from './components/pages';
import './App.scss';

function App() {

  return (
    <>
      <header className='header'>
        <Link to='/'><p>Зачем бросать курить?</p></Link>
        <Link to='/brosay'><p>Бросай</p></Link>
        <Link to="/sign-in"><p>Войти</p></Link>
        <Link to="/about"><p>Контакт</p></Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brosay' element={<Navbar_1 />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
