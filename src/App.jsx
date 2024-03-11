import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import GlobalStyle from './styles/Styles'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <>
        <GlobalStyle/>
        <BrowserRouter basename="/faminas-tech">
          <Router/>
        </BrowserRouter>
    </>

  )
}

export default App
