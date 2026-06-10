# Odontología de Gales — Wireframe & Brand Kit

**Objetivo:** Documento completo de referencia para el remake del sitio https://odontologiadegales.cl/  
**Contenido:** Brand Kit + Wireframes página a página + Inventario de assets

---

## ASSETS ADICIONALES (proporcionados por el cliente)

### Foto Fachada Clínica
- **Archivo:** `assets/hero/fachada-clinica.jpg` *(pendiente de guardar)*
- **Descripción:** Exterior de la clínica al atardecer, familias entrando al local. Número 6721 visible. Letrero "Odontología de Gales" con logo.
- **Uso recomendado:**
  - **PRINCIPAL:** Hero de Homepage — imagen de fondo o panel derecho del split layout
  - **SECUNDARIO:** Sección Nosotros / About — refuerza presencia física y trayectoria desde 1996
  - **ALTERNATIVO:** Sección de Contacto — apoya la dirección física Príncipe de Gales 6721
- **Por qué funciona en el Hero:** La imagen muestra familias (all ages) llegando a la clínica en luz cálida — refuerza perfectamente el tagline "Acompañando a tu familia" y la trayectoria de 30 años.

---

## PARTE 1: BRAND KIT

### Paleta de Colores

| Rol | Color | Hex aproximado |
|-----|-------|----------------|
| Primario (navy/azul oscuro) | Fondo navbar, textos principales | `#1a2850` |
| Acento (teal/turquesa) | Botones CTA primarios | `#17a2b8` |
| Urgencia (rojo) | Botón "LLAMAR AHORA" | `#dc3545` |
| Fondo claro | Secciones alternadas | `#f8f9fa` |
| Fondo blanco | Sección principal | `#ffffff` |
| Texto cuerpo | Párrafos | `#444444` |

> **Nota:** Los hex exactos deben verificarse inspeccionando el CSS de producción. Los valores arriba son aproximaciones visualmente calibradas.

---

### Tipografía

- **Familia:** Sans-serif moderna (stack web estándar; probablemente Open Sans, Lato o Poppins — verificar en CSS)
- **Títulos (h1):** Bold, tamaño grande (~36-48px desktop)
- **Subtítulos (h2/h3):** Semibold, ~24-32px
- **Cuerpo:** Regular, ~16px, line-height generosa (~1.6)
- **Botones:** Semibold, uppercase o capitalize, ~14-16px

---

### Logo

- **URL:** `https://odontologiadegales.cl/wp-content/uploads/2021/05/Logo-Gales.png`
- **Formato:** PNG (con fondo transparente)
- **Posición:** Top-left del header, antes del menú de navegación
- **Uso:** Header fijo en todas las páginas

---

### Estilo Visual

- **Botones:** Fondo sólido (sin degradados), border-radius moderado (~6-8px)
- **Cards de especialidades:** Fondo blanco, contenido centrado, ícono + título + descripción
- **Sombras:** Sutiles (`box-shadow: 0 2px 8px rgba(0,0,0,0.1)`)
- **Espaciado:** Secciones con `padding: 80px 0` — aire generoso entre bloques
- **Estilo general:** Healthcare profesional — limpio, confiable, accesible

---

### Botones — Estilos

| Botón | Fondo | Texto | Uso |
|-------|-------|-------|-----|
| "Agendar Hora Online" | Teal `#17a2b8` | Blanco | CTA principal |
| "Solicitar Hora Online Ya!" | Teal `#17a2b8` | Blanco | CTA secciones |
| "LLAMAR AHORA" | Rojo `#dc3545` | Blanco | Urgencias |
| "Ver Más" / "Conocerlos" | Outline o ghost | Navy | Navegación secundaria |

---

## PARTE 2: ASSETS — INVENTARIO COMPLETO

### Logo
```
https://odontologiadegales.cl/wp-content/uploads/2021/05/Logo-Gales.png
```

### Fotos del Equipo (12)
```
Gloria Fernández:      .../2021/05/Gloria-fernandez-profesionales.jpg
Dr. Oscar Oviedo:      .../2021/05/Dr.-Oscar-Oviedo-Muñoz.jpg
Dr. Rodrigo Iturriaga: .../2021/05/Dr.-Rodrigo-Iturriaga-Urquieta.jpeg
Dra. Carolina Oviedo:  .../2021/05/Dra.-Carolina-Oviedo-Sarmiento.jpg
Dra. Constanza López:  [FOTO LOCAL — Constanza López Álvarez.jpg]
Dra. Alejandra Gonz.:  .../2021/05/Dra.-Alejandra-González-Saavedra.jpeg
Dra. María Fortuño:    .../2021/05/Dra.-María-Soledad-Fortuño.jpg
Dr. Branko Radovic:    .../2021/05/Dr.-Branko-Radovic-1.jpeg
Dr. Marcelo Silva:     .../2021/05/Dr.-Marcelo-Silva.jpg
Dr. Pablo Santibañez:  .../2021/05/Dr.-Pablo-Andrés-Santibañez-Piana.jpg
Dra. Valentina Gut.:   [FOTO LOCAL — Valentina Gutiérrez.jpg]
Dr. Nicolás Bartulin:  [FOTO LOCAL — nicolas-bartulin.jpeg]
```
Base URL: `https://odontologiadegales.cl/wp-content/uploads/`

### Íconos de Especialidades — Versión Color (10)
```
Prevención:           .../2021/05/Prevención.png
Rehabilitación Oral:  .../2021/05/Reabilitación-Odontología-Gales.png
Ortodoncia:           .../2021/05/Ortodoncia-Gales.png
Endodoncia:           .../2021/06/Endodoncia-verde.png
Cirugía Bucal:        .../2021/05/Cirugía-Bucal-Gales.png
Estética Facial:      .../2021/05/Estética-Facial-1.png
Periodoncia:          .../2021/05/Periodoncia-Gales.png
Odontopediatría:      .../2021/05/Odontopediatría-Gales.png
Implantología:        .../2021/05/Implantología-Gales.png
Bruxismo:             .../2021/06/Bruxismo-verde.png
```

### Íconos de Especialidades — Versión Blanca (11)
```
Odontología General:  .../2021/04/dentist-icon-white-6.png
Implantología:        .../2021/04/dentist-icon-white-4.png
Rehabilitación Oral:  .../2021/04/dentist-icon-white-1.png
Cirugía Bucal:        .../2021/04/dentist-icon-white-3.png
Estética Dental:      .../2021/04/dentist-icon-white-5.png
Ortodoncia:           .../2021/04/dentist-icon-white-2.png
Bruxismo (blanco):    .../2021/06/Bruxismo-blanco.png
Odontopediatría (b):  .../2021/06/Odontopediatría-Gales-blancp.png
Endodoncia (blanco):  .../2021/06/Endodoncia-2.png
Periodoncia (blanco): .../2021/06/Periodoncia-Gales-blanco.png
Estética Facial (b):  .../2021/06/Estética-facial.png
```

### Imágenes Antes/Después — Ortodoncia (12)
```
Overjet - Después  (2023): .../2023/11/01-07-069-Overjet-29052023-2-300x206.jpg
Overjet - Antes    (2020): .../2023/11/00-06-069-Overjet-06052020-300x206.jpg
Ant.Bite - Después (2023): .../2023/11/01-06-073-Anterior-Bite-29052023-2-300x206.jpg
Ant.Bite - Antes   (2020): .../2023/11/00-05-073-Anterior-Bite-06052020-300x206.jpg
Ant.Bite - Después (2023): .../2023/11/01-06-073-Anterior-Bite-29052023-300x206.jpg
Ant.Bite - Antes   (2020): .../2023/11/00-05-073-Anterior-Bite-27042020-300x206.jpg
Overjet - Después  (2020): .../2023/11/01-06-069-Overjet-15082020-300x206.jpg
Overjet - Antes    (2020): .../2023/11/00-06-069-Overjet-27042020-300x206.jpg
Ant.Bite - Después (2021): .../2023/11/01-06-073-Anterior-Bite-11072021-300x206.jpg
Ant.Bite - Antes   (2020): .../2023/11/00-05-073-Anterior-Bite-28042020-300x206.jpg
Overjet - Después  (2021): .../2023/11/01-07-069-Overjet-11072021-300x206.jpg
Overjet - Antes    (2020): .../2023/11/00-06-069-Overjet-28042020-300x206.jpg
```

---

## PARTE 3: WIREFRAMES — PÁGINA POR PÁGINA

---

### PÁGINA 1: Homepage (`/`)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (sticky, fondo navy)                                 │
│ [Logo]    Inicio | Especialidades | Profesionales |         │
│           Nuestros Resultados | Solicitar Hora              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ HERO (full-width, imagen de fondo o split layout)           │
│                                                             │
│  "Desde 1996 Odontología de Gales al Mejor Nivel"           │
│  "Acompañando a tu familia"                                 │
│                                                             │
│  [ Agendar Hora Online ]  <- botón teal                     │
│                                                             │
│                        [Imagen dentista/paciente]           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ NOSOTROS (fondo blanco)                                     │
│                                                             │
│  "Somos un equipo de especialistas dedicado a entregar      │
│   una solución integral a cada miembro de la familia"       │
│                                                             │
│  • 30+ años de experiencia (Desde 1996)                     │
│  • Profesionales de las más prestigiosas universidades      │
│  • Técnicas basadas en evidencia                            │
│  • Tu Evaluación SIN COSTO                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PILARES (3 columnas, fondo teal o navy)                     │
│                                                             │
│  [ícono]          [ícono]          [ícono]                  │
│  Mejores          Última           Expertos                 │
│  técnicas         tecnología       certificados             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ESPECIALIDADES OVERVIEW (fondo gris claro)                  │
│                                                             │
│  "Nuestras Especialidades"                                  │
│                                                             │
│  Grid 4 columnas de cards:                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │[ícono]   │ │[ícono]   │ │[ícono]   │ │[ícono]   │       │
│  │Od.General│ │Implanto. │ │Rehab Oral│ │Cirugía   │       │
│  │desc...   │ │desc...   │ │desc...   │ │desc...   │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │Estética  │ │Ortodoncia│ │Bruxismo  │ │Odontoped.│       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│  │Endodoncia│ │Periodoncia│ │Arm.Facial│                    │
│  └──────────┘ └──────────┘ └──────────┘                    │
│                                                             │
│              [ Ver Más ]  <- botón outline                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PROFESIONALES (fondo blanco)                                │
│                                                             │
│  "Conoce a nuestro equipo"                                  │
│                                                             │
│  Grid de fotos (4 columnas):                                │
│  [foto] [foto] [foto] [foto]                                │
│  [foto] [foto] [foto] [foto]                                │
│  [foto] [foto] [foto] [foto]   (12 profesionales)           │
│  [foto]                                                     │
│                                                             │
│              [ Conocerlos ]  <- botón                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ URGENCIAS (fondo navy)                                      │
│                                                             │
│  "¿Cuándo es una Emergencia Dental?"                        │
│                                                             │
│  • Dolor dental agudo                                       │
│  • Dolor radiado a mandíbula, cuello o cabeza               │
│  • Abscesos / Inflamación facial                            │
│  • Traumatismos dentarios                                   │
│  • Dolor muscular por bruxismo                              │
│  • Fracturas dentarias                                      │
│  • Pérdida de obturaciones o coronas                        │
│                                                             │
│  [ LLAMAR AHORA ]  <- botón rojo grande                     │
│  WhatsApp: +56 9 9238 7980  |  Tel: +56 9 3421 2664         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CONTACTO / MAPA (fondo gris claro)                          │
│                                                             │
│  [Mapa Google Maps]       │  Información:                   │
│                           │  Príncipe de Gales 6721         │
│                           │  La Reina, Santiago, Chile      │
│                           │  +56 2 2266 0296                │
│                           │  +56 2 2227 1521                │
│                           │  +56 9 3421 2664                │
│                           │  odontologiadegales@gmail.com   │
│                           │  Lun-Vie: 8:30 - 19:00          │
│                           │  @odontologia_gales             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FOOTER (fondo navy)                                         │
│  [Logo]                                                     │
│  Links de navegación  |  Contacto  |  Redes sociales        │
│  Sitio desarrollado por Chile con Web                       │
└─────────────────────────────────────────────────────────────┘
```

---

### PÁGINA 2: Especialidades (`/especialidades`)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ HERO DE PÁGINA (fondo navy, texto centrado)                 │
│  "Contamos con todo lo que necesitas y en un mismo lugar"   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PILARES (3 columnas)                                        │
│  Mejores técnicas | Última tecnología | Expertos certificados│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CARDS DE ESPECIALIDADES (11 cards, grid 3 columnas)         │
│                                                             │
│  1. URGENCIA                                                │
│     "Dolor agudo, abscesos, inflamación, trauma dental"     │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  2. REHABILITACIÓN ORAL                                     │
│     "Recupera estética y función dentaria mediante          │
│      prótesis y rehabilitaciones sobre implantes"           │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  3. ORTODONCIA                                              │
│     "Alineación dental mediante aparatología fija,          │
│      removible o alineadores invisibles"                    │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  4. ENDODONCIA                                              │
│     "Tratamientos de conducto para preservar las piezas"    │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  5. CIRUGÍA BUCAL                                           │
│     "Exodoncias, remoción de quistes, elevaciones de seno"  │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  6. ARMONIZACIÓN FACIAL                                     │
│     "Tratamientos faciales para líneas de expresión y       │
│      bruxismo mediante mesoterapia"                         │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  7. PERIODONCIA                                             │
│     "Trata enfermedades de las encías y tejidos de soporte" │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  8. ODONTOPEDIATRÍA                                         │
│     "Odontología para niños y jóvenes con énfasis en        │
│      prevención de caries"                                  │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  9. IMPLANTOLOGÍA                                           │
│     "Coloca implantes dentales con técnicas de              │
│      preservación ósea"                                     │
│     [ Solicitar Hora ]                                      │
│                                                             │
│  10. RADIOLOGÍA                                             │
│      Servicios de imagen diagnóstica                        │
│      [ Solicitar Hora ]                                     │
│                                                             │
│  11. PREVENCIÓN Y BRUXISMO                                  │
│      Planes de cuidado preventivo y tratamiento de bruxismo │
│      [ Solicitar Hora ]                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

### PÁGINA 3: Profesionales (`/profesionales`)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ HERO DE PÁGINA                                              │
│  "Nuestros Profesionales"                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CARDS DE PROFESIONALES (12 cards, grid 3-4 columnas)        │
│                                                             │
│  Estructura de cada card:                                   │
│  ┌──────────────────────────────────┐                       │
│  │  [foto headshot]                 │                       │
│  │  Nombre completo                 │                       │
│  │  Especialidad(es)                │                       │
│  │  Universidad + año               │                       │
│  │  Diplomados / especializaciones  │                       │
│  └──────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

#### Contenido de cada card:

**1. Dra. Gloria Fernández Herrera**
- Odont. General | Implantología | Rehab Oral | Cirugía Bucal | Estética Facial
- U. de Chile (1980)
- Diploma Implantología (Finis Terrae, 2006)
- Diploma Armonización Facial (2021)
- Miembro Sociedad Chilena de Estética Maxilofacial

**2. Dr. Oscar Oviedo Muñoz**
- Odont. General | Implantología | Rehab Oral | Cirugía Bucal
- U. de Chile (1978)
- Especialista Implantología Bucomaxilofacial
- Diploma Implantología (2006)

**3. Dr. Rodrigo Iturriaga Urquieta**
- Ortodoncia
- U. de Chile (1976) | Magíster Pedagogía Universitaria
- Especialista Ortodoncia y Ortopedia Dentomaxilofacial (1992)
- Sociedad Chilena de Ortodoncia | World Federation of Orthodontists

**4. Dra. Carolina Oviedo Sarmiento**
- Odont. General | Periodoncia | Rehab Oral
- U. Mayor
- Especialista Periodoncia e Implantología (U. Mayor, 2007)
- Magíster Docencia Cs. Salud (2022)
- Docente U. San Sebastián

**5. Dra. Constanza López Álvarez**
- Rehabilitación Oral
- Cirujano Dentista U. Mayor (2015)
- Especialista en Rehabilitación Oral U. de Chile (2020-2023)
- Premio excelencia académica 2023
- Perfeccionamiento en Odontología Estética Adhesiva U. de Concepción (2018-2019)
- Diplomado en Oclusión U. de Chile (2017)

**6. Dra. Alejandra González Saavedra**
- Odont. General | Rehabilitación Oral | Estética Dental
- U. de Valparaíso (2009)
- Enfoque: odontología restauradora y estética

**7. Dra. María Soledad Fortuño**
- Odont. General | Endodoncia
- U. Mayor (2008)
- Especialista Endodoncia (distinción, 2010)
- Docente U. del Desarrollo y U. Mayor
- Sociedad Chilena de Endodoncia

**8. Dr. Branko Radovic Sendra**
- Odont. General | Endodoncia | Rehab Oral
- Finis Terrae (2018, distinción)
- Manejo pacientes especiales
- Sedación con óxido nitroso

**9. Dr. Marcelo Silva**
- Cirugía Maxilofacial
- U. de Concepción (1998)
- Especialista Cirugía Oral y Maxilofacial (2007)
- Cirujano Servicio Salud Metropolitano Occidente
- Docente U. de los Andes
- SOCIMAXILOFACIAL | IAOMS

**10. Dr. Pablo Andrés Santibañez Piana**
- Odont. General | Implantología | Rehab Oral | Estética
- U. Mayor (1998-2003)
- Magíster Rehab Oral (UNAB, 2008)
- Diploma Estética Dental | Especializaciones en implantes

**11. Dra. Valentina Gutiérrez**
- Odontopediatría | Ortodoncia Preventiva
- Cirujano Dentista U. Mayor (2016)
- Diplomado de Ortodoncia Preventiva e Interceptiva (2018)
- Odontopediatra U. de Chile (2022)

**12. Dr. Nicolás Bartulin García**
- Cirujano Dentista
- Odont. General | Rehabilitación Oral | Estética Dental | Urgencias
- U. del Desarrollo | +8 años de experiencia
- Adhesión Dental Integral, Rehab sobre Implantes, Flujo digital y técnicas adhesivas modernas

```
┌─────────────────────────────────────────────────────────────┐
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

### PÁGINA 4: Nuestros Resultados (`/nuestros-resultados`)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ HERO DE PÁGINA                                              │
│  "Mira algunos casos reales de nuestros pacientes           │
│   en La Reina"                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECCIÓN: ORTODONCIA — CASOS ANTES/DESPUÉS                   │
│                                                             │
│  6 casos, cada uno con par de imágenes:                     │
│  ┌──────────┬──────────┐                                    │
│  │  ANTES   │  DESPUÉS │                                    │
│  │ [imagen] │ [imagen] │                                    │
│  │ Abr 2020 │ May 2023 │                                    │
│  └──────────┴──────────┘                                    │
│                                                             │
│  • Overjet (protrusión incisivos superiores) — 3 casos      │
│  • Mordida anterior (mal posición frontal) — 3 casos        │
│  Periodos de tratamiento: Abr 2020 -> May 2023              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SECCIÓN: REHABILITACIÓN ORAL — CASOS ANTES/DESPUÉS          │
│  (misma estructura que Ortodoncia)                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CTA FINAL                                                   │
│  [ Solicitar Hora Online Ya! ]                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## PARTE 4: INFORMACIÓN DE CONTACTO COMPLETA

| Campo | Valor |
|-------|-------|
| Dirección | Príncipe de Gales 6721, La Reina, Santiago, Chile |
| Teléfono 1 | +56 2 2266 0296 |
| Teléfono 2 | +56 2 2227 1521 |
| Móvil | +56 9 3421 2664 |
| WhatsApp | +56 9 9238 7980 |
| Email | odontologiadegales@gmail.com |
| Instagram | @odontologia_gales |
| Horario L-V | 8:30 AM – 7:00 PM (19:00) |
| Sábados | Cerrado |

---

## PARTE 5: NAVEGACIÓN

| Item | URL | Estado |
|------|-----|--------|
| Inicio | `/` | OK |
| Especialidades | `/especialidades` | OK |
| Profesionales | `/profesionales` | OK |
| Nuestros Resultados | `/nuestros-resultados` | OK |
| Solicitar Hora | `/solicitar-hora` | OK (booking externo) |
| Horarios | `/horarios` | 404 — contenido integrado en footer |
| Contacto | `/contacto` | 404 — contenido integrado en homepage |

---

## PARTE 6: COPY COMPLETO

### Taglines y frases clave

- **Hero:** "Desde 1996 Odontología de Gales al Mejor Nivel"
- **Subhero:** "Acompañando a tu familia"
- **Nosotros:** "Somos un equipo de especialistas dedicado a entregar una solución integral a cada miembro de la familia"
- **Especialidades:** "Contamos con todo lo que necesitas y en un mismo lugar"
- **Resultados:** "Mira algunos casos reales de nuestros pacientes en La Reina"
- **Evaluación gratuita:** "Tu Evaluación SIN COSTO"
- **Credenciales:** "Profesionales de las más prestigiosas universidades"

### Tres Pilares (aparecen en múltiples páginas)

1. Mejores técnicas
2. Última tecnología
3. Expertos certificados

### Urgencias — Listado completo

- Dolor dental agudo
- Dolor radiado a mandíbula, cuello o cabeza
- Abscesos
- Inflamación facial
- Traumatismos dentarios
- Dolor muscular por bruxismo
- Fracturas dentarias
- Pérdida de obturaciones o coronas

### CTAs principales

- "Agendar Hora Online" (hero principal)
- "Solicitar Hora Online Ya!" (secciones interiores)
- "LLAMAR AHORA" (urgencias)
- "Ver Más" (link a especialidades)
- "Conocerlos" / "Conoce al equipo" (link a profesionales)
