import { useState } from 'react'

import { Provider } from './components/ui/provider'
import { BrowserRouter as Roter, Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignProvider } from './context/SignContext'

import Home from './pages/Home'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <SignProvider>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </SignProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
