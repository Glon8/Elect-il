import { useState } from 'react'

import { Provider } from './components/ui/provider'
import { BrowserRouter as Roter, Routes, Route, BrowserRouter } from 'react-router-dom'
import { ButtonProvider } from './context/ButtonContext'

import Home from './pages/Home'

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <ButtonProvider>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ButtonProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
