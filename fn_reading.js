/* ═══════════════════════════════════════════════════════
   FocusNova · fn_reading.js
   Curso: Leer Mejor — 3 Técnicas × 5 Módulos
   Módulos se revelan UNO A UNO al hacer clic en Continuar
═══════════════════════════════════════════════════════ */

// ─── LAS 3 TÉCNICAS DE LECTURA ───────────────────────────────
const RL_TECNICAS = [

  { id:'rl1', num:1, emoji:'🔍', color:'#89AACC', colorBg:'rgba(137,170,204,.15)',
    title:'Skimming y Scanning',
    tag:'Lee rápido para captar ideas generales o localizar información específica.',
    intro:'¿Sientes que tienes que leer absolutamente todo para no perderte nada? ¿Te tomas el mismo tiempo leyendo un correo que leyendo un capítulo de libro? No toda la información merece el mismo nivel de atención. Una de las habilidades más importantes de un lector eficiente es saber cuándo leer en profundidad y cuándo basta con extraer información clave rápidamente.',
    dato:'Estudios en líderes empresariales y académicos muestran que los profesionales de alto rendimiento leen en promedio 4 a 5 veces más contenido que el promedio, sin dedicarle más tiempo. La diferencia está en que saben elegir qué leer con profundidad y qué procesar rápidamente.',
    tiempo:'Aplicable inmediatamente. Desde el primer uso, procesarás más contenido en menos tiempo. En 2 semanas, la elección entre leer rápido o profundo se volverá automática.',
    que:'El Skimming es una lectura rápida orientada a captar la idea general de un texto. Se leen títulos, primer y último párrafo de cada sección, y las primeras oraciones de cada párrafo. El objetivo es entender de qué trata el texto, no recordar los detalles. El Scanning es una lectura de búsqueda orientada a encontrar información específica, como buscar un nombre en una lista.',
    porque:'Skimming y Scanning activan niveles diferentes de procesamiento según el objetivo. Skimming activa la comprensión global; Scanning activa la búsqueda focalizada. Juntas permiten procesar grandes volúmenes de texto con una eficiencia imposible de lograr leyendo todo al mismo nivel de profundidad.',
    historia:'Diana, asistente legal, recibía documentos de 40 a 60 páginas varias veces por semana. Con Skimming aprendió a identificar en 5 minutos si un documento era relevante para su caso, y con Scanning localizaba cláusulas específicas en segundos. Lo que antes le tomaba 2 horas ahora le toma 30 minutos.',
    pasos:['Skimming paso 1: Lee el título y todos los subtítulos completos para captar la estructura.','Skimming paso 2: Lee el primer párrafo completo (contiene la tesis o idea central).','Skimming paso 3: Lee solo la primera oración de cada párrafo intermedio.','Skimming paso 4: Lee el último párrafo completo (contiene la conclusión).','Skimming paso 5: Revisa gráficos, tablas y elementos visuales. Suelen tener la información más importante.','Scanning: Define exactamente qué buscas antes de empezar. Recorre el texto verticalmente hasta encontrarlo, luego lee ese párrafo completo.'],
    errores:['Usar Skimming para textos que requieren comprensión profunda como contratos, problemas matemáticos o textos filosóficos densos.','En Scanning, leer horizontalmente todo el texto en lugar de recorrerlo verticalmente buscando la palabra clave específica.','No revisar los gráficos y tablas durante el Skimming, que suelen contener la información más densa y útil.'],
    ejercicio:'Busca un artículo de noticias o blog de 3 a 5 páginas sobre cualquier tema. Practica Skimming: toma solo 3 minutos para leerlo completo usando el método de 5 pasos. Luego escribe en 2 oraciones de qué trataba sin volver a leerlo. Después practica Scanning: en ese mismo texto, busca una fecha, nombre o estadística específica y crónométrate. Finalmente, lee el texto completo y compara cuánto capturaste con Skimming.',
    reto_f:'Aplica Skimming a los 3 próximos artículos o lecturas que tengas pendientes antes de decidir si los leerás completos.',
    reto_m:'Durante una semana completa, usa Scanning para encontrar información específica en tus materiales de estudio antes de leerlos por completo.',
    reto_a:'Desarrolla un sistema personal: clasifica cada texto que recibes en "Skimming suficiente", "Scanning + lectura parcial" o "Lectura profunda completa". Aplícalo durante 2 semanas.',
    dominala:'El dominio del Skimming y Scanning está en la decisión estratégica: saber qué textos merecen lectura profunda y cuáles se pueden procesar rápidamente. Un lector experto no lee todo de la misma manera. Lee cada texto al nivel de profundidad que su propósito requiere.',
    integra:'Combina Skimming y Scanning con el Método SQ3R: usa Skimming durante el paso Survey para obtener visión general en segundos, y Scanning durante el paso Read para localizar las respuestas a tus preguntas. Esta combinación multiplica la velocidad y profundidad al mismo tiempo.',
    frase:'"No se trata de leer más rápido, sino de leer más inteligentemente."' },

  { id:'rl2', num:2, emoji:'⚡', color:'#a78bfa', colorBg:'rgba(167,139,250,.15)',
    title:'Lectura en Bloques (Chunking Visual)',
    tag:'Entrena tu ojo para capturar grupos de palabras y aumenta tu velocidad sin perder comprensión.',
    intro:'¿Lees palabra por palabra y sientes que vas muy lento? ¿Tu voz interna repite cada palabra mientras lees, como si leyeras en voz alta para alguien? La mayoría de las personas aprendió a leer vocalizando todo, una palabra a la vez. Ese hábito limita la velocidad de lectura a la velocidad del habla: 150 a 200 palabras por minuto. El cerebro visual puede procesar grupos de 3 a 5 palabras simultáneamente, permitiendo leer de 300 a 500 palabras por minuto con igual o mejor comprensión.',
    dato:'Investigaciones en psicología cognitiva demuestran que el ojo no lee letra por letra ni palabra por palabra. Realiza saltos llamados saccades y procesa grupos de palabras en cada pausa. Los lectores rápidos han entrenado sus ojos para hacer menos pausas y procesar más palabras en cada una. Esta habilidad es completamente entrenable en cualquier persona.',
    tiempo:'Los primeros resultados se sienten en 1 a 2 semanas de práctica diaria. En un mes, la velocidad de lectura puede aumentar entre un 30% y un 60% sin perder comprensión.',
    que:'Es la práctica de entrenar el ojo para capturar grupos de palabras (bloques o chunks) en lugar de leerlas una a una. El objetivo es reducir el número de paradas visuales por línea y aumentar la cantidad de palabras procesadas en cada parada, eliminando gradualmente la subvocalización (la voz interna que repite cada palabra).',
    porque:'El cerebro no necesita leer cada palabra individual para construir significado. Procesa patrones lingüísticos y puede inferir y completar el significado a partir de palabras clave dentro de un bloque. Leer en bloques reduce la subvocalización y acelera el procesamiento visual sin sacrificar la comprensión, ya que el cerebro opera con más eficiencia a nivel visual que auditivo.',
    historia:'Jorge leía a 180 palabras por minuto y sentía que nunca podía terminar sus lecturas asignadas. Después de 3 semanas entrenando la lectura en bloques con 10 minutos diarios, su velocidad alcanzó 320 palabras por minuto manteniendo la comprensión. Lo que antes le tomaba 2 horas ahora lo termina en 70 minutos.',
    pasos:['Ejercicio 1 — Grupos de 2: Practica leer el texto de 2 en 2 palabras, pausando una vez por cada par. Usa un dedo o lápiz como guía bajo la línea y avánzalo suavemente.','Ejercicio 2 — Grupos de 3: Una vez que los grupos de 2 se sientan cómodos (1-2 semanas), pasa a grupos de 3 palabras. Tu campo visual se está expandiendo progresivamente.','Ejercicio 3 — Punto central: Fija la mirada en el centro de cada línea e intenta capturar toda la línea en 1-2 fijaciones. Es la meta de la lectura en bloques avanzada.','Mide tu progreso: Mide tu velocidad en palabras por minuto al inicio, después de 1 semana y después de 3 semanas. Ver el progreso mantiene la motivación.'],
    errores:['Aumentar la velocidad antes de que la comprensión esté estable. Siempre prioriza la comprensión: si no entiendes, reduce la velocidad.','Practicar de forma irregular (solo algunos días). La lectura en bloques requiere práctica diaria para reprogramar el hábito visual.','Intentar ir al ejercicio de punto central sin dominar primero los grupos de 2 y 3. El proceso debe ser progresivo.'],
    ejercicio:'Mide tu velocidad de lectura actual: toma un texto sencillo, lee durante exactamente 1 minuto y cuenta las palabras leídas. Ese es tu punto de partida. Ahora practica el ejercicio de grupos de 2 durante 10 minutos con cualquier texto. Pon una guía bajo la línea y avánzala suavemente. Al terminar, vuelve a medir tu velocidad. Registra ambos números y la fecha.',
    reto_f:'Practica el ejercicio de grupos de 2 durante 10 minutos diarios durante una semana. Mide tu velocidad al inicio y al final.',
    reto_m:'Después de dominar grupos de 2, pasa a grupos de 3 durante la segunda semana. Compara tu velocidad con la semana anterior.',
    reto_a:'Practica la lectura en bloques durante un mes completo con 10 minutos diarios. Registra tu velocidad cada semana y grafica el progreso.',
    dominala:'La lectura en bloques se domina cuando dejas de escuchar tu voz interna mientras lees. Ese silencio interno es la señal de que el cerebro está procesando visualmente, no auditivamente. En ese punto, la velocidad puede aumentar significativamente sin sacrificar comprensión.',
    integra:'Usa la lectura en bloques para lecturas largas donde la velocidad es importante (artículos, informes, correos extensos), y combina esta técnica con Skimming: primero exploras en bloque rápidamente y luego decides dónde aplicar lectura profunda. Esta combinación puede triplicar tu productividad lectora.',
    frase:'"El ojo entrenado no lee palabras, lee ideas."' },

  { id:'rl3', num:3, emoji:'🎯', color:'#5ecc99', colorBg:'rgba(94,204,153,.15)',
    title:'Método de la Pregunta Guiadora',
    tag:'Formula una pregunta antes de leer y toda la lectura se convierte en una búsqueda activa.',
    intro:'¿Alguna vez empezaste a leer un libro sin saber bien para qué lo estabas leyendo? ¿Terminas lecturas sin saber qué hacer con lo que acabas de leer? Una de las razones más comunes por las que la gente no retiene lo que lee es que no tiene un propósito claro antes de empezar. El cerebro es significativamente más eficiente cuando busca algo concreto. El Método de la Pregunta Guiadora aprovecha este principio fundamental.',
    dato:'La investigación en psicología educativa sobre el "efecto de generación" demuestra que la información que buscamos activamente se recuerda entre 2 y 3 veces mejor que la información que recibimos pasivamente. Formular una pregunta antes de leer activa este efecto de forma inmediata y sin ningún esfuerzo adicional.',
    tiempo:'Desde la primera aplicación notarás mayor claridad y enfoque durante la lectura. En 2 semanas de práctica, toda lectura con un propósito claro se sentirá más productiva y satisfactoria.',
    que:'Es la práctica de formular una o dos preguntas específicas antes de empezar cualquier lectura. Esas preguntas actúan como filtros activos: tu mente busca activamente la respuesta mientras lee, lo que mejora el enfoque, la retención y la utilidad práctica de la lectura. Una buena pregunta guiadora es específica, orientada a la aplicación o la comprensión, y genuinamente relevante para ti.',
    porque:'El cerebro funciona mejor con un objetivo claro. Cuando lees sin propósito, procesas todo al mismo nivel superficial y no recuerdas nada especialmente bien. Cuando lees buscando una respuesta concreta, el cerebro filtra automáticamente lo irrelevante y prioriza lo que responde tu pregunta. Es una forma de orientar la atención selectiva hacia lo que realmente importa para ti.',
    historia:'Ana leía libros de negocios y al terminarlos no sabía qué cambiar en su trabajo. Cuando empezó a formular la pregunta "¿Qué de este libro puedo implementar en los próximos 30 días?" antes de cada lectura, sus sesiones se volvieron completamente enfocadas, terminaba con acciones concretas y empezó a aplicar lo leído de forma sistemática por primera vez.',
    pasos:['Preguntas de comprensión: Se enfocan en entender el contenido. Ejemplo: "¿Cuál es el argumento central?" o "¿Qué evidencia presenta el autor?". Ideales para lectura académica.','Preguntas de aplicación: Se enfocan en usar lo leído. Ejemplo: "¿Cómo puedo aplicar esto a mi situación actual?" Ideales para libros de no ficción práctica.','Preguntas críticas: Se enfocan en evaluar el contenido. Ejemplo: "¿Está bien fundamentada la posición del autor?" Ideales para desarrollar pensamiento crítico.','El proceso completo: Antes de leer escribe tu pregunta. Durante lee buscando la respuesta y anota fragmentos relevantes. Al finalizar escribe tu respuesta. Reflexiona: ¿respondió tu pregunta? ¿generó nuevas preguntas?'],
    errores:['Formular preguntas demasiado vagas como "¿de qué trata este libro?" que no orientan realmente la atención ni el procesamiento.','Olvidar la pregunta durante la lectura y volver al modo pasivo. Escríbela en papel y tenla visible mientras lees.','No escribir la respuesta al terminar. El acto de escribir la respuesta es lo que consolida el aprendizaje de forma duradera.'],
    ejercicio:'Elige un texto que tengas pendiente (artículo, capítulo, informe). Antes de leer, escribe en papel: "Mi pregunta guiadora para esta lectura es:" y formula una pregunta específica y relevante para ti. Lee el texto con esa pregunta activa en tu mente. Anota los fragmentos más relevantes. Al terminar, responde tu pregunta por escrito sin mirar el texto. Evalúa: ¿Qué tan completa fue tu respuesta? ¿Qué nuevas preguntas surgieron?',
    reto_f:'Aplica el Método de la Pregunta Guiadora a las próximas 3 lecturas que tengas, formulando y escribiendo la pregunta antes de empezar cada una.',
    reto_m:'Durante una semana, usa preguntas guiadoras para todas tus lecturas de estudio. Al terminar cada lectura, escribe tu respuesta y evalúa cuánto retuviste.',
    reto_a:'Crea un diario de lectura donde registras: el texto, tu pregunta guiadora, tu respuesta al terminar y las nuevas preguntas que surgieron. Mantenlo durante un mes.',
    dominala:'El dominio del Método de la Pregunta Guiadora llega cuando formular preguntas antes de leer se vuelve completamente automático. En ese nivel, nunca empezarás una lectura sin saber por qué la estás leyendo y qué esperas obtener de ella. Esto transforma fundamentalmente tu relación con la lectura: de una actividad pasiva a una búsqueda activa de conocimiento.',
    integra:'Combina el Método de la Pregunta Guiadora con el SQ3R: usa tu Pregunta Guiadora como marco para formular las preguntas del paso Q (Question) del SQ3R. También úsala con Lectura Activa: anota los fragmentos que responden directamente tu pregunta. Esta combinación produce lecturas de altísima eficiencia donde cada minuto tiene un retorno claro en conocimiento aplicable.',
    frase:'"La pregunta correcta es más poderosa que cualquier respuesta." — Clayton Christensen' }

];

// ─── ESTADO ──────────────────────────────────────────────────
let rlActiva = null;
let rlModIdx = 0;
let rlDone   = new Set();

// ─── LOCALSTORAGE ────────────────────────────────────────────
function rlProgress()   { return JSON.parse(localStorage.getItem('fn_rl_prog')||'{}'); }
function rlMarkDone(id) { const p=rlProgress(); p[id]=true; localStorage.setItem('fn_rl_prog',JSON.stringify(p)); }
function rlIsDone(id)   { return !!rlProgress()[id]; }
function rlCountDone()  { return RL_TECNICAS.filter(t=>rlIsDone(t.id)).length; }

// CSS para ocultar módulos — inyectado una sola vez
(function(){
  if(!document.getElementById('rl-hidden-css')){
    const s=document.createElement('style');
    s.id='rl-hidden-css';
    s.textContent='.rl-mod-hidden{display:none!important;}';
    document.head.appendChild(s);
  }
})();

// ─── GRILLA DE 3 TÉCNICAS (pantalla inicial) ─────────────────
function rlRenderHome() {
  const el=document.getElementById('rl-container');
  if(!el) return;

  const total=rlCountDone();
  const barra=document.getElementById('tec-progress-fill');
  const cnt=document.getElementById('tec-count');
  if(barra) barra.style.width=(total/RL_TECNICAS.length*100)+'%';
  if(cnt)   cnt.textContent=total;

  el.innerHTML=`
    <div style="animation:fade-rise .4s cubic-bezier(.16,1,.3,1) both">
      <div class="fn-home-header"><div class="fn-eyebrow">Elige una técnica para dominarla</div></div>
      <div class="fn-courses-grid" style="margin-top:1rem">
        ${RL_TECNICAS.map(t=>{
          const done=rlIsDone(t.id);
          return `<div class="fn-course-card liquid-glass${done?' fn-completed':''}" onclick="rlOpenTech('${t.id}')">
            <div class="fn-course-icon" style="background:${t.colorBg}">${t.emoji}</div>
            <div>
              <div class="fn-course-num">Técnica ${t.num} · 5 módulos</div>
              <div class="fn-course-title">${t.title}</div>
              <div class="fn-course-desc">${t.tag}</div>
              ${done?'<div class="fn-completed-dot">✓ Completada</div>':''}
            </div>
            <div class="fn-course-footer">
              <div class="fn-course-meta">Intro · Entiéndela · Aprende · Practica · Domínala</div>
              <div class="fn-course-arrow" style="color:${t.color}">Ver →</div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

// ─── ABRIR UNA TÉCNICA: 5 MÓDULOS UNO A UNO ─────────────────
function rlOpenTech(id) {
  const t=RL_TECNICAS.find(x=>x.id===id);
  if(!t) return;
  rlActiva=t; rlModIdx=0; rlDone=new Set();
  const done=rlIsDone(t.id);
  const idx=RL_TECNICAS.indexOf(t);
  const prev=idx>0?RL_TECNICAS[idx-1]:null;
  const next=idx<RL_TECNICAS.length-1?RL_TECNICAS[idx+1]:null;

  document.getElementById('rl-container').innerHTML=`
    <div style="animation:fade-rise .4s cubic-bezier(.16,1,.3,1) both">
      <button class="fn-back-btn" onclick="rlRenderHome()">← Volver a técnicas de lectura</button>

      <div class="fn-lesson-hero liquid-glass">
        <div class="fn-lesson-hero-glow" style="background:radial-gradient(${t.color},transparent)"></div>
        <div class="fn-lesson-chip" style="background:${t.colorBg};color:${t.color};border-color:${t.color}33">📖 Curso: Leer Mejor</div>
        <div class="fn-lesson-num">Técnica ${t.num} de ${RL_TECNICAS.length}</div>
        <div class="fn-lesson-title">${t.title}</div>
        <div class="fn-lesson-desc">${t.tag}</div>
        <div class="fn-lesson-meta">
          <div class="fn-lesson-meta-chip">📦 <span>5 módulos</span></div>
          ${done?`<div class="fn-lesson-meta-chip" style="color:#5ecc99;border-color:rgba(94,204,153,.2)">🏅 <span>Completada</span></div>`:''}
        </div>
      </div>

      <div class="fn-prog-box liquid-glass">
        <div class="fn-prog-top"><div class="fn-prog-lbl">Tu progreso en esta técnica</div><div class="fn-prog-pct" id="rl-pct">0%</div></div>
        <div class="fn-prog-track"><div class="fn-prog-fill" id="rl-pfill" style="width:0%"></div></div>
        <div class="fn-pills" id="rl-pills"></div>
      </div>

      ${rlMod1(t)}
      ${rlMod2(t)}
      ${rlMod3(t)}
      ${rlMod4(t)}
      ${rlMod5(t)}
      ${rlBadge(t,prev,next)}

      <div class="fn-tech-nav-bar">
        <button class="fn-tnav-btn${!prev?' disabled':''}" onclick="${prev?`rlOpenTech('${prev.id}')`:''}">
          <div><div class="fn-tnav-label">← Anterior</div><div class="fn-tnav-title">${prev?prev.title:'—'}</div></div>
        </button>
        <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="rlRenderHome()">Ver todas</button>
        <button class="fn-tnav-btn${!next?' disabled':''}" onclick="${next?`rlOpenTech('${next.id}')`:''}">
          <div style="text-align:right"><div class="fn-tnav-label">Siguiente →</div><div class="fn-tnav-title">${next?next.title:'—'}</div></div>
        </button>
      </div>
    </div>`;

  rlBuildPills(); rlUpdateProg();
  setTimeout(()=>{
    const el=document.getElementById('rl-prac-ta');
    if(el){const v=localStorage.getItem('rl_prac_'+t.id);if(v)el.value=v;}
    const el2=document.getElementById('rl-refl-ta');
    if(el2){const v=localStorage.getItem('rl_refl_'+t.id);if(v)el2.value=v;}
  },100);
}

// ─── 5 MÓDULOS (solo el primero visible) ─────────────────────
// Módulo 1 — VISIBLE al abrir (sin rl-mod-hidden)
function rlMod1(t) {
  return `<div class="fn-module liquid-glass" id="rlm0">
    <div class="fn-module-head">
      <div class="fn-module-icon">🔍</div>
      <div><div class="fn-module-name">Módulo 1 — Introducción</div><div class="fn-module-sub">El problema que esta técnica resuelve</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-callout fn-callout-q">¿Qué problema concreto resuelve esta técnica en tu forma de leer?</div>
      <p class="fn-body-text">${t.intro}</p>
      <div class="fn-callout fn-callout-fact"><strong>📊 Dato clave:</strong> ${t.dato}</div>
      <div class="fn-callout fn-callout-story"><strong>⏳ ¿Cuándo verás resultados?</strong> ${t.tiempo}</div>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="rlNext(0)">Continuar al módulo 2 →</button>
    </div>
  </div>`;
}

// Módulos 2-5 — OCULTOS al inicio (rl-mod-hidden)
function rlMod2(t) {
  return `<div class="fn-module liquid-glass rl-mod-hidden" id="rlm1">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(167,139,250,.12)">🧠</div>
      <div><div class="fn-module-name">Módulo 2 — Entiéndela</div><div class="fn-module-sub">Qué es y por qué funciona</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-atom-label">¿Qué es?</div>
      <p class="fn-body-text">${t.que}</p>
      <div class="fn-divider"></div>
      <div class="fn-atom-label">¿Por qué funciona?</div>
      <p class="fn-body-text">${t.porque}</p>
      <div class="fn-callout fn-callout-story"><strong>🧑‍🎓 Historia real:</strong> ${t.historia}</div>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="rlPrev(1)">← Anterior</button>
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="rlNext(1)">Continuar al módulo 3 →</button>
    </div>
  </div>`;
}

function rlMod3(t) {
  const ps=(t.pasos||[]).map((p,i)=>`<li><div class="fn-sn">${i+1}</div><div>${p}</div></li>`).join('');
  const es=(t.errores||[]).map(e=>`<li><div class="fn-edot"></div><div>${e}</div></li>`).join('');
  return `<div class="fn-module liquid-glass rl-mod-hidden" id="rlm2">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(94,204,153,.12)">📖</div>
      <div><div class="fn-module-name">Módulo 3 — Aprende a aplicarla</div><div class="fn-module-sub">Pasos + errores más comunes</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-atom-label">Cómo aplicarla paso a paso</div>
      <ul class="fn-steps">${ps}</ul>
      <div class="fn-divider"></div>
      <div class="fn-atom-label">Errores más comunes</div>
      <ul class="fn-errs">${es}</ul>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="rlPrev(2)">← Anterior</button>
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="rlNext(2)">Continuar al módulo 4 →</button>
    </div>
  </div>`;
}

function rlMod4(t) {
  return `<div class="fn-module liquid-glass rl-mod-hidden" id="rlm3">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(251,146,60,.12)">✏️</div>
      <div><div class="fn-module-name">Módulo 4 — Practica ahora</div><div class="fn-module-sub">Ejercicio guiado + 3 niveles de reto</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-callout fn-callout-tip"><strong>🎯 Tu ejercicio guiado:</strong><p style="margin-top:.5rem;line-height:1.65">${t.ejercicio}</p></div>
      <div class="fn-atom-label" style="margin-top:1.25rem">Elige tu nivel de reto para esta semana</div>
      <div class="fn-reto-grid">
        <div class="fn-reto easy" onclick="fnSelReto(this,'easy')"><span class="fn-rl">🟢 Fácil</span><div class="fn-rt">${t.reto_f}</div></div>
        <div class="fn-reto mid" onclick="fnSelReto(this,'mid')"><span class="fn-rl">🟡 Medio</span><div class="fn-rt">${t.reto_m}</div></div>
        <div class="fn-reto hard" onclick="fnSelReto(this,'hard')"><span class="fn-rl">🔴 Avanzado</span><div class="fn-rt">${t.reto_a}</div></div>
      </div>
      <div class="fn-atom-label" style="margin-top:1rem">¿Cómo te fue con el ejercicio?</div>
      <textarea class="fn-rta" id="rl-prac-ta"
        placeholder="¿Qué fue fácil? ¿Qué te costó? ¿Qué descubriste? Se guarda automáticamente."
        oninput="localStorage.setItem('rl_prac_${t.id}',this.value)"></textarea>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="rlPrev(3)">← Anterior</button>
      <button class="fn-btn fn-btn-primary fn-btn-sm" onclick="rlNext(3)">Continuar al módulo 5 →</button>
    </div>
  </div>`;
}

function rlMod5(t) {
  const pre=s=>`<div class="fn-ck precheck"><div class="fn-ck-box"><svg class="fn-ck-icon" width="10" height="8" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L4 7.5L10 1" stroke="#001a0d" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="fn-ck-txt">${s}</div></div>`;
  return `<div class="fn-module liquid-glass rl-mod-hidden" id="rlm4">
    <div class="fn-module-head">
      <div class="fn-module-icon" style="background:rgba(137,170,204,.12)">🏆</div>
      <div><div class="fn-module-name">Módulo 5 — Domínala</div><div class="fn-module-sub">Reflexión, integración y cierre</div></div>
    </div>
    <div class="fn-module-body">
      <div class="fn-atom-label">Domínala</div>
      <p class="fn-body-text">${t.dominala}</p>
      <div class="fn-divider"></div>
      <div class="fn-atom-label">Intégrala con otras técnicas</div>
      <p class="fn-body-text">${t.integra}</p>
      <div class="fn-divider"></div>
      <div class="fn-atom-label">Reflexión final</div>
      <textarea class="fn-rta" id="rl-refl-ta"
        placeholder="¿Cómo cambiaría tu forma de leer si aplicaras esta técnica de forma constante? Se guarda automáticamente."
        oninput="localStorage.setItem('rl_refl_${t.id}',this.value)"></textarea>
      <div class="fn-divider"></div>
      <div class="fn-atom-label">Lo que lograste en esta técnica</div>
      <div class="fn-cklist">
        ${pre('Entendí qué es la técnica y cuándo aplicarla correctamente.')}
        ${pre('Comprendí por qué funciona según la investigación científica.')}
        ${pre('Completé el ejercicio guiado y elegí un nivel de reto.')}
        ${pre('Sé cómo integrar esta técnica con otras para multiplicar su efecto.')}
      </div>
      <div class="fn-quote">${t.frase}</div>
    </div>
    <div class="fn-module-nav">
      <button class="fn-btn fn-btn-ghost fn-btn-sm" onclick="rlPrev(4)">← Anterior</button>
      <button class="fn-btn fn-btn-success fn-btn-sm" onclick="rlComplete()">🏅 Completar técnica</button>
    </div>
  </div>`;
}

// Badge de logro
function rlBadge(t,prev,next) {
  return `<div class="fn-module liquid-glass rl-mod-hidden" id="rlm-badge">
    <div class="fn-badge-wrap">
      <span class="fn-badge-confetti">🎊</span>
      <div class="fn-badge-ring">🏅</div>
      <div class="fn-badge-title">${t.title} completada</div>
      <div class="fn-badge-sub">Curso: Leer Mejor · 5 módulos completados</div>
      <div class="fn-badge-prog-row">
        <div class="fn-badge-prog-bar"><div class="fn-badge-prog-fill" style="width:${Math.round(rlCountDone()/RL_TECNICAS.length*100)}%"></div></div>
        <div class="fn-badge-prog-txt">${rlCountDone()} / ${RL_TECNICAS.length}</div>
      </div>
      <button class="fn-btn fn-btn-primary" style="margin-top:1rem"
        onclick="${next?`rlOpenTech('${next.id}')`:'rlRenderHome()'}">
        ${next?`Siguiente: ${next.title} →`:'Ver todas las técnicas →'}
      </button>
      <button class="fn-btn fn-btn-ghost fn-btn-sm" style="margin-top:.5rem" onclick="rlRenderHome()">
        Volver a técnicas de lectura
      </button>
    </div>
  </div>`;
}

// ─── PASTILLAS ───────────────────────────────────────────────
const RL_LBLS=['Intro','Entiéndela','Aprende','Practica','Domínala'];

function rlBuildPills() {
  const el=document.getElementById('rl-pills');
  if(!el) return;
  el.innerHTML=RL_LBLS.map((n,i)=>{
    let cls='fn-pill';
    if(rlDone.has(i)) cls+=' done';
    else if(i===rlModIdx) cls+=' active';
    return `<div class="${cls}"><div class="fn-pill-dot"></div>${n}</div>`;
  }).join('');
}

function rlUpdateProg() {
  const pct=Math.round(rlDone.size/5*100);
  const te=document.getElementById('rl-pct');
  const be=document.getElementById('rl-pfill');
  if(te) te.textContent=pct+'%';
  if(be) be.style.width=pct+'%';
  rlBuildPills();
}

// ─── NAVEGACIÓN MÓDULO A MÓDULO ──────────────────────────────
function rlNext(idx) {
  rlDone.add(idx);
  const cur=document.getElementById('rlm'+idx);
  if(cur) cur.classList.add('faded');
  const nxt=document.getElementById('rlm'+(idx+1));
  if(nxt){
    nxt.classList.remove('rl-mod-hidden');
    rlModIdx=idx+1; rlUpdateProg();
    setTimeout(()=>nxt.scrollIntoView({behavior:'smooth',block:'start'}),80);
  }
}

function rlPrev(idx) {
  const cur=document.getElementById('rlm'+idx);
  if(cur) cur.classList.add('rl-mod-hidden');
  const prv=document.getElementById('rlm'+(idx-1));
  if(prv){
    prv.classList.remove('faded');
    rlDone.delete(idx-1);
    rlModIdx=idx-1; rlUpdateProg();
    prv.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

function rlComplete() {
  if(!rlActiva) return;
  rlDone.add(4);
  rlMarkDone(rlActiva.id);
  const m4=document.getElementById('rlm4');
  if(m4) m4.classList.add('faded');
  const badge=document.getElementById('rlm-badge');
  if(badge){
    badge.classList.remove('rl-mod-hidden');
    rlModIdx=5; rlUpdateProg();
    setTimeout(()=>badge.scrollIntoView({behavior:'smooth',block:'start'}),80);
  }
  // Actualizar contador global de técnicas de lectura completadas
  const cnt=document.getElementById('tec-count');
  const barra=document.getElementById('tec-progress-fill');
  if(cnt)   cnt.textContent=rlCountDone();
  if(barra) barra.style.width=(rlCountDone()/RL_TECNICAS.length*100)+'%';
}

// ─── INICIALIZACIÓN ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', ()=>{ rlRenderHome(); });
