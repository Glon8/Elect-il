import { useState } from 'react'

import { Provider } from './components/ui/provider'
import { PageProvider } from './context/PageContext'
import { SignProvider } from './context/SignContext'
import { ModeProvider } from './context/ModeContext'
import { LanguageProvider } from './context/LanguageContext'

import Body from './pages/Body'

function App() {
  return (
    <Provider>

      <LanguageProvider>

        <ModeProvider>

          <SignProvider>

            <PageProvider>

              <Body />

            </PageProvider>

          </SignProvider>

        </ModeProvider>

      </LanguageProvider>

    </Provider>
  )
}

export default App
