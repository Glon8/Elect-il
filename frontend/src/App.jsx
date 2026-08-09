import { useState } from 'react'

import { Provider } from './components/ui/provider'

import { ManagerProvider } from './context/ManagerContext'
import { PageProvider } from './context/PageContext'
import { SignProvider } from './context/SignContext'
import { ModeProvider } from './context/ModeContext'
import { LanguageProvider } from './context/LanguageContext'
import { HistoryProvider } from './context/HistoryContext'

import Body from './pages/Body'

function App() {
  return (
    <Provider>

      <LanguageProvider>

        <ModeProvider>

          <HistoryProvider>

            <SignProvider>

              <PageProvider>

                <ManagerProvider>

                  <Body />

                </ManagerProvider>

              </PageProvider>

            </SignProvider>

          </HistoryProvider>

        </ModeProvider>

      </LanguageProvider>

    </Provider>
  )
}

export default App
