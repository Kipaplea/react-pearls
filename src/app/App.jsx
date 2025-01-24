import { Routes, Route } from 'react-router'

import { Layout } from './Layout'
import { Home } from '../pages/home/Home'
import { Contact } from '../pages/contact/Contact'
import { Memorials } from '../pages/memorials/Memorials'
// import 

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} basename='/pearls/'>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='memorials' element={<Memorials />} />
          {/* <Route path='*' element={<NoFoundPage />} /> */}
        </Route>
        

      </Routes>
    </>
  )
}

export default App
