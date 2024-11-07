import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store/store.js'
import { PersistGate } from 'redux-persist/integration/react'




createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>


)
