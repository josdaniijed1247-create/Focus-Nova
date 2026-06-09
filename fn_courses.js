/* ═══════════════════════════════════════════════════════
   FocusNova · fn_courses.js
   6 Cursos × 4 Técnicas × 6 Módulos
   Módulos se revelan UNO A UNO al hacer clic en Continuar
═══════════════════════════════════════════════════════ */

const FN_COURSES = [

  {
    id:1, title:'Tomar Apuntes',
    desc:'Convierte tus notas en herramientas de aprendizaje real. De caótico a estructurado.',
    emoji:'📝', color:'#89AACC', colorBg:'rgba(137,170,204,.15)',
    intro:'¿Alguna vez saliste de una clase sintiendo que entendiste todo, pero al llegar a casa no recordabas casi nada de lo que se explicó? Tomar apuntes parece algo sencillo, pero hacerlo mal puede ser peor que no tomarlos en absoluto. Según investigaciones en neurociencia del aprendizaje, olvidamos aproximadamente el 50% de la información nueva en la primera hora, y hasta el 70% en las primeras 24 horas. Sin embargo, cuando tomamos apuntes de manera activa y estructurada, la retención puede aumentar hasta en un 80%.',
    techniques:[

      { id:'c1t1', title:'Método Cornell', difficulty:'Básico', time:'15 min',
        tag:'El sistema de apuntes más usado en universidades del mundo.',
        m1i:'¿Cuántas veces has estudiado horas tus apuntes y al llegar al examen sentiste que no recordabas nada? ¿O revisaste tus notas y no entendiste lo que escribiste? Ese es exactamente el problema que el Método Cornell resuelve. La mayoría de personas toman apuntes de forma caótica: escriben todo lo que escuchan sin ninguna estructura, y al momento de estudiar se encuentran con páginas llenas de texto que no saben cómo usar. El resultado es más tiempo perdido, más estrés y menos aprendizaje real.',
        m1d:'El Método Cornell fue creado en la década de 1950 por el profesor Walter Pauk de la Universidad de Cornell. Desde entonces se ha convertido en uno de los sistemas de toma de apuntes más utilizados en universidades de todo el mundo, gracias a su efectividad comprobada para mejorar la comprensión y la retención a largo plazo.',
        m1t:'Con práctica constante, notarás mejoras claras en tu comprensión y retención en tan solo 2 a 3 semanas de uso regular.',
        m2q:'El Método Cornell es un sistema de toma de apuntes que organiza tu página en tres secciones bien definidas: una columna de notas principal (derecha, 70% del espacio), una columna lateral de preguntas clave (izquierda, 30% del espacio) y un espacio de resumen al pie de la página. Esta estructura te obliga a procesar la información de forma activa mientras la escribes y te facilita enormemente el repaso posterior.',
        m2p:'El método funciona porque activa dos de los procesos más poderosos del aprendizaje: la elaboración y la recuperación activa. Cuando formulas preguntas sobre tus propias notas, tu cerebro no solo almacena la información, sino que la organiza, la conecta con lo que ya sabe y la procesa a un nivel más profundo. Además, el resumen final obliga a tu mente a sintetizar las ideas principales, lo que refuerza la memoria a largo plazo.',
        m2h:'Mariana era una estudiante universitaria que reprobaba sus exámenes a pesar de estudiar muchas horas. Cuando empezó a usar el Método Cornell en todas sus clases, su forma de estudiar cambió completamente. En lugar de releer páginas y páginas de notas desordenadas, podía repasar con solo cubrir la columna de notas y responder sus propias preguntas. En su siguiente parcial, obtuvo la mejor nota de su clase.',
        m3s:['Columna de Notas (derecha, 70%): Escribe las ideas, conceptos y explicaciones importantes durante la clase o lectura. No copies todo textualmente; usa frases cortas, abreviaciones y puntos clave.','Columna de Preguntas (izquierda, 30%): Esta columna la completas DESPUÉS de la clase. Aquí escribes preguntas, palabras clave o indicaciones que se relacionen con tus notas del lado derecho. Sirven para activar tu memoria cuando estudies.','Sección de Resumen (pie de página, 5-7 líneas): Al final de cada página o sesión, escribe un resumen breve con tus propias palabras de lo más importante. Consolida el aprendizaje y te da una vista rápida del contenido.','Repaso activo: Cubre la columna de notas e intenta responder tus propias preguntas de memoria. Solo mira las notas si no recuerdas algo. Esto es lo que realmente graba la información en tu memoria.'],
        m3e:['Copiar todo textualmente en lugar de parafrasear con tus propias palabras.','Nunca completar la columna de preguntas después de clase. Sin ella, el método pierde toda su ventaja.','Saltar el resumen por falta de tiempo. Es precisamente la parte más poderosa del método. Nunca lo saltes.','Hacer preguntas demasiado simples de sí/no en lugar de preguntas que requieran explicación.'],
        m4e:'Toma una hoja en blanco y traza una línea vertical que divida la hoja en dos columnas: la izquierda de unos 6 cm y la derecha más grande (unos 14 cm). Luego traza una línea horizontal a unos 5 cm del fondo de la hoja. Escribe en la columna derecha: "El cerebro humano tiene dos hemisferios. El izquierdo controla el lenguaje y la lógica. El derecho controla la creatividad y las emociones. Ambos se comunican por el cuerpo calloso." Ahora cubre la columna derecha y escribe 2 preguntas en la columna izquierda. Escribe un resumen de 2-3 líneas en el espacio inferior. Finalmente, cubre las notas y responde tus preguntas de memoria.',
        m5f:'Usa el Método Cornell para tomar apuntes de un video de YouTube educativo de máximo 10 minutos. Al terminar, completa tu columna de preguntas y escribe el resumen.',
        m5m:'Usa el Método Cornell en tu próxima clase o lectura de estudio. Asegúrate de completar las tres secciones antes de cerrar el cuaderno.',
        m5a:'Usa el Método Cornell durante una semana completa en todas tus clases. Al final de cada día, repasa solo con la columna de preguntas y mide cuánto recuerdas sin ver las notas.',
        m6r:'¿Cómo cambiaría tu forma de estudiar si usaras el Método Cornell en todas tus clases o lecturas a partir de hoy? ¿Qué diferencia crees que notarías en tu rendimiento después de un mes de práctica constante?',
        m6f:'"La mente no es un recipiente que hay que llenar, sino un fuego que hay que encender." — Plutarco',
        m6c:['El Método Cornell divide la página en tres secciones: notas (derecha), preguntas (izquierda) y resumen (pie).','La columna de preguntas activa la recuperación activa, uno de los procesos más poderosos del aprendizaje.','El resumen al pie obliga al cerebro a sintetizar la información, fijándola en la memoria a largo plazo.','El error más común es omitir el resumen. Nunca lo saltes, sin importar lo cansado que estés.'] },

      { id:'c1t2', title:'Método Outlining', difficulty:'Básico', time:'15 min',
        tag:'Organiza la información en jerarquías claras con sangrías.',
        m1i:'¿Alguna vez terminaste de tomar apuntes y al releerlos no sabías qué era lo principal y qué era un detalle secundario? ¿Todo parecía igual de importante y no sabías por dónde empezar a estudiar? Ese es el problema clásico de los apuntes sin jerarquía. Cuando todo está al mismo nivel visual, el cerebro no puede distinguir lo esencial de lo accesorio, y estudiar se convierte en una tarea agotadora e ineficiente.',
        m1d:'Estudios en psicología cognitiva demuestran que el cerebro humano procesa y recuerda mejor la información cuando está organizada de forma jerárquica. Esto se llama "efecto de superioridad de la estructura", y explica por qué los libros de texto usan capítulos, secciones y subsecciones: nuestra mente está diseñada para organizar el conocimiento en niveles.',
        m1t:'Desde la primera vez que lo apliques notarás que tus apuntes son más claros. En 1 a 2 semanas de práctica constante, estructurar la información se vuelve completamente automático.',
        m2q:'El Método Outlining, también conocido como método de esquema o de jerarquías, es una técnica de toma de apuntes que organiza la información en niveles de importancia usando sangrías y viñetas. El tema principal va al margen izquierdo, los subtemas se identifican hacia la derecha, y los detalles específicos se indentan aún más. El resultado es una representación visual de cómo se relacionan todas las ideas entre sí.',
        m2p:'El Outlining funciona porque imita la forma en que el cerebro naturalmente categoriza la información. Cuando organizas tus notas jerárquicamente, estás activando el pensamiento crítico: necesitas evaluar cada dato y decidir si es un concepto principal, un subtema o un detalle de apoyo. Este proceso de clasificación obliga al cerebro a procesar la información a mayor profundidad, lo que se traduce en mejor comprensión y retención.',
        m2h:'Carlos estudiaba Derecho y se sentía abrumado por la cantidad de leyes, artículos y excepciones que debía memorizar. Sus apuntes eran bloques interminables de texto que no podía diferenciar. Cuando empezó a usar Outlining, transformó esas páginas caóticas en estructuras claras con temas, subtemas y casos específicos bien separados. Su tiempo de estudio se redujo a la mitad.',
        m3s:['Nivel 1 — Tema principal (sin sangría, al margen): Es el tema central de la clase o lectura. Ejemplo: "El Sistema Solar".','Nivel 2 — Subtemas (1 sangría): Son las divisiones principales del tema. Ejemplo: "Planetas interiores" / "Planetas exteriores".','Nivel 3 — Puntos específicos (2 sangrías): Detalles importantes de cada subtema. Ejemplo: "Mercurio: el más cercano al Sol, sin atmósfera".','Nivel 4 — Detalles de apoyo (3 sangrías): Datos adicionales o ejemplos. Ejemplo: "Temperatura: 430°C de día, -180°C de noche".'],
        m3e:['Poner demasiados niveles y crear estructuras tan complejas que son más difíciles de leer que el texto original.','No mantener consistencia en las sangrías, mezclando niveles y creando confusión visual.','Escribir oraciones completas en lugar de frases cortas y palabras clave.','Crear outlines tan largos que terminan siendo iguales al texto original. Dominar es saber qué NO escribir.'],
        m4e:'Lee el siguiente párrafo: "Los animales vertebrados se dividen en cinco clases. Los mamíferos son de sangre caliente, tienen pelo y amamantan a sus crías. Los reptiles son de sangre fría y tienen escamas. Las aves tienen plumas y la mayoría puede volar. Los peces viven en el agua y respiran por branquias. Los anfibios pueden vivir en agua y tierra." Crea un outline de 3 niveles: el tema principal al margen izquierdo, las 5 clases con una sangría, y sus características con dos sangrías. Revisa que puedas entender la estructura sin leer el párrafo original.',
        m5f:'Toma un tema de cualquier materia que ya conozcas bien y crea un outline de 3 niveles en menos de 10 minutos.',
        m5m:'En tu próxima clase o lectura, usa el Método Outlining para tomar todos tus apuntes. Al terminar, muéstraselo a alguien y pregúntale si puede entender el tema solo leyendo tu outline.',
        m5a:'Toma un capítulo completo de un libro de estudio y conviértelo en un outline de 4 niveles en menos de 30 minutos. Al día siguiente, intenta reconstruir el tema de memoria usando solo tu outline como guía.',
        m6r:'¿Cómo cambiaría tu estudio si pudieras ver claramente la estructura de cualquier tema en minutos? ¿Qué materia o área de tu vida se beneficiaría más si empezaras a organizar la información de esta manera?',
        m6f:'"El orden es la primera ley del cielo." — Alexander Pope',
        m6c:['El Método Outlining organiza la información en niveles jerárquicos usando sangrías.','Funciona porque imita cómo el cerebro categoriza naturalmente el conocimiento.','Tiene 4 niveles: tema principal, subtemas, puntos específicos y detalles de apoyo.','El error más común es crear outlines demasiado largos: saber qué omitir es la clave del dominio.'] },

      { id:'c1t3', title:'Método Boxing', difficulty:'Básico', time:'10 min',
        tag:'Encierra lo importante en recuadros para crear jerarquía visual instantánea.',
        m1i:'¿Alguna vez releerías tus apuntes y no podías encontrar rápidamente el concepto clave que necesitabas? ¿Todo estaba escrito pero nada destacaba? Cuando todos los apuntes tienen el mismo formato visual, el cerebro no sabe qué priorizar. El Método Boxing resuelve esto de forma simple y efectiva: encierra en recuadros los conceptos más importantes para que destaquen visualmente del resto del contenido, creando una jerarquía visual instantánea.',
        m1d:'Estudios en neurociencia visual demuestran que los elementos encuadrados o con bordes definidos capturan la atención del cerebro hasta 3 veces más rápido que el texto plano. Esto se debe al efecto de "figure-ground", donde el cerebro automáticamente separa lo que está delimitado del fondo.',
        m1t:'Desde la primera vez que uses Boxing, repasar tus apuntes será más rápido porque tus ojos irán directamente a los recuadros más importantes.',
        m2q:'El Método Boxing consiste en dibujar recuadros alrededor de los conceptos, definiciones, fórmulas o ideas más importantes de tus apuntes. Los recuadros crean zonas de atención prioritaria que el ojo identifica inmediatamente al repasar. Puedes usar diferentes tamaños o tipos de recuadro para indicar diferentes niveles de importancia.',
        m2p:'El Boxing activa el procesamiento preattentivo del cerebro, es decir, la capacidad de detectar elementos destacados antes de leer conscientemente. Cuando repasas tus apuntes, tus ojos van directamente a los recuadros sin necesidad de leer todo el texto. Esto reduce el tiempo de repaso y aumenta la eficiencia del estudio.',
        m2h:'Andrés estudiaba física y sus apuntes eran páginas densas de texto mezclado con fórmulas. Cuando empezó a encuadrar todas las fórmulas y definiciones clave, su tiempo de repaso se redujo drásticamente porque ya no tenía que leer todo, solo buscar los recuadros y revisar el contexto alrededor de ellos.',
        m3s:['Recuadro simple (una línea): Para definiciones importantes y conceptos clave que necesitas recordar.','Recuadro doble (dos líneas): Para fórmulas, leyes o reglas que son fundamentales para el tema.','Recuadro con sombra o relleno: Para la información más crítica del tema, lo que definitivamente entrará en el examen.','Recuadro con estrella o símbolo: Para ideas que quieres revisar o investigar más después. La clave es la selectividad: no encuadres más del 20-30% del contenido.'],
        m3e:['Encuadrar demasiada información hasta que todo tiene un recuadro y nada destaca. Esto cancela completamente el efecto.','No ser consistente con el sistema de recuadros, mezclando tipos sin un criterio claro.','Usar Boxing como único método en lugar de combinarlo con Cornell u Outlining.'],
        m4e:'Toma cualquier página de apuntes que tengas ahora mismo y aplica Boxing: lee la página completa primero sin marcar nada, identifica las 3 a 5 ideas o conceptos más importantes, dibuja un recuadro simple alrededor de cada uno, y si hay alguna fórmula o regla crítica, usa un recuadro doble. Aleja la página y mírala: ¿tus ojos van directamente a los recuadros? Si es así, el Boxing está funcionando.',
        m5f:'Aplica Boxing a 3 páginas de apuntes que ya tengas. Identifica cuánto tiempo tardas en repasar una página sin Boxing vs. con Boxing.',
        m5m:'En tu próxima sesión de apuntes, aplica Boxing en tiempo real mientras tomas notas. Decide qué encuadrar antes de escribir.',
        m5a:'Crea un sistema personalizado de 4 tipos de recuadro con criterios claros para cada uno y úsalo consistentemente durante una semana.',
        m6r:'Si pudieras repasar cualquier tema en la mitad del tiempo que te toma ahora, ¿cómo cambiaría tu productividad como estudiante? ¿Qué harías con ese tiempo extra?',
        m6f:'"Lo que se destaca es lo que se recuerda." — Principio de la Gestalt',
        m6c:['El Boxing encierra los conceptos más importantes en recuadros para crear jerarquía visual instantánea.','Diferentes tipos de recuadro indican diferentes niveles de importancia.','Funciona como complemento de cualquier otro método de apuntes.','La selectividad extrema es la clave: no más del 20-30% del contenido encuadrado.'] },

      { id:'c1t4', title:'Flow Notes (Apuntes por Flujo)', difficulty:'Intermedio', time:'20 min',
        tag:'Captura ideas tal como fluyen, priorizando la comprensión sobre la organización.',
        m1i:'¿Alguna vez sentiste que mientras tomabas apuntes de forma muy estructurada perdías el hilo de lo que se estaba explicando? ¿O que tu mente estaba más ocupada escribiendo que entendiendo? Todos los métodos de apuntes estructurados tienen una limitación: requieren que dividas tu atención entre entender la clase y organizar la información al mismo tiempo. En clases rápidas o con ideas muy conectadas, esto puede hacer que pierdas más de lo que capturas.',
        m1d:'El concepto de Flow Notes fue popularizado por Scott Young, conocido por completar el currículo completo del MIT en un año de forma autodidacta. Young descubrió que las técnicas de apuntes muy rígidas interrumpían el estado de "flow" o flujo cognitivo, el estado mental de máxima concentración y comprensión. Los Flow Notes preservan ese estado.',
        m1t:'Desde la primera vez que los uses en una clase notarás que tu comprensión del tema es más profunda, aunque tus apuntes se vean menos organizados que antes.',
        m2q:'Los Flow Notes son un método de apuntes no lineal donde escribes y dibujas las ideas tal como fluyen en la clase, conectándolas con flechas, líneas y símbolos en lugar de listas o jerarquías rígidas. No hay una estructura predefinida: la estructura emerge naturalmente del contenido. El resultado parece menos ordenado que otros métodos pero captura las relaciones entre ideas de forma más fiel a cómo se presentaron.',
        m2p:'Los Flow Notes funcionan porque reducen la carga cognitiva durante la toma de apuntes. Al no tener que decidir en qué nivel jerárquico va cada idea, el cerebro puede destinar más recursos a entender el contenido. Además, las conexiones visuales entre ideas (flechas, líneas) activan el mismo tipo de procesamiento que los mapas mentales, creando una red de conocimiento en lugar de una lista.',
        m2h:'Camila estudiaba filosofía y sus profesores hablaban muy rápido conectando ideas constantemente. Sus apuntes Cornell siempre quedaban incompletos porque no podía estructurar y entender al mismo tiempo. Cuando cambió a Flow Notes, sus apuntes parecían más desordenados pero entendía mucho mejor el contenido, y al repasar podía ver exactamente cómo el profesor conectaba las ideas.',
        m3s:['Escribe en cualquier parte de la hoja: No empieces siempre desde la esquina superior izquierda. Coloca cada idea donde tenga más sentido visualmente en relación con las otras ideas.','Conecta con flechas y líneas: Cuando dos ideas se relacionan, dibuja una flecha entre ellas. Si una idea causa otra, usa una flecha direccional. Si son equivalentes, usa una línea doble.','Usa palabras clave, no oraciones: Escribe solo lo esencial de cada idea. Los Flow Notes son especialmente minimalistas en el texto.','Revisa y reorganiza después: Los Flow Notes crudos a veces necesitan una revisión posterior para consolidar las conexiones. Esto puede hacerse convirtiéndolos en un mapa mental o en un outline más estructurado.'],
        m3e:['Intentar hacer Flow Notes perfectos desde el principio. Son deliberadamente imperfectos y eso está bien.','No revisar los apuntes después de la clase, perdiéndose la consolidación más importante.','Usarlos en situaciones donde un método más estructurado sería más apropiado, como en lecturas lentas y detalladas.'],
        m4e:'Pon un video educativo de YouTube sobre cualquier tema que te interese (5-10 minutos). Toma una hoja en blanco y escucha el video. Escribe las ideas en cualquier parte de la hoja usando solo palabras clave. Cada vez que el video conecte dos ideas, dibuja una flecha entre ellas en tu hoja. Al terminar, sin volver a ver el video, escribe en el reverso un párrafo con lo que entendiste. Compara con tus notas.',
        m5f:'Usa Flow Notes en el próximo video educativo o podcast que escuches. Compara tu comprensión con la de otras veces que tomaste apuntes lineales.',
        m5m:'Usa Flow Notes en una clase real y después conviértelos en un Mapa Mental o Outline más organizado. Evalúa cuánto entendiste.',
        m5a:'Usa Flow Notes durante una semana completa en todas tus clases más dinámicas. Al final compara tu nivel de comprensión con semanas anteriores.',
        m6r:'¿Hay alguna clase o situación de aprendizaje donde sientes que siempre pierdes el hilo? ¿Cómo crees que los Flow Notes cambiarían esa experiencia específica?',
        m6f:'"El aprendizaje no es un espectador deportivo." — D. Boud',
        m6c:['Los Flow Notes capturan el flujo natural de ideas usando flechas, líneas y palabras clave no lineales.','Priorizan la comprensión durante la clase sobre la organización inmediata.','Son ideales para clases rápidas, conferencias y cualquier contenido muy dinámico.','El dominio incluye saber cuándo usarlos y cuándo elegir otro método más estructurado.'] }
    ]
  },

  {
    id:2, title:'Memorizar',
    desc:'Lo que aprendes hoy, recuérdalo en un mes. Técnicas respaldadas por la neurociencia.',
    emoji:'🧠', color:'#a78bfa', colorBg:'rgba(167,139,250,.15)',
    intro:'¿Cuántas veces has estudiado algo durante horas, lo entendiste perfectamente, pero al día siguiente no podías recordar casi nada? La memoria no es un recipiente donde depositas información y esperas que se quede ahí. Es un sistema activo, dinámico y entrenable que responde a técnicas específicas. La memoria humana no tiene un límite de capacidad conocido; el problema nunca es la capacidad, sino el método de almacenamiento y recuperación.',
    techniques:[

      { id:'c2t1', title:'Repetición Espaciada', difficulty:'Básico', time:'15 min',
        tag:'Distribuye los repasos en el tiempo y recuerda hasta 200% más.',
        m1i:'¿Estudias la noche del examen, lo recuerdas todo al día siguiente, pero una semana después no recuerdas nada? ¿El conocimiento parece evaporarse tan pronto como ya no lo necesitas? Ese es el resultado del estudio en bloque: estudiar todo de una vez justo antes del examen. Funciona para el corto plazo pero es devastador para la memoria a largo plazo. La Repetición Espaciada distribuye los repasos en el tiempo de forma estratégica para que la información se transfiera de la memoria de corto plazo a la de largo plazo de manera permanente.',
        m1d:'Un estudio de la Universidad de California demostró que los estudiantes que usaron Repetición Espaciada recordaron hasta 200% más información después de un mes comparado con los que estudiaron en bloque. La diferencia no fue el tiempo total de estudio sino cómo se distribuyó ese tiempo.',
        m1t:'En 3 a 4 semanas de práctica consistente notarás que recuerdas sin esfuerzo lo que antes olvidabas rápidamente.',
        m2q:'Consiste en repasar la información en intervalos crecientes, justo antes de que el cerebro la olvide. Primer repaso: mismo día. Segundo: 3 días después. Tercero: 1 semana. Cuarto: 2 semanas. Quinto: 1 mes. Cada repaso fortalece la memoria y extiende el período antes del próximo olvido.',
        m2p:'Aprovecha el "efecto de espaciado". Cuando el cerebro está a punto de olvidar algo y se le presenta de nuevo, el esfuerzo de recuperación fortalece la ruta neural asociada, haciéndola más resistente al olvido futuro. Es como ejercitar un músculo: el esfuerzo es lo que genera el crecimiento.',
        m2h:'Luis aprendía inglés pero olvidaba el vocabulario en días. Con Repetición Espaciada y Anki, en 15 minutos diarios dominó más de 2000 palabras en 6 meses que recuerda perfectamente un año después.',
        m3s:['Intervalo óptimo: mismo día → 3 días → 1 semana → 2 semanas → 1 mes.','Cada repaso debe comenzar con un intento activo de recordar ANTES de revisar el material. Nunca repasar pasivamente.','Las tarjetas o conceptos que fallas vuelven al inicio del ciclo; los que dominas avanzan al siguiente intervalo.','Herramienta recomendada: Anki calcula automáticamente el intervalo óptimo para cada tarjeta. Es gratuita en PC y Android. También puedes usar Quizlet o tarjetas físicas con sistema de 5 cajas.'],
        m3e:['Hacer los repasos de forma pasiva, releyendo sin intentar recordar primero. Esto cancela el efecto del espaciado.','Saltarse repasos porque "ya lo sé". Precisamente cuando sientes que ya lo sabes es el mejor momento para repasar.','Estudiar todo de una vez el día antes del examen en lugar de distribuir los repasos.'],
        m4e:'Elige 10 conceptos clave de una materia actual. Escríbelos en tarjetas con pregunta en un lado y respuesta en el otro. Estúdialos hoy completamente. Programa alarmas: en 3 días, 1 semana, 2 semanas y 1 mes. En cada alarma: intenta responder de memoria antes de mirar la respuesta. Marca las que fallaste para priorizar en el siguiente repaso.',
        m5f:'Crea 10 tarjetas de Repetición Espaciada sobre un tema actual y programa los repasos con alarmas reales.',
        m5m:'Usa Anki durante 2 semanas con 15 minutos diarios. Evalúa cuántos conceptos recuerdas al final sin ver el material.',
        m5a:'Implementa la Repetición Espaciada para todas tus materias durante un mes y compara tu rendimiento en exámenes.',
        m6r:'¿Qué conocimiento que hoy estudias para olvidar mañana te gustaría retener realmente? ¿Cómo cambiaría tu vida académica si ese conocimiento se quedara contigo para siempre?',
        m6f:'"La memoria es el diario que todos llevamos con nosotros." — Oscar Wilde',
        m6c:['Distribuye repasos en intervalos crecientes: mismo día → 3 días → 1 semana → 2 semanas → 1 mes.','Cada repaso requiere intentar recordar de memoria ANTES de ver la respuesta.','Con 15-20 minutos diarios se pueden mantener activos cientos de conceptos.','Dejar de repasar lo que "ya sabes bien" es el error más común. Sin repasos, incluso la memoria más fuerte se debilita.'] },

      { id:'c2t2', title:'Recuperación Activa (Active Recall)', difficulty:'Básico', time:'15 min',
        tag:'Recuerda 50% más dejando de releer y empezando a recuperar.',
        m1i:'¿Releíste tus apuntes muchas veces y sentiste que lo sabías todo, pero al examen tu mente quedó en blanco? ¿La información estaba ahí pero no podías recuperarla cuando más la necesitabas? Eso se llama "ilusión de competencia": cuando relees algo conocido, el cerebro lo reconoce fácilmente y lo interpreta como que lo sabe. Pero reconocer no es lo mismo que recordar. El examen te pide recuperar sin ver el material. La Recuperación Activa entrena exactamente esa habilidad.',
        m1d:'Un estudio de la Universidad de Purdue demostró que los estudiantes que practicaron recuperación activa recordaron un 50% más de información una semana después comparado con los que simplemente releyeron el material.',
        m1t:'Notarás mejoras en comprensión y retención desde la primera semana de uso consistente.',
        m2q:'Intentar recordar información de la memoria sin mirar el material de estudio. Cierras el cuaderno y te preguntas qué recuerdas. El esfuerzo mental de recuperar la información es precisamente lo que fortalece la memoria.',
        m2p:'Cuando intentas recuperar una memoria, el cerebro activa y reconecta las rutas neurales asociadas. Si la recuperación es exitosa, esas rutas se fortalecen. Si falla, el cerebro identifica las brechas y las señala para refuerzo. En ambos casos se genera más aprendizaje que releyendo.',
        m2h:'Gabriela estudiaba medicina y tenía que memorizar cientos de términos. Dejó de releer y empezó a cerrar el libro después de cada sección e intentar escribir de memoria todo lo que recordaba. En pocas semanas sus exámenes mejoraron drásticamente.',
        m3s:['Brain dump: Cierra los materiales y escribe todo lo que recuerdas del tema en una hoja en blanco. Sin mirar nada.','Preguntas y respuestas: Convierte tus apuntes en preguntas e intenta responderlas sin ver las notas.','Enseñar en voz alta: Explica el tema como si enseñaras a alguien. Donde te trabas es donde necesitas repasar.','Flashcards: Tarjetas con pregunta y respuesta. Intenta responder antes de voltear.','Pruebas de práctica: Hacer exámenes sin ver el material es la forma más efectiva de Active Recall.'],
        m3e:['Mirar las respuestas demasiado rápido sin dar tiempo al cerebro para intentar recuperar.','Confundir reconocimiento con recuerdo. Son habilidades completamente diferentes.','Usar Active Recall solo para las cosas fáciles, evitando las difíciles que más lo necesitan.'],
        m4e:'Elige un tema estudiado recientemente. Toma una hoja en blanco. No mires ningún apunte. Escribe durante 5 minutos todo lo que recuerdas del tema. Compara con tus apuntes: marca en verde lo recordado, en rojo lo olvidado. Los elementos en rojo son tu lista de prioridades para el próximo repaso.',
        m5f:'Brain Dump de 5 minutos sobre el tema más reciente que hayas estudiado.',
        m5m:'Convierte los apuntes de una materia completa en preguntas y respóndelas todas sin ver las notas.',
        m5a:'Durante una semana entera, reemplaza completamente la relectura por Active Recall en todas tus materias.',
        m6r:'¿Cuánto tiempo has invertido releyendo apuntes que después no recordabas? ¿Cómo cambiaría tu eficiencia si cada minuto realmente fortaleciera tu memoria en lugar de solo darte la ilusión de que aprendiste?',
        m6f:'"El esfuerzo de recordar es el acto de aprender." — Robert Bjork',
        m6c:['Consiste en intentar recordar sin ver el material. El esfuerzo fortalece la memoria.','5 formas: Brain Dump, preguntas, enseñar en voz alta, flashcards y pruebas de práctica.','Reconocer no es lo mismo que recordar. Active Recall entrena el recuerdo real.','Brain Dump de 5 minutos al final de cada clase es el hábito más poderoso que puedes crear.'] },

      { id:'c2t3', title:'Palacio de la Memoria', difficulty:'Intermedio', time:'25 min',
        tag:'Transforma información abstracta en imágenes vividas ubicadas en lugares conocidos.',
        m1i:'¿Te cuesta memorizar listas largas o secuencias de pasos sin un orden aparente? ¿Los datos no tienen dónde "anclarse" en tu mente? La memoria humana no está diseñada para recordar datos abstractos. Está diseñada para recordar lugares, imágenes y experiencias. El Palacio de la Memoria convierte información abstracta en imágenes vividas colocadas en lugares que ya conoces perfectamente.',
        m1d:'Inventado por el poeta griego Simónides hace 2500 años, el Palacio de la Memoria es la técnica favorita de los campeones mundiales de memoria. Los campeones memorizan el orden de 52 cartas en menos de 2 minutos usando este método. Sherlock Holmes lo usa en la famosa serie de televisión.',
        m1t:'Después de 2-3 prácticas completas del ejercicio guiado, el método se vuelve natural y poderoso.',
        m2q:'Imaginas un lugar que conoces muy bien (tu casa) y colocas mentalmente las cosas que quieres memorizar en ubicaciones específicas de ese lugar. Para recordar, recorres mentalmente ese lugar y "ves" la información colocada en cada punto.',
        m2p:'El hipocampo, la región del cerebro responsable de la memoria, está especialmente optimizado para recordar lugares y rutas espaciales. El Palacio de la Memoria conecta información nueva con esta capacidad innata del cerebro humano.',
        m2h:'Tomás memorizó 20 presidentes en orden usando su propia casa como palacio. En cada habitación colocó una imagen absurda que representaba un presidente. Después de recorrer el palacio 3 veces, los recordó todos en el examen sin dificultad.',
        m3s:['Paso 1 — Elige tu palacio: Un lugar que conoces perfectamente. Tu casa es ideal para empezar.','Paso 2 — Define los puntos: Una ruta clara con puntos específicos y siempre en el mismo orden: puerta → sala → sofá → cocina → refrigerador → habitación → cama → baño.','Paso 3 — Convierte en imágenes: Para cada dato, crea una imagen visual exagerada y absurda. El cerebro recuerda mejor lo inusual y cómico.','Paso 4 — Coloca las imágenes: Mentalmente, coloca cada imagen en su punto correspondiente con todo el detalle posible. Cuanto más absurda y cómica sea, mejor se recordará.'],
        m3e:['Usar imágenes demasiado genéricas. Las imágenes absurdas y cómicas se recuerdan mucho mejor que las serias.','No definir claramente la ruta antes de empezar. La ruta debe ser siempre la misma.','Intentar memorizar demasiada información en el primer palacio. Empieza con 5-10 elementos.'],
        m4e:'Memoriza los 7 continentes usando tu casa con 7 puntos: puerta = dragón asiático (Asia), sala = jirafa africana (África), sofá = pingüino helado (Antártida), cocina = Tío Sam cocinando (América del Norte), refrigerador = loro amazónico adentro (América del Sur), habitación = Torre Eiffel en la cama (Europa), baño = canguro en el inodoro (Oceanía). Recorre mentalmente tu casa 3 veces visualizando cada imagen. Cierra los ojos y di los continentes en orden sin mirar.',
        m5f:'Memoriza una lista de 10 compras usando tu Palacio. Verifica cuántas recuerdas al final del día sin haberlas revisado.',
        m5m:'Memoriza los pasos de un proceso importante de alguna materia (los pasos del método científico, las etapas de la mitosis, etc.) usando el Palacio.',
        m5a:'Construye 3 palacios diferentes usando lugares distintos (casa, escuela, ruta al trabajo) para memorizar contenido de 3 materias simultáneamente.',
        m6r:'¿Qué información difícil de memorizar podrías convertir en una serie de imágenes absurdas en un lugar que conoces? ¿Cómo cambiaría esa experiencia si la convirtieras en algo visual y creativo?',
        m6f:'"La imaginación es más importante que el conocimiento." — Albert Einstein',
        m6c:['Convierte información abstracta en imágenes vividas colocadas en lugares conocidos.','Aprovecha la memoria espacial, una de las capacidades más poderosas del cerebro.','Pasos: elegir palacio, definir ruta, crear imágenes vividas y absurdas, colocarlas en los puntos.','Usa un palacio diferente para cada tema para evitar que las imágenes se confundan entre sí.'] },

      { id:'c2t4', title:'Flashcards con Autoevaluación', difficulty:'Básico', time:'15 min',
        tag:'La herramienta de memorización más respaldada por la ciencia.',
        m1i:'¿Estudias mucho tiempo pero al examen no sabes exactamente qué dominas y qué no? ¿Tu repaso es tan general que no te permite identificar tus verdaderas debilidades? Las Flashcards con Autoevaluación son la herramienta más versátil y efectiva para la memorización activa. No son solo tarjetas: son un sistema de autoevaluación que te dice exactamente qué sabes, qué no sabes y qué necesitas repasar más.',
        m1d:'Un metaanálisis de 2013 en Psychological Science identificó las Flashcards con recuperación activa como una de las dos técnicas más efectivas de todas las estudiadas, superando a releer, subrayar y resumir.',
        m1t:'Con 20 minutos diarios durante 2 semanas notarás un cambio significativo en lo que puedes recordar.',
        m2q:'Tarjetas con una pregunta en un lado y la respuesta en el otro. La Autoevaluación significa intentar recuperar la respuesta de memoria antes de verla, evaluarla honestamente y clasificar la tarjeta según qué tan bien la sabías para determinar con qué frecuencia vuelves a verla.',
        m2p:'Las Flashcards con Autoevaluación combinan Recuperación Activa y Repetición Espaciada en un solo sistema. Las tarjetas difíciles se ven más frecuentemente; las fáciles, menos. Esta combinación crea el sistema de memorización más eficiente conocido por la ciencia.',
        m2h:'Fernando aprendía japonés y el vocabulario le parecía imposible. Con 300 flashcards en Anki y 20 minutos diarios, en 3 meses dominó más vocabulario del que había aprendido en 2 años de clases tradicionales.',
        m3s:['Crear buenas tarjetas: UNA sola pregunta clara y UNA sola respuesta concisa por tarjeta. Nada más.','El intento de recuperación: SIEMPRE intentas responder antes de voltear la tarjeta. Sin excepciones.','La evaluación honesta: Sin trampa. Si dudaste, no la cuentes como "sabida". La honestidad es la clave.','Sistema de clasificación: "No sé" (repasar mañana), "Más o menos" (repasar en 3 días), "Sé bien" (repasar en 1 semana).','La sesión: Empieza siempre con las tarjetas "No sé", luego "Más o menos", termina con "Sé bien".'],
        m3e:['Tarjetas con demasiada información en cada lado. Una pregunta, una respuesta, siempre.','Ser demasiado generoso en la autoevaluación. Si dudaste un segundo, no la cuentes como sabida.','Estudiar siempre en el mismo orden, creando memoria de secuencia en lugar de memoria de contenido.'],
        m4e:'Elige un tema y crea 10 tarjetas (papel o Anki/Quizlet). Baraja las tarjetas para que no estén en orden previsible. Para cada una: lee la pregunta, responde en voz alta, voltea, compara. Clasifica cada tarjeta honestamente: No sé / Más o menos / Sé bien. Repasa inmediatamente las tarjetas "No sé" una segunda vez en la misma sesión. Programa la próxima sesión según la clasificación.',
        m5f:'10 flashcards de cualquier tema actual. Primera sesión de autoevaluación hoy mismo.',
        m5m:'50 flashcards de una materia completa. 2 semanas con 15 minutos diarios. Mide tu progreso al final.',
        m5a:'Usa Anki para todas tus materias durante un mes completo. Registra el porcentaje de tarjetas en "Sé bien" semana a semana.',
        m6r:'¿Cómo cambiaría tu experiencia de exámenes si llegaras sabiendo exactamente qué dominas y qué no, y habiendo dedicado tu tiempo de estudio a tus debilidades reales?',
        m6f:'"El conocimiento es poder solo cuando sabes exactamente qué sabes y qué no."',
        m6c:['Combinan Recuperación Activa y Repetición Espaciada en un solo sistema eficiente.','Una sola pregunta y una sola respuesta concisa por tarjeta. La simplicidad es la clave.','Clasificación honesta: No sé / Más o menos / Sé bien. Sin generosidad.','La autoevaluación honesta es lo que diferencia este sistema de simplemente repasar tarjetas.'] }
    ]
  },

  {
    id:3, title:'Estudiar',
    desc:'No cuánto sino cómo. Transforma cada sesión en aprendizaje real y profundo.',
    emoji:'📚', color:'#5ecc99', colorBg:'rgba(94,204,153,.15)',
    intro:'¿Cuántas horas al día estudias? ¿Y cuántas de esas horas sientes que realmente avanzas? Existe una diferencia enorme entre pasar tiempo estudiando y estudiar de verdad. Una investigación de la Universidad de Florida descubrió que la calidad del estudio importa hasta 5 veces más que la cantidad. Los estudiantes con mejores técnicas rinden igual o mejor que aquellos que estudian el doble de horas pero sin método.',
    techniques:[

      { id:'c3t1', title:'Técnica Pomodoro', difficulty:'Básico', time:'10 min',
        tag:'Trabaja con los ciclos naturales de tu cerebro, no en su contra.',
        m1i:'¿Alguna vez te sentaste a estudiar con la mejor intención y después de un rato te diste cuenta de que llevas 20 minutos mirando el teléfono sin saber cómo llegaste ahí? El cerebro humano no está diseñado para concentrarse de forma sostenida durante horas seguidas. Tiene ciclos naturales de atención de aproximadamente 25-45 minutos, después de los cuales el rendimiento cae drásticamente aunque sigas sentado frente al libro.',
        m1d:'La Técnica Pomodoro fue creada por Francesco Cirillo en la década de 1980 usando un temporizador de cocina con forma de tomate (pomodoro en italiano). Hoy es una de las técnicas de productividad y estudio más usadas en el mundo por estudiantes, programadores y profesionales de todas las áreas.',
        m1t:'Desde la primera sesión Pomodoro notarás mayor enfoque y menos distracción. En 1 semana de uso consistente tu capacidad de concentración mejorará visiblemente.',
        m2q:'Divide el trabajo en bloques de 25 minutos de concentración total, separados por descansos cortos de 5 minutos. Después de completar 4 bloques (pomodoros), tomas un descanso largo de 15 a 30 minutos. Esta estructura aprovecha los ciclos naturales de atención del cerebro en lugar de ignorarlos.',
        m2p:'La Técnica Pomodoro funciona porque crea urgencia artificial: sabiendo que tienes solo 25 minutos, el cerebro activa el foco de forma más intensa. Los descansos programados previenen la fatiga cognitiva y la promesa del descanso también reduce la tentación de distraerse durante el bloque activo.',
        m2h:'Andrés era estudiante de ingeniería y nunca podía estudiar más de 20 minutos sin distraerse. Con el Pomodoro, la promesa del descanso cada 25 minutos le dio el incentivo para mantenerse enfocado. En una semana su tiempo de estudio efectivo se triplicó.',
        m3s:['Paso 1 — Define la tarea exacta: Antes de activar el temporizador, escribe exactamente qué vas a hacer en ese Pomodoro. No "estudiar química", sino "resolver los ejercicios 1-10 del capítulo 3".','Paso 2 — Activa 25 minutos: Durante este tiempo trabajas con concentración total. Nada de teléfono, redes sociales ni conversaciones.','Paso 3 — Maneja las distracciones: Si surge una distracción o idea, anótala en un papel para atenderla después y vuelve inmediatamente al trabajo.','Paso 4 — Toma el descanso: Cuando suene, para completamente. Levántate, camina, estira, bebe agua. No revises el teléfono en el primer minuto.','Paso 5 — Descanso largo: Después de 4 Pomodoros completados, toma 15-30 minutos de descanso real.'],
        m3e:['Interrumpir el Pomodoro voluntariamente porque "solo un momento". Cada interrupción cuesta 10-20 minutos recuperar el estado de concentración.','No definir la tarea antes de empezar, perdiendo los primeros minutos decidiendo qué hacer.','Usar el descanso para actividades que continúan estimulando el cerebro como redes sociales o videos.'],
        m4e:'Pon el teléfono en modo avión. Escribe en un papel qué vas a hacer en los próximos 25 minutos exactamente. Activa un temporizador de 25 minutos. Trabaja con concentración total. Si surge una distracción, anótala en el papel y vuelve. Cuando suene, para. Marca el Pomodoro con una X. Descansa 5 minutos levantándote de la silla. Evalúa: ¿Cuánto avanzaste en 25 minutos de concentración real?',
        m5f:'Completa 2 Pomodoros seguidos hoy con una tarea de estudio real. Evalúa tu nivel de concentración.',
        m5m:'Usa el Pomodoro en todas tus sesiones de estudio durante 3 días. Lleva un registro de cuántos Pomodoros completas por día.',
        m5a:'Implementa el Pomodoro durante 2 semanas completas con registro diario. Compara tu avance académico con las 2 semanas anteriores.',
        m6r:'¿Cuánto tiempo de tu estudio actual es realmente concentrado versus tiempo sentado pero distraído? Si pudieras convertir ese tiempo disperso en Pomodoros efectivos, ¿cuánto más avanzarías cada día?',
        m6f:'"Concentrarse en una cosa a la vez puede hacer maravillas." — John D. Rockefeller',
        m6c:['El Pomodoro divide el estudio en bloques de 25 minutos con descansos de 5 minutos.','Trabaja con los ciclos naturales de atención del cerebro, no en su contra.','Define la tarea exacta ANTES de activar el temporizador. La especificidad es la clave.','Los descansos son obligatorios, no opcionales. Sin descanso no hay recuperación cognitiva real.'] },

      { id:'c3t2', title:'Método SQ3R', difficulty:'Intermedio', time:'20 min',
        tag:'Convierte cualquier lectura pasiva en aprendizaje activo de 5 pasos.',
        m1i:'¿Alguna vez leíste un capítulo completo y al terminar no podías explicar de qué trataba? ¿Sentiste que habías pasado tiempo con el texto pero no con el conocimiento? Leer no es lo mismo que estudiar. La lectura pasiva produce la ilusión de aprendizaje: sentimos que avanzamos porque las páginas pasan, pero sin un proceso activo de comprensión y recuperación, la información se va tan rápido como llega.',
        m1d:'El Método SQ3R fue desarrollado por el psicólogo educativo Francis Robinson en 1946. Décadas de investigación han confirmado que los estudiantes que usan SQ3R comprenden y retienen significativamente más información que los que leen de forma convencional.',
        m1t:'Desde la primera vez que apliques SQ3R notarás que comprendes el texto más profundamente. En 2 a 3 semanas el proceso se vuelve completamente fluido y natural.',
        m2q:'SQ3R son las siglas de Survey (Explorar), Question (Preguntar), Read (Leer), Recite (Recitar) y Review (Revisar). Es un sistema de 5 pasos que transforma cualquier lectura en una experiencia de aprendizaje activo.',
        m2p:'SQ3R activa múltiples procesos cognitivos en secuencia: la exploración previa activa el conocimiento previo, las preguntas crean propósito y dirección para la lectura, la recuperación activa (recitar) fortalece la memoria, y la revisión consolida el aprendizaje. Cada paso prepara al cerebro para el siguiente.',
        m2h:'Valentina estudiaba derecho y tenía que leer cientos de páginas por semana. Con SQ3R, empezó a leer menos páginas pero con una comprensión tan profunda que podía discutir los temas con detalle en clase y en los exámenes sin necesidad de releer.',
        m3s:['S — Survey (2-3 min): Antes de leer, recorre el capítulo completo. Lee solo títulos, subtítulos, primer y último párrafo, imágenes y gráficos. El objetivo es tener visión general.','Q — Question (1 min): Convierte cada título y subtítulo en una pregunta. "Las causas de la Segunda Guerra Mundial" → "¿Cuáles fueron las causas?" Escribe las preguntas.','R1 — Read: Lee activamente buscando responder las preguntas que formulaste. Subraya solo lo que responde directamente tus preguntas.','R2 — Recite: Al terminar cada sección, cierra el libro e intenta responder la pregunta correspondiente de memoria en voz alta o por escrito. Este es el paso más poderoso.','R3 — Review: Al terminar el capítulo, repasa todas las preguntas de memoria. Revisa el texto para verificar y completar las respuestas.'],
        m3e:['Saltar el paso Survey porque "da pereza". Este paso es lo que hace que toda la lectura posterior sea más eficiente.','Hacer preguntas muy generales en lugar de preguntas específicas basadas en los subtítulos.','Omitir el Recite porque es incómodo no saber la respuesta. Precisamente esa incomodidad genera el aprendizaje.'],
        m4e:'Elige un capítulo de cualquier libro de estudio. Survey: Lee solo títulos, subtítulos y primer/último párrafo en máximo 3 minutos. Question: Convierte cada subtítulo en una pregunta y escríbela. Read: Lee buscando responder tus preguntas. Recite: Cierra el libro e intenta responder cada pregunta de memoria. Review: Revisa el texto, compara y completa lo que faltó.',
        m5f:'Aplica SQ3R a un capítulo corto de cualquier materia. Evalúa tu comprensión comparada con tu lectura habitual.',
        m5m:'Usa SQ3R en todas tus lecturas de estudio durante una semana completa.',
        m5a:'Aplica SQ3R a un libro completo de una materia. Al terminar, intenta hacer un resumen del libro completo de memoria usando solo tus preguntas y respuestas.',
        m6r:'¿Cuántas horas has invertido leyendo textos que no recuerdas? ¿Cómo cambiaría tu comprensión si cada lectura fuera activa, con preguntas y recuperación?',
        m6f:'"Leer sin reflexionar es como comer sin digerir." — Edmund Burke',
        m6c:['SQ3R: Survey, Question, Read, Recite, Review. 5 pasos para lectura activa.','El Recite es el paso más poderoso y el más omitido. Sin él el método pierde la mitad de su poder.','Las preguntas crean propósito y dirección para cada sección del texto.','Sí tarda más la primera vez, pero como la comprensión es superior no necesitas releer. Ahorra tiempo en total.'] },

      { id:'c3t3', title:'Práctica Intercalada (Interleaving)', difficulty:'Intermedio', time:'20 min',
        tag:'Mezcla tipos de problemas y obtén hasta 43% mejor rendimiento en exámenes.',
        m1i:'¿Estudias un tema durante horas seguidas hasta sentir que lo dominas, pero en el examen te confundes cuando los temas se mezclan? ¿Sabes resolver cada tipo de problema por separado pero no sabes cuál aplicar cuando se mezclan? Ese es el problema del estudio en bloque: el cerebro aprende a resolver el problema en ese contexto específico pero falla cuando debe identificar qué técnica usar entre varias opciones.',
        m1d:'Un experimento de la Universidad de California con estudiantes de matemáticas demostró que los que practicaron con problemas mezclados (intercalados) obtuvieron un 43% mejor rendimiento en el examen que los que practicaron tema por tema, aunque durante la práctica los del grupo intercalado sintieran que aprendían menos.',
        m1t:'Al principio la práctica intercalada se siente más difícil y frustrante. Esa dificultad es precisamente la señal de que está funcionando. Los resultados se ven claramente en el próximo examen.',
        m2q:'En lugar de estudiar un solo tema hasta dominarlo y luego pasar al siguiente (estudio en bloque), la Práctica Intercalada mezcla diferentes temas o tipos de problemas dentro de la misma sesión. En lugar de 20 ejercicios de álgebra y luego 20 de geometría, alternas: álgebra, geometría, álgebra, trigonometría...',
        m2p:'El Interleaving obliga al cerebro a hacer dos cosas que el estudio en bloque no requiere: recuperar activamente la estrategia correcta para cada problema, y discriminar entre diferentes tipos de problemas. Ambas habilidades son exactamente lo que se necesita en un examen real.',
        m2h:'Miguel estudiaba física y siempre dominaba cada tipo de problema en casa pero se confundía en los exámenes cuando los temas se mezclaban. Con práctica intercalada, por primera vez pudo identificar rápidamente qué fórmula aplicar en cada situación del examen.',
        m3s:['Identifica los tipos de problemas o temas de tu materia. En matemáticas: ecuaciones, geometría, estadística. En historia: causas, consecuencias, personajes.','Crea un set mezclado: Toma 3-5 ejercicios de cada tipo y mézclalos aleatoriamente en una sola lista.','Practica la identificación antes de resolver: Antes de empezar cada problema, identifica de qué tipo es y qué estrategia necesitas. Este paso de identificación es crucial.','Acepta la dificultad: La Práctica Intercalada se siente más difícil que el estudio en bloque. Esa dificultad es la señal de que está funcionando.'],
        m3e:['Volver al estudio en bloque porque "se siente más productivo". La facilidad del estudio en bloque es precisamente una ilusión de aprendizaje.','Intercalar sin entender primero los conceptos básicos de cada tema. El Interleaving es para práctica, no para primera exposición.','No incluir el paso de identificación del tipo de problema antes de resolverlo.'],
        m4e:'Elige una materia con al menos 3 tipos diferentes de ejercicios. Toma 5 ejercicios de cada tipo. Mézclalos aleatoriamente en una lista de 15. Antes de resolver cada uno, escribe en el margen qué tipo de problema es y qué estrategia vas a usar. Resuelve los 15 en orden mezclado. Evalúa: ¿En cuáles fallaste más? ¿Los errores estaban en la resolución o en la identificación del tipo?',
        m5f:'Crea un set de 10 ejercicios mezclados de 2 tipos diferentes y resuélvelos identificando el tipo antes de cada uno.',
        m5m:'Estudia un tema completo usando Interleaving desde el principio. Alterna entre subtemas en lugar de dominar uno antes de pasar al otro.',
        m5a:'Una semana antes de un examen, estudia exclusivamente con práctica intercalada usando exámenes anteriores mezclados.',
        m6r:'¿Hay alguna materia donde dominas los temas por separado pero te confundes cuando se mezclan en el examen? ¿Cómo cambiaría tu preparación si practicaras siempre con problemas mezclados?',
        m6f:'"La dificultad es el precio del dominio." — Anders Ericsson',
        m6c:['El Interleaving mezcla diferentes tipos de problemas en la misma sesión de práctica.','Entrena la habilidad de identificar qué estrategia usar, no solo cómo aplicarla.','Se siente más difícil que el estudio en bloque. Esa dificultad es la señal de que funciona.','Es para práctica, no para primera exposición al tema.'] },

      { id:'c3t4', title:'Deep Work (Trabajo Profundo)', difficulty:'Avanzado', time:'30 min',
        tag:'Concentración sin distracciones para resultados intelectuales muy superiores.',
        m1i:'¿Sientes que nunca puedes concentrarte de verdad porque siempre hay algo que interrumpe? ¿Que tu mejor esfuerzo intelectual siempre se produce en condiciones imperfectas? La economía del conocimiento actual nos ha convertido en expertos en multitarea y víctimas de la distracción constante. El resultado es que pasamos cada vez menos tiempo en el tipo de concentración profunda que produce los mejores resultados intelectuales.',
        m1d:'El término Deep Work fue popularizado por Cal Newport de Georgetown University. Su investigación muestra que cada vez que te distrae una notificación o cambias de tarea, el cerebro necesita entre 10 y 20 minutos para recuperar el nivel de concentración anterior. Una sesión de estudio con 5 interrupciones puede perder hasta 100 minutos de concentración efectiva.',
        m1t:'Desde la primera sesión de Deep Work notarás la diferencia en calidad y cantidad de trabajo producido.',
        m2q:'La capacidad de concentrarse sin distracciones en una tarea cognitivamente demandante durante un período extendido de tiempo. No es solo "estudiar sin teléfono": es crear las condiciones físicas, mentales y ambientales que permiten al cerebro operar a su máxima capacidad intelectual.',
        m2p:'Produce resultados superiores porque permite al cerebro entrar en estado de "flujo": concentración óptima donde el procesamiento es máximo, el tiempo parece pasar diferente y la calidad del trabajo es significativamente superior. Este estado no se alcanza con sesiones interrumpidas.',
        m2h:'Renata siempre estudiaba con el teléfono al lado "por si acaso". Un día lo dejó en otra habitación durante 2 horas de estudio. Esas 2 horas fueron más productivas que cualquier sesión de 4 horas que había tenido con el teléfono cerca.',
        m3s:['Eliminar distracciones físicas: Teléfono en otra habitación o en modo avión. Las notificaciones visibles, aunque no se revisen, consumen atención cognitiva.','Crear un ambiente dedicado: Estudia siempre en el mismo lugar. El cerebro asocia ese lugar con la concentración.','Definir el objetivo de la sesión: Antes de empezar, escribe exactamente qué producirás al final. No "estudiar historia" sino "entender completamente las causas de la Primera Guerra Mundial".','Proteger el tiempo: Informa a las personas cercanas que no estarás disponible durante X horas.','Construir la capacidad progresivamente: Empieza con 30-45 minutos y aumenta gradualmente a 1-2 horas.'],
        m3e:['Creer que se puede hacer Deep Work con música con letra. La música instrumental es aceptable; la música con letra siempre divide la atención.','Tener el teléfono boca abajo en la mesa "para no verlo". Saber que está ahí consume atención. Debe salir del campo visual.','Intentar sesiones muy largas sin haber construido la capacidad gradualmente.'],
        m4e:'Elige una tarea de estudio que requiera concentración real. Pon el teléfono en otra habitación. Cierra todas las pestañas del navegador que no necesites. Escribe en un papel: "¿Qué produciré al final de esta sesión?" Activa un temporizador de 45 minutos. Trabaja con concentración total. Al terminar, evalúa: ¿Cuánto avanzaste comparado con tus sesiones habituales del mismo tiempo?',
        m5f:'Una sesión de Deep Work de 45 minutos hoy, sin teléfono y con objetivo definido antes de empezar.',
        m5m:'Al menos una sesión de Deep Work diaria durante una semana. Lleva un registro de tus objetivos y logros.',
        m5a:'Diseña tu semana completa con bloques de Deep Work programados para cada materia. Aumenta progresivamente la duración.',
        m6r:'¿Cuándo fue la última vez que te concentraste en algo durante más de 30 minutos sin ninguna distracción? ¿Cuánto más podrías lograr si pudieras reproducir ese nivel de enfoque todos los días?',
        m6f:'"La concentración es la raíz de toda capacidad humana." — Bruce Lee',
        m6c:['El Deep Work es concentración sin distracciones en tareas cognitivamente demandantes.','El teléfono debe salir del campo visual, no solo boca abajo en la mesa.','Define el objetivo exacto de la sesión antes de activar el temporizador.','No es fuerza de voluntad sino diseño del ambiente lo que hace posible el Deep Work.'] }
    ]
  },

  {
    id:4, title:'Concentrarse',
    desc:'Protege y entrena tu foco en un mundo diseñado para distraerte.',
    emoji:'🎯', color:'#fb923c', colorBg:'rgba(251,146,60,.15)',
    intro:'¿Cuántas veces te has sentado a estudiar con la mejor intención y 10 minutos después estás en el teléfono sin saber cómo llegaste ahí? La concentración es la habilidad más valiosa y más amenazada del siglo XXI. No es un don que algunos tienen y otros no: es una habilidad entrenable que responde a técnicas específicas de protección y fortalecimiento.',
    techniques:[

      { id:'c4t1', title:'Diseño del Ambiente de Estudio', difficulty:'Básico', time:'15 min',
        tag:'El entorno físico impacta directamente tu capacidad de concentrarte.',
        m1i:'¿Estudias en la misma cama donde duermes, con la televisión encendida de fondo, rodeado de desorden? El ambiente físico donde estudias tiene un impacto directo y medible en tu capacidad de concentrarte. El cerebro aprende a asociar lugares con estados mentales: la cama con el sueño, el sofá con el descanso. Si estudias en esos lugares, tu cerebro recibe señales contradictorias que dificultan la concentración.',
        m1d:'Investigaciones en psicología ambiental muestran que el desorden visual en el ambiente de estudio consume hasta un 20% de la capacidad cognitiva disponible. El cerebro procesa inconscientemente todos los objetos del campo visual, incluso cuando no los miras activamente.',
        m1t:'Los cambios en el ambiente se sienten desde la primera sesión de estudio en el nuevo espacio. El efecto es inmediato.',
        m2q:'La práctica de configurar deliberadamente el espacio físico donde estudias para maximizar la concentración y minimizar las distracciones. Incluye la organización del espacio, la iluminación, la temperatura, el sonido y todos los elementos que afectan el estado mental durante el estudio.',
        m2p:'El cerebro usa el contexto ambiental como señal para activar estados mentales específicos. Un ambiente consistentemente dedicado al estudio entrena al cerebro a entrar en modo de concentración más rápidamente. Con el tiempo, el simple acto de sentarte en tu espacio de estudio empieza a activar el estado mental correcto automáticamente.',
        m2h:'Sebastián reorganizó completamente su espacio de estudio: despejó el escritorio, añadió mejor iluminación y estableció que ese espacio era exclusivamente para estudiar, nunca para entretenimiento. Su capacidad de concentración mejoró notablemente en 2 semanas sin ningún otro cambio.',
        m3s:['Espacio despejado: Solo los materiales de la tarea actual en el escritorio. El desorden visual consume atención cognitiva inconscientemente.','Iluminación adecuada: Luz natural cuando sea posible. Si no, luz blanca fría para estudio activo. Nunca luz tenue que induce somnolencia.','Temperatura fresca: Entre 18 y 22°C es el rango óptimo para la concentración cognitiva.','Postura correcta: Sentado con la espalda recta, pantalla o libro a la altura de los ojos. La postura afecta el estado mental.','Uso exclusivo: El espacio de estudio es SOLO para estudiar. Nunca uses ese lugar para entretenimiento. La exclusividad crea la asociación cerebral.','Materiales listos: Todo lo que necesitas preparado antes de empezar. Levantarse a buscar cosas rompe el flujo de concentración.'],
        m3e:['Estudiar en la cama o el sofá, espacios que el cerebro asocia con descanso y sueño.','Estudiar en lugares con mucho tráfico de personas o ruido impredecible.','Tener el teléfono en el escritorio aunque esté boca abajo o en silencio.'],
        m4e:'Evalúa tu espacio de estudio actual con honestidad en estas 6 dimensiones: ¿Está despejado? ¿Tiene buena luz? ¿Se usa solo para estudiar? ¿La temperatura es fresca? ¿Tu postura es correcta? ¿Tienes todo lo que necesitas antes de empezar? Haz los cambios posibles ahora mismo. Estudia en ese espacio reorganizado durante una sesión. Evalúa la diferencia.',
        m5f:'Reorganiza tu espacio de estudio esta semana aplicando los 6 elementos. Estudia ahí durante 3 días y evalúa el cambio.',
        m5m:'Establece una regla estricta: ese espacio es SOLO para estudiar. Nunca uses el teléfono ni el entretenimiento ahí durante 2 semanas.',
        m5a:'Si no tienes un espacio dedicado, identifica un lugar fuera de casa (biblioteca, café tranquilo) que puedas usar consistentemente.',
        m6r:'¿Cómo es tu espacio de estudio actual? ¿Qué cambio específico podrías hacer hoy mismo que tuviera el mayor impacto en tu capacidad de concentrarte?',
        m6f:'"El entorno moldea la mente." — Winston Churchill',
        m6c:['6 elementos clave: espacio despejado, buena iluminación, temperatura fresca, postura correcta, uso exclusivo y materiales listos.','El desorden visual consume hasta un 20% de la capacidad cognitiva disponible.','La exclusividad del espacio crea la asociación cerebral concentración-lugar.','Dedica 2 minutos al final de cada sesión a dejarlo listo para la siguiente.'] },

      { id:'c4t2', title:'Eliminación de Distracciones Digitales', difficulty:'Básico', time:'15 min',
        tag:'La solución no es más disciplina: es hacer las distracciones físicamente imposibles.',
        m1i:'¿Abres el computador para estudiar y 20 minutos después estás en YouTube sin recordar cómo llegaste ahí? ¿Revisas el teléfono "solo un segundo" y cuando reaccionas ya pasaron 30 minutos? Las distracciones digitales no son un problema de disciplina: están diseñadas por equipos de cientos de ingenieros y psicólogos para ser irresistibles. No es una batalla de fuerza de voluntad contra una pantalla: es una batalla contra miles de personas cuyo único trabajo es capturar tu atención.',
        m1d:'Un estudio de la Universidad de Texas en Austin encontró que solo tener el teléfono sobre la mesa (aunque esté boca abajo y en silencio) reduce la capacidad cognitiva disponible en un 10%. El cerebro gasta recursos en resistir activamente la tentación de revisarlo, incluso cuando crees que lo estás ignorando.',
        m1t:'Los cambios en la capacidad de concentración son perceptibles desde la primera semana de implementación de las barreras.',
        m2q:'No es apagar el teléfono y confiar en la fuerza de voluntad. Es crear barreras físicas y digitales que hagan que acceder a las distracciones requiera un esfuerzo deliberado suficiente para romper el impulso automático. La clave es el principio de fricción: cuanto más difícil sea acceder a la distracción, menos probable es que suceda.',
        m2p:'La fuerza de voluntad es un recurso limitado que se agota con el uso durante el día. Las barreras físicas y digitales no se agotan, funcionan independientemente de tu nivel de energía o estado de ánimo. No requieren decisiones activas: la barrera existe y funciona automáticamente.',
        m2h:'Fernanda instaló una app de bloqueo en su teléfono que bloqueaba redes sociales durante sus horas de estudio. Al principio sentía ansiedad cuando el teléfono no era accesible. En 2 semanas esa ansiedad desapareció y su concentración durante las sesiones de estudio se duplicó.',
        m3s:['Nivel básico — Teléfono: Pon el teléfono en otra habitación durante las sesiones de estudio. No en tu bolsillo, no boca abajo en el escritorio: en otra habitación.','Nivel intermedio — Computador: Usa apps de bloqueo de sitios web durante las sesiones. Freedom, Cold Turkey o StayFocusd bloquean sitios específicos por el tiempo que defines.','Nivel avanzado — Notificaciones: Desactiva TODAS las notificaciones no esenciales permanentemente. Las notificaciones de redes sociales deben estar desactivadas siempre.','Apps recomendadas: Freedom (iOS/Android/PC), Cold Turkey (PC), Forest (iOS/Android, gamifica el foco), StayFocusd (Chrome, gratuito).'],
        m3e:['Confiar en la fuerza de voluntad en lugar de crear barreras físicas. La fuerza de voluntad es un recurso limitado que se agota.','Poner el teléfono en modo silencio pero dejarlo en el escritorio. El modo silencio no elimina la distracción cognitiva de saber que está ahí.','Usar apps de bloqueo que se pueden desactivar fácilmente en momentos de tentación. Las mejores apps requieren contraseña para desbloquear.'],
        m4e:'Descarga la app Forest en tu teléfono (gratuita). Configura el bloqueo de redes sociales durante tus próximas 2 horas de estudio y actívalo. Pon el teléfono en otra habitación. En el computador, cierra todas las pestañas excepto las que necesitas para estudiar. Estudia durante 25 minutos sin ninguna interrupción digital. Evalúa la diferencia en tu concentración.',
        m5f:'Una semana con el teléfono en otra habitación durante todas las sesiones de estudio sin excepción.',
        m5m:'Instala una app de bloqueo y úsala en todas tus sesiones durante 2 semanas. Registra tu productividad.',
        m5a:'Desactiva todas las notificaciones no esenciales permanentemente. Revisa las redes sociales solo en momentos programados del día.',
        m6r:'¿Cuánto tiempo al día pierdes en distracciones digitales durante el estudio? Si recuperaras ese tiempo con concentración real, ¿cuánto más avanzarías cada semana?',
        m6f:'"La atención es el recurso más escaso y la forma más pura de generosidad." — Simone Weil',
        m6c:['No es fuerza de voluntad: es crear barreras físicas y digitales que funcionen automáticamente.','El teléfono en otra habitación, apps de bloqueo activas, notificaciones desactivadas.','Solo tener el teléfono en la mesa reduce la capacidad cognitiva un 10%.','Las barreras físicas y digitales no son muletas: son herramientas permanentes de alto rendimiento.'] },

      { id:'c4t3', title:'Bloques de Enfoque Progresivo', difficulty:'Intermedio', time:'20 min',
        tag:'Entrena tu capacidad de concentración como un músculo, semana a semana.',
        m1i:'¿Intentas concentrarte durante horas y el agotamiento te vence rápidamente? ¿O no puedes mantener el foco ni 15 minutos seguidos antes de que tu mente divague? La concentración es exactamente como un músculo: se puede entrenar progresivamente, se fortalece con el uso adecuado y se debilita con el desuso. Nadie empieza a correr haciendo una maratón. De la misma forma, nadie puede pasar de concentrarse 10 minutos a concentrarse 2 horas de un día para otro.',
        m1d:'Investigaciones en neurociencia muestran que el cerebro puede desarrollar mayor capacidad de concentración sostenida a través de la práctica deliberada. El cortex prefrontal, región responsable del control de la atención, se fortalece con el entrenamiento regular, de forma similar a como los músculos se fortalecen con el ejercicio físico.',
        m1t:'El progreso es visible semana a semana. En 4-8 semanas de entrenamiento consistente la transformación en la capacidad de concentración es notable y medible.',
        m2q:'Un sistema de entrenamiento que aumenta gradualmente tu capacidad de concentración. Funciona en 4 semanas: Semana 1 (15 min + 5 descanso), Semana 2 (25 min + 5 descanso), Semana 3 (45 min + 10 descanso), Semana 4 (60-90 min + 15 descanso). Cada semana el cerebro se adapta al nuevo nivel y está listo para el siguiente.',
        m2p:'El entrenamiento progresivo permite al cerebro adaptarse gradualmente, evitando el agotamiento que produce intentar sesiones muy largas sin preparación previa. La consistencia semanal crea nuevas conexiones neurales que aumentan la capacidad sostenida de atención de forma permanente.',
        m2h:'Tomás no podía concentrarse más de 10 minutos sin distraerse. Empezó con bloques de 15 minutos y los fue aumentando semana a semana. A los 2 meses podía hacer sesiones de 90 minutos de concentración profunda con una facilidad que habría parecido imposible al inicio.',
        m3s:['La regla del punto de quiebre: El objetivo de cada bloque es llegar justo hasta el punto donde empieza a ser difícil mantener el foco, no sobrepasarlo hasta el agotamiento.','Los descansos son obligatorios y parte del sistema: No son opcionales ni señal de debilidad. Sin descanso adecuado no hay adaptación ni progreso.','Avanza solo cuando estés listo: Si en la semana 2 todavía te cuesta el bloque de 25 minutos, quédate ahí una semana más sin presión.','Registra tu progreso: Anota cuántos bloques completaste cada día. Ver el avance en papel mantiene la motivación.'],
        m3e:['Saltar etapas porque "ya eres capaz de más". El entrenamiento progresivo requiere paciencia con el proceso.','No respetar los descansos entre bloques, acumulando fatiga cognitiva que reduce la calidad de los bloques siguientes.','Rendirse en la semana 2 porque "todavía es difícil". La dificultad en la semana 2 es completamente normal y esperada.'],
        m4e:'Evalúa honestamente: ¿Cuánto tiempo puedes concentrarte sin distracción ahora mismo? Elige tu punto de inicio: si menos de 15 min, empieza con 10. Si entre 15-25 min, empieza con 20. Haz 3 bloques con tu tiempo elegido hoy, con descansos entre ellos. Evalúa: ¿Los completaste sin interrupciones? Programa aumentar el tiempo en 5 minutos la próxima semana.',
        m5f:'Identifica tu tiempo de concentración actual e implementa el sistema progresivo durante un mes sin saltarte días.',
        m5m:'Lleva un registro diario de bloques completados durante 4 semanas. Visualiza tu progreso semana a semana.',
        m5a:'Llega a bloques de 90 minutos de concentración profunda en 2 meses de entrenamiento progresivo consistente.',
        m6r:'¿Cuánto tiempo puedes concentrarte honestamente ahora sin distracciones? ¿Dónde crees que estarías en 2 meses si entrenaras progresivamente desde hoy sin rendirte?',
        m6f:'"No importa lo lento que vayas mientras no te detengas." — Confucio',
        m6c:['Sistema de 4 semanas: 15 min → 25 min → 45 min → 60-90 min con descansos entre bloques.','La concentración es un músculo que se entrena progresivamente, como la condición física.','Los descansos entre bloques son parte del entrenamiento, no debilidad.','Registrar el progreso diariamente es parte del sistema, no una opción.'] },

      { id:'c4t4', title:'Música y Sonido para Concentrarse', difficulty:'Básico', time:'10 min',
        tag:'El sonido correcto puede mejorar tu concentración — el incorrecto la destroza.',
        m1i:'¿Estudias con música con letra y te preguntas por qué a veces te cuesta tanto concentrarte? ¿O estudias en silencio total y encuentras que el más mínimo ruido te distrae? El sonido tiene un impacto directo en la concentración, pero no todo sonido funciona igual. La música con letra activa el área del lenguaje del cerebro, compitiendo directamente con la lectura y la escritura. Pero el silencio total tampoco es siempre la mejor opción.',
        m1d:'Un estudio de la Universidad de Illinois demostró que un nivel moderado de ruido ambiental (alrededor de 70 decibeles, equivalente a un café tranquilo) mejora el rendimiento cognitivo comparado con el silencio total o el ruido alto. Esto explica por qué muchas personas trabajan mejor en cafés que en bibliotecas perfectamente silenciosas.',
        m1t:'Notarás la diferencia en tu nivel de concentración desde la primera sesión cuando cambias el tipo de sonido.',
        m2q:'La regla de oro del sonido para estudiar: sin letra durante tareas verbales. La música con letra divide la atención entre el contenido estudiado y el contenido de la canción. La música instrumental, los sonidos de naturaleza, el ruido blanco y el ruido marrón no activan el área del lenguaje y por eso no interfieren con la lectura, escritura o procesamiento verbal.',
        m2p:'La música con letra activa el área de Broca, la región del cerebro responsable del procesamiento del lenguaje. Esta es exactamente la misma área que usas para leer, escribir y procesar información verbal. Usar ambas simultáneamente crea una interferencia directa en el procesamiento cognitivo. La música instrumental no activa esta área.',
        m2h:'Carlos siempre estudiaba con su playlist favorita de música popular porque "lo motivaba". Cuando cambió a música instrumental clásica, notó que podía leer y entender textos más rápido y con mucho menos esfuerzo. La diferencia fue inmediata desde la primera sesión.',
        m3s:['Música clásica o instrumental: Ideal para tareas que requieren creatividad y procesamiento profundo. Bach, Beethoven y Mozart tienen ritmos que sincronizan con las ondas cerebrales de concentración.','Lo-fi hip hop: Beats instrumentales de 60-80 BPM que crean un estado de concentración relajada. Ideal para tareas de estudio moderado.','Ruido blanco o marrón: Enmascara los ruidos impredecibles del entorno. El ruido marrón (más grave, similar a la lluvia) es más relajante que el blanco. Ideal para ambientes ruidosos.','Sonidos de naturaleza: Lluvia, bosque, océano. Reducen el estrés y crean un ambiente de concentración calmada.','Silencio total: Ideal para tareas de máxima concentración verbal como escribir ensayos o resolver problemas matemáticos complejos.','Recursos gratuitos: YouTube (busca "lofi hip hop study", "brown noise study"), Noisli.com, Spotify (playlists "Deep Focus", "Brain Food").'],
        m3e:['Música con letra durante tareas verbales como leer, escribir o estudiar texto. La interferencia es directa y significativa.','Volumen demasiado alto. El sonido para concentrarse debe ser de fondo, no protagonista.','Cambiar constantemente de canción o playlist, creando interrupciones en el flujo de concentración.'],
        m4e:'En tu próxima sesión de estudio, pon ruido marrón o sonido de lluvia de fondo a volumen bajo (busca "brown noise" en YouTube). Estudia durante 25 minutos con este sonido. Compara con tu experiencia habitual. Prueba también con lo-fi instrumental y con música clásica en otras sesiones. Anota cuál funciona mejor para ti.',
        m5f:'Crea una playlist de música instrumental para estudiar y úsala consistentemente en tus próximas 3 sesiones.',
        m5m:'Experimenta con 4 tipos de sonido diferentes durante una semana. Identifica cuál mejora más tu concentración para cada tipo de tarea.',
        m5a:'Crea un sistema personalizado: tipo de sonido A para lectura, tipo B para escritura y tipo C para problemas matemáticos o técnicos.',
        m6r:'¿Qué tipo de sonido crees que funcionaría mejor para ti? ¿Has experimentado alguna vez estudiar con ruido marrón o sonidos de naturaleza en lugar de música?',
        m6f:'"La música da alma al universo, alas a la mente." — Platón',
        m6c:['Regla de oro: sin letra durante tareas verbales como leer, escribir o estudiar texto.','Tipos óptimos: música clásica/instrumental, lo-fi, ruido blanco/marrón, sonidos de naturaleza, silencio.','70 decibeles (nivel café tranquilo) es el nivel óptimo de ruido ambiental según las investigaciones.','Adapta el tipo de sonido al tipo de tarea: no existe un sonido perfecto para todo.'] }
    ]
  },

  {
    id:5, title:'Organizar el Tiempo',
    desc:'Todos tienen 24 horas. La diferencia está en cómo las organizan.',
    emoji:'⏰', color:'#f59e0b', colorBg:'rgba(245,158,11,.15)',
    intro:'¿Llegas al final del día con la sensación de haber estado ocupado todo el tiempo pero sin haber avanzado en lo que realmente importaba? El tiempo es el único recurso verdaderamente igualitario: todos tenemos exactamente 24 horas al día. La diferencia entre las personas que logran sus metas y las que no radica casi siempre en cómo organizan ese tiempo, no en cuánto trabajan.',
    techniques:[

      { id:'c5t1', title:'Time Blocking (Bloques de Tiempo)', difficulty:'Intermedio', time:'20 min',
        tag:'Si no está en el calendario, simplemente no existe.',
        m1i:'¿Tienes una lista de tareas que nunca terminas? ¿Las tareas importantes siempre se posponen porque el día se llena de cosas urgentes pero no importantes? Una lista de tareas sin horario es solo un inventario de intenciones bien escritas. El Time Blocking convierte esas intenciones en compromisos reales asignando a cada tarea un bloque específico de tiempo en el calendario, igual que una cita médica que no puedes cancelar.',
        m1d:'Cal Newport, Bill Gates y Elon Musk son conocidos usuarios del Time Blocking. Newport afirma que sin Time Blocking es prácticamente imposible hacer Deep Work de manera consistente, porque el trabajo importante siempre pierde frente a las urgencias cotidianas si no tiene un espacio reservado en el calendario.',
        m1t:'Desde la primera semana de implementación notarás una diferencia clara y medible en cuánto avanzas en las tareas importantes.',
        m2q:'Asignar bloques específicos de tiempo en tu calendario para cada tarea o tipo de tarea del día. En lugar de tener una lista de cosas por hacer, tienes un calendario con bloques concretos: "9-10am: Matemáticas capítulo 4", "10-10:15am: Descanso", "10:15-11:15am: Inglés ejercicios". Cada hora del día tiene un propósito definido de antemano.',
        m2p:'El Time Blocking elimina la "fatiga de decisión", la fricción cognitiva de decidir en cada momento qué hacer a continuación. También protege el tiempo de las tareas importantes frente a las interrupciones y urgencias, y crea una imagen realista de cuánto tiempo tienes realmente disponible para todo lo que quieres hacer.',
        m2h:'Mónica nunca tenía tiempo para estudiar aunque su día estaba lleno de actividades. Con Time Blocking descubrió que tenía más tiempo disponible del que creía, pero lo estaba perdiendo en transiciones improductivas y en la parálisis de decidir qué hacer a continuación.',
        m3s:['Mapea tu semana primero: Anota los compromisos fijos (clases, trabajo, familia) antes de agregar bloques de estudio. Esto te da la imagen real de tu tiempo disponible.','Asigna bloques a lo importante primero: Las tareas más importantes van en los mejores momentos del día, los de mayor energía. No en los huecos que sobran.','Incluye bloques de buffer: Deja al menos el 20% del tiempo sin planear para imprevistos. Un día 100% planificado colapsa ante cualquier urgencia inesperada.','Agrupa por tipo de tarea: Bloques de estudio activo, bloques de repaso, bloques administrativos. Cambiar de tipo de tarea tiene un costo cognitivo real.','Revisa y ajusta al final del día: Evalúa qué bloques se completaron y cuáles no. Ajusta el plan del día siguiente en base a lo aprendido.'],
        m3e:['Planificar demasiado ajustado sin márgenes de buffer. La vida siempre interrumpe y el plan necesita flexibilidad para sobrevivir.','Poner las tareas más importantes en los peores momentos del día cuando hay más cansancio o más interrupciones probables.','No respetar los bloques cuando surge algo "urgente" que en realidad es una distracción disfrazada de urgencia.'],
        m4e:'Toma una hoja en blanco y dibuja tu semana con horas desde las 6am hasta las 10pm. Paso 1: Marca los compromisos fijos inamovibles. Paso 2: Identifica los 3 bloques de tiempo de mayor energía de tu semana. Paso 3: Asigna las 3 tareas de estudio más importantes a esos 3 mejores bloques. Paso 4: Rellena el resto manteniendo el 20% de buffer sin planear. Úsalo mañana.',
        m5f:'Diseña tu próxima semana usando Time Blocking. Evalúa al final cuánto más avanzaste comparado con semanas sin planificación.',
        m5m:'Usa Time Blocking durante un mes completo. Lleva un registro del porcentaje de bloques completados cada semana.',
        m5a:'Combina Time Blocking con Google Calendar o Notion para tener tu semana visible en todos tus dispositivos y poder ajustarlo desde cualquier lugar.',
        m6r:'Si diseñaras tu semana ideal usando Time Blocking ahora mismo, ¿cómo se vería? ¿Qué tareas importantes que hoy siempre pospones tendrían un bloque garantizado?',
        m6f:'"Un plan sin acción es solo un sueño. Una acción sin plan es solo una pesadilla." — Proverbio japonés',
        m6c:['Asigna bloques específicos de tiempo a cada tarea importante en el calendario.','Las tareas más importantes van en los mejores momentos del día, no en los huecos sobrantes.','Deja el 20% del tiempo sin planear como buffer para imprevistos inevitables.','Revisar y ajustar al final del día hace al sistema adaptable y sostenible a largo plazo.'] },

      { id:'c5t2', title:'Matriz de Eisenhower', difficulty:'Básico', time:'15 min',
        tag:'Lo que es importante rara vez es urgente, y lo urgente rara vez es importante.',
        m1i:'¿Siempre estás apagando incendios pero nunca avanzas en los proyectos que realmente importan? ¿Lo urgente siempre gana sobre lo importante en tu día a día? Dwight Eisenhower, el presidente más productivo de la historia de Estados Unidos, tenía una máxima famosa: "Lo que es importante rara vez es urgente, y lo que es urgente rara vez es importante." Esta distinción cambió su forma de trabajar y puede cambiar la tuya.',
        m1d:'Eisenhower manejó simultáneamente dos guerras mundiales, fue Comandante Supremo de las Fuerzas Aliadas y luego Presidente de los Estados Unidos por 8 años, con una reputación histórica de extrema eficiencia y bajo nivel de estrés. Su secreto era que nunca confundía lo urgente con lo importante.',
        m1t:'Desde la primera semana de uso notarás una reducción notable en el estrés y un aumento claro en el avance de proyectos importantes.',
        m2q:'La Matriz de Eisenhower divide todas las tareas en 4 cuadrantes según dos variables: urgencia e importancia. Cuadrante 1 (Urgente e Importante): Hacer ya. Cuadrante 2 (No urgente pero Importante): Planificar. Es el cuadrante del éxito. Cuadrante 3 (Urgente pero No importante): Delegar o minimizar. Cuadrante 4 (No urgente y No importante): Eliminar.',
        m2p:'Las personas más productivas pasan la mayoría de su tiempo en el Cuadrante 2: estudio anticipado, desarrollo de habilidades, planificación, ejercicio, relaciones importantes. El Cuadrante 1 (crisis y urgencias) se reduce automáticamente cuando el Cuadrante 2 está bien gestionado, porque estudiar con anticipación elimina la crisis del último momento.',
        m2h:'Catalina siempre estudiaba para los exámenes la noche anterior (C1) y nunca avanzaba en sus proyectos de largo plazo (C2). Cuando usó la Matriz, se dio cuenta de que pasaba 3 horas al día en el C4 (redes sociales). Redistribuyó ese tiempo y comenzó a estudiar con días de anticipación, eliminando completamente el estrés de los exámenes.',
        m3s:['Clasifica TODAS tus tareas pendientes en los 4 cuadrantes antes de empezar el día.','El objetivo estratégico es pasar cada vez más tiempo en el C2 (importante, no urgente): estudio anticipado, planificación, desarrollo de habilidades.','Para cada tarea pregúntate dos preguntas: ¿Es urgente (tiene plazo inmediato o consecuencias ahora)? ¿Es importante (contribuye a mis objetivos a largo plazo)?','Revisa la matriz semanalmente y clasifica las tareas nuevas antes de agregarlas a tu lista.'],
        m3e:['Confundir urgente con importante. Una notificación de red social es urgente (requiere atención ahora) pero no importante (no contribuye a tus objetivos).','Pasar todo el tiempo en C1 y C3 sin nunca tocar el C2. Este es el ciclo de la reactividad permanente.','Clasificar bien las tareas pero seguir haciendo primero las fáciles (C3/C4) porque "se sienten más manejables".'],
        m4e:'Escribe todas tus tareas pendientes (académicas y personales) en una lista sin ordenar. Para cada una, pregúntate: ¿Es urgente? ¿Es importante? Clasifícala en el cuadrante correspondiente. Identifica en cuál cuadrante pasas más tiempo actualmente. Define una sola acción concreta para aumentar el tiempo en C2 esta semana.',
        m5f:'Clasifica todas tus tareas de esta semana en la Matriz. Prioriza activamente el C2 durante toda la semana.',
        m5m:'Durante 2 semanas, registra en qué cuadrante pasa la mayor parte de tu tiempo real. Ajusta activamente hacia el C2.',
        m5a:'Diseña tu semana completa con Time Blocking priorizando el C2. Mide la reducción de crisis (C1) después de un mes.',
        m6r:'¿Cuánto tiempo de tu semana actual está honestamente en el Cuadrante 2? ¿Qué actividad del C4 podrías eliminar esta semana para mover ese tiempo al C2?',
        m6f:'"Lo que es importante rara vez es urgente y lo que es urgente rara vez es importante." — Eisenhower',
        m6c:['4 cuadrantes: C1 (hacer ya), C2 (planificar — el cuadrante del éxito), C3 (delegar), C4 (eliminar).','El C2 es donde vive el éxito real: estudio anticipado, desarrollo de habilidades, planificación.','El C2 bien gestionado reduce automáticamente las crisis del C1.','El error clásico: clasificar bien pero seguir haciendo primero lo fácil del C3 y C4.'] },

      { id:'c5t3', title:'Técnica MIT (Most Important Tasks)', difficulty:'Básico', time:'10 min',
        tag:'Las 3 tareas más importantes del día, completadas antes que cualquier otra cosa.',
        m1i:'¿Terminas el día habiendo hecho muchas cosas pero con la sensación de no haber avanzado en lo que realmente importaba? ¿Tu lista de tareas crece más rápido de lo que la reduces? La Técnica MIT resuelve el problema de la lista infinita con una pregunta simple pero poderosa: de todo lo que podría hacer hoy, ¿cuáles son las 3 cosas que, si las completara, harían que el día fuera un éxito real?',
        m1d:'La técnica MIT tiene sus raíces en una historia famosa: el consultor de negocios Ivy Lee se reunió con el empresario Charles Schwab en 1918. Su consejo fue escribir las 6 tareas más importantes del día siguiente, ordenarlas por importancia, y trabajar en ellas en orden sin pasar a la siguiente hasta terminar la anterior. Schwab pagó 25,000 dólares por ese consejo, considerándolo el más valioso que recibió en su vida.',
        m1t:'El cambio es inmediato desde el primer día de implementación. Notarás que terminas el día con sensación de avance real y menor estrés.',
        m2q:'Cada mañana (o la noche anterior), identificas las 3 tareas más importantes que debes completar ese día. Solo 3. No 10, no 5: solo 3. Estas 3 tareas se hacen PRIMERO en el día, antes de revisar el email, antes de atender mensajes, antes de las tareas secundarias. Nada de calentar motores con tareas pequeñas.',
        m2p:'Las MIT eliminan la parálisis por análisis: no tienes que decidir en el momento qué hacer, ya lo decidiste antes de que el día empiece. También protegen el mejor tiempo del día (la mañana, cuando la energía cognitiva es mayor) para las tareas más importantes, y crean una definición clara y alcanzable de qué significa que el día fue un éxito.',
        m2h:'Rodrigo tenía una lista de 30 tareas pendientes que lo abrumaba. Cuando empezó a elegir 3 MITs cada mañana y hacerlas primero antes de cualquier otra cosa, la sensación de abrumamiento desapareció. Al final de la semana había completado más tareas importantes que en las 3 semanas anteriores juntas.',
        m3s:['Criterio para elegir las MITs: ¿Cuál tarea, si la hiciera hoy, me daría la mayor sensación de avance real? ¿Cuál tiene el mayor impacto en mis objetivos de largo plazo?','Una MIT debe ser específica y completable en el día: No "avanzar en el proyecto" sino "completar y entregar la sección 2 del proyecto".','Hazlas primero sin excepción: Antes de revisar el teléfono, el email o cualquier tarea secundaria. Sin excepciones.','Si completas las 3 MITs: el día fue un éxito absoluto. Puedes hacer más tareas de tu lista.','Si no completas las 3: no te castigues. Evalúa por qué y ajusta para mañana.'],
        m3e:['Elegir tareas fáciles o rápidas como MITs para sentirse productivo. Las MITs deben ser las más importantes e impactantes, no las más fáciles.','Hacer primero el email o las tareas pequeñas "para ir calentando motores". Esto consume el mejor tiempo del día en lo menos importante.','Poner más de 3 MITs. La restricción de 3 es intencional y poderosa: te obliga a priorizar de verdad.'],
        m4e:'Esta noche, antes de dormir, escribe en papel las 3 tareas más importantes de mañana. Sé completamente específico: no "estudiar", sino "resolver los ejercicios 1-15 del capítulo 5 de cálculo". Mañana, antes de hacer absolutamente cualquier otra cosa, empieza con la primera MIT. No pases a la segunda hasta completar la primera. Al final del día: ¿Completaste las 3? ¿Cómo se sintió?',
        m5f:'Elige 3 MITs esta noche para mañana. Hazlas primero sin excepción antes de cualquier otra cosa.',
        m5m:'Practica la técnica MIT durante 2 semanas consecutivas. Evalúa cuántas MITs completas por semana y cómo cambia tu sensación al final del día.',
        m5a:'Combina MIT con Time Blocking: asigna los primeros y mejores bloques del día a las MITs en tu calendario.',
        m6r:'Si pudieras garantizar que completarías 3 tareas importantes cada día sin excepción, ¿cuánto avanzarías en tu estudio en los próximos 30 días? ¿Cuáles serían tus 3 MITs para mañana?',
        m6f:'"Si tienes más de 3 prioridades, no tienes ninguna." — Jim Collins',
        m6c:['Las MIT son las 3 tareas más importantes del día y se hacen primero, antes que cualquier otra cosa.','Se eligen la noche anterior para empezar el día con claridad y sin necesidad de decidir.','Deben ser específicas y completables: no "estudiar", sino "resolver los ejercicios 1-15 del capítulo 5".','Completar las 3 MITs = día exitoso, sin importar cuántas otras cosas hiciste o dejaste de hacer.'] },

      { id:'c5t4', title:'La Regla del 80/20 (Principio de Pareto)', difficulty:'Intermedio', time:'20 min',
        tag:'El 20% de lo que estudias produce el 80% de tus resultados en exámenes.',
        m1i:'¿Sientes que estudias todo por igual pero los resultados no reflejan todo el esfuerzo invertido? ¿Terminas el semestre con la sensación de haber hecho mucho pero avanzado poco? El Principio de Pareto establece que el 80% de los resultados proviene del 20% de las causas. En el contexto del estudio, esto significa que el 20% del temario produce el 80% de las preguntas en los exámenes. La pregunta poderosa es: ¿cuál es ese 20%?',
        m1d:'Vilfredo Pareto, economista italiano del siglo XIX, observó que el 80% de las tierras de Italia eran propiedad del 20% de la población. Este patrón 80/20 aparece en casi todos los sistemas complejos: el 20% de los bugs causan el 80% de los errores en software, el 20% de los clientes generan el 80% de los ingresos, el 20% del contenido de un libro contiene el 80% del conocimiento valioso.',
        m1t:'Los resultados de aplicar la Regla del 80/20 se ven directamente en el próximo examen donde la apliques de forma estratégica.',
        m2q:'Aplicar el Principio de Pareto al estudio significa identificar el 20% del temario que genera el 80% de las preguntas en los exámenes, y dedicar el 80% de tu tiempo de estudio a dominar ese 20% clave. El 80% restante del temario se estudia después, con menos profundidad, una vez que el núcleo está sólidamente dominado.',
        m2p:'Nuestro tiempo de estudio es limitado. Distribuirlo uniformemente entre temas de alta y baja relevancia es ineficiente. La Regla del 80/20 optimiza el uso del tiempo asignando el mayor esfuerzo donde produce el mayor retorno, en lugar de tratar todos los temas como igualmente importantes.',
        m2h:'Nicolás estudiaba 8 horas diarias distribuyendo su tiempo uniformemente entre todos los temas. Cuando analizó los exámenes anteriores de su materia más difícil, descubrió que el 80% de las preguntas venían de solo 5 temas de los 20 del programa. Concentró el 80% de su tiempo en esos 5 temas, redujo su tiempo total de estudio a 5 horas y mejoró significativamente su calificación.',
        m3s:['Identifica el 20% clave de tu materia: Analiza exámenes anteriores de ese profesor específico. ¿Qué temas aparecen siempre? Habla con el profesor directamente y pregunta cuáles considera los conceptos más fundamentales.','Asigna el 80% de tu tiempo al 20% más importante: Domina profundamente los conceptos fundamentales antes de explorar los temas secundarios.','El 80% restante no se ignora completamente: Se estudia después, con menos profundidad, para tener una comprensión general del tema completo.','Aplícalo también a actividades: ¿Cuáles son las 2-3 actividades de estudio que más impactan tu rendimiento? Esas merecen el 80% de tu tiempo y atención.'],
        m3e:['Tratar todos los temas del temario como igualmente importantes. Los profesores siempre tienen favoritos y patrones repetitivos.','Estudiar el material en el orden del libro sin evaluar primero la importancia relativa de cada sección.','Eliminar completamente el 80% restante. Puede ser exactamente lo que pregunta un examen sorpresa o tu profesor específico.'],
        m4e:'Toma el temario completo de tu materia más difícil. Consigue 3 exámenes anteriores de ese mismo profesor o materia. Marca todos los temas que aparecen en esos exámenes. Identifica los 3-5 temas que aparecen en todos o casi todos los exámenes: ese es tu 20% clave. Planifica dedicar el 80% de tu tiempo de estudio a esos temas durante las próximas 2 semanas. Evalúa el resultado.',
        m5f:'Analiza 2 exámenes anteriores de tu materia más difícil e identifica el 20% de temas más frecuentes.',
        m5m:'Aplica la regla 80/20 a tu planificación de estudio durante las próximas 2 semanas completas.',
        m5a:'Aplica la regla 80/20 a todas tus materias del semestre completo antes del período de exámenes finales.',
        m6r:'¿Cuáles son los 2-3 temas que aparecen en todos los exámenes de tu materia más difícil? Si los dominaras perfectamente, ¿cuánto mejoraría tu calificación y cuánto tiempo te ahorrarías?',
        m6f:'"El 80% de los resultados vienen del 20% del esfuerzo bien dirigido." — Vilfredo Pareto',
        m6c:['El 20% del temario produce el 80% de las preguntas de examen. Identifica ese 20% primero.','Analiza exámenes anteriores del mismo profesor para identificar los temas más frecuentes.','Asigna el 80% de tu tiempo de estudio al 20% más importante.','El 80% restante se estudia después con menos profundidad, no se ignora completamente.'] }
    ]
  },

  {
    id:6, title:'Eliminar la Pereza',
    desc:'La pereza casi nunca es pereza real. Descubre qué la causa y cómo vencerla.',
    emoji:'💪', color:'#f97316', colorBg:'rgba(249,115,22,.15)',
    intro:'¿Cuántas veces has tenido la intención de estudiar pero terminaste haciendo cualquier otra cosa? ¿Cuántas noches te fuiste a dormir con la culpa de no haber aprovechado el día? La neurociencia moderna tiene una perspectiva revolucionaria sobre esto: la pereza casi nunca es pereza real. Es la respuesta del sistema nervioso ante el miedo, la ansiedad, el agotamiento o la falta de claridad sobre qué hacer. Entender esto cambia todo.',
    techniques:[

      { id:'c6t1', title:'La Regla de los 5 Segundos', difficulty:'Básico', time:'5 min',
        tag:'Supera la resistencia en 5 segundos antes de que tu mente tenga tiempo de objetar.',
        m1i:'¿Sabes exactamente lo que tienes que hacer, tienes el tiempo disponible, las condiciones son buenas, pero algo dentro de ti simplemente no te deja empezar? Hay una ventana de exactamente 5 segundos entre el momento en que tienes el impulso de hacer algo productivo y el momento en que tu cerebro activa sus mecanismos de resistencia. Si no actúas dentro de esa ventana, los pensamientos negativos, las excusas y la procrastinación toman el control de forma automática.',
        m1d:'La Regla de los 5 Segundos fue desarrollada por Mel Robbins después de años de luchar con la procrastinación y la pereza. Cuando la compartió en una charla TED en 2011, el video se viralizó con millones de vistas porque resonó profundamente con una experiencia universal. Robbins afirma que funciona porque interrumpe el patrón automático de pensamiento activando el cortex prefrontal, la región del cerebro responsable de las decisiones deliberadas y del autocontrol.',
        m1t:'El efecto es inmediato. La primera vez que uses la regla ya experimentarás el efecto de superar la inercia en segundos, no días.',
        m2q:'La regla es engañosamente simple: cuando tengas el impulso de hacer algo importante (levantarte, empezar a estudiar, abrir el libro), cuenta hacia atrás 5-4-3-2-1 y actúa físicamente al llegar al 1, antes de que tu mente tenga tiempo de generar objeciones. La cuenta regresiva funciona como un cohete de lanzamiento que interrumpe el ciclo de la procrastinación en su raíz.',
        m2p:'El cerebro humano opera con dos sistemas: el automático (hábitos, impulsos, emociones, procrastinación) y el deliberado (razonamiento, planificación, autocontrol). La procrastinación vive en el sistema automático. La cuenta regresiva activa el sistema deliberado, que tiene la capacidad de anular el automático durante el tiempo suficiente para iniciar la acción. Una vez que el cuerpo se mueve, la resistencia mental cede.',
        m2h:'Camila postergaba levantarse para estudiar cada mañana durante meses. Cuando empezó a contar 5-4-3-2-1 y levantarse físicamente al llegar al 1 sin negociar con su mente, el patrón cambió en menos de una semana. Hoy dice que la regla la salvó de perder completamente el semestre.',
        m3s:['El momento del impulso: Cuando notes que deberías empezar a estudiar pero no lo estás haciendo, ese es exactamente el momento de activar la regla. No esperes a sentirte motivado.','La cuenta regresiva: 5-4-3-2-1 en voz alta o mentalmente, con la intención completamente clara de actuar físicamente al llegar al 1.','La acción física inmediata: Al llegar al 1, ejecuta un movimiento físico inmediato: levantarte de la cama, abrir el cuaderno, sentarte en el escritorio, encender el computador. El movimiento físico es la clave del mecanismo.','Sin negociación después del 1: La regla falla completamente si después del 1 te preguntas "¿realmente quiero hacerlo?" El 1 es acción pura, no el inicio de una negociación interna.'],
        m3e:['Contar sin la intención real de actuar, usando la cuenta como otro ritual de procrastinación más refinado.','Negociar o reflexionar después del 1 en lugar de actuar físicamente de inmediato. La ventana se cierra en microsegundos.','Esperar sentirse motivado antes de usar la regla. La motivación viene DESPUÉS de la acción, nunca antes.'],
        m4e:'Identifica la tarea de estudio que más has estado postergando hoy. Lee esta instrucción, luego cierra este módulo. Cuenta 5-4-3-2-1 y ve directamente a esa tarea sin pensar ni negociar. No reflexiones después del 1. Solo actúa físicamente. Cuando termines o pares, regresa aquí y escribe cuánto tiempo trabajaste. La mayoría de las veces es significativamente más de lo esperado.',
        m5f:'Usa la regla 5-4-3-2-1 para empezar tu próxima sesión de estudio. Cuenta y actúa sin negociar.',
        m5m:'Durante una semana completa, usa la regla cada vez que notes resistencia interna a empezar cualquier tarea importante.',
        m5a:'Implementa la regla específicamente para levantarte en la mañana durante 21 días consecutivos. Es el uso más transformador y el más desafiante de la técnica.',
        m6r:'¿En qué momento del día sientes más resistencia a empezar a estudiar? ¿Qué cambiaría en tu semana si pudieras superar esa resistencia específica en 5 segundos cada vez que aparece?',
        m6f:'"No esperes. El momento nunca será el perfecto." — Napoleon Hill',
        m6c:['5-4-3-2-1 y acción física inmediata al llegar al 1. Sin negociación después del 1.','Interrumpe el sistema automático activando el cortex prefrontal con la cuenta regresiva.','La motivación viene DESPUÉS de la acción. Nunca esperes sentirte motivado para empezar.','El error fatal: negociar o reflexionar después del 1. La ventana se cierra en microsegundos.'] },

      { id:'c6t2', title:'Primer Paso Mínimo', difficulty:'Básico', time:'10 min',
        tag:'Reduce la tarea al paso más pequeño posible para que sea imposible no hacerla.',
        m1i:'¿Las tareas grandes te paralizan antes de empezar? ¿"Estudiar para el examen final" suena tan monumental y abrumador que prefieres no empezar? La parálisis ante tareas grandes es una de las formas más comunes de procrastinación. El cerebro percibe "estudiar todo el temario del semestre" como una amenaza que supera sus recursos disponibles y activa automáticamente la respuesta de evitación como mecanismo de protección.',
        m1d:'El psicólogo e investigador BJ Fogg de Stanford University descubrió después de décadas de investigación que los hábitos más duraderos y los cambios de comportamiento más exitosos siempre empiezan siendo ridículamente pequeños. Su método de "Tiny Habits" demuestra que un hábito de 2 minutos diarios practicado durante 30 días es infinitamente más valioso que un hábito de 2 horas que solo se practica cuando hay suficiente motivación.',
        m1t:'El efecto del Primer Paso Mínimo es inmediato desde la primera vez que lo aplicas. La parálisis desaparece porque el cerebro no tiene razones para resistir algo tan pequeño.',
        m2q:'Reducir la tarea al punto más pequeño posible que todavía constituya un avance real y genuino. No "estudiar química completa", sino "abrir el libro de química en la página 45". No "hacer el ensayo completo", sino "escribir el título y el primer párrafo del ensayo". El primer paso debe ser tan pequeño que el cerebro literalmente no tenga razones válidas para resistirlo.',
        m2p:'Una vez que empiezas con el primer paso mínimo, el Efecto Zeigarnik entra en acción: el cerebro tiene una tendencia neurológica natural a querer completar las tareas que ha iniciado. Las tareas incompletas generan una tensión cognitiva que el cerebro busca resolver terminándolas. Empezar con el paso más pequeño posible activa ese efecto poderoso sin activar la resistencia que generaría comprometerse con la tarea completa.',
        m2h:'Mateo tenía que escribir su tesis de graduación y la sola idea de "escribir la tesis" lo paralizaba completamente. Cuando su mentor le sugirió que su único compromiso era abrir el documento de Word y escribir una sola oración al día, Mateo accedió. Esa oración llevó a un párrafo, ese párrafo a una página, y esa semana avanzó más en su tesis que en los 2 meses anteriores juntos.',
        m3s:['Identifica la tarea que más estás evitando. Escríbela exactamente como la tienes en mente, con todo su peso y abrumamiento.','Divide en el primer paso real: ¿Cuál es la acción más pequeña posible que todavía constituye un inicio genuino de la tarea?','Divide aún más si el paso todavía parece grande: ¿Solo leer el primer párrafo del capítulo 5? ¿Solo escribir el título?','Comprométete solo con ese único primer paso. Nada más. Sin comprometerte con lo que venga después.','Deja que el Efecto Zeigarnik haga el resto: una vez que empiezas, tu cerebro querrá continuar naturalmente.'],
        m3e:['Hacer el primer paso pero detener la tarea inmediatamente después, antes de que el momentum natural se construya.','Hacer el primer paso tan pequeño que no constituye un inicio genuino y real de la tarea.','Comprometerse mentalmente con toda la tarea al mismo tiempo que se da el primer paso, recreando exactamente la misma parálisis que se intentaba evitar.'],
        m4e:'Escribe la tarea que más has estado evitando esta semana, con todo su peso. Ahora identifica su primer paso mínimo: la acción más pequeña posible que sea un inicio genuino. Luego hazlo ahora mismo. Solo ese paso. No te comprometas con nada más. Cuando lo hayas hecho, pregúntate honestamente: ¿Quieres dar un segundo paso? Casi siempre la respuesta es sí.',
        m5f:'Identifica el primer paso mínimo de cada tarea importante de mañana esta noche. Empieza siempre por el primer paso, nunca por la tarea completa.',
        m5m:'Durante una semana completa, usa el Primer Paso Mínimo para cada tarea que genere resistencia o procrastinación. Registra cuánto avanzas comparado con semanas anteriores.',
        m5a:'Para proyectos grandes de largo plazo: diseña una secuencia completa de primeros pasos mínimos, uno para cada día. Cada día te comprometes solo con el paso de ese día.',
        m6r:'¿Qué tarea importante has estado evitando que podría empezar con un solo paso concreto en los próximos 2 minutos? ¿Cuál sería ese paso específicamente?',
        m6f:'"Un viaje de mil millas comienza con un solo paso." — Lao Tzu',
        m6c:['Reduce la tarea al paso más pequeño posible que constituya un inicio real y genuino.','El Efecto Zeigarnik: el cerebro tiene tendencia natural a querer completar lo que ha iniciado.','Solo comprometerse con ese único primer paso inicial. El momentum natural hace el resto.','La diferencia entre empezar con el primer paso mínimo y con la tarea completa es la diferencia entre actuar y procrastinar.'] },

      { id:'c6t3', title:'Identificar tus Ladrones de Energía', difficulty:'Intermedio', time:'20 min',
        tag:'Muchas veces lo que llamamos pereza es en realidad agotamiento disfrazado.',
        m1i:'¿Hay días en que te sientes completamente sin energía para estudiar aunque hayas dormido las horas necesarias? ¿Tu motivación varía dramáticamente de un día a otro sin una razón aparente? Muchas veces lo que llamamos pereza es en realidad agotamiento real: energía que se está gastando en actividades y situaciones que no vemos claramente. Los ladrones de energía son hábitos, personas, situaciones, pensamientos y entornos que consumen tu energía mental y física sin darte nada valioso a cambio.',
        m1d:'La investigadora y autora Brené Brown encontró en su investigación que el agotamiento emocional crónico es tan real y tan debilitante como el agotamiento físico, pero es mucho más difícil de identificar y nombrar. Las personas que se reportan como "perezosas" con frecuencia están experimentando un agotamiento emocional crónico causado por conflictos no resueltos, comparaciones sociales constantes y exposición excesiva a contenido negativo.',
        m1t:'En 3 a 5 días de registro honesto de energía tendrás datos suficientes para identificar con precisión tus principales ladrones de energía.',
        m2q:'Los ladrones de energía se dividen en 4 categorías principales: Físicos (mala alimentación, falta de sueño de calidad, sedentarismo, deshidratación), Digitales (scroll infinito en redes sociales, notificaciones constantes, contenido negativo o de baja calidad), Emocionales (conflictos interpersonales no resueltos, comparaciones sociales constantes, autocrítica excesiva y perfeccionismo) y Ambientales (desorden crónico, ruido impredecible, convivencia con personas que generan estrés constante).',
        m2p:'Cada categoría de ladrones roba energía de formas diferentes y requiere soluciones específicas. Identificar con precisión cuál es el ladrón principal de tu energía permite atacar la causa real del agotamiento en lugar de intentar tener "más fuerza de voluntad" o "más motivación", que son síntomas, no causas.',
        m2h:'Laura se sentía completamente "perezosa" todos los días por la tarde y nunca podía estudiar después de las 3pm. Cuando llevó un registro detallado de su energía durante una semana, descubrió que pasaba exactamente 2 horas diarias en TikTok justo después del almuerzo. Al eliminar ese hábito y reemplazarlo con 20 minutos de caminata, su energía vespertina mejoró de forma dramática en menos de una semana.',
        m3s:['Registro de energía: Durante 5 días consecutivos, anota tu nivel de energía del 1 al 10 cada 2 horas aproximadamente. Sé completamente honesto.','Identifica los patrones: ¿En qué momentos del día tu energía cae más? ¿Qué actividades o situaciones precedieron siempre esas caídas?','Ladrones físicos a revisar: Menos de 7-8 horas de sueño de calidad, comidas muy pesadas antes de estudiar, sedentarismo durante más de 2 horas seguidas, deshidratación (beber poco agua).','Ladrones digitales a revisar: Más de 1 hora de scroll pasivo en redes sociales antes de estudiar, notificaciones activas durante el estudio, consumo de contenido negativo o de baja calidad.','Ladrones emocionales a revisar: Compararse constantemente con otros compañeros, conflictos interpersonales activos no resueltos, autocrítica excesiva después de errores.','Ladrones ambientales a revisar: Desorden visual crónico en el espacio de estudio, convivencia cercana con personas que generan estrés o conflicto constante.'],
        m3e:['Identificar los ladrones con claridad pero no tomar ninguna acción concreta para eliminarlos o reducirlos.','Enfocarse solo en los ladrones más obvios (el teléfono) ignorando los más sutiles pero más impactantes (sueño insuficiente, mala alimentación).','Intentar eliminar todos los ladrones al mismo tiempo. Esto es abrumador y suele fallar. Empieza con el más impactante.'],
        m4e:'Durante los próximos 3 días completos, anota tu nivel de energía del 1 al 10 en 4 momentos del día: al despertar (8am), al mediodía (12pm), en la tarde (4pm) y en la noche (8pm). Para cada medición de 5 o menos, escribe qué hiciste o qué ocurrió en las 2 horas anteriores. Al final de los 3 días, identifica el patrón: ¿Qué actividad o situación aparece más frecuentemente justo antes de las caídas de energía? Ese es tu principal ladrón. Define una acción concreta y específica para reducirlo esta semana.',
        m5f:'Lleva el registro de energía durante 3 días e identifica con precisión tu ladrón de energía principal.',
        m5m:'Elimina o reduce significativamente tu ladrón de energía principal durante 2 semanas completas. Evalúa el cambio en tu capacidad de estudiar.',
        m5a:'Audita honestamente las 4 categorías de ladrones de energía y crea un plan progresivo de eliminación de los 3 más impactantes.',
        m6r:'¿Cuál crees honestamente que es tu principal ladrón de energía ahora mismo? ¿Cuánta energía real recuperarías si lo eliminases o redujeses significativamente esta semana?',
        m6f:'"Cuida tu energía como el recurso más valioso que tienes. Porque lo es." — Jim Loehr',
        m6c:['La pereza frecuente es casi siempre agotamiento causado por ladrones de energía no identificados.','4 categorías: físicos, digitales, emocionales y ambientales. Cada una requiere soluciones diferentes.','El registro de energía de 3-5 días revela los ladrones personales con una precisión que la introspección sola nunca logra.','Empieza eliminando solo el ladrón más impactante. No todos a la vez.'] },

      { id:'c6t4', title:'Construir un Sistema de Hábitos', difficulty:'Avanzado', time:'25 min',
        tag:'Haz del estudio un hábito tan automático e inevitable como lavarse los dientes.',
        m1i:'¿Dependes completamente de la motivación para estudiar? ¿Los días que "tienes ganas" estudias bien pero los días que no, simplemente no estudias nada? La motivación es un estado emocional que fluctúa constantemente según el sueño, el estrés, las circunstancias y el estado de ánimo. Si tu estudio depende de la motivación, tu rendimiento será tan inconsistente como tu estado de ánimo. Los hábitos sólidos, en cambio, son comportamientos automáticos que no dependen de cómo te sientes: simplemente ocurren.',
        m1d:'James Clear, autor del bestseller internacional "Hábitos Atómicos", afirma que aproximadamente el 40-45% de las acciones que realizamos cada día son hábitos automáticos, no decisiones conscientes. Diseñar ese 40% de manera intencional y estratégica a tu favor puede transformar completamente tu productividad y rendimiento académico sin requerir más fuerza de voluntad de tu parte.',
        m1t:'Se necesitan entre 21 y 66 días para instalar un nuevo hábito de forma sólida, dependiendo de la complejidad. Los primeros resultados visibles se ven en 2-3 semanas de práctica consistente y honesta.',
        m2q:'Un hábito funciona a través de un ciclo de 4 elementos que se refuerzan mutuamente: Señal (el disparador específico que activa el hábito automáticamente), Antojo (el deseo o motivación que impulsa la acción), Rutina (el comportamiento habitual que se realiza) y Recompensa (el beneficio que refuerza el ciclo y lo hace más probable la próxima vez). Para construir el hábito de estudiar de forma sólida, necesitas diseñar deliberadamente los 4 elementos.',
        m2p:'Los hábitos bien diseñados no dependen de la motivación porque son automáticos. Una vez que el hábito está instalado, la señal activa la rutina sin necesidad de ninguna decisión consciente. Esto hace que el estudio ocurra de forma consistente independientemente del estado de ánimo del día, eliminando la variabilidad que produce depender de la motivación.',
        m2h:'Andrés quería estudiar cada mañana pero nunca lo lograba porque dependía de "tener ganas". Cuando diseñó su hábito con una señal específica (el café de la mañana), un antojo claro (sentirse productivo y sin culpa), una rutina concreta (30 minutos de estudio inmediatamente después del café) y una recompensa inmediata (desayunar algo que le gustaba mucho), el hábito se instaló completamente en 3 semanas y ahora ocurre de forma automática todos los días.',
        m3s:['Diseña la señal específica: "Después de [cosa que ya haces todos los días], haré [hábito de estudio]." Ejemplo concreto: "Después de prepararme el café de la mañana, abriré mis apuntes por 30 minutos sin excepción."','Empieza ridículamente pequeño: El primer hábito debe durar solo 2-5 minutos al principio. La consistencia diaria importa infinitamente más que la duración al inicio.','Diseña la recompensa inmediata: Algo placentero que ocurra justo después de completar el hábito. Debe ser inmediata, no diferida en el tiempo. El cerebro necesita el refuerzo inmediato.','Construye la racha visual: Registra visualmente cada día que completas el hábito en un calendario. Marcar la X diaria se convierte en motivación propia para no romper la cadena.','La regla de nunca fallar dos veces consecutivas: Si fallas un día, no pasa nada. Si fallas dos días seguidos, el hábito empieza a debilitarse. Un día es un tropiezo; dos días es el inicio de un patrón.'],
        m3e:['Empezar con un hábito demasiado ambicioso (estudiar 3 horas diarias desde el día 1). La magnitud inicial no importa; la consistencia diaria sí.','No tener una señal específica y predecible. "Estudiaré cuando tenga ganas" no es una señal: es una esperanza que depende de la motivación.','No diseñar una recompensa inmediata real. La recompensa retrasada no refuerza el hábito de la misma forma que la inmediata.'],
        m4e:'Diseña ahora mismo UN solo hábito de estudio. Solo uno. Responde: ¿Cuál será tu señal específica? (después de qué cosa que ya haces todos los días). ¿Cuánto tiempo durará al inicio? (empieza con 10-15 minutos máximo). ¿Cuál será tu recompensa inmediata? (qué disfrutarás justo al terminar). Crea un registro visual: un calendario donde marcarás una X cada día que lo completes. Comprométete honestamente con 21 días de consistencia antes de aumentar la duración.',
        m5f:'Diseña un hábito de estudio de 10 minutos diarios con señal, rutina y recompensa claramente definidas. Practícalo 7 días seguidos sin excepción.',
        m5m:'Mantén el hábito durante 21 días consecutivos sin excepción. Si fallas un día, reinicia sin culpa excesiva y sin rendirte.',
        m5a:'Después de 21 días de consistencia sólida, aumenta gradualmente la duración en 5 minutos por semana hasta llegar al tiempo de estudio diario que realmente necesitas.',
        m6r:'¿Qué hábito de estudio diario, si lo tuvieras completamente automatizado, cambiaría más profundamente tu rendimiento académico? ¿Cuál sería su señal, su rutina y su recompensa específica?',
        m6f:'"No te elevas al nivel de tus metas, caes al nivel de tus sistemas." — James Clear',
        m6c:['Un hábito tiene 4 elementos: señal, antojo, rutina y recompensa. Todos deben diseñarse intencionalmente.','Fórmula: "Después de [señal diaria], haré [hábito] y disfrutaré [recompensa inmediata]."','Empieza ridículamente pequeño. La consistencia diaria supera siempre a la duración esporádica.','La racha visual y la regla de nunca fallar dos veces son los mecanismos que mantienen el hábito vivo.'] }
    ]
  }

]; // ← fin del array FN_COURSES

// ─── ESTADO GLOBAL ───────────────────────────────────────────
let fnCourse   = null;
let fnTechIdx  = 0;
let fnTechData = null;
let fnModIdx   = 0;
let fnDone     = new Set();

// ─── LOCALSTORAGE ────────────────────────────────────────────
function fnProgress()   { return JSON.parse(localStorage.getItem('fn_prog')||'{}'); }
function fnMarkDone(id) { const p=fnProgress(); p[id]=true; localStorage.setItem('fn_prog',JSON.stringify(p)); }
function fnIsDone(id)   { return !!fnProgress()[id]; }
function fnCourseProgress(cid) {
  const c=FN_COURSES.find(x=>x.id===cid);
  if(!c) return {done:0,total:4};
  return {done:c.techniques.filter(t=>fnIsDone(t.id)).length, total:c.techniques.length};
}

// ─── TOAST ───────────────────────────────────────────────────
function fnToast(icon,titulo,sub) {
  let wrap=document.getElementById('fn-toasts');
  if(!wrap){wrap=document.createElement('div');wrap.id='fn-toasts';wrap.style.cssText='position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem';document.body.appendChild(wrap);}
  const t=document.createElement('div');
  t.style.cssText='background:rgba(10,10,10,.95);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(20px);border-radius:.85rem;padding:.85rem 1.1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 8px 28px rgba(0,0,0,.5);max-width:300px;animation:fade-rise .3s ease both';
  t.innerHTML=`<span style="font-size:17px">${icon}</span><div style="font-size:.8rem;color:rgba(255,255,255,.7)"><strong style="color:#f5f5f5;display:block;font-size:.83rem;margin-bottom:.1rem">${titulo}</strong>${sub}</div>`;
  wrap.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateY(12px)';t.style.transition='.3s';setTimeout(()=>t.remove(),350);},3000);
}

// ─── HOME: GRILLA DE 6 CURSOS ────────────────────────────────
function fnRenderHome() {
  const el=document.getElementById('fn-courses-container');
  if(!el) return;
  el.innerHTML=`<div class="fn-home-header"><div class="fn-eyebrow">Elige tu área de mejora</div></div><div class="fn-courses-grid" id="fn-cgrid"></div>`;
  document.getElementById('fn-cgrid').innerHTML=FN_COURSES.map(c=>{
    const p=fnCourseProgress(c.id);
    const pct=Math.round(p.done/p.total*100);
    const wide=(c.id===6);
    return `<div class="fn-course-card liquid-glass${wide?' fn-wide':''}" onclick="fnOpenCourse(${c.id})">
      <div class="fn-course-icon" style="background:${c.colorBg}">${c.emoji}</div>
      <div${wide?' style="flex:1;min-width:180px"':''}>
        <div class="fn-course-num">Curso ${c.id} · ${p.done}/${p.total} completadas</div>
        <div class="fn-course-title">${c.title}</div>
        <div class="fn-course-desc">${c.desc}</div>
        ${p.done>0?`<div class="fn-completed-dot">✓ ${pct}% completado</div>`:''}
      </div>
      <div class="fn-course-footer"${wide?' style="flex-shrink:0"':''}>
        <div class="fn-course-meta">4 técnicas · 6 módulos c/u</div>
        <div class="fn-course-arrow" style="color:${c.color}">Ver →</div>
      </div>
    </div>`;
  }).join('');
}

// ─── VISTA CURSO ─────────────────────────────────────────────
function fnOpenCourse(cid) {
  const c=FN_COURSES.find(x=>x.id===cid);
  if(!c) return;
  fnCourse=c;
  const p=fnCourseProgress(cid);
  const pct=Math.round(p.done/p.total*100);
  document.getElementById('fn-courses-container').innerHTML=`
    <div style="animation:fade-rise .4s cubic-bezier(.16,1,.3,1) both">
      <button class="fn-back-btn" onclick="fnRenderHome()">← Volver a cursos</button>
      <div class="fn-course-hero liquid-glass">
        <div class="fn-course-hero-glow" style="background:radial-gradient(${c.color},transparent)"></div>
        <div class="fn-course-tag" style="color:${c.color}">Curso ${c.id} de 6</div>
        <div class="fn-course-hero-title">${c.emoji} ${c.title}</div>
        <div class="fn-course-hero-desc">${c.desc}</div>
        <div class="fn-course-intro-wrap"><p class="fn-course-intro-text">${c.intro}</p></div>
        <div class="fn-course-hero-stats">
          <div class="fn-ch-stat">📚 <b>4</b> técnicas</div>
          <div class="fn-ch-stat">📦 <b>6</b> módulos c/u</div>
          <div class="fn-ch-stat">✅ <b>${p.done}/${p.total}</b> completadas</div>
          <div class="fn-ch-stat">🎯 <b>${pct}%</b> progreso</div>
        </div>
        <div class="fn-course-prog-bar-wrap"><div class="fn-course-prog-bar-fill" style="width:${pct}%;background:${c.color}"></div></div>
        <div class="fn-course-prog-labels"><span>${p.done} completadas</span><span>${p.total-p.done} restantes</span></div>
      </div>
      <div class="fn-techniques-label">4 técnicas del curso</div>
      <div class="fn-techniques-grid">${c.techniques.map((t,i)=>fnTechCard(t,i,c)).join('')}</div>
    </div>`;
}

function fnTechCard(t,i,c) {
  const done=fnIsDone(t.id);
  const dc=t.difficulty==='Básico'?'fn-badge-basico':t.difficulty==='Intermedio'?'fn-badge-intermedio':'fn-badge-avanzado';
  return `<div class="fn-tech-card liquid-glass${done?' fn-completed':''}" onclick="fnOpenTech(${c.id},${i})" style="position:relative">
    <div class="fn-tech-num" style="${done?`background:${c.colorBg};color:${c.color}`:`color:${c.color};background:${c.colorBg}`}">${done?'✓':i+1}</div>
    <div class="fn-tech-body">
      <div class="fn-tech-title">${t.title}</div>
      <div class="fn-tech-tag">${t.tag}</div>
      <div class="fn-tech-meta">
        <span class="fn-tech-badge ${dc}">${t.difficulty}</span>
        <span class="fn-tech-time">⏱ ${t.time}</span>
        <span class="fn-tech-time">📦 6 módulos</span>
      </div>
    </div>
    ${done?'<div style="position:absolute;top:.75rem;right:.75rem;font-size:.85rem">🏅</div>':''}
    <div class="fn-tech-arrow" style="color:${c.color}">→</div>
  </div>`;
}

// ─── VISTA TÉCNICA: MÓDULOS UNO A UNO ───────────────────────
// IMPORTANTE: solo fnm0 es visible al inicio.
// Los módulos fnm1..fnm5 tienen class="fn-module liquid-glass fn-mod-hidden"
// y se revelan uno a uno al hacer clic en Continuar.
function fnOpenTech(cid,idx) {
  const c=FN_COURSES.find(x=>x.id===cid);
  if(!c) return;
  const t=c.techniques[idx];
  if(!t) return;
  fnCourse=c; fnTechIdx=idx; fnTechData=t;
  fnDone.clear(); fnModIdx=0;
  const done=fnIsDone(t.id);
  const prev=idx>0?c.techniques[idx-1]:null;
  const next=idx<c.techniques.length-1?c.techniques[idx+1]:null;

  document.getElementById('fn-courses-container').innerHTML=`
    <div style="animation:fade-rise .4s cubic-bezier(.16,1,.3,1) both">
      <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1rem">
        <button class="fn-back-btn" onclick="fnOpenCourse(${c.id})">← Volver al curso</button>
        <div class="fn-breadcrumb">${c.title} <b>›</b> ${t.title}</div>
      </div>
      <div class="fn-lesson-hero liquid-glass">
        <div class="fn-lesson-hero-glow" style="background:radial-gradient(${c.color},transparent)"></div>
        <div class="fn-lesson-chip" style="background:${c.colorBg};color:${c.color};border-color:${c.color}33">${c.emoji} Curso ${c.id}: ${c.title}</div>
        <div class="fn-lesson-num">Técnica ${idx+1} de ${c.techniques.length}</div>
        <div class="fn-lesson-title">${t.title}</div>
        <div class="fn-lesson-desc">${t.tag}</div>
        <div class="fn-lesson-meta">
          <div class="fn-lesson-meta-chip">📦 <span>6 módulos</span></div>
          <div class="fn-lesson-meta-chip">⏱ <span>${t.time}</span></div>
          <div class="fn-lesson-meta-chip">🎯 <span>${t.difficulty}</span></div>
          ${done?`<div class="fn-lesson-meta-chip" style="color:#5ecc99;border-color:rgba(94,204,153,.2)">🏅 <span>Completada</span></div>`:''}
        </div>
      </div>
      <div class="fn-prog-box liquid-glass">
        <div class="fn-prog-top"><div class="fn-prog-lbl">Tu progreso en esta técnica</div><div class="fn-prog-pct" id="fn-pct">0%</div></div>
        <div class="fn-prog-track"><div class="fn-prog-fill" id="fn-pfill" style="width:0%"></div></div>
        <div class="fn-pills" id="fn-pills"></div>
      </div>
      ${fnMod1(t)}
      ${fnMod2(t)}
      ${fnMod3(t)}
      ${fnMod4(t)}
      ${fnMod5(t)}
      ${fnMod6(t,c,idx)}
      ${fnBadge(t,c,idx)}
      <div class="fn-tech-nav-bar">
        <button class="fn-tnav-btn${!prev?' disabled':''}" onclick="${prev?`fnOpenTech(${c.id},${idx-1})`:''}">
          <div><div class="fn-tnav-label">← Anterior</div><div class="fn-tnav-title">${prev?prev.title:'—'}</div></div>
        </button>
        <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="fnOpenCourse(${c.id})">Ver todas</button>
        <button class="fn-tnav-btn${!next?' disabled':''}" onclick="${next?`fnOpenTech(${c.id},${idx+1})`:''}">
          <div style="text-align:right"><div class="fn-tnav-label">Siguiente →</div><div class="fn-tnav-title">${next?next.title:'—'}</div></div>
        </button>
      </div>
    </div>`;

  fnBuildPills(); fnUpdateProg();
  // Restaurar textos guardados
  setTimeout(()=>{
    ['fn-prac-ta','fn-refl-ta'].forEach(id=>{
      const el=document.getElementById(id);
      if(el){const v=localStorage.getItem(`fn_ref_${t.id}_${id}`);if(v)el.value=v;}
    });
  },100);
}

// ─── 6 MÓDULOS (solo fnm0 visible, el resto oculto) ─────────
// La clase "fn-mod-hidden" oculta el módulo con display:none
// La función fnNext() la quita para revelar el siguiente módulo

// Módulo 1 — VISIBLE al abrir la técnica (sin fn-mod-hidden)
function fnMod1(t) {
  return `<div class="fn-module liquid-glass" id="fnm0">
    <div class="fn-module-head">
      <div class="fn-module-icon">🔍</div>
      <div><div class="fn-module-name">Módulo 1 — Introducción</div><div class="fn-module-sub">El problema que esta técnica resuelve</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-callout fn-callout-q">¿Por qué necesitas dominar esta técnica? ¿Qué problema concreto resuelve en tu vida?</div>
      <p class="fn-body-text">${t.m1i}</p>
      <div class="fn-callout fn-callout-fact"><strong>📊 Dato clave:</strong> ${t.m1d}</div>
      <div class="fn-callout fn-callout-story"><strong>⏳ ¿Cuándo verás resultados?</strong> ${t.m1t}</div>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="fnNext(0)">Continuar al módulo 2 →</button>
    </div>
  </div>`;
}

// Módulos 2-5 — OCULTOS al inicio (fn-mod-hidden), se revelan con fnNext()
function fnMod2(t) {
  return `<div class="fn-module liquid-glass fn-mod-hidden" id="fnm1">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(167,139,250,.12)">🧠</div>
      <div><div class="fn-module-name">Módulo 2 — Entiéndela</div><div class="fn-module-sub">Qué es y por qué funciona</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-atom-label">¿Qué es?</div>
      <p class="fn-body-text">${t.m2q}</p>
      <div class="fn-divider"></div>
      <div class="fn-atom-label">¿Por qué funciona?</div>
      <p class="fn-body-text">${t.m2p}</p>
      <div class="fn-callout fn-callout-story"><strong>🧑‍🎓 Historia real:</strong> ${t.m2h}</div>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="fnPrev(1)">← Anterior</button>
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="fnNext(1)">Continuar al módulo 3 →</button>
    </div>
  </div>`;
}

function fnMod3(t) {
  const ps=(t.m3s||[]).map((p,i)=>`<li><div class="fn-sn">${i+1}</div><div>${p}</div></li>`).join('');
  const es=(t.m3e||[]).map(e=>`<li><div class="fn-edot"></div><div>${e}</div></li>`).join('');
  return `<div class="fn-module liquid-glass fn-mod-hidden" id="fnm2">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(94,204,153,.12)">📖</div>
      <div><div class="fn-module-name">Módulo 3 — Aprende a aplicarla</div><div class="fn-module-sub">Pasos + errores más comunes</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-atom-label">Pasos para aplicarla</div>
      <ul class="fn-steps">${ps}</ul>
      <div class="fn-divider"></div>
      <div class="fn-atom-label">Errores más comunes</div>
      <ul class="fn-errs">${es}</ul>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="fnPrev(2)">← Anterior</button>
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="fnNext(2)">Continuar al módulo 4 →</button>
    </div>
  </div>`;
}

function fnMod4(t) {
  return `<div class="fn-module liquid-glass fn-mod-hidden" id="fnm3">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(251,146,60,.12)">✏️</div>
      <div><div class="fn-module-name">Módulo 4 — Practica ahora</div><div class="fn-module-sub">Ejercicio guiado paso a paso</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-callout fn-callout-tip"><strong>🎯 Tu ejercicio:</strong><p style="margin-top:.5rem;line-height:1.65">${t.m4e}</p></div>
      <div class="fn-atom-label" style="margin-top:1rem">¿Cómo te fue? Escribe tu reflexión</div>
      <textarea class="fn-rta" id="fn-prac-ta"
        placeholder="¿Qué fue fácil? ¿Qué te costó? ¿Qué descubriste al aplicarlo? Escribe con honestidad. Se guarda automáticamente."
        oninput="localStorage.setItem('fn_ref_${t.id}_fn-prac-ta',this.value)"></textarea>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="fnPrev(3)">← Anterior</button>
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="fnNext(3)">Continuar al módulo 5 →</button>
    </div>
  </div>`;
}

function fnMod5(t) {
  const ck=s=>`<div class="fn-ck" onclick="fnTck(this)"><div class="fn-ck-box"><svg class="fn-ck-icon" width="10" height="8" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L4 7.5L10 1" stroke="#001a0d" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="fn-ck-txt">${s}</div></div>`;
  return `<div class="fn-module liquid-glass fn-mod-hidden" id="fnm4">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(251,191,36,.12)">⚡</div>
      <div><div class="fn-module-name">Módulo 5 — Ponla a prueba</div><div class="fn-module-sub">Elige tu nivel de reto</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-reto-grid">
        <div class="fn-reto easy" onclick="fnSelReto(this,'easy')"><span class="fn-rl">🟢 Fácil</span><div class="fn-rt">${t.m5f}</div></div>
        <div class="fn-reto mid" onclick="fnSelReto(this,'mid')"><span class="fn-rl">🟡 Medio</span><div class="fn-rt">${t.m5m}</div></div>
        <div class="fn-reto hard" onclick="fnSelReto(this,'hard')"><span class="fn-rl">🔴 Avanzado</span><div class="fn-rt">${t.m5a}</div></div>
      </div>
      <div class="fn-atom-label" style="margin-top:1.25rem">✅ Verifica antes de continuar</div>
      <div class="fn-cklist">
        ${ck('Entendí el propósito de la técnica y por qué funciona científicamente.')}
        ${ck('Completé el ejercicio guiado del módulo anterior con honestidad real.')}
        ${ck('Elegí el nivel de reto que voy a intentar esta semana.')}
      </div>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="fnPrev(4)">← Anterior</button>
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="fnNext(4)">Continuar al módulo 6 →</button>
    </div>
  </div>`;
}

function fnMod6(t,c,idx) {
  const pre=s=>`<div class="fn-ck precheck"><div class="fn-ck-box"><svg class="fn-ck-icon" width="10" height="8" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L4 7.5L10 1" stroke="#001a0d" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="fn-ck-txt">${s}</div></div>`;
  const cierre=(t.m6c||[]).map(pre).join('');
  return `<div class="fn-module liquid-glass fn-mod-hidden" id="fnm5">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(137,170,204,.12)">🏆</div>
      <div><div class="fn-module-name">Módulo 6 — Domínala</div><div class="fn-module-sub">Reflexión final y cierre</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-callout fn-callout-q"><strong>💬 Reflexión final:</strong><br><span style="font-style:italic">${t.m6r}</span></div>
      <textarea class="fn-rta" id="fn-refl-ta"
        placeholder="Escribe tu respuesta aquí con honestidad. Se guarda automáticamente..."
        oninput="localStorage.setItem('fn_ref_${t.id}_fn-refl-ta',this.value)"></textarea>
      <div class="fn-divider"></div>
      <div class="fn-atom-label">Lo que lograste en esta técnica</div>
      <div class="fn-cklist">${cierre}</div>
      <div class="fn-quote">${t.m6f}</div>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="fnPrev(5)">← Anterior</button>
      <button class="fn-btn fn-btn-success fn-btn-sm" onclick="fnComplete()">🏅 Completar técnica</button>
    </div>
  </div>`;
}

// Badge de logro (siempre oculto hasta fnComplete())
function fnBadge(t,c,idx) {
  const next=idx<c.techniques.length-1?c.techniques[idx+1]:null;
  return `<div class="fn-module liquid-glass fn-mod-hidden" id="fnm-badge">
    <div class="fn-badge-wrap">
      <span class="fn-badge-confetti">🎊</span>
      <div class="fn-badge-ring">🏅</div>
      <div class="fn-badge-title">${t.title} completada</div>
      <div class="fn-badge-sub">${c.title} · 6 módulos completados</div>
      <div class="fn-badge-prog-row">
        <div class="fn-badge-prog-bar"><div class="fn-badge-prog-fill" id="fn-bfill" style="width:0%"></div></div>
        <div class="fn-badge-prog-txt" id="fn-btxt">— / 4</div>
      </div>
      <button class="fn-btn fn-btn-primary" style="margin-top:1rem"
        onclick="${next?`fnOpenTech(${c.id},${idx+1})`:`fnOpenCourse(${c.id})`}">
        ${next?`Siguiente: ${next.title} →`:'Ver todas las técnicas →'}
      </button>
      <button class="fn-btn fn-btn-ghost fn-btn-sm" style="margin-top:.5rem" onclick="fnOpenCourse(${c.id})">
        Volver al curso
      </button>
    </div>
  </div>`;
}

// ─── PASTILLAS Y BARRA ───────────────────────────────────────
const FN_LBLS=['Intro','Entiéndela','Aprende','Practica','A prueba','Domínala'];

function fnBuildPills() {
  const el=document.getElementById('fn-pills');
  if(!el) return;
  el.innerHTML=FN_LBLS.map((n,i)=>{
    let cls='fn-pill';
    if(fnDone.has(i)) cls+=' done';
    else if(i===fnModIdx) cls+=' active';
    return `<div class="${cls}"><div class="fn-pill-dot"></div>${n}</div>`;
  }).join('');
}

function fnUpdateProg() {
  const pct=Math.round(fnDone.size/6*100);
  const te=document.getElementById('fn-pct');
  const be=document.getElementById('fn-pfill');
  if(te) te.textContent=pct+'%';
  if(be) be.style.width=pct+'%';
  fnBuildPills();
}

// ─── NAVEGACIÓN MÓDULO A MÓDULO ──────────────────────────────
// fnNext(idx): marca el módulo idx como hecho, lo oscurece,
//              y REVELA el siguiente quitándole fn-mod-hidden
function fnNext(idx) {
  fnDone.add(idx);
  const cur=document.getElementById('fnm'+idx);
  if(cur) cur.classList.add('faded');

  const nxt=document.getElementById('fnm'+(idx+1));
  if(nxt) {
    nxt.classList.remove('fn-mod-hidden'); // ← REVELA el siguiente módulo
    fnModIdx=idx+1;
    fnUpdateProg();
    setTimeout(()=>nxt.scrollIntoView({behavior:'smooth',block:'start'}),80);
    fnToast('📦','Módulo '+(idx+2)+' desbloqueado',FN_LBLS[idx+1]||'');
  }
}

// fnPrev(idx): oculta el módulo actual y restaura el anterior
function fnPrev(idx) {
  const cur=document.getElementById('fnm'+idx);
  if(cur) cur.classList.add('fn-mod-hidden'); // ← OCULTA el módulo actual

  const prv=document.getElementById('fnm'+(idx-1));
  if(prv) {
    prv.classList.remove('faded');
    fnDone.delete(idx-1);
    fnModIdx=idx-1;
    fnUpdateProg();
    prv.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

// fnComplete(): marca la técnica como completa y muestra el badge
function fnComplete() {
  if(!fnTechData||!fnCourse) return;
  fnDone.add(5);
  fnMarkDone(fnTechData.id);

  const m5=document.getElementById('fnm5');
  if(m5) m5.classList.add('faded');

  const p=fnCourseProgress(fnCourse.id);
  const pct=Math.round(p.done/p.total*100);
  const badge=document.getElementById('fnm-badge');
  if(badge) {
    badge.classList.remove('fn-mod-hidden'); // ← REVELA el badge
    fnModIdx=6; fnUpdateProg();
    const bf=document.getElementById('fn-bfill');
    const bt=document.getElementById('fn-btxt');
    if(bf) bf.style.width=pct+'%';
    if(bt) bt.textContent=`${p.done} / ${p.total}`;
    setTimeout(()=>badge.scrollIntoView({behavior:'smooth',block:'start'}),80);
  }
  fnToast('🏅','¡Técnica completada!',fnTechData.title);
}

// ─── INTERACCIONES ───────────────────────────────────────────
function fnTck(el) { el.classList.toggle('on'); }

function fnSelReto(el,nivel) {
  document.querySelectorAll('.fn-reto').forEach(r=>{r.style.boxShadow='';});
  const cols={easy:'rgba(94,204,153,.5)',mid:'rgba(201,169,110,.5)',hard:'rgba(255,130,80,.5)'};
  el.style.boxShadow=`0 0 0 1.5px ${cols[nivel]||'var(--accent-a)'}`;
  fnToast('🎯','Reto seleccionado',nivel==='easy'?'Nivel fácil':nivel==='mid'?'Nivel medio':'Nivel avanzado');
}

// ─── CSS PARA fn-mod-hidden ──────────────────────────────────
// Inyectamos la regla directamente en el <head> para garantizar
// que los módulos ocultos no se vean bajo ninguna circunstancia
(function() {
  const s=document.createElement('style');
  s.textContent='.fn-mod-hidden{display:none!important;}';
  document.head.appendChild(s);
})();

// ─── INICIALIZACIÓN ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', ()=>{ fnRenderHome(); });
