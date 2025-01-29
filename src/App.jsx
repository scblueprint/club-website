import { Routes, Route } from 'react-router-dom';

/* Various pages */
import Home from './pages/Home';
import Projects from './pages/Projects';
import Students from './pages/Students';
import Nonprofits from './pages/Nonprofits';
import Team from './pages/Team';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/students' element={<Students />}/>
        <Route path='/nonprofits' element={<Nonprofits />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
