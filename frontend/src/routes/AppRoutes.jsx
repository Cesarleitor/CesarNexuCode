import { Routes, Route } from 'react-router-dom'

import PublicLayout from '../layouts/PublicLayout/PublicLayout'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Experience from '../pages/Experience/Experience'
import Education from '../pages/Education/Education'
import Portfolio from '../pages/Portfolio/Portfolio'
import Projects from '../pages/Projects/Projects'
import Articles from '../pages/Articles/Articles'
import Partners from '../pages/Partners/Partners'
import Contact from '../pages/Contact/Contact'
import NotFound from '../pages/NotFound/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/formacao" element={<Education />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/contato" element={<Contact />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
