import { useState } from 'react'

import { Provider } from './components/ui/provider'
import { BrowserRouter as Roter, Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
