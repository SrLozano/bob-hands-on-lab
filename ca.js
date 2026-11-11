/* Catalan translation of the guide. Spanish is the base language and lives in index.html.
   Rules: every array keeps the same length and order as its Spanish counterpart
   (steps, code, images), because screenshots, prompts and progress are mapped by position. */
window.CA = {
  modules: {
    'm-assist':   { tag: `Bob accelera l'editor`, desc: `Bob accelera la teva feina diària a l'editor. Tu acceptes o rebutges cada canvi, tecla a tecla.` },
    'm-delegate': { tag: `D'idea a codi`, desc: `Bob construeix una funcionalitat sencera a partir d'un pla que tu has revisat i aprovat abans.` },
    'm-tailor':   { tag: `Bob aprèn com treballeu`, desc: `Bob aprèn el teu codi i els teus estàndards, i s'adapta a cada rol: es comporta com un company més.` },
    'm-scale':    { tag: `Fiable a escala i connectat`, desc: `Bob es manté fiable en feines grans i es connecta a les eines que ja fa servir la teva empresa.` }
  },

  labs: {
    '1.1': {
      title: `Inline Chat (⌘K)`,
      obj: `Edicions puntuals sense sortir de l'editor: poses el cursor, prems <b>⌘K / Ctrl+K</b> i li demanes el canvi en una caixeta; Bob ho fa allà mateix i t'ensenya el diff. Faràs <b>dos</b> canvis: primer <b>validació d'email</b>, i després <b>lògica de reintents</b>.`,
      steps: [
        `<b>— A) VALIDACIÓ D'EMAIL —</b> Obre l'<b>Explorer</b> (icona dels dos fulls, a dalt a l'esquerra). Desplega <code>booking_system_frontend › src › components › user</code> i fes doble clic a <code>UserIdentification.tsx</code>.`,
        `Localitza la funció <code>handleSubmit</code> (cap a la línia 20). Veuràs una validació bàsica que només comprova que els camps no estiguin buits: <code>if (!name.trim() || !email.trim())</code>.`,
        `Col·loca el cursor <b>dins</b> de <code>handleSubmit</code>, just damunt d'aquesta comprovació (o selecciona aquestes línies).`,
        `Prem <b>⌘K</b> (Mac) / <b>Ctrl+K</b> (Windows/Linux): apareix una <b>caixeta d'instrucció</b> a l'editor.`,
        `Escriu aquest prompt a la caixeta i prem <b>Enter</b>:`,
        `Bob genera el canvi i te'l mostra com a <b>diff</b> (verd = afegit, vermell = eliminat). Revisa'l i <b>accepta'l</b> si compleix (si no, rebutja'l i reformula). Desa amb <b>File → Save</b>.`,
        `<b>Comprova-ho</b> a la web (<code>localhost:5173</code>): ves a <b>Flights</b>, prem <b>Book</b> i salta el modal <b>Sign In</b>. Un email invàlid (<code>pepe@</code>) l'ha de rebutjar; un de vàlid (<code>pepe@domini.com</code>) et deixa continuar.`,
        `<b>— B) LÒGICA DE REINTENTS —</b> El backend de vegades dóna <i>timeouts</i> en demanar els vols. Obre <code>booking_system_frontend › src › services › api.ts</code> i localitza la funció <code>getFlights</code> (cap a la línia 42).`,
        `Selecciona la funció <code>getFlights</code> (línies 42–45) i prem <b>⌘K</b>. <i>Envoltaràs</i> la crida amb reintents, sense reescriure-la a mà; escriu aquest prompt i prem <b>Enter</b>:`,
        `Revisa el <b>diff</b> (un bucle d'~3 intents amb espera creixent al voltant de la crida), accepta'l i desa. Aquest canvi no es veu a la web; l'objectiu és veure <b>edició en context</b> sobre codi real.`
      ],
      code: [
        `valida que l'email tingui un format vàlid (p. ex. usuari@domini.com) abans de continuar`,
        `envolta aquesta crida amb lògica de reintents: 3 intents i backoff exponencial`
      ],
      succ: `A localhost:5173 el formulari rebutja un email mal format (pepe@) i n'accepta un de ben format; i a <code>api.ts</code>, <code>getFlights</code> queda envoltada amb reintents.`,
      tip: `L'<b>Inline Chat (⌘K)</b> és ideal per a canvis puntuals, allà mateix a l'editor i sense escriure comentaris al codi. Bones pràctiques: sigues específic, revisa el diff abans d'acceptar i fes <b>commit abans</b> (per revertir fàcilment). Per a canvis multi-fitxer o d'arquitectura, fes servir el xat agèntic (2.1).`
    },

    '2.1': {
      title: `Xat agèntic — classes de seient`,
      obj: `El plat fort i la forma més potent d'usar Bob. Implementes una feature transversal (frontend + backend + base de dades SQLite): <b>classes de seient</b> (Economy, Business, Galaxium) amb el flux estàndard <b>Plan → llegir → conversa nova → Agent</b>.`,
      steps: [
        `<b>— FASE PLAN —</b> Obre la barra lateral de Bob (el panell <b>IBM BOB</b> a la dreta; si no es veu, obre'l des de la icona de Bob).`,
        `Al <b>selector de mode</b> (a baix, al costat de la caixa de text del xat) tria <b>Plan</b>. En aquest mode Bob <b>només llegeix</b> el codi (no escriu): dissenya abans de tocar res.`,
        `Escriu aquest <b>prompt de planificació</b> i envia'l:`,
        `Bob llegeix fitxers i et fa <b>preguntes aclaridores</b> (comportament de cada classe, preus, com mostrar-ho a la UI). Respon-les; per a la demo, respostes raonables serveixen.`,
        `Al cap d'un parell de minuts, Bob crea <b>2–3 documents de pla</b> al projecte (un pla d'implementació amb model de dades, canvis d'API, components i tests, + un d'arquitectura). <b>El nom i el nombre els posa Bob</b> i poden variar entre execucions — no assumeixis un nom concret.`,
        `<b>LLEGEIX-LOS sencers</b> ⚠️ — és el pas clau: això és el que Bob construirà. Obre'ls a l'editor, comprova que el comportament i els tests són els que vols; si alguna cosa no quadra, corregeix-ho amb un follow-up o editant el pla.`,
        `<b>— FASE IMPLEMENTACIÓ (mode Agent) —</b> Inicia una <b>conversa nova</b> (icona <b>+</b> a dalt al panell de Bob): neteja la context window perquè la planificació no competeixi amb la implementació.`,
        `Al selector de mode canvia a <b>Agent</b> (aquí Bob ja pot escriure fitxers i executar comandes).`,
        `Revisa l'<b>auto-approval</b>: per a la demo pots posar-lo en <b>auto-approve</b> i que Bob treballi sense parar a demanar permís; en el dia a dia fes servir <b>Hybrid</b> (auto lectures/escriptures, confirma l'execució de comandes). ⚠️ Auto-approve total deixa que Bob executi comandes arbitràries.`,
        `Al xat (ja en <b>Agent</b>) escriu <b>@</b> i, del desplegable, selecciona els <b>.md del pla que ha creat Bob</b> (poden ser 2 o 3 fitxers, i el nom el posa Bob — fes servir els que vegis, <b>no un nom fix</b>). Al mateix missatge afegeix aquesta instrucció i envia:`,
        `Envia i <b>deixa que Bob implementi</b> a les tres capes (frontend + backend + BD). Triga una mica; si ets en Hybrid, ves aprovant el que demani.`,
        `<b>— COMPROVACIÓ —</b> En acabar, arrenca/recarrega l'app: si vas aturar els servidors rellança <code>./start.sh</code>; si seguien vius, Vite recarrega tot sol.`,
        `A <code>localhost:5173</code> ves a <b>Flights → Book</b>, identifica't (Sign In, amb un email vàlid) i veuràs el <b>selector de classe: Economy / Business / Galaxium</b>. Tria'n una i confirma la reserva.`,
        `<b>— VERIFICACIÓ FINAL (bona pràctica) —</b> Com a últim pas de qualitat, enganxa aquest prompt: li demanes a Bob una revisió completa per assegurar que frontend, backend, base de dades i tests quedin coherents entre ells. És l'hàbit recomanable en tancar qualsevol feature.`
      ],
      code: [
        `Vull diferents classes de seient per a Galaxium Travels: una Economy, una Business i una Galaxium (primera classe). Ajuda'm a fer un pla per implementar-ho.`,
        `Implementa la feature seguint el pla.`,
        `Abans de donar per acabada la feature de classes de seient, fes una verificació completa i corregeix el que trobis:\n1) Cerca a TOT el projecte (frontend i backend) referències a camps reanomenats o eliminats en aquest canvi (price, flight.price, seats_available) i actualitza-les als nous (base_price; economy_price/business_price/galaxium_price; economy_seats/business_seats/galaxium_seats; seat_class; price_paid). Revisa TOTS els fitxers, inclosos BookingCard i MyBookings — no te'n deixis cap.\n2) Esborra qualsevol text d'instrucció en llenguatge natural que hagi quedat enganxat dins d'un fitxer de codi.\n3) Executa la comprovació de tipus del frontend (npx tsc --noEmit -p tsconfig.app.json a booking_system_frontend) i corregeix els errors que surtin.\n4) Assegura't que el backend arrenca i que GET /flights retorna vols amb els camps nous; si el port 8080 està ocupat per un procés vell, mata'l i reinicia'l.\n5) Actualitza els tests a l'esquema nou de classes perquè passin.\nAl final dona'm un resum del que has corregit i confirma que: el frontend compila, el backend respon amb l'esquema nou i els tests passen.`
      ],
      succ: `A la UI de reserva (Flights → Book) apareix el <b>selector de classe Economy / Business / Galaxium</b>, reflectit a frontend, backend i base de dades.`,
      tip: `El nom exacte dels <code>.md</code> el posa Bob i pot variar (sobretot si planifiques en català): a la fase Agent escriu <b>@</b> i tria els que REALMENT hagi creat, no copiïs el nom a cegues. Aquest patró <b>Plan → llegir → conversa nova → Agent</b> és L'estàndard per a features serioses. Pla i codi poden variar entre execucions; si alguna cosa no surt, refina el prompt o ajusta a mà.`
    },

    '3.1': {
      title: `Comanda /init`,
      obj: `Donar a Bob un <b>mapa persistent</b> del projecte perquè no rellegeixi tot en cada conversa.`,
      steps: [
        `Obre la barra lateral agèntica.`,
        `Escriu aquesta slash command i executa-la:`,
        `Espera uns segons: Bob llegeix el projecte i genera els fitxers de context. Són <b>fitxers protegits</b>, així que et demanarà aprovar cada edició — accepta-les (Save).`,
        `Bob crea un <code>AGENTS.md</code> principal (a l'arrel) <b>i un per cada mode</b> — és <b>normal que n'hi hagi diversos</b>. Veuràs carpetes com <code>.bob/rules-plan/AGENTS.md</code>, <code>.bob/rules-agent/AGENTS.md</code> i <code>.bob/rules-ask/AGENTS.md</code>. Obre'ls i revisa'ls.`
      ],
      code: [`/init`],
      succ: `Existeixen l'<code>AGENTS.md</code> principal + un per cada mode, i s'afegeixen automàticament a cada conversa nova.`,
      tip: `Torna a executar /init després de canvis grans (nous mòduls, canvi d'estructura).`
    },

    '3.2': {
      title: `Bob Rules`,
      obj: `Instruccions <b>permanents</b> que s'injecten a totes les converses (estàndards, estil, registre d'auditoria).`,
      steps: [
        `Dins de la carpeta <code>.bob/</code> crea una carpeta <code>rules/</code>.`,
        `Dins de <code>rules/</code>, crea el fitxer <code>basic_rules.md</code> i enganxa aquestes regles:`,
        `Prova amb una tasca trivial: demana <i>“Actualitza el readme”</i>.`,
        `Comprova que apareix un resum amb timestamp a la carpeta <code>internal-monologue/</code>.`
      ],
      code: [
        `Inclou sempre cadenes JSDoc concises a cada funció pública.\nSigues molt concís en la teva redacció.\nEscriu un resum de cada interacció a la carpeta \`internal-monologue/\`. Anomena el fitxer començant per un timestamp, seguit d'una descripció concisa (p. ex. 2026-01-15_update-readme.md).`
      ],
      succ: `Bob aplica les regles sense que les repeteixis, i deixa un rastre a internal-monologue/.`,
      tip: `Les regles de projecte (.bob/rules/) es fan commit al repo: les hereta tot l'equip. Crea el <code>.bob/</code> a l'<b>arrel de la carpeta que tens oberta</b> a Bob — en una carpeta per damunt, Bob no el llegeix.`
    },

    '3.3': {
      title: `Custom Modes`,
      obj: `Crear una <b>persona a mida</b> amb eines restringides. Crearàs un mode <b>Product Management</b>.`,
      steps: [
        `Obre la gestió de modes: l'<b>engranatge</b> del selector de modes, o <b>Ajustos → pestanya “Modes”</b> → <b>+</b>.`,
        `Omple: slug <code>product-management</code>, scope <b>Project</b>.`,
        `<b>Role definition</b> (camp <b>OBLIGATORI</b>): la persona/experiència del mode. P. ex.: <i>“Ets un product manager: converteixes idees en un pla de producte simple i prioritzat; aclareixes el problema, proposes i prioritzes funcionalitats, i no escrius codi.”</i>`,
        `<b>Custom Instructions</b> (opcional): <i>“Transforma idees en un pla de producte simple i prioritzat”</i>.`,
        `Eines: marca <b>Read</b>, <b>Edit</b> i <b>MCP</b>. Deixa fora <b>Execute</b> i <b>Browser</b>.`,
        `<b>Save</b>. Mira com apareix el fitxer <code>.bobmodes</code> (YAML) a l'arrel.`,
        `Selecciona el mode i prova amb aquesta pregunta:`
      ],
      code: [`Quina funcionalitat hauríem de construir a continuació?`],
      succ: `El mode apareix al selector i respon amb un pla prioritzat (i respecta les regles globals).`,
      tip: `Les eines són deterministes: Bob NO pot fer servir cap fora de la llista. És el control de seguretat real del mode.`
    },

    '4.1': {
      title: `Bob Shell`,
      obj: `Fer servir Bob des del <b>terminal</b>: el mateix poder que l'IDE, sense ratolí, i amb <b>mode no interactiu</b> per automatitzar.`,
      steps: [
        `<b>Requisits:</b> Bob Shell necessita <b>Node.js 22.15.0+</b>. Comprova amb <code>node -v</code> i actualitza si cal.`,
        `Primer <b>comprova si ja la tens</b>: <code>which bob</code> (si imprimeix una ruta → ja està instal·lada, salta't aquest pas). Si no, <b>instal·la-la</b> (va a part de l'IDE). macOS/Linux: <code>curl -fsSL https://bob.ibm.com/download/bobshell.sh | bash</code>. Windows (PowerShell): <code>powershell -ep Bypass 'irm -Uri "https://bob.ibm.com/download/bobshell.ps1" | iex'</code>. Alternativa: a Bob IDE, paleta de comandes (<code>Cmd/Ctrl+Shift+P</code>) → <code>run bobshell</code>.`,
        `Obre un terminal i ves al projecte: <code>cd ~/galaxium-travels</code>.`,
        `Arrenca la sessió interactiva: escriu <span class='pill'>bob</span> i prem Enter.`,
        `La <b>primera vegada</b>: login amb el teu <b>IBMid</b> al navegador i <b>accepta la llicència</b>; després tanca el navegador i torna al terminal.`,
        `Dona-li una tasca en <b>llenguatge natural</b> i prem Enter (pots referenciar fitxers amb <b>@</b>, p. ex. <code>Explica @booking_system_frontend/src/services/api.ts</code>). Prova amb aquest:`,
        `<b>Aprovacions:</b> abans de llegir, escriure o executar comandes, Bob et demana permís — aprova o rebutja cada acció. Per veure un canvi, demana-li que l'executi (p. ex. <i>“mostra el git diff”</i>) o mira'l en un altre terminal.`,
        `Escriu <span class='pill'>/</span> per obrir el menú de comandes: <code>/help</code>, canviar de mode amb <code>/mode agent</code> o <code>/mode ask</code>, i <code>/editor</code> per veure els diffs al teu editor.`,
        `<b>Mode no interactiu</b> (automatització): des del terminal normal fes servir <code>bob -p "…"</code>. Pots pipejar fitxers, desar la sortida amb <code>&gt; review.md</code> i afegir <code>--yolo</code> si vols que escrigui fitxers. (El mode no interactiu fa servir <b>API key</b>, no IBMid.) Exemple:`
      ],
      code: [
        `Revisa el README i mira si pots fer alguna millora.`,
        `echo "TypeError: x is not defined" > error.log`,
        `cat error.log | bob -p "explica aquest error"`
      ],
      succ: `A la sessió interactiva Bob llegeix i millora el README (amb la teva aprovació). En no interactiu, <code>cat error.log | bob -p "…"</code> et retorna la resposta directa al terminal.`,
      tip: `Tres usos potents: <b>teclat</b> (sense ratolí), <b>no interactiu</b> (<code>bob -p</code>, per a scripts/pipelines) i <b>diverses instàncies</b> en paral·lel. IDE i Shell comparteixen regles, modes i comandes. La instal·lació és la part més delicada; si es complica, pots seguir amb la resta de labs a l'IDE.`
    },

    '4.2': {
      title: `MCP — servidor de GitHub`,
      obj: `Estendre Bob connectant-lo a <b>GitHub</b> via <b>MCP</b> i resoldre un issue de punta a punta — llistar → arreglar → commit/push → comentar → tancar — tot en llenguatge natural. Hi ha <b>dues vies</b> per connectar-lo: <b>sense Docker</b> (MCP JSON remot) i <b>amb Docker</b> (local); les dues deixen les mateixes eines — per al lab, fes servir la <b>remota</b>.`,
      steps: [
        `<b>— PREPARACIÓ —</b> Necessites un <b>compte de github.com</b> (el gratuït serveix; és l'únic lab que el demana) i un repo amb <b>permisos d'escriptura</b> (per a push i tancar issues). Fes un <b>fork</b> de <code>github.com/IBM/galaxium-travels</code> al teu compte (botó <b>Fork</b>, a dalt a la dreta). Al teu fork, activa la pestanya <b>Issues</b> (<b>Settings → General → Features → marca Issues</b>) i crea un issue de prova (<b>Issues → New issue</b>). Un que funciona bé — títol: <code>Millorar el missatge d'error de l'email</code> · descripció: <code>Quan l'email no és vàlid, el missatge no explica el format esperat (usuari@domini.com). Mostrar un missatge clar.</code>`,
        `<b>Crea un Personal Access Token (PAT)</b> a <code>github.com</code> → <b>Settings → Developer settings → Personal access tokens → Tokens (classic)</b>. Marca els scopes <b>repo</b> (sencer) i <b>read:org</b>. ⚠️ Amb <code>repo</code> sencer evites l'error típic que després Bob <b>no pugui comentar o tancar</b> l'issue. <b>Copia el token</b> (<code>ghp_…</code>): només es mostra una vegada. I apunta el remot del teu clon al teu fork <b>amb el token a la URL</b> (així el <i>push</i> de Bob no es queda esperant credencials): <code>git remote set-url origin https://EL_TEU_USUARI:EL_TEU_PAT@github.com/EL_TEU_USUARI/galaxium-travels.git</code>`,
        `<b>— CONNECTAR L'MCP —</b> Hi ha dos camins: el fitxer <code>.bob/mcp.json</code> (funciona per a tothom, a qualsevol xarxa) o el <b>catàleg</b> d'<b>Ajustos → MCP</b>. Compte: el catàleg amb cercador és el <b>marketplace intern d'IBM</b> i només carrega connectat a la <b>VPN d'IBM</b> — si no ets IBMer o no tens VPN, salta aquest pas i ves directe al <code>mcp.json</code>.`,
        `<i>(Via catàleg — IBMers amb VPN)</i> Cerca <code>github</code> i prem <b>Install</b>. Al formulari <b>Install GitHub</b>: tria l'<b>scope</b> (workspace o global), enganxa el teu <b>PAT</b> i assegura't que el <b>Hostname</b> sigui <b>https://github.com</b>. Deixa els <b>Toolsets</b> (repos, issues, pull_requests, code_security) i <b>Read Only = 0</b>.`,
        `<i>(Via mcp.json — per a tothom)</i> Crea <code>.bob/mcp.json</code> <b>a l'arrel de la carpeta que tens oberta a Bob</b> (galaxium-travels; si el <code>.bob/</code> queda en una carpeta per damunt, Bob no el llegeix) i tria UNA de les dues vies a les <b>pestanyes de sota</b> (també pots demanar a Bob que te l'insereixi). La <b>remota</b> és immediata i no necessita res extra; la de <b>Docker</b> executa el servidor a la teva màquina.`,
        `Desa el JSON i <b>recarrega Bob</b> (paleta de comandes <code>Cmd/Ctrl+Shift+P</code> → <i>Reload Window</i>). <b>Comprova la connexió</b>: a <b>Ajustos → MCP</b>, «github» ha de sortir <b>Connected</b> (o pregunta-li a Bob al xat: <i>«quines eines MCP tens disponibles?»</i>). Posa't en mode <b>Agent</b>: les eines de l'MCP <b>només</b> estan disponibles allà.`,
        `<b>— CICLE DE L'ISSUE —</b> Demana a Bob que <b>llisti els issues</b> oberts del repo amb aquest prompt (veuràs que invoca una tool de l'MCP):`,
        `Tria'n un i demana-li que l'<b>arregli</b> — Bob llegeix el codi i fa el canvi:`,
        `Demana <b>commit i push</b> dels canvis:`,
        `Demana <b>comentar l'issue amb l'enllaç al commit i tancar-lo</b>:`,
        `<b>— VERIFICAR —</b> Obre el teu repo a <code>github.com</code>: l'issue ha d'aparèixer <b>tancat</b>, amb el comentari de Bob enllaçant al commit.`
      ],
      code: [
        `{"servers":{"github":{"type":"http","url":"https://api.githubcopilot.com/mcp/","headers":{"Authorization":"Bearer EL_TEU_PAT"}}}}`,
        `{"servers":{"github":{"command":"docker","args":["run","-i","--rm","-e","GITHUB_PERSONAL_ACCESS_TOKEN","-e","GITHUB_HOST","ghcr.io/github/github-mcp-server"],"env":{"GITHUB_PERSONAL_ACCESS_TOKEN":"EL_TEU_PAT","GITHUB_HOST":"https://github.com/"}}}}`,
        `llista tots els issues oberts de GitHub d'aquest repositori`,
        `arregla l'issue del missatge d'error de l'email: llegeix-lo, canvia el codi i explica'm què has tocat`,
        `fes commit i push dels canvis`,
        `afegeix un comentari a l'issue amb l'enllaç al commit i tanca'l`
      ],
      tabs: [
        { label: `Sense Docker — recomanada`, note: `Immediata, l'allotja GitHub. La URL porta <code>githubcopilot</code> pel host, però <b>no</b> necessites Copilot. Enganxa el teu PAT després de <code>Bearer</code>.` },
        { label: `Amb Docker`, note: `Opcional — el lab complet funciona per la via remota. Necessita un Docker en marxa: <b>Docker Desktop</b> o <b>Rancher Desktop</b> (amb dockerd/moby) serveixen igual. Deixa <code>GITHUB_HOST</code> a <code>https://github.com/</code> i el teu PAT a l'<code>env</code>.` }
      ],
      succ: `A <code>github.com</code>, el teu issue apareix <b>tancat</b> amb un comentari de Bob que enllaça al commit — el cicle complet fet des de Bob, sense sortir.`,
      tip: `⚠️ <b>Seguretat:</b> el PAT queda <b>en clar</b> a <code>.bob/mcp.json</code> → assegura't que <code>.bob/</code> és al <code>.gitignore</code> (si puges el token, GitHub el revoca) i fes servir el PAT amb els <b>mínims scopes</b>. Recorda: les tools de l'MCP només funcionen en mode <b>Agent</b>, la via remota (sense Docker) és la més ràpida si no vols instal·lar res, i fes el cicle sencer (llistar → arreglar → push → comentar/tancar) <b>a la mateixa conversa</b> — si n'obres una de nova a mitja feina, Bob perd el context de quin issue i quin commit són.`,
      trouble: `<table><tr><th>Símptoma</th><th>Solució</th></tr><tr><td>Bob no veu les eines</td><td>Posa't en mode <b>Agent</b></td></tr><tr><td>El catàleg surt buit o demana VPN</td><td>És el marketplace intern d'IBM (només amb VPN); fes servir la via del <code>mcp.json</code> — no necessita VPN</td></tr><tr><td>El server surt <b>Disconnected</b></td><td>Gairebé sempre és el PAT: la via remota només accepta tokens de <code>github.com</code> — un de <code>github.ibm.com</code> no val aquí (aquella instància va per la via Docker amb <code>GITHUB_HOST=https://github.ibm.com</code> i VPN). Per a aquest lab fes servir el teu compte personal de github.com</td></tr><tr><td>El <i>push</i> falla (<code>Authentication failed</code>) o es queda penjat</td><td>El remot necessita el token a la URL: <code>git remote set-url origin https://EL_TEU_USUARI:EL_TEU_PAT@github.com/EL_TEU_USUARI/galaxium-travels.git</code></td></tr><tr><td><code>Cannot connect to the Docker daemon</code></td><td>Arrenca Docker (Desktop o Rancher), o fes servir la via <b>sense Docker</b></td></tr><tr><td>El repo o l'issue dóna <b>404</b></td><td>Revisa que el <b>Hostname</b> / <code>GITHUB_HOST</code> sigui <code>github.com</code> i que el PAT sigui d'aquest compte</td></tr><tr><td>No pot comentar o tancar</td><td>El PAT no té l'scope <code>repo</code> → regenera'l</td></tr><tr><td>Els canvis del JSON no s'apliquen</td><td>Desa i <b>reinicia Bob</b>; comprova que <code>.bob/</code> és a l'<b>arrel</b> de la carpeta oberta, no en una carpeta per damunt</td></tr></table>`
    }
  },

  /* Screenshot captions, same order as IMAGES[id] in index.html.
     Text quoted from the Bob UI (e.g. "Hola, soy Bob") stays as it appears in the screenshots. */
  images: {
    '1.1': [
      `Explorer → booking_system_frontend › src › components › user › UserIdentification.tsx`,
      `El fitxer obert a l'editor de Bob`,
      `Prems ⌘K/Ctrl+K i apareix la caixeta d'instrucció a l'editor`,
      `Bob genera el canvi i el mostra com a diff (verd = afegeix) per acceptar o rebutjar`,
      `El codi resultant: regex + validació de l'email`,
      `A Flights, en prémer Book salta el modal Sign In`,
      `Amb un email vàlid continues cap a la reserva`,
      `A <code>getFlights</code>, li demanes que envolti la crida amb la lògica de reintents; revisa el canvi abans d'acceptar.`
    ],
    '2.1': [
      `Fase Plan: Bob fa preguntes aclaridores (preus, seients, característiques, UX) abans de generar el pla.`,
      `Fase Agent: ajusta l'auto-approval i referencia els plans amb @ (tria del desplegable els .md que ha creat Bob).`,
      `Resultat: a Flights, cada vol mostra les classes Economy / Business / Galaxium amb el seu preu.`,
      `Fase Plan — selecciona <b>Plan</b> al selector de modes del sidebar (Bob només llegeix, no escriu).`,
      `Bob genera els <b>documents de pla</b> (p. ex. <code>seat-classes-plan.md</code>). <b>Llegeix-los</b> abans d'implementar — és el que construirà.`,
      `Fase Agent — li dius «canvia a Agent i implementa»; Bob canvia de mode i crea una <b>llista de tasques</b> (Todo) amb les subtasques.`,
      `Inicia una <b>conversa nova</b> (icona <b>+</b> del panell de Bob) per netejar el context abans d'implementar.`,
      `Amb <b>@</b> tries els <code>.md</code> del pla que ha creat Bob (p. ex. IMPLEMENTATION_PLAN, SEAT_CLASSES…).`
    ],
    '3.1': [
      `Escriu / i tria /init al menú: escaneja el projecte i genera el context.`,
      `Bob genera els AGENTS.md (són fitxers protegits: aprova cada edició).`
    ],
    '4.1': [
      `Arrencada: cd al projecte i bob → apareix el bàner de Bob Shell.`,
      `Una tasca a la Shell, amb @ per referenciar un fitxer (Explica @api.ts).`,
      `Resum de la tasca + menú de / (canviar de mode amb /mode agent, /ask…).`
    ],
    '3.3': [
      `El formulari Create new mode: slug, scope Project, Role definition (obligatori), Custom Instructions i Tools (Read+Edit+MCP).`,
      `El mode en ús: respon amb un pla de producte prioritzat.`,
      `Obre <b>Mode Settings</b> amb la icona de l'<b>engranatge</b> del selector de modes.`,
      `<b>Scope</b>: canvia de <code>Global</code> al teu projecte <code>galaxium-travels</code> (així el mode només s'aplica aquí).`,
      `<b>Tools</b>: marca les eines del mode (Read, Edit, MCP…). És el control real: Bob no en pot fer servir cap fora de la llista.`,
      `Prem <b>Save</b> per crear el mode.`
    ],
    '3.2': [
      `Crea la carpeta <code>rules</code> dins de <code>.bob</code> (clic dret → New Folder → «rules»).`,
      `Dins de <code>rules</code>, crea el fitxer <code>basic_rules.md</code>.`,
      `Les regles: concís, JSDoc a funcions públiques i registrar cada interacció a <code>internal-monologue/</code>. (La guia oficial les hi demana a Bob en mode Agent; també les pots escriure tu.)`,
      `Aprova quan Bob demani escriure a <code>.bob/rules/</code> i executar.`,
      `Resultat: <code>basic_rules.md</code> amb les teves regles permanents, que Bob aplica a cada conversa.`
    ],
    '4.2': [
      `Ajustos → pestanya <b>MCP</b>: cerca «github» i prem <b>Install</b> a «GitHub». És el catàleg/instal·lador d'un clic (marketplace intern d'IBM: es veu només amb VPN; sense ella, via <code>mcp.json</code>).`,
      `El formulari <b>Install GitHub</b>: enganxa el teu <b>PAT</b> i ⚠️ canvia el <b>Hostname</b> de <code>github.com</code> a <b>https://github.com</b>. Deixa Toolsets (repos, issues, pull_requests, code_security) i Read Only a 0. Prerequisits: compte de GitHub (Docker només per a la via local).`,
      `Genera el token a <b>Tokens (classic)</b> → <b>Generate new token (classic)</b>.`,
      `El <code>.bob/mcp.json</code> amb la via <b>remota</b> (sense Docker); el token va tapat.`,
      `En mode <b>Agent</b>, Bob invoca la tool <code>list_issues</code> de l'MCP (aproves la crida).`,
      `Bob llegeix el codi, aplica l'arranjament de l'issue i comprova que compila.`,
      `Commit i push fets; Bob encadena el comentari de l'issue.`,
      `Bob comenta l'issue amb l'enllaç al commit i el tanca, tot via MCP.`,
      `A <code>github.com</code>, l'issue queda <b>tancat</b> amb el comentari de Bob.`
    ]
  },

  /* Static pages. Same markup as the Spanish version; only the text changes. */
  static: {
    setup: `<div class="pre">
    <h2>0 · Abans de començar (setup)</h2>
    <p class="small">Necessites un compte de Bob (Trial amb email personal, &lt;10 min · o Intern IBMer, 24 h+) i l'entorn a punt. Això és el que més triga; fes-ho una sola vegada.</p>
    <h3 class="s">Requisits</h3>
    <p class="small">Python 3.10+ · Node.js 20.19+ (recomanat Node 22 LTS) · Git · IBM Bob instal·lat i amb sessió iniciada.</p>
    <h3 class="s">Clonar i arrencar la demo</h3>
    <div class="code"><button class="cp">Copia</button>git clone -b bob-learning-path-branch https://github.com/IBM/galaxium-travels
cd galaxium-travels          # la carpeta es crea allà on executis el clone
for p in python3.13 python3.12 python3.11 python3.10; do
  command -v $p >/dev/null && { $p -m venv --clear booking_system_backend/.venv; break; }
done                         # el venv, amb el teu Python més nou
./start.sh                   # arrencada ràpida (a Windows: des de Git Bash)</div>
    <p class="small">Sense Git o sense compte de GitHub: el repo és públic, així que també pots <a href="https://github.com/IBM/galaxium-travels/archive/refs/heads/bob-learning-path-branch.zip">descarregar el ZIP de la branca</a> i descomprimir-lo (compte: la carpeta surt com <code>galaxium-travels-bob-learning-path-branch</code> — reanomena-la a <code>galaxium-travels</code>) — el compte de GitHub només cal al lab 4.2 (MCP), per al fork.</p>
    <p class="small">Deixa aquest terminal <b>obert</b> (allà corren els servidors; amb <code>Ctrl+C</code> s'aturen). Obre el frontend a <span class="pill">http://localhost:5173</span>. Després a Bob: obre l'<b>Explorer</b> (icona dels dos fulls, a dalt a la barra d'icones de l'esquerra) → <b>Open Folder</b> → tria <code>galaxium-travels</code>.</p>
    <div class="tip"><b>La línia del venv del bloc:</b> el <code>start.sh</code> del repo crea l'entorn amb <code>python3</code> a seques, i a macOS aquest sol ser el <b>3.9</b> de sèrie, que dóna problemes amb l'app. Creant-lo abans amb el teu Python més nou, <code>start.sh</code> el reutilitza i arrenca a la primera; i si ja en tenies un fet amb 3.9, aquesta mateixa línia el deixa apuntant a la versió bona. Si no tens cap 3.10+: <code>brew install python@3.13</code>.</div>
    <div class="tip"><b>Nota:</b> els prompts estan en <b>català</b> — Bob els entén igual de bé que en anglès. L'únic que NO es tradueix són les <b>comandes literals</b> (<code>/init</code>, <code>/review</code>…), les mencions <code>@/ruta</code> i els noms de fitxer. Les captures de pantalla mostren Bob amb la interfície en castellà. Els resultats poden variar: si no surt a la primera, reformula o ajusta-ho a mà.</div>
  </div>

    <h3 class="s" style="margin-top:22px">Captures del setup</h3>
  <div class="gallery"><figure class="shot"><img loading="lazy" src="images/guia/setup_1.png" alt=""><figcaption>1) git clone de la demo (branca bob-learning-path-branch)</figcaption></figure><figure class="shot"><img loading="lazy" src="images/guia/setup_2.png" alt=""><figcaption>2) cd galaxium-travels</figcaption></figure><figure class="shot"><img loading="lazy" src="images/guia/setup_3.png" alt=""><figcaption>3) ./start.sh — els WARNING de caché de pip són normals, ignora'ls</figcaption></figure><figure class="shot"><img loading="lazy" src="images/guia/setup_4.png" alt=""><figcaption>4) Llest: backend a :8080 i frontend a :5173</figcaption></figure><figure class="shot"><img loading="lazy" src="images/guia/setup_5.png" alt=""><figcaption>5) La web a localhost:5173 — Galaxium Travels</figcaption></figure><figure class="shot"><img loading="lazy" src="images/guia/setup_6.png" alt=""><figcaption>6) A IBM Bob: menú File → Open Folder…</figcaption></figure><figure class="shot"><img loading="lazy" src="images/guia/setup_7.png" alt=""><figcaption>7) Tria la carpeta galaxium-travels i prem Open</figcaption></figure><figure class="shot"><img loading="lazy" src="images/guia/setup_8.png" alt=""><figcaption>8) Projecte obert: ja veus booking_system_backend / _frontend a l'Explorer</figcaption></figure></div>`,

    inputs: `<div class="pre" style="border-color:#0f62fe">
    <h2>🎛️ Maneres d'interactuar amb Bob</h2>
    <p class="small">Bob no és només el xat. Hi ha <b>diverses maneres</b> de demanar-li coses segons el que vulguis fer — des d'una edició puntual amb ⌘K fins a parlar-li al xat agèntic. Als labs faràs servir gairebé totes.</p>
    <div style="overflow-x:auto">
    <table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:12px 0">
      <thead><tr style="background:var(--navy);color:#fff">
        <th style="text-align:left;padding:8px 10px;border:1px solid var(--line)">Manera</th>
        <th style="text-align:left;padding:8px 10px;border:1px solid var(--line)">Drecera (Mac / Win·Linux)</th>
        <th style="text-align:left;padding:8px 10px;border:1px solid var(--line)">Per a què</th>
      </tr></thead>
      <tbody>
        <tr><td style="padding:8px 10px;border:1px solid var(--line)"><b>Inline Chat</b></td><td style="padding:8px 10px;border:1px solid var(--line)"><code>⌘K</code> / <code>Ctrl+K</code></td><td style="padding:8px 10px;border:1px solid var(--line)">Una caixeta per editar el codi <b>on tens el cursor</b>, sense obrir el xat. <i>(Lab 1.1)</i></td></tr>

        <tr><td style="padding:8px 10px;border:1px solid var(--line)"><b>Xat agèntic</b> (sidebar)</td><td style="padding:8px 10px;border:1px solid var(--line)"><code>⌥⌘B</code> / <code>Ctrl+Alt+B</code></td><td style="padding:8px 10px;border:1px solid var(--line)">El panell de Bob: li parles en llenguatge natural, amb modes Plan/Agent/Ask. <i>(Labs 2.1, 3.x)</i></td></tr>
        <tr><td style="padding:8px 10px;border:1px solid var(--line)"><b>Enviar al xat</b></td><td style="padding:8px 10px;border:1px solid var(--line)"><code>⌘L</code> / <code>Ctrl+L</code></td><td style="padding:8px 10px;border:1px solid var(--line)">Envia el codi seleccionat al xat per preguntar-hi.</td></tr>
        <tr><td style="padding:8px 10px;border:1px solid var(--line)"><b>Canviar de mode</b></td><td style="padding:8px 10px;border:1px solid var(--line)"><code>⌘.</code> / <code>Ctrl+.</code></td><td style="padding:8px 10px;border:1px solid var(--line)">Cicla entre Plan / Agent / Ask sense tocar el ratolí.</td></tr>
        <tr><td style="padding:8px 10px;border:1px solid var(--line)"><b>Bob Shell</b></td><td style="padding:8px 10px;border:1px solid var(--line)"><code>bob</code> (terminal)</td><td style="padding:8px 10px;border:1px solid var(--line)">Tot l'anterior des del terminal, per a teclat i automatització. <i>(Lab 4.1)</i></td></tr>
      </tbody>
    </table>
    </div>
    <p class="small"><b>A més, dins del xat:</b> <code>@</code> per referenciar fitxers, <code>/</code> per a comandes (<code>/init</code>, <code>/review</code>…), i el botó <b>Enhance prompt</b> perquè Bob millori la teva instrucció. Les dreceres es reconfiguren a <b>Ajustos → Keyboard shortcuts</b>.</p>
    <h3 class="s" style="margin-top:16px">Captures</h3>
    <div class="gallery">
      <figure class="shot"><img loading="lazy" src="images/guia/interact_inlinechat.png" alt=""><figcaption><b>Inline Chat (⌘K / Ctrl+K):</b> apareix una caixeta a l'editor per escriure el canvi on és el cursor.</figcaption></figure>
      <figure class="shot"><img loading="lazy" src="images/guia/interact_diff.png" alt=""><figcaption>Bob proposa el canvi com a <b>diff</b> (verd = afegeix / vermell = treu) perquè l'acceptis o el rebutgis.</figcaption></figure>
      <figure class="shot"><img loading="lazy" src="images/guia/interact_chat.png" alt=""><figcaption><b>Xat agèntic:</b> el panell de Bob (“Hola, soy Bob”) on li parles en llenguatge natural.</figcaption></figure>
      <figure class="shot"><img loading="lazy" src="images/guia/modes_selector.png" alt=""><figcaption><b>El selector de modes:</b> Plan / Agent / Ask (⌘. o Ctrl+. per ciclar).</figcaption></figure>
    </div>
  </div>`,

    conceptos: `<section class="lab concept">
    <div class="labhead"><div class="num" style="background:var(--navy2)">i</div>
      <h2>Conceptes (no són labs, però convé saber-los)</h2></div>
    <div class="grid2" style="margin-top:14px">
      <div>
        <h3 class="s" style="margin-top:0">Galaxium Travels (Cap. 1)</h3>
        <p class="small">L'app demo: frontend React/TypeScript, backend Python (REST + interfície MCP), base de dades SQLite. És el mateix codebase a tots els labs.</p>
      </div>
      <div>
        <h3 class="s" style="margin-top:0">Context window (Cap. 4.1)</h3>
        <p class="small">270K tokens per conversa. La qualitat baixa notablement per damunt de <b>~100K tokens</b>; en omplir-se, Bob resumeix automàticament (compactació) i es perd detall. Truc: divideix en passos que deixin fitxers (pla → nova conversa → implementar).</p>
      </div>
      <div>
        <h3 class="s" style="margin-top:0">Skills</h3>
        <p class="small">“Receptes” reutilitzables que ensenyen a Bob un flux concret (revisar codi, generar docs…). Es desen a <code>.bob/skills/&lt;nom&gt;/SKILL.md</code> (front-matter <code>name</code>+<code>description</code> i instruccions); Bob les activa <b>només</b> segons la descripció. L'L3 ja fa servir una Skill interna, <code>create-plan</code>, en planificar. Es gestionen a <b>Ajustos → Skills</b> i n'hi ha més al <b>Marketplace</b>.</p>
      </div>
      <div>
        <h3 class="s" style="margin-top:0">Subagents</h3>
        <p class="small">Bob pot llançar <b>subagents</b> per a subtasques concretes i autocontingudes (p. ex. «esbrina com funciona l'autenticació aquí»): cadascun treballa en el seu <b>propi context aïllat</b> i retorna només un resum, així la conversa principal no s'omple. Tu aproves cada llançament, i cada <b>mode</b> defineix quins tipus permet. Els decideix Bob segons la tasca — pot ser que no els vegis a tots els labs.</p>
      </div>
    </div>
  </section>`
  }
};
