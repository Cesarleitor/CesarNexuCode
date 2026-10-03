import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/CesarNexuCode">
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App