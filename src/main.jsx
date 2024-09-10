import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalStyles />
  </>
)
