export type Project = {
  slug: string;
  name: string;
  category: string;
  city: string;
  country: string;
  year: string;
  solution: string;
  capacity: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "hotel-dann-carlton-medellin",
    name: "Hotel Dann Carlton Medellín",
    category: "Hoteles",
    city: "Medellín",
    country: "Colombia",
    year: "1996",
    solution: "Calentador solar de agua",
    capacity: "15.000 litros",
image: "/images/projects/hotel-dann-carlton-medellin.webp",
    summary:
      "Sistema solar térmico para atender la demanda de agua caliente del hotel.",
  },
  {
    slug: "hotel-dann-carlton-barranquilla",
    name: "Hotel Dann Carlton Barranquilla",
    category: "Hoteles",
    city: "Barranquilla",
    country: "Colombia",
    year: "2004",
    solution: "Calentador solar de agua",
    capacity: "10.000 litros",
    image: "/images/projects/hotel-dann-carlton-barranquilla.webp",
    summary:
      "Instalación de colectores solares en cubierta para agua caliente de uso hotelero.",
  },
  {
    slug: "hotel-pavillon-bogota",
    name: "Hotel Pavillon Segunda Etapa",
    category: "Hoteles",
    city: "Bogotá",
    country: "Colombia",
    year: "2007",
    solution: "Calentador solar de agua",
    capacity: "5.000 litros",
    image: "/images/projects/hotel-pavillon-bogota.webp",
    summary:
      "Sistema solar térmico integrado a una edificación hotelera urbana.",
  },
  {
    slug: "hotel-estelar-milla-de-oro",
    name: "Hotel Estelar Milla de Oro",
    category: "Hoteles",
    city: "Medellín",
    country: "Colombia",
    year: "2008",
    solution: "Calentador solar de agua",
    capacity: "18.000 litros",
    image: "/images/projects/hotel-estelar-milla-de-oro.webp",
    summary:
      "Solución de gran volumen para el suministro continuo de agua caliente.",
  },
  {
    slug: "hospital-san-vicente-rionegro",
    name: "Hospital San Vicente de Paúl Sede Rionegro",
    category: "Clínicas y hospitales",
    city: "Rionegro",
    country: "Colombia",
    year: "2011",
    solution: "Calentador solar de agua",
    capacity: "24.000 litros",
    image: "/images/projects/hospital-san-vicente-rionegro.webp",
    summary:
      "Campo de colectores instalado en cubierta para una demanda institucional intensiva.",
  },
  {
    slug: "hospital-general-medellin",
    name: "Hospital General de Medellín",
    category: "Clínicas y hospitales",
    city: "Medellín",
    country: "Colombia",
    year: "2011",
    solution: "Calentador solar de agua",
    capacity: "25.000 litros",
    image: "/images/projects/hospital-general-medellin.webp",
    summary:
      "Sistema solar térmico de alta capacidad para una instalación hospitalaria.",
  },
  {
    slug: "hospital-pablo-tobon-uribe",
    name: "Hospital Pablo Tobón Uribe",
    category: "Clínicas y hospitales",
    city: "Medellín",
    country: "Colombia",
    year: "1990",
    solution: "Calentador solar de agua",
    capacity: "22.500 litros",
    image: "/images/projects/hospital-pablo-tobon-uribe.webp",
    summary:
      "Una instalación de gran escala documentada dentro del portafolio histórico.",
  },
  {
    slug: "clinica-policia-envigado",
    name: "Clínica de la Policía",
    category: "Clínicas y hospitales",
    city: "Envigado",
    country: "Colombia",
    year: "1999",
    solution: "Calentador solar de agua",
    capacity: "10.000 litros",
    image: "/images/projects/clinica-policia-envigado.webp",
    summary:
      "Sistema de colectores y almacenamiento para agua caliente institucional.",
  },
  {
    slug: "edificio-ankara-bogota",
    name: "Edificio Ankara",
    category: "Vivienda",
    city: "Bogotá",
    country: "Colombia",
    year: "2013",
    solution: "Calentador solar de agua",
    capacity: "23.000 litros",
    image: "/images/projects/edificio-ankara-bogota.webp",
    summary: "Extenso campo de colectores solares para vivienda multifamiliar.",
  },
  {
    slug: "parque-musica-barquisimeto",
    name: "Edificio Parque de la Música",
    category: "Vivienda",
    city: "Barquisimeto",
    country: "Venezuela",
    year: "2010",
    solution: "Calentador solar de agua",
    capacity: "22.000 litros",
    image: "/images/projects/parque-musica-barquisimeto.webp",
    summary: "Aplicación internacional de energía solar térmica en vivienda.",
  },
  {
    slug: "sierras-del-este-bogota",
    name: "Edificios Sierras del Este",
    category: "Vivienda",
    city: "Bogotá",
    country: "Colombia",
    year: "2010",
    solution: "Calentador solar de agua",
    capacity: "22.000 litros · 3 torres",
    image: "/images/projects/sierras-del-este-bogota.webp",
    summary: "Sistema compartido para tres torres residenciales.",
  },
  {
    slug: "casa-santo-domingo-baru",
    name: "Casa Santo Domingo",
    category: "Vivienda",
    city: "Isla de Barú",
    country: "Colombia",
    year: "1985",
    solution: "Calentador solar de agua",
    capacity: "1.500 litros",
    image: "/images/projects/casa-santo-domingo-baru.webp",
    summary: "Solución residencial autónoma en un entorno insular.",
  },
  {
    slug: "hermanas-capuchinas-medellin",
    name: "Hermanas Capuchinas",
    category: "Comunidades religiosas",
    city: "Medellín",
    country: "Colombia",
    year: "2006",
    solution: "Calentador solar de agua",
    capacity: "4.000 litros",
    image: "/images/projects/hermanas-capuchinas-medellin.webp",
    summary: "Colectores y almacenamiento para una comunidad institucional.",
  },
  {
    slug: "colegio-anunciacion-medellin",
    name: "Colegio La Anunciación",
    category: "Comunidades religiosas",
    city: "Medellín",
    country: "Colombia",
    year: "2000",
    solution: "Calentador solar de agua",
    capacity: "500 litros",
    image: "/images/projects/colegio-anunciacion-medellin.webp",
    summary:
      "Sistema compacto de calentamiento solar en una institución educativa.",
  },
  {
    slug: "instituto-sagrado-corazon-manizales",
    name: "Instituto de Hermanos del Sagrado Corazón",
    category: "Comunidades religiosas",
    city: "Manizales",
    country: "Colombia",
    year: "1990",
    solution: "Calentador solar de agua",
    capacity: "3.000 litros",
    image: "/images/projects/instituto-sagrado-corazon-manizales.webp",
    summary:
      "Instalación térmica solar para demanda de una comunidad educativa.",
  },
  {
    slug: "colegio-san-ignacio-medellin",
    name: "Colegio San Ignacio",
    category: "Comunidades religiosas",
    city: "Medellín",
    country: "Colombia",
    year: "1993",
    solution: "Calentador solar de agua",
    capacity: "3.000 litros",
    image: "/images/projects/colegio-san-ignacio-medellin.webp",
    summary: "Sistema solar térmico institucional instalado en cubierta.",
  },
  {
    slug: "polideportivo-universidad-andes",
    name: "Polideportivo Universidad de los Andes",
    category: "Piscinas",
    city: "Bogotá",
    country: "Colombia",
    year: "2009",
    solution: "Climatización solar de piscina",
    capacity: "500 m³",
    image: "/images/projects/polideportivo-universidad-andes.webp",
    summary: "Campo de colectores para climatizar una piscina de gran volumen.",
  },
  {
    slug: "polideportivo-sur-envigado",
    name: "Polideportivo Sur de Envigado",
    category: "Piscinas",
    city: "Envigado",
    country: "Colombia",
    year: "1994",
    solution: "Climatización solar de piscina",
    capacity: "468 m³",
    image: "/images/projects/polideportivo-sur-envigado.webp",
    summary:
      "Aplicación solar térmica para mantener el confort del agua en un escenario deportivo.",
  },
];

export const supplementaryProjects = [
  {
    name: "Hospital Manuel Uribe Ángel",
    note: "Instalación solar térmica hospitalaria documentada en la portada del brochure.",
  },
  {
    name: "Guaduales de Patio Bonito",
    note: "Instalación de colectores solares en un conjunto de vivienda.",
  },
  {
    name: "Finca Barbosa, Popayán",
    note: "Sistema residencial con colectores solares en cubierta.",
  },
];

export const services = [
  {
    slug: "calentadores-solares-de-agua",
    number: "01",
    title: "Calentadores solares de agua",
    short:
      "Agua caliente para usos domésticos, hoteleros, industriales e institucionales.",
    image: "/images/source/brochure-p05-01.webp",
    sections: [
      [
        "Aplicación",
        "Aprovecha el calor del sol para producir y almacenar agua caliente, especialmente para consumos por debajo de 60 °C como duchas, lavamanos, cocina y lavandería.",
      ],
      [
        "Tecnologías",
        "Colectores de placa plana con parrilla de cobre, pintura selectiva, vidrio de bajo contenido de hierro y aislamiento; o tubos evacuados presurizados tipo heat pipe, que requieren aproximadamente 25 % menos área según el documento técnico.",
      ],
      [
        "Continuidad",
        "El sistema se dimensiona para el ciclo diario de radiación y consumo. Puede incorporar respaldo con bomba de calor, quemador de gas o resistencia eléctrica para picos de demanda, consumos nocturnos o radiación excepcionalmente baja.",
      ],
      [
        "Criterio de inversión",
        "La fuente solar es limpia, renovable, abundante y no tiene costo de combustible. El documento reporta una radiación promedio anual en Colombia de 4 kWh/m²-día y una vida útil de los componentes solares que puede superar 30 años.",
      ],
    ],
  },
  {
    slug: "bombas-de-calor",
    number: "02",
    title: "Bombas de calor y deshumidificación",
    short:
      "Apoyo eficiente para agua caliente, piscinas, jacuzzis y secado de ropa.",
    image: "/images/source/document-01.webp",
    sections: [
      [
        "Cómo funciona",
        "Es un circuito de refrigeración que no produce directamente el calor: lo toma del aire ambiente, lo transporta y lo entrega al agua mediante un intercambiador.",
      ],
      [
        "Desempeño",
        "Opera de día o de noche y mejora su desempeño en ambientes cálidos y húmedos. El documento indica un COP superior a 4: por cada kilovatio eléctrico consumido puede entregar cuatro o más kilovatios térmicos equivalentes.",
      ],
      [
        "Secado de ropa",
        "Instalada cerca de la lavandería, puede recircular aire en un recinto confinado y extraer progresivamente la humedad de las prendas. Consume menos que secadoras eléctricas o a gas, aunque no produce el efecto de “planchado”.",
      ],
      [
        "Otros usos",
        "También reduce humedad, olores y contaminación del aire y puede apoyar la climatización de piscinas y jacuzzis.",
      ],
    ],
  },
  {
    slug: "energia-fotovoltaica",
    number: "03",
    title: "Energía solar fotovoltaica",
    short:
      "Generación eléctrica para autoconsumo, respaldo y reducción de compras a la red.",
    image: "/images/source/brochure-p01-01.webp",
    sections: [
      [
        "Sistemas aislados",
        "Los arreglos off grid integran paneles, baterías, controlador, inversor y los dispositivos necesarios para operar sin la red comercial.",
      ],
      [
        "Sistemas conectados",
        "Los arreglos on grid trabajan conectados a la red y normalmente prescinden de baterías, reduciendo la inversión inicial. Son apropiados para consumos diurnos que coinciden con la radiación disponible.",
      ],
      [
        "Referencia del documento",
        "En condiciones normales, el documento estima que puede soportarse entre 35 % y 40 % del consumo y que la inversión podría recuperarse alrededor de seis años. Estos valores deben recalcularse para cada proyecto, tarifa y marco regulatorio vigente.",
      ],
      [
        "Usos",
        "Iluminación, comunicaciones, refrigeración, ventilación y bombeo de agua.",
      ],
    ],
  },
  {
    slug: "iluminacion-led",
    number: "04",
    title: "Iluminación LED",
    short: "Más luz útil con menor consumo, mantenimiento y carga térmica.",
    image: "/images/source/brochure-p05-01.webp",
    sections: [
      [
        "Ahorro",
        "El documento reporta ahorros superiores a 90 % frente a bombillos incandescentes y superiores a 30 % frente a luminarias fluorescentes para una luminosidad comparable.",
      ],
      [
        "Selección",
        "Se recomiendan luminarias de alta eficacia, alrededor de 150 lúmenes por vatio, escogidas según el área, nivel de iluminación y horas de operación.",
      ],
      [
        "Ventajas",
        "Mayor vida útil, menor mantenimiento, menor emisión de calor, ausencia de mercurio y buena compatibilidad con sistemas fotovoltaicos.",
      ],
      [
        "Exteriores",
        "Las luminarias autónomas pueden integrar panel, batería, fotocelda y sensor de movimiento. Solo requieren un poste y evitan extender cableado desde una fuente remota.",
      ],
    ],
  },
  {
    slug: "piscinas-y-jacuzzis",
    number: "05",
    title: "Calentamiento de piscinas y jacuzzis",
    short:
      "Climatización de alto volumen o alta temperatura con solar térmica y bombas de calor.",
    image: "/images/projects/polideportivo-universidad-andes.webp",
    sections: [
      [
        "Solución",
        "Para piscinas de gran volumen o jacuzzis de mayor temperatura, se recomiendan energía solar térmica, bombas de calor o un sistema híbrido.",
      ],
      [
        "Diseño",
        "El dimensionamiento considera volumen, temperatura objetivo, pérdidas térmicas, exposición, horario de uso y condiciones climáticas.",
      ],
      [
        "Experiencia",
        "El portafolio suministrado documenta piscinas de 468 m³ y 500 m³ climatizadas con energía solar.",
      ],
    ],
  },
  {
    slug: "piso-radiante",
    number: "06",
    title: "Piso radiante y climatización",
    short:
      "Calor uniforme para alcobas, salas, baños y otros espacios de permanencia.",
    image: "/images/source/document-02.webp",
    sections: [
      [
        "Confort",
        "El sistema entrega calor a la masa del piso y lo distribuye uniformemente desde abajo, produciendo una sensación térmica confortable.",
      ],
      [
        "Alternativas",
        "Puede ser hidrónico o eléctrico. El sistema se instala antes del acabado y queda embebido en el mortero de nivelación.",
      ],
      [
        "Construcción",
        "El esquema suministrado muestra pavimento final, adhesivo flexible, aproximadamente 30 mm de cemento, hilo radiante, guías de fijación y solera. En hormigón de 50 a 100 mm se recomienda malla aislante según la ficha aportada.",
      ],
      [
        "Complementos",
        "También pueden considerarse chimeneas, zócalos radiantes, radiadores de pared o techo y calentadores de toallas, junto con ventanas y cortinas adecuadas para conservar el confort.",
      ],
    ],
  },
  {
    slug: "gestion-del-agua",
    number: "07",
    title: "Gestión y ahorro de agua",
    short: "Menor consumo y aprovechamiento de aguas lluvias y grises.",
    image: "/images/source/brochure-p01-01.webp",
    sections: [
      [
        "Reducción de consumo",
        "Válvulas dosificadoras de flujo en duchas, lavamanos y lavaplatos reducen el caudal sin deteriorar la calidad del servicio.",
      ],
      [
        "Aguas lluvias",
        "La recolección permite atender limpieza de zonas comunes, fachadas y pisos, riego y otros usos exteriores.",
      ],
      [
        "Aguas grises",
        "Separar aguas grises de duchas y lavamanos de las aguas negras permite evaluar su reutilización para riego de prados y jardines.",
      ],
      [
        "Cultura de uso",
        "La infraestructura debe acompañarse con hábitos de manejo racional de energía y agua para sostener los beneficios económicos y ambientales.",
      ],
    ],
  },
  {
    slug: "coccion-y-electrodomesticos",
    number: "08",
    title: "Cocción y equipos eficientes",
    short: "Selección de tecnologías domésticas de alta eficiencia.",
    image: "/images/source/brochure-p05-01.webp",
    sections: [
      [
        "Cocción por inducción",
        "La inducción magnética usa recipientes de material ferrítico, como hierro o acero inoxidable. El documento la presenta como una opción de mucho menor consumo que una resistencia tradicional.",
      ],
      [
        "Combustibles",
        "El gas natural o propano tiene alto poder calorífico, pero implica combustibles fósiles, emisiones y riesgos de disponibilidad y precio a mediano plazo.",
      ],
      [
        "Equipos",
        "Motores, neveras, hornos, bombas y demás electrodomésticos deben seleccionarse por eficiencia, potencia adecuada y costo total de operación, no solo por precio inicial.",
      ],
    ],
  },
  {
    slug: "residuos-y-soluciones-especiales",
    number: "09",
    title: "Residuos y soluciones especiales",
    short:
      "Manejo integral de residuos, secado, destilación y arquitectura bioclimática.",
    image: "/images/source/brochure-p05-01.webp",
    sections: [
      [
        "MIRS",
        "El alcance residencial contempla disposición de basuras y manejo integral de residuos sólidos. Su diseño debe definir separación, almacenamiento y ruta de aprovechamiento.",
      ],
      [
        "Secadores solares",
        "Usan la energía del sol para secar productos vegetales, animales o minerales a menor costo energético.",
      ],
      [
        "Destiladores solares",
        "Aprovechan el calor solar para obtener agua apta a partir de fuentes contaminadas o saladas, sujeto al diseño y a la validación de calidad.",
      ],
      [
        "Arquitectura bioclimática",
        "Orienta la edificación como respuesta al clima, el medio ambiente, la iluminación natural y el ahorro de energía; incluye decisiones sobre ventanas, cortinas, orientación y envolvente.",
      ],
    ],
  },
];
