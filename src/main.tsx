//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'
//import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { CartProvider } from './context/CartProvider'
import { ProductsProvider } from './context/ProductsProvider'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
