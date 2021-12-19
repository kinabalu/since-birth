import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'

render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
