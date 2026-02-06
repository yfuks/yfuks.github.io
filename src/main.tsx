import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n'
import './index.css'
import App from './App'
import { LanguageSync } from './LanguageSync'

const rootEl = document.getElementById('root')
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <BrowserRouter>
        <LanguageSync />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/fr" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  )
}
