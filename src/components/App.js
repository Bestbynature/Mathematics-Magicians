import {
  Link, Route, Routes,
} from 'react-router-dom';
import { useState } from 'react';
import Calculator from './calculator';
import Layout from './layout';
import Quotes from './quote';
import NotFound from './notfound';
import Home from './home';
import './styles.css';

const App = () => {
  const [active, setActive] = useState(1);

  const linkclicked = (a) => {
    setActive(a);
  };

  return (
    <>
      <header>
        <h1>Math Magicians</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className={active === 1 ? 'active-link' : ''} onClick={() => { linkclicked(1); }}>Home</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/calculator" className={active === 2 ? 'active-link' : ''} onClick={() => { linkclicked(2); }}>Calculator</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/quote" className={active === 3 ? 'active-link' : ''} onClick={() => { linkclicked(3); }}>Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
