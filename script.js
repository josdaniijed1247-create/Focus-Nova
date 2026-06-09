/* ═══════════════════════════════════════════════════════════
   FocusNova · script.js
   Archivo principal de JavaScript — controla toda la
   interactividad de la página web.

   SECCIONES DE ESTE ARCHIVO:
   §1  Video del Hero     — hace que el video se repita con transición suave
   §2  Animaciones Scroll — los elementos aparecen al hacer scroll
   §3  Navbar             — cambia de apariencia al hacer scroll
   §4  Efecto 3D Tarjetas — las tarjetas se inclinan al pasar el mouse
   §5  Scroll Suave       — los links internos desplazan suavemente
   §6  Navegación SPA     — cambia entre secciones sin recargar la página
   §7  Tips Diarios       — muestra consejos de estudio con animación
   §8  Modal de Cursos    — abre/cierra ventanas emergentes con info
   §9  Año en el footer   — pone el año actual automáticamente
   §L  Sección Lectura    — toda la lógica de la biblioteca y notas
═══════════════════════════════════════════════════════════ */


/* Este evento espera a que la página cargue completamente
   antes de ejecutar cualquier código de JavaScript */
document.addEventListener('DOMContentLoaded', () => {


  /* ─────────────────────────────────────────────────────
     §1 · VIDEO DEL HERO
     El video de fondo aparece suavemente (fade in),
     y cuando está por terminar desaparece suavemente
     (fade out) antes de volver a empezar en bucle.
  ───────────────────────────────────────────────────── */
  const heroVideo = document.getElementById('heroVideo');

  if (heroVideo) {

    let animacionActual = null; // guarda la animación en curso

    /* Función que cambia la opacidad de un elemento suavemente.
       el     = el elemento HTML que queremos animar
       desde  = opacidad inicial (0 = invisible, 1 = visible)
       hasta  = opacidad final
       ms     = duración en milisegundos
       alTerminar = función opcional que se ejecuta al terminar */
    function animarOpacidad(el, desde, hasta, ms, alTerminar) {
      if (animacionActual) cancelAnimationFrame(animacionActual);
      const inicio = performance.now();

      function paso(ahora) {
        // Calcula qué tan avanzada está la animación (0 a 1)
        const progreso = Math.min((ahora - inicio) / ms, 1);
        el.style.opacity = desde + (hasta - desde) * progreso;

        if (progreso < 1) {
          animacionActual = requestAnimationFrame(paso); // continúa animando
        } else {
          animacionActual = null;
          if (alTerminar) alTerminar(); // ejecuta callback al terminar
        }
      }

      animacionActual = requestAnimationFrame(paso);
    }

    /* Cuando el video está listo para reproducirse: aparece suavemente */
    heroVideo.addEventListener('canplay', () => {
      heroVideo.play().catch(() => {}); // .catch evita errores si el navegador bloquea autoplay
      animarOpacidad(heroVideo, 0, 1, 700); // aparece en 700ms
    }, { once: true }); // { once: true } = solo se ejecuta una vez

    /* Mientras el video avanza: cuando quedan menos de 0.55 segundos,
       empieza a desaparecer suavemente */
    heroVideo.addEventListener('timeupdate', () => {
      const tiempoRestante = heroVideo.duration - heroVideo.currentTime;
      if (!heroVideo._desapareciendo && tiempoRestante > 0 && tiempoRestante <= 0.55) {
        heroVideo._desapareciendo = true;
        animarOpacidad(heroVideo, parseFloat(heroVideo.style.opacity) || 1, 0, 500);
      }
    });

    /* Cuando el video termina: lo reinicia y vuelve a aparecer */
    heroVideo.addEventListener('ended', () => {
      heroVideo._desapareciendo = false;
      heroVideo.style.opacity = '0';
      setTimeout(() => {
        heroVideo.currentTime = 0;
        heroVideo.play().catch(() => {});
        animarOpacidad(heroVideo, 0, 1, 700);
      }, 80);
    });
  }


  /* ─────────────────────────────────────────────────────
     §2 · ANIMACIONES AL HACER SCROLL
     Todos los elementos con la clase "reveal" son
     observados. Cuando el usuario llega a ellos al
     hacer scroll, se les agrega la clase "visible"
     que activa su animación de entrada definida en CSS.
  ───────────────────────────────────────────────────── */
  const observadorScroll = new IntersectionObserver((elementos) => {
    elementos.forEach(elemento => {
      if (elemento.isIntersecting) {
        // El elemento entró en pantalla: activar animación
        elemento.target.classList.add('visible');
        observadorScroll.unobserve(elemento.target); // dejar de observarlo
      }
    });
  }, {
    threshold: 0.10,          // se activa cuando el 10% del elemento es visible
    rootMargin: '0px 0px -60px 0px' // margen inferior para activar un poco antes
  });

  // Empezar a observar todos los elementos con clase "reveal"
  document.querySelectorAll('.reveal').forEach(el => observadorScroll.observe(el));


  /* ─────────────────────────────────────────────────────
     §3 · NAVBAR (barra de navegación)
     Cuando el usuario hace scroll más de 80px hacia
     abajo, se agrega la clase "scrolled" al navbar,
     que cambia su apariencia visual via CSS.
  ───────────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (navbar) {
      // toggle agrega la clase si scrollY > 80, la quita si no
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    }
  }, { passive: true }); // passive: true mejora el rendimiento del scroll


  /* ─────────────────────────────────────────────────────
     §4 · EFECTO 3D EN TARJETAS BENTO
     Cuando el mouse se mueve sobre una tarjeta,
     se inclina en 3D según la posición del cursor.
     Al salir el mouse, vuelve a su posición normal.
  ───────────────────────────────────────────────────── */
  document.querySelectorAll('.bento-card').forEach(tarjeta => {

    tarjeta.addEventListener('mousemove', e => {
      const rect = tarjeta.getBoundingClientRect(); // posición de la tarjeta en pantalla
      const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 a 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;  // -0.5 a 0.5

      // Aplica rotación 3D según donde está el mouse
      tarjeta.style.transform = `perspective(700px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
      tarjeta.style.transition = 'transform 0.08s ease, border-color 0.3s';
    });

    tarjeta.addEventListener('mouseleave', () => {
      // Vuelve a la posición original suavemente
      tarjeta.style.transition = 'transform 0.5s cubic-bezier(.25,.1,.25,1), border-color 0.3s';
      tarjeta.style.transform = '';
    });

  });


  /* ─────────────────────────────────────────────────────
     §5 · SCROLL SUAVE PARA LINKS INTERNOS
     Los links que apuntan a un ID dentro de la página
     (href="#algo") hacen scroll suave al elemento.
  ───────────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1); // obtiene el ID sin el "#"
      const destino = document.getElementById(id);
      if (destino) {
        e.preventDefault(); // evita el salto brusco normal
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ─────────────────────────────────────────────────────
     §6 · NAVEGACIÓN SPA (Single Page Application)
     La página no se recarga al cambiar de sección.
     En su lugar, se ocultan todas las secciones y
     se muestra solo la que el usuario seleccionó.

     mostrarSeccion(id) — muestra la sección con ese ID
     mostrarSeccionInicio() — alias para el logo
     toggleMenu() — abre/cierra el menú en móvil
  ───────────────────────────────────────────────────── */

  /* Muestra la sección indicada y oculta las demás */
  window.mostrarSeccion = function(id) {

    // 1. Ocultar todas las secciones
    document.querySelectorAll('.page-section').forEach(seccion => {
      seccion.classList.remove('active');
    });

    // 2. Mostrar la sección seleccionada
    const seccionDestino = document.getElementById(id);
    if (seccionDestino) {
      seccionDestino.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' }); // volver al tope

      // Si regresamos a Inicio, re-activar las animaciones de scroll
      if (id === 'inicio') {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
          observadorScroll.observe(el);
        });
      }
    }

    // 3. Actualizar qué link del menú está activo
    document.querySelectorAll('.nav-link[data-section]').forEach(link => {
      // Marca como activo solo el link que corresponde a esta sección
      link.classList.toggle('active', link.dataset.section === id);
    });

    // 4. Cerrar el menú móvil si estaba abierto
    document.getElementById('navMenuMobile')?.classList.remove('open');
    document.getElementById('hamburger')?.classList.remove('open');
  };

  /* Si el logo se presiona: scroll al top si ya estamos en inicio,
     o navegar a inicio si estamos en otra sección */
  window.mostrarSeccionInicio = function() {
    const seccionInicio = document.getElementById('inicio');
    if (seccionInicio?.classList.contains('active')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      mostrarSeccion('inicio');
    }
  };

  /* Abre o cierra el menú hamburguesa en dispositivos móviles */
  window.toggleMenu = function() {
    const menu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    if (menu) menu.classList.toggle('open');
    if (hamburger) hamburger.classList.toggle('open');
  };


  /* ─────────────────────────────────────────────────────
     §7 · TIPS DIARIOS
     Array con 10 consejos de estudio. Cada vez que
     se llama generarNuevoTip(), el consejo actual
     desaparece con animación y aparece uno nuevo
     diferente al anterior.
  ───────────────────────────────────────────────────── */
  const listaDeTips = [
    {
      titulo: "Técnica Pomodoro",
      desc: "Trabaja 25 minutos sin interrupciones y luego descansa 5 minutos. Después de 4 ciclos, toma un descanso largo de 15-30 minutos. Esta técnica mejora el enfoque y previene el agotamiento mental.",
      cat: "Concentración",
      tiempo: "5 min"
    },
    {
      titulo: "Revisión Espaciada",
      desc: "Repasa el material al día siguiente, una semana después, un mes después y tres meses después. Este patrón aprovecha la curva del olvido para consolidar recuerdos a largo plazo.",
      cat: "Memorización",
      tiempo: "3 min"
    },
    {
      titulo: "El Método Feynman",
      desc: "Elige un concepto, explícalo como si se lo enseñaras a un niño, identifica los vacíos y regresa al material para llenar esos huecos. La simplicidad revela el verdadero entendimiento.",
      cat: "Comprensión",
      tiempo: "10 min"
    },
    {
      titulo: "Calentamiento Mental",
      desc: "Antes de estudiar, realiza 5 minutos de meditación o respiración profunda. Esto activa la corteza prefrontal y mejora la concentración hasta en un 40%.",
      cat: "Enfoque",
      tiempo: "5 min"
    },
    {
      titulo: "Ambiente Óptimo",
      desc: "Estudia siempre en el mismo lugar con buena iluminación natural. Tu cerebro asociará ese espacio con el enfoque, reduciendo el tiempo de entrada en estado de flujo.",
      cat: "Ambiente",
      tiempo: "2 min"
    },
    {
      titulo: "Lectura Activa",
      desc: "Antes de leer un capítulo, conviértelo en preguntas. Leer buscando respuestas activa el sistema reticular y mejora la retención del material hasta en un 60%.",
      cat: "Lectura",
      tiempo: "4 min"
    },
    {
      titulo: "Descanso con Movimiento",
      desc: "En cada descanso, realiza 2-3 minutos de movimiento físico. Caminar o hacer estiramientos aumenta el flujo sanguíneo cerebral y consolida la memoria reciente.",
      cat: "Bienestar",
      tiempo: "3 min"
    },
    {
      titulo: "Enseña lo que Aprendes",
      desc: "Después de estudiar un tema, intenta explicárselo a alguien o escribir una explicación desde cero. Enseñar obliga a organizar el conocimiento y revela lo que aún no dominas.",
      cat: "Retención",
      tiempo: "6 min"
    },
    {
      titulo: "Hidratación y Cognición",
      desc: "El cerebro es 73% agua. Una deshidratación de apenas el 1-2% reduce la concentración y la memoria de trabajo. Bebe agua antes y durante tus sesiones de estudio.",
      cat: "Bienestar",
      tiempo: "1 min"
    },
    {
      titulo: "Palacio de la Memoria",
      desc: "Visualiza un lugar que conoces bien y coloca los datos que quieres memorizar en ubicaciones específicas. Al 'recorrer' mentalmente ese lugar, recuperas la información con facilidad.",
      cat: "Memorización",
      tiempo: "8 min"
    }
  ];

  let tipAnterior = -1; // guarda el índice del tip anterior para no repetirlo

  window.generarNuevoTip = function() {

    // Elegir un tip diferente al anterior
    let nuevoIndice;
    do {
      nuevoIndice = Math.floor(Math.random() * listaDeTips.length);
    } while (nuevoIndice === tipAnterior && listaDeTips.length > 1);

    tipAnterior = nuevoIndice;
    const tip = listaDeTips[nuevoIndice];

    // Referencias a los elementos HTML del tip
    const elementos = {
      titulo: document.getElementById('tip-title'),
      desc:   document.getElementById('tip-desc'),
      cat:    document.getElementById('tip-cat'),
      tiempo: document.getElementById('tip-time'),
    };

    // Animación: primero hacer desaparecer el tip actual
    Object.values(elementos).forEach(el => {
      if (!el) return;
      el.style.transition = 'opacity .25s ease, transform .25s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
    });

    // Luego de 260ms: actualizar el contenido y hacerlo aparecer
    setTimeout(() => {
      if (elementos.titulo) elementos.titulo.textContent = tip.titulo;
      if (elementos.desc)   elementos.desc.textContent   = tip.desc;
      if (elementos.cat)    elementos.cat.textContent    = tip.cat;
      if (elementos.tiempo) elementos.tiempo.textContent = tip.tiempo;

      Object.values(elementos).forEach(el => {
        if (!el) return;
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 260);
  };

  // Mostrar el primer tip al cargar la página
  generarNuevoTip();


  /* ─────────────────────────────────────────────────────
     §8 · MODAL DE CURSOS
     Un modal es una ventana emergente que aparece
     encima del resto del contenido. Aquí se usa para
     mostrar los detalles de cada técnica de estudio.

     abrirDetalleCurso(categoria, numero, nombre)
       → busca los datos de la técnica y los muestra
     cerrarModal(event)
       → cierra si el clic fue en el fondo oscuro
     cerrarModalBtn()
       → cierra directamente (botón X)
  ───────────────────────────────────────────────────── */

  /* Base de datos de técnicas con sus pasos */
  const infoTecnicas = {
    'tomar-apuntes': {
      1:  {
        nombre: 'Método Cornell',
        desc: 'Divide la página en tres zonas estratégicas para capturar, cuestionar y resumir información.',
        pasos: [
          'Divide la hoja: columna izquierda (6 cm para preguntas clave), espacio principal (notas), franja inferior (resumen).',
          'Durante clase o lectura: llena la zona de notas con ideas principales y detalles.',
          'Tras la sesión: formula preguntas en la columna izquierda que respondan a tus notas.',
          'Repasa cubriendo las notas y responde las preguntas de memoria.',
          'Escribe un resumen de 3-5 oraciones en la franja inferior.'
        ]
      },
      2:  {
        nombre: 'Método Outlining',
        desc: 'Organización jerárquica que refleja la estructura lógica del contenido.',
        pasos: [
          'Identifica el tema principal como nivel 1 (sin sangría).',
          'Añade subtemas relacionados como nivel 2 (un tabulador).',
          'Detalla ejemplos y datos específicos como nivel 3 o 4.',
          'Usa números, letras o bullets para diferenciar niveles.',
          'Revisa la jerarquía para asegurar que la lógica sea clara.'
        ]
      },
      3:  {
        nombre: 'Mapas Mentales',
        desc: 'Diagrama radial que imita la forma en que el cerebro conecta ideas.',
        pasos: [
          'Escribe el concepto central en el medio de una hoja en blanco.',
          'Traza ramas principales para cada idea grande.',
          'Agrega ramas secundarias con detalles y ejemplos.',
          'Usa colores distintos para cada rama principal.',
          'Incluye íconos o dibujos pequeños para activar la memoria visual.'
        ]
      },
      4:  {
        nombre: 'Método Boxing',
        desc: 'Agrupa visualmente bloques de información relacionada en recuadros.',
        pasos: [
          'Escribe el tema o concepto dentro de un rectángulo.',
          'Coloca información relacionada en rectángulos adyacentes.',
          'Conecta los recuadros con flechas para mostrar relaciones.',
          'Usa tamaño de caja para indicar importancia relativa.',
          'Revisa el mapa completo para verificar la coherencia visual.'
        ]
      },
      5:  {
        nombre: 'Notación Marginal',
        desc: 'Sistema de símbolos personales que enriquece la lectura activa.',
        pasos: [
          'Define tu sistema: ★ = importante, ? = duda, ✓ = entendido.',
          'Anota en el margen mientras lees sin detener el flujo.',
          'Al terminar, revisa sólo los símbolos para un repaso rápido.',
          'Agrega notas verbales breves junto a los símbolos cuando sea necesario.',
          'Mantén el sistema consistente en todos tus libros o apuntes.'
        ]
      },
      6:  {
        nombre: 'Método de Colores',
        desc: 'Sistema cromático para categorizar y priorizar información instantáneamente.',
        pasos: [
          'Asigna colores fijos: amarillo = conceptos clave, verde = ejemplos, rosa = datos críticos.',
          'Resalta al leer siguiendo tu código de colores.',
          'No resaltes más del 20-25% del texto total.',
          'Usa el color azul o morado para anotaciones propias.',
          'Repasa primero el color más importante al estudiar.'
        ]
      },
      7:  {
        nombre: 'Flujo de Ideas',
        desc: 'Escritura continua sin filtros para capturar el pensamiento en bruto.',
        pasos: [
          'Pon un temporizador de 5-10 minutos.',
          'Escribe sin parar, sin editar ni tachar.',
          'Si te bloqueas, escribe "no sé qué escribir" hasta que fluya.',
          'Al terminar, subraya las ideas más valiosas.',
          'Transfórmalas en notas organizadas con otro método.'
        ]
      },
      8:  {
        nombre: 'Método SQ3R',
        desc: 'Proceso estructurado de 5 pasos para lectura académica profunda.',
        pasos: [
          'Survey: hojea títulos, subtítulos, imágenes y el resumen final.',
          'Question: convierte cada subtítulo en una pregunta.',
          'Read: lee buscando responder las preguntas planteadas.',
          'Recite: cierra el libro y responde en voz alta o por escrito.',
          'Review: repasa tus respuestas comparándolas con el texto.'
        ]
      },
      9:  {
        nombre: 'Sketchnoting',
        desc: 'Combina escritura manual con ilustraciones para una memorización más profunda.',
        pasos: [
          'Prepara papel en blanco y dos o tres marcadores de distintos grosores.',
          'Captura ideas clave con palabras breves y dibujos simples.',
          'Usa contenedores: nubes, flechas, burbujas para organizar visualmente.',
          'No te preocupes por la perfección artística — la simplicidad funciona mejor.',
          'Revisa el sketchnote al día siguiente para consolidar la memoria.'
        ]
      },
      10: {
        nombre: 'Método Zettelkasten',
        desc: 'Sistema de tarjetas interconectadas que construye una red de conocimiento personal.',
        pasos: [
          'Cada tarjeta contiene una sola idea atómica, expresada con tus propias palabras.',
          'Asigna un ID único a cada nota (ej: fecha + número).',
          'Conecta notas relacionadas con referencias cruzadas.',
          'Crea notas de índice que agrupen temas amplios.',
          'Revisa y enriquece las conexiones regularmente.'
        ]
      }
    },
    'memorizacion': {
      1: {
        nombre: 'Palacio de Memoria',
        desc: 'Técnica milenaria que usa la memoria espacial para anclar información.',
        pasos: [
          'Elige un lugar que conozcas perfectamente: tu casa, tu ruta al trabajo.',
          'Define puntos de parada específicos en ese lugar en un orden fijo.',
          'Coloca una imagen mental vívida de cada dato a recordar en cada punto.',
          'Recorre mentalmente el lugar en orden para recuperar la información.',
          'Practica el recorrido varias veces para solidificar las asociaciones.'
        ]
      },
      2: {
        nombre: 'Repetición Espaciada',
        desc: 'Algoritmo de repaso que lucha contra la curva del olvido.',
        pasos: [
          'Estudia el material el día 1.',
          'Repasa al día siguiente (día 2).',
          'Tercer repaso una semana después (día 9).',
          'Cuarto repaso un mes después (día 30).',
          'Usa apps como Anki para automatizar los intervalos.'
        ]
      },
      3: {
        nombre: 'Chunking',
        desc: 'Agrupa elementos individuales en unidades significativas.',
        pasos: [
          'Identifica patrones o categorías en el material a memorizar.',
          'Agrupa los elementos en bloques de 3-7 ítems.',
          'Asigna un nombre o etiqueta a cada bloque.',
          'Memoriza primero los bloques, luego el contenido interno.',
          'Practica recordar el esquema de bloques antes de los detalles.'
        ]
      },
      4: {
        nombre: 'Acrónimos',
        desc: 'Crea palabras o frases cuyas letras iniciales codifican una lista.',
        pasos: [
          'Escribe en columna los primeros elementos de la lista.',
          'Toma la primera letra de cada elemento.',
          'Forma una palabra o frase memorable con esas letras.',
          'Si es una frase (acróstico), hazla absurda — es más fácil de recordar.',
          'Practica reconstruir la lista completa desde el acrónimo.'
        ]
      },
      5: {
        nombre: 'Asociación',
        desc: 'Ancla información nueva a conocimiento existente.',
        pasos: [
          'Identifica qué ya sabes que se relaciona con el dato nuevo.',
          'Crea una historia o imagen mental que conecte ambos conceptos.',
          'Cuanto más absurda o emocional sea la imagen, mejor recordarás.',
          'Verbaliza la asociación en voz alta.',
          'Prueba recuperar el dato nuevo pensando en el conocimiento ancla.'
        ]
      },
      6: {
        nombre: 'Método Link',
        desc: 'Cadena de imágenes absurdas que conecta una lista entera.',
        pasos: [
          'Convierte cada elemento de la lista en una imagen visual concreta.',
          'Crea una mini-historia donde cada imagen interactúa con la siguiente.',
          'Haz las interacciones exageradas, cómicas o imposibles.',
          'Visualiza la historia completa de corrido.',
          'Recorre la cadena mental para recuperar cada elemento en orden.'
        ]
      },
      7: {
        nombre: 'Técnica Feynman',
        desc: 'Explica lo que estudias en palabras simples para dominar el concepto.',
        pasos: [
          'Escribe el concepto en la parte superior de una hoja.',
          'Explícalo con tus propias palabras como si le hablaras a alguien que nunca lo ha visto.',
          'Identifica los puntos donde tu explicación se vuelve vaga o confusa.',
          'Vuelve al material fuente para llenar esos vacíos específicos.',
          'Simplifica el lenguaje hasta que la explicación fluya sin esfuerzo.'
        ]
      },
      8: {
        nombre: 'Flashcards Activas',
        desc: 'Tarjetas de práctica que activan la recuperación activa del conocimiento.',
        pasos: [
          'Escribe la pregunta o concepto en el frente de la tarjeta.',
          'Escribe la respuesta o definición en el reverso.',
          'Antes de voltear, intenta responder activamente.',
          'Clasifica las tarjetas: fácil, medio, difícil. Repasa más las difíciles.',
          'Usa la repetición espaciada para programar cuándo revisar cada tarjeta.'
        ]
      }
    }
  };

  /* Abre el modal mostrando la información de la técnica seleccionada */
  window.abrirDetalleCurso = function(categoria, numero, nombre) {
    const datos = infoTecnicas[categoria]?.[numero];
    if (!datos) return; // si no hay datos, no hacer nada

    // Construir el HTML de los pasos numerados
    const pasosHtml = datos.pasos.map((paso, i) => `
      <div class="modal-step">
        <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
        <p>${paso}</p>
      </div>
    `).join('');

    // Insertar el contenido en el modal
    document.getElementById('modal-body').innerHTML = `
      <h2>${datos.nombre}</h2>
      <p>${datos.desc}</p>
      <div class="modal-steps">${pasosHtml}</div>
    `;

    // Mostrar el modal y bloquear el scroll del fondo
    document.getElementById('modal-curso').classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  /* Cierra el modal si el usuario hizo clic en el fondo oscuro */
  window.cerrarModal = function(event) {
    if (event.target === document.getElementById('modal-curso')) {
      cerrarModalBtn();
    }
  };

  /* Cierra el modal directamente (botón X) */
  window.cerrarModalBtn = function() {
    document.getElementById('modal-curso').classList.remove('active');
    document.body.style.overflow = ''; // restaurar scroll
  };

  /* También cerrar el modal presionando la tecla Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarModalBtn();
  });


  /* ─────────────────────────────────────────────────────
     §9 · AÑO EN EL FOOTER
     Pone automáticamente el año actual en el footer,
     así nunca hay que actualizarlo manualmente.
  ───────────────────────────────────────────────────── */
  const elementoAno = document.getElementById('year');
  if (elementoAno) elementoAno.textContent = new Date().getFullYear();


}); /* Fin del evento DOMContentLoaded */


/* ═══════════════════════════════════════════════════════════
   §L · SECCIÓN DE LECTURA
   Esta parte controla todo lo de la sección Lectura:
   - Biblioteca Virtual (subir y eliminar PDFs)
   - Seguimiento de lectura (registrar progreso)
   - Notas (crear y eliminar notas)
   - Técnicas de lectura (checkboxes con barra de progreso)

   Toda la información se guarda en localStorage para
   que no se pierda al cerrar el navegador.
═══════════════════════════════════════════════════════════ */

/* Estado global de la sección de lectura.
   Este objeto guarda toda la información en memoria. */
let lectura = {
  libros: [],        // lista de libros subidos [{nombre, size, id}]
  seguimientos: [],  // registros de seguimiento de lectura
  notas: [],         // notas [{id, libro, pagina, texto, fecha}]
  tecnicas: []       // estado de los checkboxes [true/false x 10]
};

/* Cargar el estado guardado del localStorage al iniciar */
(function cargarDatosGuardados() {
  try {
    const datosGuardados = localStorage.getItem('focusNova_lectura');
    if (datosGuardados) {
      const datosParsed = JSON.parse(datosGuardados);
      lectura = { ...lectura, ...datosParsed }; // combinar con los valores por defecto
    }
  } catch(e) {
    // Si hay error al leer, simplemente continuar con los valores vacíos
  }
})();

/* Guardar el estado actual en localStorage */
function guardarEnLocalStorage() {
  try {
    localStorage.setItem('focusNova_lectura', JSON.stringify(lectura));
  } catch(e) {
    // Si hay error al guardar, ignorar silenciosamente
  }
}


/* ─────────────────────────────────────────────────────
   BIBLIOTECA VIRTUAL
   Permite al usuario subir archivos PDF y verlos
   en una grilla de tarjetas.
───────────────────────────────────────────────────── */

/* ── SISTEMA DE LIBROS (reemplaza el antiguo sistema de PDFs) ──
   El usuario agrega libros manualmente con:
   título, autor, categoría, páginas, fechas, calificación y notas.
   Todo se guarda en localStorage automáticamente.
────────────────────────────────────────────────────────────── */

// Variable que guarda la calificación seleccionada (1 a 5 estrellas)
let blEstrellas = 0;

// Actualiza visualmente las estrellas al hacer clic
window.blSetStar = function(val) {
  blEstrellas = val;
  document.querySelectorAll('.bl-star').forEach((s, i) => {
    s.classList.toggle('bl-star-on', i < val);
  });
};

// Agrega un libro nuevo a la lista
window.blAgregarLibro = function() {
  const titulo = document.getElementById('bl-titulo')?.value.trim();
  if (!titulo) { mostrarToast('⚠️ Escribe el título del libro'); return; }

  const libro = {
    id:          Date.now(),
    titulo:      titulo,
    autor:       document.getElementById('bl-autor')?.value.trim() || '—',
    categoria:   document.getElementById('bl-categoria')?.value || 'Sin categoría',
    paginas:     parseInt(document.getElementById('bl-paginas')?.value) || 0,
    fechaInicio: document.getElementById('bl-fecha-inicio')?.value || '',
    fechaFin:    document.getElementById('bl-fecha-fin')?.value || '',
    estrellas:   blEstrellas,
    progreso:    0,   // porcentaje de 0 a 100
    notas:       '',  // notas personales del libro
    abierto:     false // si la tarjeta está expandida
  };

  // Guardar en el array y en localStorage
  lectura.libros.push(libro);
  guardarEnLocalStorage();
  blRenderLista();
  blLimpiarFormulario();
  actualizarSelectsDeLibros();
  mostrarToast('✅ "' + titulo + '" agregado a tu biblioteca');
};

// Limpia el formulario después de agregar
function blLimpiarFormulario() {
  ['bl-titulo','bl-autor','bl-paginas','bl-fecha-inicio','bl-fecha-fin'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const cat = document.getElementById('bl-categoria');
  if (cat) cat.value = 'Sin categoría';
  blEstrellas = 0;
  document.querySelectorAll('.bl-star').forEach(s => s.classList.remove('bl-star-on'));
}

// Dibuja la lista de libros en pantalla
function blRenderLista() {
  const lista  = document.getElementById('bl-lista');
  const empty  = document.getElementById('bl-empty');
  const badge  = document.getElementById('badge-libros');
  if (!lista) return;

  // Actualizar contador del badge
  if (badge) badge.textContent = lectura.libros.length + ' libro' + (lectura.libros.length !== 1 ? 's' : '');

  // Sin libros: mostrar estado vacío
  if (lectura.libros.length === 0) {
    lista.innerHTML = '<div class="libros-empty" id="bl-empty"><ion-icon name="book-outline"></ion-icon><p>No hay libros aún. ¡Agrega tu primer libro!</p></div>';
    return;
  }

  // Generar HTML de cada libro
  lista.innerHTML = lectura.libros.map(libro => {
    const estrellas = '★'.repeat(libro.estrellas) + '☆'.repeat(5 - libro.estrellas);
    const fechas = libro.fechaInicio
      ? `${libro.fechaInicio}${libro.fechaFin ? ' → ' + libro.fechaFin : ''}`
      : 'Sin fecha';
    const pagLeidas = libro.paginas ? Math.round(libro.paginas * libro.progreso / 100) + ' / ' + libro.paginas + ' págs.' : '';

    return `
    <div class="bl-card liquid-glass" id="blc-${libro.id}">

      <!-- Cabecera de la tarjeta: título, categoría y botón eliminar -->
      <div class="bl-card-head" onclick="blToggle(${libro.id})">
        <div class="bl-card-left">
          <div class="bl-card-emoji">📖</div>
          <div>
            <div class="bl-card-title">${libro.titulo}</div>
            <div class="bl-card-meta">${libro.autor} · <span class="bl-cat-chip">${libro.categoria}</span></div>
          </div>
        </div>
        <div class="bl-card-right">
          <span class="bl-stars-display">${estrellas}</span>
          <button class="bl-del-btn" onclick="blEliminar(${libro.id}, event)" title="Eliminar">
            <ion-icon name="trash-outline"></ion-icon>
          </button>
          <ion-icon name="${libro.abierto ? 'chevron-up' : 'chevron-down'}" class="bl-chevron"></ion-icon>
        </div>
      </div>

      <!-- Detalle expandible: progreso, fechas y notas -->
      <div class="bl-card-body ${libro.abierto ? '' : 'bl-hidden'}">

        <!-- Barra de progreso deslizable -->
        <div class="bl-progress-wrap">
          <div class="bl-progress-label">
            <span>Progreso de lectura</span>
            <span class="bl-progress-pct">${libro.progreso}%${pagLeidas ? ' — ' + pagLeidas : ''}</span>
          </div>
          <input type="range" min="0" max="100" value="${libro.progreso}" class="lec-range bl-range"
            oninput="blUpdateProgreso(${libro.id}, this.value)">
        </div>

        <!-- Info: fechas -->
        <div class="bl-info-row">
          <ion-icon name="calendar-outline"></ion-icon>
          <span>${fechas}</span>
        </div>

        <!-- Notas personales -->
        <div class="bl-notes-wrap">
          <label class="bl-notes-label">
            <ion-icon name="create-outline"></ion-icon> Mis notas
          </label>
          <textarea class="bl-notes lec-textarea" placeholder="Escribe aquí tus notas, citas o reflexiones sobre el libro..."
            oninput="blUpdateNotas(${libro.id}, this.value)">${libro.notas}</textarea>
        </div>

      </div>
    </div>`;
  }).join('');
}

// Abre o cierra el detalle de una tarjeta
window.blToggle = function(id) {
  const libro = lectura.libros.find(l => l.id === id);
  if (!libro) return;
  libro.abierto = !libro.abierto;
  guardarEnLocalStorage();
  blRenderLista();
};

// Actualiza el progreso al mover el slider
window.blUpdateProgreso = function(id, val) {
  const libro = lectura.libros.find(l => l.id === id);
  if (!libro) return;
  libro.progreso = parseInt(val);
  guardarEnLocalStorage();
  // Actualizar solo el texto del porcentaje sin redibujar toda la lista
  const card = document.getElementById('blc-' + id);
  if (card) {
    const pct = card.querySelector('.bl-progress-pct');
    const pagLeidas = libro.paginas ? Math.round(libro.paginas * libro.progreso / 100) + ' / ' + libro.paginas + ' págs.' : '';
    if (pct) pct.textContent = libro.progreso + '%' + (pagLeidas ? ' — ' + pagLeidas : '');
  }
};

// Guarda las notas del libro en tiempo real
window.blUpdateNotas = function(id, texto) {
  const libro = lectura.libros.find(l => l.id === id);
  if (!libro) return;
  libro.notas = texto;
  guardarEnLocalStorage();
};

// Elimina un libro de la lista
window.blEliminar = function(id, event) {
  event.stopPropagation();
  lectura.libros = lectura.libros.filter(l => l.id !== id);
  guardarEnLocalStorage();
  blRenderLista();
  actualizarSelectsDeLibros();
  mostrarToast('🗑️ Libro eliminado');
};

/* ─────────────────────────────────────────────────────
   SEGUIMIENTO DE LECTURA
   Permite registrar el progreso de lectura de un libro:
   fecha de inicio, fecha de fin, tiempo diario y avance.
───────────────────────────────────────────────────── */

window.guardarSeguimiento = function() {
  // Leer valores del formulario
  const libro    = document.getElementById('libro-select')?.value;
  const inicio   = document.getElementById('fecha-inicio')?.value;
  const fin      = document.getElementById('fecha-fin')?.value;
  const tiempo   = parseInt(document.getElementById('tiempo-diario')?.value) || 0;
  const paginas  = parseInt(document.getElementById('paginas-total')?.value) || 0;
  const progreso = parseInt(document.getElementById('progreso-rango')?.value) || 0;

  // Validar que haya libro y fecha de inicio
  if (!libro || !inicio) {
    mostrarToast('⚠️ Selecciona un libro y la fecha de inicio');
    return;
  }

  // Guardar el seguimiento
  lectura.seguimientos.push({ libro, inicio, fin, tiempo, paginas, progreso });
  guardarEnLocalStorage();
  actualizarEstadisticas();

  // Limpiar el formulario
  ['libro-select','fecha-inicio','fecha-fin','tiempo-diario','paginas-total'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  const rango = document.getElementById('progreso-rango');
  const valor = document.getElementById('progreso-valor');
  if (rango) rango.value = '0';
  if (valor) valor.textContent = '0%';

  mostrarToast('✅ Seguimiento guardado correctamente');
};

/* Calcula y muestra las estadísticas de todos los seguimientos */
function actualizarEstadisticas() {
  // Libros únicos leídos
  const librosUnicos = new Set(lectura.seguimientos.map(s => s.libro)).size;

  // Total de horas invertidas
  const horasTotales = lectura.seguimientos.reduce((total, s) => {
    const dias = s.fin
      ? Math.max(1, Math.round((new Date(s.fin) - new Date(s.inicio)) / 86400000))
      : 1;
    return total + Math.round((s.tiempo * dias) / 60);
  }, 0);

  // Total de páginas leídas
  const paginasTotales = lectura.seguimientos.reduce((total, s) => {
    return total + Math.round(s.paginas * s.progreso / 100);
  }, 0);

  // Actualizar los elementos en pantalla
  const elLibros  = document.getElementById('stat-libros');
  const elHoras   = document.getElementById('stat-horas');
  const elPaginas = document.getElementById('stat-paginas');

  if (elLibros)  elLibros.textContent  = librosUnicos;
  if (elHoras)   elHoras.textContent   = horasTotales + 'h';
  if (elPaginas) elPaginas.textContent = paginasTotales;
}


/* ─────────────────────────────────────────────────────
   NOTAS DE LECTURA
   Permite crear notas vinculadas a un libro y página.
───────────────────────────────────────────────────── */

window.guardarNota = function() {
  const libro  = document.getElementById('libro-nota')?.value;
  const pagina = document.getElementById('pagina-nota')?.value;
  const texto  = document.getElementById('texto-nota')?.value?.trim();

  // Validar que todos los campos estén completos
  if (!libro || !pagina || !texto) {
    mostrarToast('⚠️ Completa todos los campos antes de guardar');
    return;
  }

  // Crear el objeto de nota
  const nota = {
    id: Date.now(),
    libro,
    pagina,
    texto,
    fecha: new Date().toLocaleDateString('es-ES', {
      day: '2-digit', month: 'short', year: 'numeric'
    })
  };

  lectura.notas.unshift(nota); // agregar al inicio (más reciente primero)
  guardarEnLocalStorage();
  mostrarListaDeNotas();

  // Limpiar el formulario
  ['libro-nota','pagina-nota','texto-nota'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  mostrarToast('✅ Nota guardada correctamente');
};

/* Muestra todas las notas guardadas en pantalla */
function mostrarListaDeNotas() {
  const contenedor = document.getElementById('notas-container');
  const badge      = document.getElementById('badge-notas');

  // Actualizar el contador de notas
  if (badge) {
    badge.textContent = lectura.notas.length + ' nota' + (lectura.notas.length !== 1 ? 's' : '');
  }

  if (!contenedor) return;

  // Si no hay notas, mostrar mensaje vacío
  if (lectura.notas.length === 0) {
    contenedor.innerHTML = `
      <div class="libros-empty">
        <ion-icon name="create-outline"></ion-icon>
        <p>No hay notas aún. ¡Crea tu primera nota!</p>
      </div>`;
    return;
  }

  // Generar HTML para cada nota
  contenedor.innerHTML = lectura.notas.map(nota => `
    <div class="nota-item">
      <div class="nota-meta">
        <span class="nota-libro">${nota.libro}</span>
        <span class="nota-pagina">p.${nota.pagina} · ${nota.fecha}</span>
        <button class="nota-del" onclick="eliminarNota(${nota.id})">
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
      <p class="nota-texto">${nota.texto}</p>
    </div>
  `).join('');
}

/* Elimina una nota por su ID */
window.eliminarNota = function(id) {
  lectura.notas = lectura.notas.filter(n => n.id !== id);
  guardarEnLocalStorage();
  mostrarListaDeNotas();
  mostrarToast('🗑️ Nota eliminada');
};


/* ─────────────────────────────────────────────────────
   TÉCNICAS DE LECTURA
   Checkboxes que el usuario puede marcar para registrar
   qué técnicas de lectura ya practicó.
   La barra de progreso se actualiza en tiempo real.
───────────────────────────────────────────────────── */

window.actualizarProgresoLectura = function() {
  const checkboxes  = document.querySelectorAll('.tl-check');
  const marcados    = Array.from(checkboxes).filter(c => c.checked).length;
  const total       = checkboxes.length;
  const porcentaje  = total > 0 ? Math.round((marcados / total) * 100) : 0;

  // Actualizar barra de progreso y contador
  const barra    = document.getElementById('tec-progress-fill');
  const contador = document.getElementById('tec-count');
  if (barra)    barra.style.width    = porcentaje + '%';
  if (contador) contador.textContent = marcados;

  // Marcar visualmente las tarjetas completadas
  checkboxes.forEach(checkbox => {
    const tarjeta = checkbox.closest('.tecnica-lec');
    if (tarjeta) tarjeta.classList.toggle('completada', checkbox.checked);
  });

  // Guardar estado
  lectura.tecnicas = Array.from(checkboxes).map(c => c.checked);
  guardarEnLocalStorage();
};

/* Muestra un mensaje cuando el usuario inicia una técnica de lectura */
window.iniciarTecnica = function(boton) {
  const tarjeta = boton.closest('.tecnica-lec');
  const nombre  = tarjeta?.querySelector('h4')?.textContent || 'la técnica';

  const instrucciones = {
    'Skimming':            'Pasa los ojos rápidamente por el texto, enfocándote en títulos, subtítulos y primeras oraciones de párrafo.',
    'Scanning':            'Busca palabras clave o datos específicos sin leer todo el texto. Mueve los ojos en zigzag por la página.',
    'SQ3R Aplicado':       'Sigue los 5 pasos: Ojeada → Preguntas → Lectura → Recitado → Repaso. Dedica 5 min a cada fase.',
    'Lectura Crítica':     'Por cada párrafo, pregúntate: ¿Cuál es la idea principal? ¿Qué evidencia hay? ¿Estoy de acuerdo?',
    'Anotaciones':         'Prepara tu sistema de símbolos: ★ importante, ? duda, → relación, ✓ entendido. Anota al margen.',
    'Lectura Activa':      'Formula 3 preguntas antes de leer cada capítulo. Lee buscando las respuestas.',
    'Mapas Conceptuales':  'Después de leer, dibuja el concepto central y traza ramas hacia las ideas relacionadas.',
    'Lectura en Voz Alta': 'Lee en voz alta con ritmo moderado. Grábate y escúchate para detectar qué no entiendes bien.',
    'PQ4R':                'Preview → Question → Read → Reflect → Recite → Review. Practica cada fase durante 5-10 minutos.',
    'Descanso Consciente': 'Después de 25 minutos de lectura, toma 5 min de pausa activa: estira, respira, reflexiona sobre lo leído.'
  };

  const instruccion = instrucciones[nombre] || 'Practica esta técnica durante al menos 10 minutos para asimilarla correctamente.';
  mostrarToast(`🚀 ${nombre}: ${instruccion}`, 5000);
};


/* ─────────────────────────────────────────────────────
   INICIALIZACIÓN DE LA SECCIÓN LECTURA
   Se ejecuta cuando el usuario navega a la sección
   de Lectura para cargar todos los datos guardados.
───────────────────────────────────────────────────── */

function inicializarSeccionLectura() {
  blRenderLista();
  actualizarSelectsDeLibros();
  mostrarListaDeNotas();
  actualizarEstadisticas();
  restaurarCheckboxesTecnicas();
}

/* Restaura el estado de los checkboxes desde localStorage */
function restaurarCheckboxesTecnicas() {
  const checkboxes = document.querySelectorAll('.tl-check');
  if (lectura.tecnicas.length > 0) {
    checkboxes.forEach((checkbox, i) => {
      if (lectura.tecnicas[i]) checkbox.checked = true;
    });
  }
  actualizarProgresoLectura();
}

/* Extender mostrarSeccion para inicializar Lectura al navegar a ella */
const mostrarSeccionOriginal = window.mostrarSeccion;
window.mostrarSeccion = function(id) {
  mostrarSeccionOriginal(id);
  if (id === 'lectura') {
    setTimeout(inicializarSeccionLectura, 50); // pequeño delay para que el DOM esté listo
  }
};

/* Si la página carga directamente con la sección Lectura activa */
if (document.getElementById('lectura')?.classList.contains('active')) {
  inicializarSeccionLectura();
}


/* ─────────────────────────────────────────────────────
   UTILIDAD: TOAST DE NOTIFICACIÓN
   Muestra un pequeño mensaje flotante en la parte
   inferior de la pantalla que desaparece automáticamente.

   mensaje  = texto a mostrar
   duracion = tiempo en ms antes de desaparecer (default: 3000)
───────────────────────────────────────────────────── */
function mostrarToast(mensaje, duracion = 3000) {

  // Eliminar cualquier toast anterior que aún esté visible
  document.getElementById('fn-toast')?.remove();

  // Crear el elemento del toast
  const toast = document.createElement('div');
  toast.id = 'fn-toast';
  toast.textContent = mensaje;

  // Estilos del toast (posición, apariencia, etc.)
  Object.assign(toast.style, {
    position:           'fixed',
    bottom:             '2rem',
    left:               '50%',
    transform:          'translateX(-50%) translateY(20px)',
    background:         'rgba(10,15,22,0.95)',
    backdropFilter:     'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border:             '1px solid rgba(255,255,255,0.12)',
    color:              '#fff',
    padding:            '.75rem 1.5rem',
    borderRadius:       '9999px',
    fontSize:           '.875rem',
    fontFamily:         'var(--font-body)',
    fontWeight:         '400',
    zIndex:             '9999',
    boxShadow:          '0 8px 32px rgba(0,0,0,.4)',
    opacity:            '0',
    transition:         'opacity .3s ease, transform .3s ease',
    maxWidth:           '90vw',
    textAlign:          'center',
    lineHeight:         '1.5'
  });

  document.body.appendChild(toast);

  // Animación de entrada (fade in)
  requestAnimationFrame(() => {
    toast.style.opacity   = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  // Animación de salida (fade out) y eliminación del DOM
  setTimeout(() => {
    toast.style.opacity   = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, duracion);
}