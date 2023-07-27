import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrismaneProvider } from "@prismane/core";

ReactDOM.createRoot(document.getElementById('root')).render(
 
     <PrismaneProvider>
      <App />
     </PrismaneProvider>

)
