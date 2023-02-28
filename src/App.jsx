import React, { Suspense } from "react";
import { Header } from './Components/0 - Header/Header';
import { Home } from './Components/1 - Home/Home';
import './App.css';

const ServicesComponent = React.lazy(() => import("./Components/2 - Services/Services"));
const TeamComponent = React.lazy(() => import("./Components/3 - Team/Team"))
const ContactComponent = React.lazy(() => import("./Components/4 - Contact/Contact"));
const FooterComponent = React.lazy(() => import("./Components/5 - Footer/Footer"));
/* 
Header ----------> Con transition y fija. Que desaparezca de la vista cuando haces scroll hacia abajo
                   Y reaparezca cuando hacés scroll hacia arriba
Principal -------> Home -> REVISAR Y/O REHACER
*/

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <ServicesComponent />
        <TeamComponent />
        <ContactComponent />
        <FooterComponent />
      </Suspense>
    </div>
  )
}

export default App
