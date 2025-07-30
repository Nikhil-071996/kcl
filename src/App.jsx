import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import RegistrationForm from './pages/Register'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ContactPage from './pages/Contact/ContactPage'
import Footer from './components/Footer'
import Fixtures from './pages/Fixtures'
import Standings from './pages/Standings'
import TeamPage from './pages/TeamPage'
import Teams from './pages/Teams'


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/fixtures' element={<Fixtures />} />
          <Route path='/standings' element={<Standings />} />
          <Route path='/team-page' element={<TeamPage />} />
          <Route path='/team' element={<Teams />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
