import { Header } from './Components/0 - Header/Header'
import './App.css'
import { Home } from './Components/1 - Home/Home'
import { Services } from './Components/2 - Services/Services'

/* 
Header ----------> Con transition y fija. Que desaparezca de la vista cuando haces scroll hacia abajo
                   Y reaparezca cuando hacés scroll hacia arriba
Principal -------> Home
Servicios -------> Qué ofrecemos
                   Quiénes somos
                   Misión, visión, valores -> A DEFINIR
Equipo ----------> 4 cards
Contacto --------> Mail, formulario de contacto
Footer ----------> Redes sociales, mail, logo, nombre

* LOGO DE TEAS
* PALETA DE COLORES
* COMBINACIÓN DE FUENTES
* ORGANIZACIÓN DE IMÁGENES
*/

function App() {

  return (
    <div>
      <Header />
      <Home />
      <Services />
    </div>
  )
}

export default App
