import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.jsx'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import {GlobalStyle } from './styles'
import { ThemeProvider } from 'styled-components'
import {theme} from "./styles/theme.js"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
      <React.StrictMode>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                  <App/>
                  <GlobalStyle/>
                </ThemeProvider>
            </PersistGate>
          </Provider>
      </React.StrictMode>
)
