import { Routes, Route, Link } from 'react-router-dom';
import { Home, AboutUs, Error, SignIn } from './components/pages';
import './App.css';

function App() {

  return (
    <>
      <header className='header'>
        <Link to='/'>Home</Link>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/about">About us</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
