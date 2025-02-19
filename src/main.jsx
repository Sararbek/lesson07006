import { createRoot } from 'react-dom/client'
import { lazy } from 'react'
import './index.css'
import SuspenseContainer from './utils/Index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/Index'
const App = lazy(() => import("@/App"))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
    <SuspenseContainer>
      <App />
    </SuspenseContainer>
  </BrowserRouter>
  </Provider>
)
