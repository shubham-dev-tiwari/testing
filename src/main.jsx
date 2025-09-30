import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Cross-browser performance optimizations
if (typeof window !== 'undefined') {
  // Prevent iOS bounce scrolling
  document.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) { e.preventDefault(); }
  }, { passive: false });
  
  // Optimize for high DPI displays
  if (window.devicePixelRatio > 1) {
    document.documentElement.style.imageRendering = 'crisp-edges';
    document.documentElement.style.WebkitImageRendering = 'crisp-edges';
  }
  
  // Force hardware acceleration for better performance
  document.documentElement.style.transform = 'translateZ(0)';
  document.documentElement.style.WebkitTransform = 'translateZ(0)';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
