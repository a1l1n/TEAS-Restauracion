import { Header } from './Components/0 - Header/Header';
import './App.css';
import { Home } from './Components/1 - Home/Home';
import { Services } from './Components/2 - Services/Services';
import { Team } from './Components/3 - Team/Team';
import { Footer } from './Components/5 - Footer/Footer';
import { Contact } from './Components/4 - Contact/Contact';

/* 
Header ----------> Con transition y fija. Que desaparezca de la vista cuando haces scroll hacia abajo
                   Y reaparezca cuando hacés scroll hacia arriba
Principal -------> Home -> REVISAR Y/O REHACER
Footer ----------> Redes sociales, mail, logo, nombre

*/

function App() {

  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
