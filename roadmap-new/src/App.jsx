import { useState, useEffect } from "react";

const weeks = [
  {
    week: 1, phase: 1, color: "#F5C518", phaseTitle: "JS Solid",
    topic: "JS Fundamentals — variabile, funcții, arrays",
    days: [
      { day: 1, title: "Variabile & tipuri", readUrl: "https://scrimba.com/learn/learnjavascript", readLabel: "Scrimba — Learn JavaScript → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnjavascript", task: "Declară variabile cu let, const, var. Scrie o funcție care primește două numere și returnează suma, diferența și produsul. Testează cu console.log." },
      { day: 2, title: "Loops & funcții", readUrl: "https://scrimba.com/learn/learnjavascript", readLabel: "Scrimba — Learn JavaScript → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnjavascript", task: "Scrie un loop care printează numerele pare de la 1 la 10. Scrie o funcție arrow și rescrie-o ca function declaration." },
      { day: 3, title: "Objects", readUrl: "https://scrimba.com/learn/learnjavascript", readLabel: "Scrimba — Learn JavaScript → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnjavascript", task: "Creează un obiect factura cu id, client, suma, data. Adaugă o metodă descriere(). Creează 3 facturi într-un array." },
      { day: 4, title: "Arrays — map, filter, reduce", readUrl: "https://scrimba.com/learn/learnjavascript", readLabel: "Scrimba — Learn JavaScript → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnjavascript", task: "Din array-ul de facturi: filter() facturi > 500 RON, map() pentru nume clienți, reduce() pentru total. Înlănțuiește toate trei." },
      { day: 5, title: "Destructuring & Spread", readUrl: "https://scrimba.com/learn/learnjavascript", readLabel: "Scrimba — Learn JavaScript → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnjavascript", task: "Destructurează o factură. Creează un Set care elimină duplicatele. Combină două array-uri cu spread operator." },
      { day: 6, title: "Optional chaining & Nullish", readUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", readLabel: "Scrimba — JS Deep Dive → continuă de unde ai rămas", codeUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", task: "Testează user?.adresa?.oras pe un obiect fără adresă. Scrie const port = config?.port ?? 3000. Copiază un obiect cu spread: {...factura, suma: 999}." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://jsfiddle.net/", task: "Scrie din memorie: filterByMonth(arr, luna) și topClients(arr) — fără să cauți. Dacă te blochezi, notează exact unde și reia ziua corespunzătoare." },
    ],
    checkpoint: "Scrii filterByMonth() și topClients() din memorie."
  },
  {
    week: 2, phase: 1, color: "#F5C518", phaseTitle: "JS Solid",
    topic: "Closures & Scope",
    days: [
      { day: 1, title: "Closures", readUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", readLabel: "Scrimba — JS Deep Dive → continuă de unde ai rămas", codeUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", task: "Scrie makeCounter() care returnează o funcție. La fiecare apel contorul crește. Creează 2 contoare independente și verifică că sunt separate." },
      { day: 2, title: "this & binding", readUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", readLabel: "Scrimba — JS Deep Dive → continuă de unde ai rămas", codeUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", task: "Creează un obiect cu metoda start(). Pune-o în setTimeout — observă că this dispare. Repară cu arrow function și alternativ cu .bind(this)." },
      { day: 3, title: "Decorators", readUrl: "https://javascript.info/call-apply-decorators", readLabel: "javascript.info — Decorators (referință)", codeUrl: "https://jsfiddle.net/", task: "Scrie delay(fn, ms) care returnează o versiune întârziată a funcției. Testează: const log = delay(console.log, 1000). Apelează și verifică." },
      { day: 4, title: "Memoization", readUrl: "https://javascript.info/call-apply-decorators", readLabel: "javascript.info — Memoization (referință)", codeUrl: "https://jsfiddle.net/", task: "Scrie memoize(fn) care cachează rezultatele. Al doilea apel cu aceiași parametri trebuie să returneze instantaneu din cache." },
      { day: 5, title: "Exercițiu în proiect real", readUrl: null, readLabel: "Deschide ECapturo", codeUrl: "https://github.com/", task: "Găsește cel mai complex bloc de cod din ECapturo. Desenează pe hârtie ce se apelează și în ce ordine. Identifică toate closure-urile." },
      { day: 6, title: "Repetare punct slab", readUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", readLabel: "Scrimba — JS Deep Dive → reia de unde ai greșit", codeUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", task: "Reia exercițiul cu care te-ai blocat cel mai mult săptămâna asta. Scrie-l din memorie fără să te uiți la soluție." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://jsfiddle.net/", task: "Explică în scris ce e un closure fără să copiezi definiția. Dacă nu poți în 5 minute, reia ziua 1." },
    ],
    checkpoint: "Explici closures și this fără să te uiți la notițe."
  },
  {
    week: 3, phase: 1, color: "#F5C518", phaseTitle: "JS Solid",
    topic: "Async — Promises & async/await",
    days: [
      { day: 1, title: "Promises basics", readUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", readLabel: "Scrimba — JS Deep Dive → continuă de unde ai rămas", codeUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", task: "Scrie fetchUser(id) care returnează un Promise cu setTimeout. Înlănțuiește cu .then(). Adaugă .catch() la final." },
      { day: 2, title: "Promise.all & allSettled", readUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", readLabel: "Scrimba — JS Deep Dive → continuă de unde ai rămas", codeUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", task: "Rulează 3 Promise-uri în paralel cu Promise.all. Testează că dacă una eșuează, toate eșuează. Înlocuiește cu allSettled — observă diferența." },
      { day: 3, title: "async/await", readUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", readLabel: "Scrimba — JS Deep Dive → continuă de unde ai rămas", codeUrl: "https://v2.scrimba.com/javascript-deep-dive-c0a", task: "Ia funcția cu .then() de ieri. Rescrie complet cu async/await și try/catch. Deschide ECapturo și rescrie un fetch cu .then() pur." },
      { day: 4, title: "Error handling async", readUrl: "https://javascript.info/async-await", readLabel: "javascript.info — Async error handling (referință)", codeUrl: "https://jsfiddle.net/", task: "Scrie fetchAll(urls) în paralel. Dacă oricare eșuează, continuă cu celelalte. Returnează [{url, data, error}] pentru fiecare." },
      { day: 5, title: "Async în proiect real", readUrl: null, readLabel: "Deschide ECapturo", codeUrl: "https://github.com/", task: "Deschide un API route din ECapturo. Desenează fluxul async complet: request → validare → DB → răspuns. Unde pot apărea erori?" },
      { day: 6, title: "Exercițiu complet", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://jsfiddle.net/", task: "Din memorie: o funcție async care face 3 fetch-uri în paralel, gestionează erorile individual și loghează timpul total de execuție." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://jsfiddle.net/", task: "Rescrie un API route din proiect fără async/await — doar .then(). Dacă te blochezi, reia zilele 1–3." },
    ],
    checkpoint: "Rescrii orice cod async cu .then() sau async/await la cerere, fără să cauți."
  },
  {
    week: 4, phase: 1, color: "#F5C518", phaseTitle: "JS Solid",
    topic: "React — componente, state, hooks",
    days: [
      { day: 1, title: "Componente & Props", readUrl: "https://scrimba.com/learn/learnreact", readLabel: "Scrimba — Learn React → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnreact", task: "Creează Button.tsx cu prop label. Randează 3 butoane diferite. Creează InvoiceCard cu props client, suma, data, isPaid." },
      { day: 2, title: "Lists & Conditional", readUrl: "https://scrimba.com/learn/learnreact", readLabel: "Scrimba — Learn React → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnreact", task: "Randează 5 facturi cu .map() și key unic. Adaugă buton Arată doar neplătite. Dacă lista e goală, arată mesaj." },
      { day: 3, title: "useState", readUrl: "https://scrimba.com/learn/learnreact", readLabel: "Scrimba — Learn React → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnreact", task: "Form cu câmpuri client și sumă controlate cu useState. La submit adaugă factura în listă. Curăță form-ul după submit." },
      { day: 4, title: "State as snapshot", readUrl: "https://react.dev/learn/state-as-a-snapshot", readLabel: "react.dev — State as snapshot (referință)", codeUrl: "https://codesandbox.io/", task: "Buton care face setCount(count+1) de 3 ori. Observă că adaugă 1. Repară cu setCount(c => c+1). Explică de ce." },
      { day: 5, title: "useEffect", readUrl: "https://scrimba.com/learn/learnreact", readLabel: "Scrimba — Learn React → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnreact", task: "useEffect care loghează la fiecare render. Testează cu dependency array gol. Adaugă cleanup. Observă ordinea în consolă." },
      { day: 6, title: "Lifting state up", readUrl: "https://scrimba.com/learn/learnreact", readLabel: "Scrimba — Learn React → continuă de unde ai rămas", codeUrl: "https://scrimba.com/learn/learnreact", task: "InvoiceList și InvoiceTotal ca surori. Mută state-ul în părinte. Pasează ca props. Totalul se actualizează când adaugi o factură." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://codesandbox.io/", task: "Construiești din memorie un form React cu validare, submit și error handling — fără tutorial." },
    ],
    checkpoint: "Construiești orice componentă React de la zero fără să cauți documentație."
  },
  {
    week: 5, phase: 1, color: "#F5C518", phaseTitle: "JS Solid",
    topic: "Next.js — App Router, API routes",
    days: [
      { day: 1, title: "App Router overview", readUrl: "https://scrimba.com/learn/nextjs", readLabel: "Scrimba — Learn Next.js → continuă de unde ai rămas", codeUrl: "https://github.com/", task: "Desenează arhitectura App Router pe hârtie. Creează proiect nou. Adaugă rutele /, /facturi, /facturi/[id]. Verifică în browser." },
      { day: 2, title: "Layouts & navigare", readUrl: "https://scrimba.com/learn/nextjs", readLabel: "Scrimba — Learn Next.js → continuă de unde ai rămas", codeUrl: "https://github.com/", task: "Creează layout.tsx pentru /facturi cu sidebar și linkuri Link. Fiecare pagină afișează params.id în titlu." },
      { day: 3, title: "Server vs Client Components", readUrl: "https://scrimba.com/learn/nextjs", readLabel: "Scrimba — Learn Next.js → continuă de unde ai rămas", codeUrl: "https://github.com/", task: "Creează ServerTime (Server Component) și Counter cu useState (Client Component). Combină-le. Explică de ce ServerTime nu poate folosi useState." },
      { day: 4, title: "Data Fetching", readUrl: "https://scrimba.com/learn/nextjs", readLabel: "Scrimba — Learn Next.js → continuă de unde ai rămas", codeUrl: "https://github.com/", task: "Fetch de la jsonplaceholder.typicode.com în Server Component. Adaugă revalidate: 60. Adaugă loading.tsx și error.tsx." },
      { day: 5, title: "API Routes", readUrl: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers", readLabel: "Next.js docs — Route Handlers (referință)", codeUrl: "https://github.com/", task: "Creează /api/facturi/route.ts. GET returnează array mock. POST validează client și suma. Dacă suma lipsește returnează 400." },
      { day: 6, title: "Server Actions", readUrl: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations", readLabel: "Next.js docs — Server Actions (referință)", codeUrl: "https://github.com/", task: "Convertește un API route POST simplu într-un Server Action. Apelează direct din componentă. Adaugă revalidatePath." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Explică fără să cauți: SSR vs SSG vs ISR și când folosești fiecare. Construiești o pagină cu Server Component și API route din memorie." },
    ],
    checkpoint: "Construiești orice pagină Next.js de la zero, singur."
  },

  // ── FAZA 2: Full Stack Independent ────────────────────────────────────────
  {
    week: 6, phase: 2, color: "#00C896", phaseTitle: "Full Stack",
    topic: "SQL & Supabase în profunzime",
    days: [
      { day: 1, title: "SELECT basics", readUrl: "https://sqlzoo.net/wiki/SELECT_basics", readLabel: "sqlzoo.net — SELECT basics", codeUrl: "https://sqlzoo.net/wiki/SELECT_basics", task: "Fă toate exercițiile SELECT basics pe sqlzoo. Apoi în Supabase SQL editor: creează tabelul facturi cu id, client_id, suma, created_at, is_paid. Inserează 5 rânduri." },
      { day: 2, title: "Filtrare & sortare", readUrl: "https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial", readLabel: "sqlzoo.net — SELECT from World", codeUrl: "https://supabase.com/", task: "Scrie query care returnează facturile din ultima lună. Sortează DESC după sumă. Limitează la primele 3. Combină toate trei într-un singur query." },
      { day: 3, title: "JOIN", readUrl: "https://sqlzoo.net/wiki/The_JOIN_operation", readLabel: "sqlzoo.net — JOIN", codeUrl: "https://supabase.com/", task: "Creează tabelul clienti cu id și nume. Scrie JOIN între facturi și clienti. Adaugă GROUP BY și COUNT(*) per client." },
      { day: 4, title: "Subqueries & agregări", readUrl: "https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial", readLabel: "sqlzoo.net — Subqueries", codeUrl: "https://supabase.com/", task: "Query cu subquery: facturi WHERE client_id IN (SELECT id FROM clienti WHERE...). Rescrie cu JOIN. Adaugă HAVING pentru clienți cu total > 1000." },
      { day: 5, title: "Indecși & performanță", readUrl: "https://supabase.com/docs/guides/database/indexes", readLabel: "Supabase docs — Indexes", codeUrl: "https://supabase.com/", task: "Adaugă index pe client_id: CREATE INDEX idx_client_id ON facturi(client_id). Rulează EXPLAIN ANALYZE cu și fără index. Compară timpii." },
      { day: 6, title: "Row Level Security", readUrl: "https://supabase.com/docs/guides/database/postgres/row-level-security", readLabel: "Supabase docs — RLS", codeUrl: "https://supabase.com/", task: "Activează RLS pe tabelul facturi. Policy: SELECT permis doar dacă auth.uid() = user_id. Testează din UI. Adaugă policy pentru INSERT." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://supabase.com/", task: "Din memorie: query care returnează top 5 clienți după totalul facturilor din luna curentă, cu numărul de facturi și suma totală." },
    ],
    checkpoint: "Scrii queries cu JOIN, GROUP BY, subqueries și RLS policies fără să cauți sintaxa."
  },
  {
    week: 7, phase: 2, color: "#00C896", phaseTitle: "Full Stack",
    topic: "TypeScript în profunzime",
    days: [
      { day: 1, title: "Tipuri de bază", readUrl: "https://www.totaltypescript.com/tutorials/beginners-typescript", readLabel: "Total TypeScript — lec. 1–5", codeUrl: "https://www.typescriptlang.org/play", task: "Definește tipul Factura cu toate câmpurile. Definește Client. Creează array tipat. Încearcă să adaugi o proprietate inexistentă — observă eroarea TS." },
      { day: 2, title: "Interface vs Type", readUrl: "https://www.totaltypescript.com/tutorials/beginners-typescript", readLabel: "Total TypeScript — lec. 6–10", codeUrl: "https://www.typescriptlang.org/play", task: "Definește interface și type pentru Factura. Extinde cu FacturaPlătită care adaugă datePlată. Creează union type Status = draft | sent | paid | overdue." },
      { day: 3, title: "Generics", readUrl: "https://www.totaltypescript.com/tutorials/beginners-typescript", readLabel: "Total TypeScript — lec. 11–15", codeUrl: "https://www.typescriptlang.org/play", task: "Scrie tip generic ApiResponse<T> = { data: T; error: string | null; loading: boolean }. Scrie funcție generică fetchData<T>(url: string). Verifică că TypeScript inferează tipul corect." },
      { day: 4, title: "Utility types", readUrl: "https://www.totaltypescript.com/tutorials/beginners-typescript", readLabel: "Total TypeScript — lec. 16–20", codeUrl: "https://www.typescriptlang.org/play", task: "Folosește Partial<Factura> pentru form editare. Pick pentru dropdown. Omit pentru creare. Scrie un type guard isFacturăPlătită." },
      { day: 5, title: "Elimină any din proiect", readUrl: "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html", readLabel: "TS docs — Types from Types", codeUrl: "https://github.com/", task: "Caută toate any cu Ctrl+Shift+F. Înlocuiește fiecare cu tipul corect. Tipează răspunsurile de la Anthropic API și Supabase. Zero any la final." },
      { day: 6, title: "Zod — validare runtime", readUrl: "https://zod.dev/?id=basic-usage", readLabel: "Zod docs — getting started", codeUrl: "https://github.com/", task: "npm install zod. Definește FacturaSchema. Adaugă în API route POST: const result = FacturaSchema.safeParse(body). Returnează 400 cu erorile dacă invalid." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Rulează tsc --noEmit. Trebuie să fie 0 erori și 0 any. Toate API routes au validare Zod. Dacă nu — rezolvă înainte să continui." },
    ],
    checkpoint: "tsc --noEmit = 0 erori. Zero any. Toate rutele cu validare Zod."
  },
  {
    week: 8, phase: 2, color: "#00C896", phaseTitle: "Full Stack",
    topic: "SaaS de la 0 — planificare & setup",
    days: [
      { day: 1, title: "Planificare pe hârtie", readUrl: null, readLabel: "Fără lectură — hârtie și pix", codeUrl: "https://excalidraw.com/", task: "Scrie problema rezolvată în 1 frază. Listează toate paginile. Desenează schema DB. Listează API routes. Estimează ce termini în 4 săptămâni." },
      { day: 2, title: "Setup din memorie", readUrl: "https://nextjs.org/docs/getting-started/installation", readLabel: "Next.js docs — Installation", codeUrl: "https://github.com/", task: "npx create-next-app@latest cu TypeScript + Tailwind + App Router. Supabase proiect nou. .env.local. Instalează @supabase/ssr. Verifică conexiunea cu un query simplu." },
      { day: 3, title: "Autentificare", readUrl: "https://supabase.com/docs/guides/auth/server-side/nextjs", readLabel: "Supabase Auth — Next.js guide", codeUrl: "https://github.com/", task: "Pagina /login cu form email + parolă. signUp și signIn cu Supabase Auth. middleware.ts protejează /dashboard. Redirect după login. Testează ambele fluxuri." },
      { day: 4, title: "Schema DB", readUrl: "https://supabase.com/docs/guides/database/tables", readLabel: "Supabase docs — Tables", codeUrl: "https://supabase.com/", task: "Creează toate tabelele planificate. Adaugă foreign keys. Activează RLS. Scrie policies pentru SELECT, INSERT, UPDATE, DELETE. Testează cu user de test." },
      { day: 5, title: "Primul CRUD", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Pagina care listează entitatea principală. Form de creare cu validare Zod. API route POST care inserează în DB. Buton de ștergere cu confirmare. Loading și error handling." },
      { day: 6, title: "Componente reutilizabile", readUrl: "https://ui.shadcn.com/docs", readLabel: "shadcn/ui docs", codeUrl: "https://github.com/", task: "Extrage form-ul într-o componentă separată. Creează Button cu variante: primary, secondary, danger. Creează Modal reutilizabil. Refactorizează paginile." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Proiectul rulează local cu auth funcțional și cel puțin un CRUD complet. Push pe GitHub." },
    ],
    checkpoint: "SaaS cu auth + CRUD funcțional pe GitHub."
  },
  {
    week: 9, phase: 2, color: "#00C896", phaseTitle: "Full Stack",
    topic: "SaaS — Stripe & construcție",
    days: [
      { day: 1, title: "Stripe setup", readUrl: "https://stripe.com/docs/checkout/quickstart", readLabel: "Stripe docs — Checkout quickstart", codeUrl: "https://github.com/", task: "Creează cont Stripe + produs cu preț lunar. API route POST /api/checkout → Checkout Session. Buton Upgrade → redirect Stripe. Testează cu 4242 4242 4242 4242." },
      { day: 2, title: "Webhook Stripe", readUrl: "https://stripe.com/docs/webhooks", readLabel: "Stripe docs — Webhooks", codeUrl: "https://github.com/", task: "stripe listen --forward-to localhost:3000/api/webhook. Verifică semnătura cu constructEvent. Tratează checkout.session.completed: marchează userul ca subscribed în DB." },
      { day: 3, title: "Construcție liberă", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Implementează toate paginile planificate. Regulă: nu sări peste error handling. Fiecare operație trebuie să aibă un comportament clar la eroare." },
      { day: 4, title: "Construcție liberă", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Continuă construcția. Dacă ești blocat > 30 min, poți căuta. La final de zi notează ce ai terminat și ce a rămas." },
      { day: 5, title: "Rate limiting", readUrl: "https://upstash.com/docs/redis/sdks/ratelimit-ts/overview", readLabel: "Upstash Ratelimit docs", codeUrl: "https://github.com/", task: "Creează cont gratuit Upstash. npm install @upstash/ratelimit @upstash/redis. Max 20 req/minut per IP. Testează cu 25 request-uri. Verifică 429." },
      { day: 6, title: "Polish UI", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Loading skeleton în loc de spinner gol. Toate erorile human-readable. Testează pe mobile — totul trebuie să fie responsive." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Toate paginile planificate sunt funcționale. Stripe funcționează în test mode. Niciun flux nu returnează eroare netreatată." },
    ],
    checkpoint: "SaaS complet cu Stripe funcțional și rate limiting."
  },
  {
    week: 10, phase: 2, color: "#00C896", phaseTitle: "Full Stack",
    topic: "Deploy, testare & monitoring",
    days: [
      { day: 1, title: "Deploy pe Vercel", readUrl: "https://vercel.com/docs/deployments/overview", readLabel: "Vercel docs — Deployments", codeUrl: "https://vercel.com/", task: "Push pe GitHub. Deploy pe Vercel — conectează repo. Adaugă toate env variables. Testează TOATE fluxurile în producție. Fixează orice bug găsit." },
      { day: 2, title: "Error monitoring Sentry", readUrl: "https://docs.sentry.io/platforms/javascript/guides/nextjs/", readLabel: "Sentry docs — Next.js", codeUrl: "https://sentry.io/", task: "Creează cont Sentry. npx @sentry/wizard@latest -i nextjs. Aruncă o eroare deliberată. Verifică că apare în dashboard cu stack trace." },
      { day: 3, title: "Playwright E2E", readUrl: "https://playwright.dev/docs/intro", readLabel: "Playwright docs — Intro", codeUrl: "https://github.com/", task: "npm install @playwright/test. npx playwright install. Test 1: pagina / există. Test 2: login flow complet. Test 3: fluxul principal. npx playwright test --headed." },
      { day: 4, title: "Vitest unit tests", readUrl: "https://vitest.dev/guide/", readLabel: "Vitest docs — Getting started", codeUrl: "https://github.com/", task: "npm install vitest. Scrie un test pentru funcția de validare. Test pentru un API route handler cu mock Supabase. Rulează npx vitest. Toate verzi." },
      { day: 5, title: "Server Actions", readUrl: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations", readLabel: "Next.js docs — Server Actions", codeUrl: "https://github.com/", task: "Convertește cel mai simplu API route POST într-un Server Action. Apelează direct din componentă. Adaugă revalidatePath. Când folosești SA vs API routes?" },
      { day: 6, title: "Documentare flux", readUrl: null, readLabel: "Fără lectură — hârtie și pix", codeUrl: "https://excalidraw.com/", task: "Alege cel mai complex flux din aplicație. Desenează fiecare pas cu săgeți. Pentru fiecare notează: date intră, date ies, comportament la eroare." },
      { day: 7, title: "CHECKPOINT FAZA 2", readUrl: null, readLabel: null, codeUrl: "https://vercel.com/", task: "SaaS live pe Vercel cu rate limiting, Sentry și cel puțin 3 teste E2E verzi. Trimite link-ul unui prieten să testeze." },
    ],
    checkpoint: "SaaS complet live pe Vercel cu monitoring și teste E2E."
  },

  // ── FAZA 3: AI Foundations ────────────────────────────────────────────────
  {
    week: 11, phase: 3, color: "#7B61FF", phaseTitle: "AI Foundations",
    topic: "Cum funcționează LLM-urile",
    days: [
      { day: 1, title: "Ce e o rețea neurală", readUrl: "https://www.youtube.com/watch?v=aircAruvnKk", readLabel: "3Blue1Brown — ep. 1 Neural Networks", codeUrl: "https://colab.research.google.com/", task: "Vizionează. Desenează în GoodNotes o rețea neurală cu 3 layere: input, hidden, output. Etichetează weights și activations. De ce avem nevoie de layere multiple?" },
      { day: 2, title: "Gradient descent", readUrl: "https://www.youtube.com/watch?v=IHZwWFHWa-w", readLabel: "3Blue1Brown — ep. 2 Gradient descent", codeUrl: "https://colab.research.google.com/", task: "Vizionează. Desenează o curbă de loss function. Marchează: local minimum, global minimum, learning rate prea mare și potrivit. Explică cu cuvintele tale ce face gradient descent." },
      { day: 3, title: "Backpropagation", readUrl: "https://www.youtube.com/watch?v=Ilg3gGewQ5U", readLabel: "3Blue1Brown — ep. 3 Backpropagation", codeUrl: "https://colab.research.google.com/", task: "Vizionează de 2 ori. Scrie ce calculează backpropagation și de ce e necesar. Desenează: forward pass stânga→dreapta, backward pass dreapta→stânga." },
      { day: 4, title: "Attention & Transformers", readUrl: "https://www.youtube.com/watch?v=eMlx5fFNoYc", readLabel: "3Blue1Brown — ep. 5-6 Transformers", codeUrl: "https://colab.research.google.com/", task: "Vizionează ambele. Desenează mecanismul attention: Query, Key, Value. De ce e mai bun decât RNN pentru text lung? Ce înseamnă context window?" },
      { day: 5, title: "Intro to LLMs", readUrl: "https://www.youtube.com/watch?v=zjkBMFhNj_g", readLabel: "Andrej Karpathy — Intro to LLMs", codeUrl: "https://colab.research.google.com/", task: "Vizionează cu notițe active. Scrie: pretraining vs fine-tuning vs RLHF. 3 limitări fundamentale ale LLM-urilor. Ce face un AI Engineer diferit față de un utilizator normal?" },
      { day: 6, title: "Tokenization & Hallucinations", readUrl: "https://platform.openai.com/tokenizer", readLabel: "OpenAI Tokenizer + Anthropic blog", codeUrl: "https://platform.openai.com/tokenizer", task: "Testează tokenizer-ul cu: hello, București, un emoji. Observă că nu e pe cuvinte. Testează română vs engleză. Scrie 3 cauze de hallucinations și 3 mitigări." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://colab.research.google.com/", task: "Explică unui prieten ce e un transformer și de ce LLM-urile halucinează — maxim 2 minute, fără jargon tehnic. Înregistrează-te. Dacă te blochezi, reia zilele 4–5." },
    ],
    checkpoint: "Explici tokenization, attention și hallucinations fără notițe."
  },
  {
    week: 12, phase: 3, color: "#7B61FF", phaseTitle: "AI Foundations",
    topic: "Anthropic API — Messages, Streaming, Tools",
    days: [
      { day: 1, title: "Messages API", readUrl: "https://docs.anthropic.com/en/api/messages", readLabel: "Anthropic docs — Messages API", codeUrl: "https://github.com/", task: "Creează test-api.ts. npm install @anthropic-ai/sdk. Trimite Hello cu system prompt Ești un asistent pentru facturi. Loghează: răspuns, input tokens, output tokens." },
      { day: 2, title: "Streaming", readUrl: "https://docs.anthropic.com/en/api/messages-streaming", readLabel: "Anthropic docs — Streaming", codeUrl: "https://github.com/", task: "Creează API route /api/chat/stream. Folosește stream: true. Returnează ReadableStream. În frontend consumă stream-ul și afișează textul progresiv — nu tot dintr-o dată." },
      { day: 3, title: "System prompts", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts", readLabel: "Anthropic docs — System prompts", codeUrl: "https://github.com/", task: "Scrie 5 system prompts pentru extracție facturi. Testează fiecare cu aceleași 3 facturi. Care e mai precis? Care halucinează mai puțin? Documentează în GoodNotes." },
      { day: 4, title: "Tool use", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use", readLabel: "Anthropic docs — Tool use", codeUrl: "https://github.com/", task: "Definește tool getFactura(id) care caută în Supabase. Trimite Arată-mi factura #123. Claude trebuie să apeleze tool-ul automat. Testează cu id inexistent." },
      { day: 5, title: "Prompt caching", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching", readLabel: "Anthropic docs — Prompt caching", codeUrl: "https://github.com/", task: "Adaugă cache_control: { type: ephemeral } pe system prompt lung. Fă 5 request-uri. Compară cache_creation_input_tokens vs cache_read_input_tokens. Calculează diferența de cost." },
      { day: 6, title: "Vision API", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/vision", readLabel: "Anthropic docs — Vision", codeUrl: "https://github.com/", task: "Fotografiază o factură reală. Convertește la base64 cu fs.readFileSync().toString(base64). Trimite lui Claude cu prompt: Extrage număr, dată, furnizor, total, TVA. Obține JSON." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Implementează într-un singur API route: tool use + streaming + prompt caching. Debug pas cu pas dacă nu merge: mai întâi fără streaming, adaugă streaming, adaugă caching." },
    ],
    checkpoint: "Tool use + streaming + prompt caching funcționale într-un singur API call."
  },
  {
    week: 13, phase: 3, color: "#7B61FF", phaseTitle: "AI Foundations",
    topic: "Prompt Engineering & Evals",
    days: [
      { day: 1, title: "Prompt Engineering overview", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", readLabel: "Anthropic docs — Prompt Engineering", codeUrl: "https://github.com/", task: "Citește complet. Notează în GoodNotes toate tehnicile cu câte un exemplu. Care sunt relevante pentru ECapturo? Ce face un prompt bun vs prost pentru extracție date?" },
      { day: 2, title: "Chain of Thought", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought", readLabel: "Anthropic docs — CoT", codeUrl: "https://github.com/", task: "Prompt de extracție fără CoT — testează pe 5 facturi, notează acuratețea. Adaugă Gândește pas cu pas. Testează pe aceleași 5. Compară. Ce câmpuri beneficiază mai mult?" },
      { day: 3, title: "Few-shot prompting", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-examples", readLabel: "Anthropic docs — Examples", codeUrl: "https://github.com/", task: "Alege 3 facturi cu extracții corecte. Construiește prompt: Exemplu 1: [factură] → [JSON]. Exemplu 2. Testează pe 5 facturi noi. Compară cu zero-shot." },
      { day: 4, title: "Evals — teorie", readUrl: "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/", readLabel: "DeepLearning.AI — Evaluating LLMs lec. 1–3", codeUrl: "https://colab.research.google.com/", task: "Completează lecțiile. Notează tipurile de metrici: exact match, fuzzy match, LLM-as-judge. Pentru ECapturo: ce metrică e cea mai relevantă pentru fiecare câmp?" },
      { day: 5, title: "Evals — implementare", readUrl: "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/", readLabel: "DeepLearning.AI — lec. 4–6", codeUrl: "https://github.com/", task: "Scrie evalExtraction(expected, actual): number — returnează scor 0-1. Testează pe 3 perechi. Verifică: 1.0 când identice, 0.0 când complet diferite." },
      { day: 6, title: "Eval dataset ECapturo", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Colectează 20 facturi. Extrage manual câmpurile — asta e ground truth. Salvează în eval-dataset.json. Rulează promptul curent pe toate 20. Calculează acuratețea." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Rulează eval-ul complet. Acuratețea trebuie să fie > 80%. Dacă nu: uită-te la greșeli, modifică promptul, rulează din nou. Documentează: scor înainte → modificare → scor după." },
    ],
    checkpoint: "Eval framework funcțional cu scor > 80% pe extracția de facturi."
  },
  {
    week: 14, phase: 3, color: "#7B61FF", phaseTitle: "AI Foundations",
    topic: "RAG & Embeddings",
    days: [
      { day: 1, title: "Ce sunt embeddings", readUrl: "https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/", readLabel: "DeepLearning.AI — RAG lec. 1–3", codeUrl: "https://colab.research.google.com/", task: "Completează lecțiile. Desenează în GoodNotes arhitectura RAG: document → chunks → embeddings → vector DB → query → retrieval → context → LLM → răspuns." },
      { day: 2, title: "pgvector în Supabase", readUrl: "https://supabase.com/docs/guides/database/extensions/pgvector", readLabel: "Supabase docs — pgvector", codeUrl: "https://supabase.com/", task: "CREATE EXTENSION vector în Supabase. Creează tabel documents cu id, content TEXT, embedding vector(1024), metadata JSONB. Generează un embedding și inserează." },
      { day: 3, title: "Pipeline de indexare", readUrl: "https://supabase.com/docs/guides/ai/vector-embeddings", readLabel: "Supabase docs — Vector embeddings", codeUrl: "https://github.com/", task: "Scrie chunkText(text, chunkSize, overlap). Testează cu document de 1000 cuvinte, chunkSize=200, overlap=50. Verifică că nu taie cuvinte la mijloc. Generează embeddings pentru fiecare chunk." },
      { day: 4, title: "Search semantic", readUrl: "https://supabase.com/docs/guides/ai/semantic-search", readLabel: "Supabase docs — Semantic search", codeUrl: "https://github.com/", task: "Scrie searchDocuments(query: string). Generează embedding pentru query. Caută în Supabase cu cosine similarity: ORDER BY embedding <=> queryEmbedding LIMIT 5." },
      { day: 5, title: "RAG în ECapturo", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Adaugă pagina /chat în ECapturo. La upload factură: extrage text, împarte în chunks, generează embeddings, stochează. La întrebare: caută chunks relevante, adaugă context, generează răspuns." },
      { day: 6, title: "Optimizare RAG", readUrl: null, readLabel: "Fără lectură — experimentare", codeUrl: "https://github.com/", task: "Testează cu chunk sizes diferite: 100, 200, 500. Testează cu overlap diferit: 0, 50, 100. Testează cu 3, 5, 10 chunks returnate. Notează configurația optimă și de ce." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Uploadezi o factură → pui o întrebare → primești răspuns corect. Feature-ul e live în producție. Înregistrează un demo de 2 minute." },
    ],
    checkpoint: "RAG funcțional în ECapturo în producție. Demo înregistrat."
  },
  {
    week: 15, phase: 3, color: "#7B61FF", phaseTitle: "AI Foundations",
    topic: "AI Agents",
    days: [
      { day: 1, title: "Ce e un agent", readUrl: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", readLabel: "DeepLearning.AI — Agents lec. 1–3", codeUrl: "https://colab.research.google.com/", task: "Completează lecțiile. Desenează diferența: chatbot simplu vs agent cu tool use. Când folosești agent vs API call simplu?" },
      { day: 2, title: "Tool calling pentru agenți", readUrl: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", readLabel: "DeepLearning.AI — Agents lec. 4–6", codeUrl: "https://github.com/", task: "Definește 3 tools pentru un agent de facturi: searchFacturi, getClient, calculateTotal. Scrie schema pentru fiecare. Trimite un mesaj și lasă Claude să decidă ce tool să apeleze." },
      { day: 3, title: "Agent complet", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use", readLabel: "Anthropic docs — Tool use agentic", codeUrl: "https://github.com/", task: "Agent care răspunde: Care e totalul facturilor din luna trecută? Trebuie să: înțeleagă → apeleze tool → primească date din DB → formuleze răspuns natural. Testează cu 5 întrebări." },
      { day: 4, title: "Error handling în agenți", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use#error-handling", readLabel: "Anthropic docs — Tool error handling", codeUrl: "https://github.com/", task: "Testează ce face agentul când: tool returnează eroare, DB e gol, întrebarea e ambiguă. Adaugă fallback pentru fiecare caz." },
      { day: 5, title: "Agent în proiect real", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Integrează agentul în ECapturo. Adaugă pagina /assistant. Userul pune întrebări în limbaj natural despre datele lui. Agentul răspunde folosind DB-ul real." },
      { day: 6, title: "Fine-tuning vs Prompting", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/fine-tuning", readLabel: "Anthropic docs — Fine-tuning", codeUrl: "https://github.com/", task: "Citește docs. Notează: 3 scenarii unde fine-tuning bate prompting și 3 unde prompting e suficient. Pentru ECapturo: ai nevoie de fine-tuning? Argumentează în scris." },
      { day: 7, title: "CHECKPOINT FAZA 3", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Agent AI funcțional în producție. RAG funcțional. Eval framework cu scor documentat. Poți explica la interviu: RAG, tool use, evals, hallucinations." },
    ],
    checkpoint: "Agent AI + RAG + Evals funcționale în producție."
  },

  // ── FAZA 4: AI Engineer Ready ─────────────────────────────────────────────
  {
    week: 16, phase: 4, color: "#FF4D6D", phaseTitle: "AI Engineer",
    topic: "Python pentru AI",
    days: [
      { day: 1, title: "Python basics", readUrl: "https://automatetheboringstuff.com/2e/chapter1/", readLabel: "Automate the Boring Stuff — cap. 1–2", codeUrl: "https://replit.com/", task: "Instalează Python 3.12+. Deschide REPL. Scrie hello.py. Scrie calculate_vat(total, rate=0.19) cu type hints. Dacă știi deja Python basic, sari direct la cap. 7." },
      { day: 2, title: "Functions & Lists", readUrl: "https://automatetheboringstuff.com/2e/chapter3/", readLabel: "Automate — cap. 3–4", codeUrl: "https://replit.com/", task: "Scrie process_invoices(invoices: list) care calculează totalul și TVA pentru fiecare. Testează cu 5 dicționare {client, suma}. Compară list comprehension cu .map() din JS." },
      { day: 3, title: "Dicts & Strings", readUrl: "https://automatetheboringstuff.com/2e/chapter5/", readLabel: "Automate — cap. 5–6", codeUrl: "https://replit.com/", task: "Creează dicționar facturi {id: {client, suma, data}}. Scrie get_by_client(invoices, client) și get_overdue(invoices, days=30). Formatează o factură ca string." },
      { day: 4, title: "Files & CSV", readUrl: "https://automatetheboringstuff.com/2e/chapter16/", readLabel: "Automate — cap. 7–8", codeUrl: "https://replit.com/", task: "Creează facturi.csv cu 10 rânduri. Citește cu csv.DictReader. Filtrează neplătite. Calculează total neplătit. Scrie rezultatele în raport.csv." },
      { day: 5, title: "PDF & files", readUrl: "https://automatetheboringstuff.com/2e/chapter15/", readLabel: "Automate — cap. 9–11", codeUrl: "https://replit.com/", task: "Scrie script care citește un folder cu fișiere .txt (simulate facturi). Pentru fiecare extrage textul și primele 200 caractere. Salvează totul în all_invoices.txt." },
      { day: 6, title: "Anthropic API din Python", readUrl: "https://docs.anthropic.com/en/api/getting-started", readLabel: "Anthropic Python SDK docs", codeUrl: "https://replit.com/", task: "pip install anthropic. Scrie extract_invoice.py: citește text factură, apelează claude-sonnet-4-20250514, parsează JSON. Testează cu 3 facturi. Salvează în invoices_extracted.json." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://replit.com/", task: "Din memorie: script Python care citește invoices.csv, apelează Claude pentru fiecare rând, parsează răspunsul, salvează în results.json. Rulează fără erori." },
    ],
    checkpoint: "Scrii și rulezi scripturi Python cu Anthropic API fără să cauți sintaxa."
  },
  {
    week: 17, phase: 4, color: "#FF4D6D", phaseTitle: "AI Engineer",
    topic: "ML Fundamentals pentru interviu",
    days: [
      { day: 1, title: "Big O & Binary search", readUrl: "https://www.manning.com/books/grokking-algorithms", readLabel: "Grokking Algorithms — cap. 1–3", codeUrl: "https://replit.com/", task: "Implementează binary_search(arr, target) în Python fără carte. Testează cu 1000 elemente. Calculează: câți pași face binary search vs linear search? Ce înseamnă O(log n)?" },
      { day: 2, title: "Hash tables & BFS", readUrl: "https://www.manning.com/books/grokking-algorithms", readLabel: "Grokking Algorithms — cap. 4–6", codeUrl: "https://replit.com/", task: "Implementează quicksort. Creează un dict și testează că lookup e O(1). Implementează BFS pe un graf de 5 noduri. Unde apar hash tables în codul tău JS/TS?" },
      { day: 3, title: "KNN & algoritmi ML", readUrl: "https://www.manning.com/books/grokking-algorithms", readLabel: "Grokking Algorithms — cap. 7–10", codeUrl: "https://replit.com/", task: "Citește cap. 10 — KNN. Implementează knn_classify cu distanță Euclidiană. Leagă cu cosine similarity din RAG — ce au în comun?" },
      { day: 4, title: "fast.ai — primul model", readUrl: "https://course.fast.ai/", readLabel: "fast.ai — Lesson 1", codeUrl: "https://www.kaggle.com/", task: "Deschide Kaggle → New Notebook. Urmează lecția pas cu pas. La fiecare celulă scrie în comentariu ce face. Antrenează modelul. Testează cu o imagine proprie." },
      { day: 5, title: "Training loop", readUrl: "https://course.fast.ai/", readLabel: "fast.ai — Lessons 2–3", codeUrl: "https://www.kaggle.com/", task: "Urmează lecțiile. Scrie din memorie structura unui training loop. Explică: optimizer.zero_grad(), loss.backward(), optimizer.step(). Notează: accuracy, loss, diferența train vs validation." },
      { day: 6, title: "Fine-tuning vs Prompting", readUrl: "https://docs.anthropic.com/en/docs/build-with-claude/fine-tuning", readLabel: "Anthropic docs — Fine-tuning", codeUrl: "https://www.kaggle.com/", task: "Citește docs. Calculează estimativ costul de fine-tuning vs prompt engineering pentru 10.000 facturi/lună. Când merită fiecare abordare?" },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://replit.com/", task: "Explică fără să cauți: overfitting, underfitting, learning rate prea mare vs prea mic, training vs validation split. Scrie explicațiile în GoodNotes — le vei folosi la interviu." },
    ],
    checkpoint: "Explici conceptele ML de bază la interviu și ai antrenat un model real pe Kaggle."
  },
  {
    week: 18, phase: 4, color: "#FF4D6D", phaseTitle: "AI Engineer",
    topic: "Proiect flagship — planificare & build",
    days: [
      { day: 1, title: "Decizie & specificații", readUrl: null, readLabel: "Fără lectură — hârtie și pix", codeUrl: "https://excalidraw.com/", task: "Decide: ECapturo complet SAU un tool AI nou. Scrie 1 pagină: problema rezolvată, cine o folosește, 3 features principale, tech stack cu justificare, cum arată done." },
      { day: 2, title: "Arhitectură pe hârtie", readUrl: null, readLabel: "Fără lectură — hârtie și pix", codeUrl: "https://excalidraw.com/", task: "Desenează: toate paginile, schema DB, API routes (method, path, input, output), fluxul AI. Ce e cel mai riscant tehnic? Rezolvă aia primul." },
      { day: 3, title: "Core AI feature", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Implementează feature-ul AI principal: vision + extracție, RAG sau agent. Nu lucra la UI încă. Testează cu 5 inputs diferite și verifică că output-ul e corect." },
      { day: 4, title: "Core AI feature cont.", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Continuă implementarea. Dacă ești blocat > 1 zi, simplifică scope-ul. La final de zi: funcționează feature-ul de bază? Notează ce a rămas." },
      { day: 5, title: "Auth + DB", readUrl: "https://supabase.com/docs/guides/auth", readLabel: "Supabase Auth docs", codeUrl: "https://github.com/", task: "Adaugă auth Supabase. Creează schema DB cu RLS. Conectează feature-ul AI la date reale din DB în loc de mock data." },
      { day: 6, title: "UI de bază", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Layout-ul de bază și pagina principală cu feature-ul AI integrat. Loading states, error states, empty states — toate trebuie să aibă UI, nu doar happy path." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Feature-ul AI funcționează end-to-end: input real → procesare AI → output afișat în UI. Dacă nu, identifică exact ce lipsește și prioritizează." },
    ],
    checkpoint: "Feature-ul AI funcționează end-to-end cu date reale."
  },
  {
    week: 19, phase: 4, color: "#FF4D6D", phaseTitle: "AI Engineer",
    topic: "Proiect flagship — finalizare & deploy",
    days: [
      { day: 1, title: "Finalizare UI", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Finalizează toate paginile planificate. Testează fiecare flux complet. Fixează ce nu merge." },
      { day: 2, title: "Eval framework", readUrl: null, readLabel: "Fără lectură — cod pur", codeUrl: "https://github.com/", task: "Creează eval-dataset.json cu 20 exemple. Scrie run-evals.ts care rulează toate și calculează scorul. Rulează — notează scorul inițial. Adaugă npm run eval." },
      { day: 3, title: "Îmbunătățire prompt", readUrl: null, readLabel: "Fără lectură — experimentare", codeUrl: "https://github.com/", task: "Dacă scorul e sub 75%: uită-te la greșeli, identifică pattern-ul, modifică promptul, rulează din nou. Documentează: scor înainte → modificare → scor după." },
      { day: 4, title: "Deploy", readUrl: "https://vercel.com/docs/deployments/overview", readLabel: "Vercel docs — Deployments", codeUrl: "https://vercel.com/", task: "Push pe GitHub public. Deploy pe Vercel. Configurează env variables. Testează TOATE fluxurile în producție. Fixează orice bug găsit." },
      { day: 5, title: "README complet", readUrl: "https://www.makeareadme.com/", readLabel: "makeareadme.com — template", codeUrl: "https://github.com/", task: "Scrie README: 1) Ce face produsul. 2) Tech stack cu justificare. 3) Arhitectura AI. 4) Cum rulezi local. 5) Eval results. Adaugă screenshots." },
      { day: 6, title: "Demo video", readUrl: "https://www.loom.com/", readLabel: "Loom — înregistrare video", codeUrl: "https://www.loom.com/", task: "Înregistrează maxim 3 minute: 30 sec problemă, 1 min demo live, 30 sec arhitectură (arată codul), 30 sec eval results. Nu reînregistra mai mult de 3 ori." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://github.com/", task: "Timer 10 minute. Prezintă proiectul ca la un interviu: problemă → soluție → arhitectură → demo live → eval results → ce ai face diferit. Înregistrează și ascultă-te." },
    ],
    checkpoint: "Proiect live, README complet, demo video gata, prezentare sub 10 minute."
  },
  {
    week: 20, phase: 4, color: "#FF4D6D", phaseTitle: "AI Engineer",
    topic: "Interview Prep — concepte",
    days: [
      { day: 1, title: "Designing ML Systems cap. 1–2", readUrl: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107963/", readLabel: "Chip Huyen — cap. 1–2", codeUrl: "https://colab.research.google.com/", task: "Citește cu notițe active. Pentru fiecare concept: cum se aplică la ECapturo? Notează în GoodNotes." },
      { day: 2, title: "Designing ML Systems cap. 3–4", readUrl: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107963/", readLabel: "Chip Huyen — cap. 3–4", codeUrl: "https://excalidraw.com/", task: "Citește. Scrie un system design de 1 pagină pentru ECapturo ca și cum l-ai prezenta la interviu." },
      { day: 3, title: "Mock interview — concepte", readUrl: null, readLabel: "Deschide o conversație nouă cu Claude", codeUrl: "https://claude.ai/", task: "Spune lui Claude: Ești interviewer AI engineer. Pune-mi 10 întrebări despre RAG, evals, hallucinations, fine-tuning vs prompting. Evaluează fiecare răspuns. Răspunde fără să cauți." },
      { day: 4, title: "Mock interview — system design", readUrl: null, readLabel: "Deschide o conversație nouă cu Claude", codeUrl: "https://excalidraw.com/", task: "Spune lui Claude: Dă-mi o problemă de system design AI: extracție automată din 10.000 facturi/zi. Ai 45 minute să proiectezi. Desenează pe hârtie. Prezintă lui Claude. Cere feedback." },
      { day: 5, title: "Designing ML Systems cap. 5–8", readUrl: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107963/", readLabel: "Chip Huyen — cap. 5–8", codeUrl: "https://colab.research.google.com/", task: "Citește. Focus pe: feature engineering, deployment, monitoring. Scrie 10 întrebări pe care le-ai putea primi la interviu din aceste capitole." },
      { day: 6, title: "Mock interview — coding", readUrl: null, readLabel: "Deschide o conversație nouă cu Claude", codeUrl: "https://replit.com/", task: "Spune lui Claude: Dă-mi 5 exerciții coding pentru AI Engineer junior: Python, string manipulation, API calls, JSON parsing, algoritmi simpli. Rezolvă fiecare în 15 min maxim." },
      { day: 7, title: "CHECKPOINT", readUrl: null, readLabel: null, codeUrl: "https://claude.ai/", task: "Rulează din nou mock interview-ul de la Zi 3. Compară cu prima dată — ce s-a îmbunătățit? Ce mai trebuie lucrat?" },
    ],
    checkpoint: "Răspunzi fluent la întrebări despre RAG, evals, hallucinations, system design AI."
  },
  {
    week: 21, phase: 4, color: "#FF4D6D", phaseTitle: "AI Engineer",
    topic: "CV, LinkedIn & Aplicări",
    days: [
      { day: 1, title: "CV actualizat", readUrl: null, readLabel: "CV-ul tău actual", codeUrl: "https://www.overleaf.com/", task: "Pentru fiecare proiect adaugă metrici: Eval accuracy 87% pe 200 facturi, RAG cu latency < 2s, Reduce costul API cu 40% prin prompt caching. Headline: QA Automation | AI Engineer." },
      { day: 2, title: "LinkedIn actualizat", readUrl: null, readLabel: "Profilul LinkedIn", codeUrl: "https://linkedin.com/", task: "Headline: QA Automation Engineer → AI Engineer | Building AI-powered SaaS. About: 3 paragrafe — cine ești, ce construiești, ce cauți. Projects: ECapturo cu demo link și tech stack." },
      { day: 3, title: "Lansare publică ECapturo", readUrl: null, readLabel: "Fără lectură — acțiune pură", codeUrl: "https://linkedin.com/", task: "Verifică că ECapturo e live și funcțional. Scrie post LinkedIn: problema rezolvată + demo video + link. Postează. Scopul nu e viral — e să ai ceva concret de arătat la interviu." },
      { day: 4, title: "Aplicări batch 1", readUrl: null, readLabel: "LinkedIn + remote.co + weworkremotely.com", codeUrl: "https://www.linkedin.com/jobs/", task: "Caută: AI Engineer, LLM Engineer, AI Developer, QA + AI. Aplică la 5 roluri. Pentru fiecare customizează intro — menționează proiectul relevant pentru ei. Trackează într-un spreadsheet." },
      { day: 5, title: "Aplicări batch 2", readUrl: null, readLabel: "LinkedIn + remote.co", codeUrl: "https://www.linkedin.com/jobs/", task: "Aplică la încă 5 roluri. Total: 10 aplicări. Adaugă în spreadsheet: companie, rol, dată, status, link." },
      { day: 6, title: "Networking", readUrl: null, readLabel: "Fără lectură — acțiune pură", codeUrl: "https://linkedin.com/", task: "Cere 2-3 recomandări LinkedIn de la colegi care îți cunosc munca. Conectează-te cu 5 AI Engineers. Comentează la 3 posturi relevante din domeniu." },
      { day: 7, title: "CHECKPOINT FINAL", readUrl: null, readLabel: null, codeUrl: "https://linkedin.com/", task: "Numără interviurile programate — trebuie să fie minimum 3. Dacă nu: analizează CV-ul și aplicările — unde e problema? Continuă cu aplicări săptămânal până ai 3 interviuri." },
    ],
    checkpoint: "Minimum 3 interviuri tehnice programate. CV și LinkedIn actualizate cu metrici reale."
  },
];

export default function Roadmap() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState(null);
  const [completedDays, setCompletedDays] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("roadmap-v4");
      if (saved) {
        const p = JSON.parse(saved);
        if (p.completedDays) setCompletedDays(p.completedDays);
        if (p.currentWeek) setCurrentWeek(p.currentWeek);
      }
    } catch (e) {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem("roadmap-v4", JSON.stringify({ completedDays, currentWeek })); } catch (e) {}
  }, [completedDays, currentWeek, loaded]);

  const weekData = weeks.find(w => w.week === currentWeek);
  const color = weekData?.color || "#F5C518";
  const totalDays = weeks.length * 7;
  const doneDays = Object.keys(completedDays).length;
  const globalPct = Math.round((doneDays / totalDays) * 100);
  const weekDone = weekData?.days.filter(d => completedDays[`${currentWeek}-${d.day}`]).length || 0;

  const openDay = (day) => setCurrentDay(day);
  const closeDay = () => setCurrentDay(null);
  const toggleDone = (key) => setCompletedDays(prev => { const n = {...prev}; if (n[key]) delete n[key]; else n[key] = true; return n; });

  if (!loaded) return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "#080808", display: "flex", alignItems: "center", justifyContent: "center", color: "#333", fontFamily: "monospace", fontSize: 14 }}>
      loading...
    </div>
  );

  const dayKey = currentDay ? `${currentWeek}-${currentDay.day}` : null;
  const isDone = dayKey ? !!completedDays[dayKey] : false;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      overflowY: "auto", background: "#080808",
      fontFamily: "'DM Mono', 'Fira Code', monospace",
      color: "#E8E8E8",
    }}>

      {/* HEADER */}
      <div style={{ position: "sticky", top: 0, zIndex: 20, background: "#080808cc", backdropFilter: "blur(12px)", borderBottom: "1px solid #141414", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          {currentDay ? (
            <button onClick={closeDay} style={{ background: "none", border: "none", color: "#555", fontSize: 14, cursor: "pointer", fontFamily: "inherit", padding: 0, display: "flex", alignItems: "center", gap: 8 }}>
              ← înapoi
            </button>
          ) : (
            <div style={{ fontSize: 11, color: "#2A2A2A", letterSpacing: 3 }}>FULL STACK → AI ENGINEER</div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 12, color: "#2A2A2A" }}>{doneDays}/{totalDays}</div>
            <div style={{ width: 100, height: 2, background: "#141414", borderRadius: 1 }}>
              <div style={{ height: "100%", width: `${globalPct}%`, background: color, borderRadius: 1, transition: "width 0.4s" }} />
            </div>
            <div style={{ fontSize: 12, color: globalPct > 0 ? color : "#2A2A2A" }}>{globalPct}%</div>
          </div>
        </div>
      </div>

      {!currentDay ? (
        /* ── WEEK VIEW ── */
        <div style={{ padding: "36px 32px 80px" }}>

          {/* Week nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
            <button onClick={() => setCurrentWeek(w => Math.max(1, w - 1))} disabled={currentWeek === 1}
              style={{ width: 40, height: 40, borderRadius: 8, border: "1px solid #141414", background: "transparent", color: currentWeek === 1 ? "#1E1E1E" : "#555", fontSize: 20, cursor: currentWeek === 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}>‹</button>

            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1 }}>Săptămâna {currentWeek}</div>
                <div style={{ fontSize: 11, color: color, background: color + "18", padding: "3px 10px", borderRadius: 4, fontWeight: 700, letterSpacing: 2 }}>{weekData?.phaseTitle?.toUpperCase()}</div>
              </div>
              <div style={{ fontSize: 14, color: "#444" }}>{weekData?.topic}</div>
            </div>

            <button onClick={() => setCurrentWeek(w => Math.min(weeks.length, w + 1))} disabled={currentWeek === weeks.length}
              style={{ width: 40, height: 40, borderRadius: 8, border: "1px solid #141414", background: "transparent", color: currentWeek === weeks.length ? "#1E1E1E" : "#555", fontSize: 20, cursor: currentWeek === weeks.length ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}>›</button>
          </div>

          {/* Progress */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#2A2A2A", letterSpacing: 1, marginBottom: 6 }}>
              <span>PROGRES SĂPTĂMÂNĂ</span>
              <span style={{ color: weekDone === 7 ? color : "#2A2A2A" }}>{weekDone}/7</span>
            </div>
            <div style={{ height: 2, background: "#141414", borderRadius: 1 }}>
              <div style={{ height: "100%", width: `${(weekDone / 7) * 100}%`, background: color, borderRadius: 1, transition: "width 0.3s" }} />
            </div>
          </div>

          {/* Day cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 8 }}>
            {weekData?.days.map(day => {
              const key = `${currentWeek}-${day.day}`;
              const done = !!completedDays[key];
              const isCheckpoint = day.day === 7;

              return (
                <div key={day.day} onClick={() => openDay(day)} style={{
                  borderRadius: 10, cursor: "pointer", overflow: "hidden",
                  border: `1px solid ${done ? color + "50" : isCheckpoint ? color + "20" : "#141414"}`,
                  background: done ? color + "08" : "#0D0D0D",
                  transition: "border-color 0.15s, background 0.15s",
                }}>
                  <div style={{ height: 2, background: done ? color : isCheckpoint ? color + "50" : "#141414" }} />
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 10, color: isCheckpoint ? color : "#2A2A2A", fontWeight: 700, letterSpacing: 2 }}>
                        {isCheckpoint ? "🏁 CHECKPOINT" : `ZI ${day.day}`}
                      </span>
                      {done && <span style={{ fontSize: 12, color: color }}>✓</span>}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: done ? "#333" : "#DDD", textDecoration: done ? "line-through" : "none", marginBottom: 8, lineHeight: 1.3 }}>
                      {day.title}
                    </div>
                    {day.readLabel && (
                      <div style={{ fontSize: 11, color: "#2A2A2A", marginBottom: 12 }}>📖 {day.readLabel}</div>
                    )}
                    <div style={{ display: "flex", gap: 6 }}>
                      {day.readUrl && <div style={{ fontSize: 10, color: "#333", background: "#141414", padding: "3px 8px", borderRadius: 4, letterSpacing: 1 }}>CITEȘTE</div>}
                      <div style={{ fontSize: 10, color: "#333", background: "#141414", padding: "3px 8px", borderRadius: 4, letterSpacing: 1 }}>COD</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Checkpoint */}
          {weekData?.checkpoint && (
            <div style={{ marginTop: 20, padding: "16px 20px", background: "#0D0D0D", borderRadius: 10, border: `1px solid ${color}18` }}>
              <div style={{ fontSize: 10, color: "#2A2A2A", letterSpacing: 2, marginBottom: 6 }}>🏁 CHECKPOINT FINAL SĂPTĂMÂNA {currentWeek}</div>
              <div style={{ fontSize: 14, color: "#444", lineHeight: 1.7 }}>{weekData.checkpoint}</div>
            </div>
          )}

          {/* Nav */}
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            {currentWeek > 1 && (
              <button onClick={() => setCurrentWeek(w => w - 1)} style={{ flex: 1, padding: "13px", borderRadius: 10, border: "1px solid #141414", background: "transparent", color: "#444", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                ← Săptămâna {currentWeek - 1}
              </button>
            )}
            {currentWeek < weeks.length && (
              <button onClick={() => setCurrentWeek(w => w + 1)} style={{ flex: 1, padding: "13px", borderRadius: 10, border: `1px solid ${color}50`, background: "transparent", color: color, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>
                Săptămâna {currentWeek + 1} →
              </button>
            )}
          </div>
        </div>

      ) : (
        /* ── DAY VIEW ── */
        <div style={{ padding: "36px 32px 80px", maxWidth: 620, margin: "0 auto" }}>

          <div style={{ marginBottom: 36 }}>
            <div style={{ fontSize: 11, color: color, letterSpacing: 2, marginBottom: 10, fontWeight: 700 }}>
              {currentDay.day === 7 ? "🏁 CHECKPOINT" : `ZI ${currentDay.day} · SĂPTĂMÂNA ${currentWeek}`}
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 8 }}>
              {currentDay.title}
            </div>
            {currentDay.readLabel && (
              <div style={{ fontSize: 13, color: "#333" }}>📖 {currentDay.readLabel}</div>
            )}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            {currentDay.readUrl && (
              <a href={currentDay.readUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{ padding: "20px 22px", borderRadius: 12, border: `1px solid ${color}40`, background: color + "0A", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ fontSize: 24 }}>📖</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, color: color, letterSpacing: 2, fontWeight: 700, marginBottom: 4 }}>DESCHIDE LECȚIA</div>
                    <div style={{ fontSize: 15, color: "#AAA" }}>{currentDay.readLabel}</div>
                  </div>
                  <div style={{ fontSize: 16, color: color }}>↗</div>
                </div>
              </a>
            )}

            <a href={currentDay.codeUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div style={{ padding: "20px 22px", borderRadius: 12, border: "1px solid #1A1A1A", background: "#0D0D0D", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: 24 }}>⌨️</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: "#444", letterSpacing: 2, fontWeight: 700, marginBottom: 4 }}>DESCHIDE EDITORUL</div>
                  <div style={{ fontSize: 15, color: "#666" }}>
                    {currentDay.codeUrl?.includes("codesandbox") ? "CodeSandbox" : currentDay.codeUrl?.includes("github") ? "GitHub" : "JSFiddle"}
                  </div>
                </div>
                <div style={{ fontSize: 16, color: "#333" }}>↗</div>
              </div>
            </a>
          </div>

          {/* Task */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 10, color: "#2A2A2A", letterSpacing: 2, fontWeight: 700, marginBottom: 14 }}>
              {currentDay.day === 7 ? "🏁 CHECKPOINT" : "🔨 CE FAI AZI"}
            </div>
            <div style={{ fontSize: 16, color: "#BBB", lineHeight: 2, padding: "20px 22px", background: "#0D0D0D", borderRadius: 12, borderLeft: `3px solid ${color}` }}>
              {currentDay.task}
            </div>
          </div>

          {/* Done */}
          <button onClick={() => { toggleDone(dayKey); closeDay(); }} style={{
            width: "100%", padding: "18px", borderRadius: 12, cursor: "pointer",
            border: `1px solid ${isDone ? "#1A1A1A" : color}`,
            background: isDone ? "transparent" : color,
            color: isDone ? "#444" : "#000",
            fontSize: 15, fontWeight: 700, fontFamily: "inherit", transition: "all 0.2s",
          }}>
            {isDone ? "Marchează ca neterminat" : "✓ Am terminat ziua asta"}
          </button>

          {/* Day nav */}
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            {currentDay.day > 1 && (
              <button onClick={() => setCurrentDay(weekData.days[currentDay.day - 2])}
                style={{ flex: 1, padding: "13px", borderRadius: 10, border: "1px solid #141414", background: "transparent", color: "#444", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                ← Zi {currentDay.day - 1}
              </button>
            )}
            {currentDay.day < 7 && (
              <button onClick={() => setCurrentDay(weekData.days[currentDay.day])}
                style={{ flex: 1, padding: "13px", borderRadius: 10, border: "1px solid #141414", background: "transparent", color: "#444", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                Zi {currentDay.day + 1} →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
