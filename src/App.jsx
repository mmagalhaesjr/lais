import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projetos from './Pages/Projetos/Projetos';
import Contato from './Pages/Contato/Contato';
import Lais from './Pages/Lais/Lais';





function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/projetos" exact element={< Projetos/>} />
          <Route path="/contato" exact element={< Contato/>} />
          <Route path="/projetos" exact element={< Projetos/>} />
          <Route path="/lais" exact element={< Lais/>} />

         
        </Routes>

      </Router>



    </>
  )
}

export default App
