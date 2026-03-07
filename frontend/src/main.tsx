import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
//import { HashRouter as Router2 } from 'react-router-dom';
import App from './App.tsx'
import { Providers } from './context/Providers.tsx';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <Router>
      <StrictMode>
          <App />
      </StrictMode>
    </Router>
  </Providers>
)
