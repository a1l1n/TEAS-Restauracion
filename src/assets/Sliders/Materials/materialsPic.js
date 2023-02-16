import ceramica from "./0.jpg";
import campo from "./1.png";
import provincia from "./2.jpg";
import mueble from "./3.jpg"
import consti from "./4.jpg";
import molino from "./5.png";
import provincia2 from "./6.jpg";
import cristo1 from "./7.png";
import cristo2 from "./8.jpg";
import estrati from "./9.jfif";
import uru from "./10.jpg";

const materialsPics = [
    {
        url: ceramica,
        alt: "Restauración de cerámica",
        description: "Retoque pictórico de pieza cerámica - TEAS, Año 2020"
    },
    {
        url: campo,
        alt: "Consolidación",
        description: "Consolidación de capa pictórica - Pintura de caballete - TEAS, Año 2019"
    },
    {
        url: provincia,
        alt: "capitel",
        description: "Limpieza de superficie por compresa - Salón de las Provincias, Congreso de la Nación - Consulper, Año 2019"
    },
    {
        url: mueble,
        alt: "desinsectación",
        description: "Proceso de desinsectación de escritorio de estilo - Mobiliario - TEAS, Año 2020"
    },
    {
        url: consti,
        alt: "moldura",
        description: "Recomposición volumétrica - Estación Terminal Constitución - Progorod S.A, Año 2018"
    },
    {
        url: molino,
        alt: "tejitas",
        description: "Limpieza y recuperación tejas - Confitería El Molino - Progorod S.A, Año 2019"
    },
    {
        url: provincia2,
        alt: "Reintegración cromática - Salón de las Provincias, Congreso de la Nación - Consulper, Año 2019"
    },
    {
        url: cristo1,
        alt: "Imaginería religiosa",
        description: "Estado inicial de paño de pureza - San Ignacio de Loyola, Año 2020"
    },
    {
        url: cristo2,
        alt: "Imaginería religiosa, restauración",
        description: "Estado final de paño de pureza, recuperación de dorado a la hoja - San Ignacio de Loyola, Año 2020"
    },
    {
        url: estrati,
        alt: "Cateo estratigráfico",
        description: "Cateo estratigráfico en puerta de Capilla - Cementerio Alemán - Consulper, Año 2021"
    },
    {
        url: uru,
        alt: "Ensayo",
        description: "Pruebas de limpieza sobre pintura mural - CASMU - TEAS, Año 2022"
    },
];

export default materialsPics;