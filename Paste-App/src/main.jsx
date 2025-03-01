import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from '../src/store.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <App />

    </Provider> 
    <ToastContainer />
  </StrictMode>,
)
