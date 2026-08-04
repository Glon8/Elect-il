import { useState } from 'react'

import { Provider } from './components/ui/provider'
import { PageProvider } from './context/PageContext'
import { SignProvider } from './context/SignContext'
import { LanguageProvider } from './context/LanguageContext'

import Body from './pages/Body'

function App() {
  return (
    <Provider>

      <LanguageProvider>

        <SignProvider>

          <PageProvider>

            <Body />

          </PageProvider>

        </SignProvider>

      </LanguageProvider>

    </Provider>
  )
}

export default App
