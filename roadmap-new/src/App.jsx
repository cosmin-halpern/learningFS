import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const weeks = [
  // ── FAZA 1: JavaScript Solid ──────────────────────────────────────────────
  {
    week: 1, phase: 1, phaseTitle: "JavaScript Solid", color: "#F5C518",
    topic: "JS Fundamentals — variabile, funcții, arrays",
    resource: "javascript.info — Cap. 2",
    resourceUrl: "https://javascript.info/first-steps",
    days: [
      { day: 1, title: "Variabile & tipuri", read: "javascript.info 2.1–2.7", task: "Creează test.js. Declară variabile cu let, const, var. Scrie o funcție care primește două numere și returnează suma, diferența și produsul. Testează cu console.log." },
      { day: 2, title: "Loops & funcții", read: "javascript.info 2.8–2.15", task: "Scrie un loop care printează numerele pare de la 1 la 10. Scrie o funcție arrow și rescrie-o ca function declaration. Observă diferența." },
      { day: 3, title: "Objects", read: "javascript.info 4.1–4.4", task: "Creează un obiect factura cu id, client, suma, data. Adaugă o metodă descriere(). Creează 3 facturi într-un array. Accesează proprietățile cu dot și bracket notation." },
      { day: 4, title: "Arrays avansate", read: "javascript.info 5.1–5.3", task: "Pornind de la array-ul de facturi: folosește .filter() pentru facturi > 500 RON, .map() pentru numele clienților, .reduce() pentru total. Înlănțuiește toate trei." },
      { day: 5, title: "Destructuring & Map/Set", read: "javascript.info 5.4–5.7", task: "Destructurează un obiect factură. Creează un Map cu clientId→numeClient. Creează un Set care elimină clienții duplicați. Combină două array-uri cu spread." },
      { day: 6, title: "Optional chaining & spread", read: "javascript.info 4.5–4.8", task: "Testează user?.adresa?.oras pe un obiect fără adresă. Scrie const port = config?.port ?? 3000. Copiază un obiect suprascriind o proprietate: {...factura, suma: 999}." },
      { day: 7, title: "Date, JSON, Object methods", read: "javascript.info 5.8–5.12", task: "Creează o dată cu new Date() și formatează ca DD/MM/YYYY. Convertește o factură la JSON și parsează înapoi. Folosește Object.keys(), Object.values(), Object.entries()." },
    ],
    checkpoint: "Scrii din memorie filterByMonth(arr, luna) și topClients(arr) fără să cauți sintaxa."
  },
  {
    week: 2, phase: 1, phaseTitle: "JavaScript Solid", color: "#F5C518",
    topic: "JS Fundamentals — recapitulare & exerciții",
    resource: "javascript.info — exerciții + JS Definitive Guide cap. 3–4",
    resourceUrl: "https://javascript.info",
    days: [
      { day: 1, title: "Type coercion", read: "JS Definitive Guide cap. 3", task: "Testează: '5' + 3, '5' - 3, !!0, !!''. Explică în scris de ce JS face asta și scrie 3 exemple de bug-uri cauzate de type coercion." },
      { day: 2, title: "Exercițiu complet", read: "Fără lectură — cod pur", task: "Creează un array de 5 facturi cu {id, client, suma, luna}. Scrie filterByMonth(arr, luna), totalByClient(arr, client) și topClients(arr). Testează toate cu console.log." },
      { day: 3, title: "Review cod real", read: "Proiectele tale", task: "Deschide un fișier .tsx din ECapturo sau Invoysr. Citește-l complet. Scrie pe hârtie ce face fiecare bloc. Notează orice linie pe care nu o înțelegi 100%." },
      { day: 4, title: "Repetare puncte slabe", read: "Zilele unde ai notat lacune", task: "Reia exact capitolele pentru liniile pe care nu le-ai înțeles în Zi 3. Nu trece mai departe dacă ai mai mult de 2 lucruri neclare." },
      { day: 5, title: "Exerciții javascript.info", read: "javascript.info — toate exercițiile cap. 2–5", task: "Fă toate exercițiile marcate cu ★★ sau mai mult de pe javascript.info la capitolele parcurse. Notează câte ai greșit și de ce." },
      { day: 6, title: "Mini-proiect", read: "Fără lectură", task: "Scrie un script care: citește un array de facturi hardcodat, calculează totalul pe lună, afișează top 3 clienți, marchează facturile > 30 zile ca overdue. Totul într-un singur fișier JS." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Deschide un fișier .tsx din proiect. Înțelegi fiecare linie? Dacă nu, identifică exact ce lipsește și notează pentru săptămâna viitoare." },
    ],
    checkpoint: "Înțelegi 100% orice fișier JS/TS din proiectele tale existente."
  },
  {
    week: 3, phase: 1, phaseTitle: "JavaScript Solid", color: "#F5C518",
    topic: "Closures, scope, this",
    resource: "javascript.info — Cap. 6.1–6.6",
    resourceUrl: "https://javascript.info/closure",
    days: [
      { day: 1, title: "Closures", read: "javascript.info 6.1–6.3", task: "Scrie makeCounter() care returnează o funcție. La fiecare apel contorul crește. Creează 2 contoare independente. Explică în scris de ce funcționează — asta e closure." },
      { day: 2, title: "this & binding", read: "javascript.info 6.4–6.6", task: "Creează un obiect timer cu metoda start(). Pune-o în setTimeout și observă că this e undefined. Repară cu arrow function. Repară alternativ cu .bind(this). Explică diferența." },
      { day: 3, title: "Decorators", read: "javascript.info 6.7–6.9", task: "Scrie delay(fn, ms) care returnează o versiune întârziată a funcției fn. Testează: const delayedLog = delay(console.log, 1000). Apelează și verifică că apare după 1 secundă." },
      { day: 4, title: "Memoization", read: "JS Definitive Guide cap. 8 — selectiv", task: "Scrie memoize(fn) care cachează rezultatele apelurilor anterioare. Al doilea apel cu aceiași parametri trebuie să fie instant. Identifică closure-ul și higher-order function în codul tău." },
      { day: 5, title: "Exercițiu integrat", read: "Proiectele tale", task: "Deschide ECapturo. Găsește cel mai complex bloc de cod. Desenează pe hârtie ce se apelează și în ce ordine. Identifică toate closure-urile din acel bloc." },
      { day: 6, title: "Repetare", read: "Ziua unde ai greșit cel mai mult", task: "Reia exercițiul cu care te-ai blocat cel mai mult în această săptămână. Scrie-l din memorie fără să te uiți la soluție." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Explică în scris ce e un closure fără să copiezi definiția. Dacă nu poți în 5 minute, reia ziua 1." },
    ],
    checkpoint: "Explici closures și this unui coleg fără să te uiți la notițe."
  },
  {
    week: 4, phase: 1, phaseTitle: "JavaScript Solid", color: "#F5C518",
    topic: "Async — Promises & async/await",
    resource: "javascript.info — Cap. 11",
    resourceUrl: "https://javascript.info/async",
    days: [
      { day: 1, title: "Promises basics", read: "javascript.info 11.1–11.3", task: "Scrie fetchUser(id) care returnează un Promise cu setTimeout. Înlănțuiește: fetchUser(1).then(user => fetchOrders(user.id)).then(console.log). Adaugă .catch() la final." },
      { day: 2, title: "Promise.all & allSettled", read: "javascript.info 11.4–11.5", task: "Ai 3 funcții cu Promise-uri. Rulează-le în paralel cu Promise.all. Testează că dacă una eșuează, toate eșuează. Înlocuiește cu Promise.allSettled și observă diferența." },
      { day: 3, title: "async/await", read: "javascript.info 11.6–11.7", task: "Ia funcția cu .then() de ieri. Rescrie-o complet cu async/await și try/catch. Deschide ECapturo. Găsește un fetch real și rescrie-l cu .then() pur — înțelege ce face await de fapt." },
      { day: 4, title: "Error handling async", read: "javascript.info 11.8", task: "Scrie fetchAll(urls) care face toate request-urile în paralel. Dacă oricare eșuează, continuă cu celelalte. Returnează [{url, data, error}] pentru fiecare URL." },
      { day: 5, title: "Async în context real", read: "Proiectele tale", task: "Deschide un API route din ECapturo. Desenează pe hârtie fluxul async complet: request → validare → DB → răspuns. Unde pot apărea erori? Sunt toate gestionate?" },
      { day: 6, title: "Exercițiu complet", read: "Fără lectură", task: "Scrie din memorie: o funcție async care face 3 fetch-uri în paralel, gestionează erorile individual, loghează rezultatele și timpul total de execuție." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Rescrie un API route din proiect fără async/await — doar .then(). Dacă te blochezi, reia zilele 1–3." },
    ],
    checkpoint: "Rescrii orice cod async din proiect cu .then() sau async/await la cerere, fără să cauți."
  },
  {
    week: 5, phase: 1, phaseTitle: "JavaScript Solid", color: "#F5C518",
    topic: "React — cum funcționează cu adevărat",
    resource: "react.dev/learn — Describing UI + Adding Interactivity",
    resourceUrl: "https://react.dev/learn",
    days: [
      { day: 1, title: "Componente & Props", read: "react.dev — First Component + Props", task: "Creează Button.tsx cu prop label. Randează 3 butoane diferite. Creează InvoiceCard cu props client, suma, data, isPaid. Stilizează cu Tailwind." },
      { day: 2, title: "Lists & Conditional rendering", read: "react.dev — Conditional + Lists", task: "Randează o listă de 5 facturi cu .map() și key unic. Adaugă buton 'Arată doar neplătite'. Dacă lista e goală, arată mesaj 'Nicio factură găsită'." },
      { day: 3, title: "useState", read: "react.dev — useState", task: "Creează un form cu câmpuri client și sumă controlate cu useState. La submit adaugă factura în lista de facturi. Curăță form-ul după submit." },
      { day: 4, title: "State as snapshot", read: "react.dev — State as snapshot", task: "Scrie un buton care face setCount(count+1) de 3 ori. Observă că adaugă doar 1. Repară cu setCount(c => c+1). Explică în scris de ce funcționează acum." },
      { day: 5, title: "useEffect", read: "react.dev — useEffect", task: "Adaugă un useEffect care loghează la fiecare render. Testează cu dependency array gol. Adaugă un câmp în array. Adaugă cleanup. Observă ordinea în consolă." },
      { day: 6, title: "Lifting state up", read: "react.dev — Lifting state up", task: "Ai InvoiceList și InvoiceTotal ca surori. Mută state-ul în componenta părinte. Pasează datele ca props. Verifică că totalul se actualizează când adaugi o factură." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Deschide o componentă React din ECapturo. Identifică toate useState-urile, useEffect-urile și props-urile. Explică de ce se rerenderizează." },
    ],
    checkpoint: "Știi de ce se rerenderizează o componentă și cum să oprești rerenderizările inutile."
  },
  {
    week: 6, phase: 1, phaseTitle: "JavaScript Solid", color: "#F5C518",
    topic: "React avansat — patterns & proiect",
    resource: "react.dev/learn + Head First Design Patterns cap. 1–2",
    resourceUrl: "https://react.dev/learn",
    days: [
      { day: 1, title: "useReducer & Context", read: "react.dev — useReducer + Context", task: "Rescrie lista de facturi cu useReducer în loc de useState. Adaugă actions: ADD_INVOICE, DELETE_INVOICE, TOGGLE_PAID. Testează fiecare action." },
      { day: 2, title: "Custom hooks", read: "react.dev — Custom Hooks", task: "Extrage logica de fetch într-un custom hook useInvoices(). Returnează {data, loading, error}. Folosește-l în componentă. Adaugă un refetch()." },
      { day: 3, title: "Design Patterns în React", read: "Head First Design Patterns cap. 1–2", task: "Citește despre Observer și Strategy pattern. Identifică unde React folosește Observer (useState + re-render). Scrie în GoodNotes ce pattern-uri recunoști în codul tău." },
      { day: 4, title: "Performance", read: "react.dev — useMemo + useCallback", task: "Adaugă useMemo pentru calculul totalului (se recalculează doar când facturi se schimbă). Adaugă useCallback pe handleSubmit. Verifică în React DevTools că rerenderizările s-au redus." },
      { day: 5, title: "Mini-proiect React", read: "Fără lectură", task: "Construiește un mini-dashboard cu 3 componente: FilterBar, InvoiceList, Summary. FilterBar are search și select lună. Summary arată totalul vizibil. Comunică prin state în părinte." },
      { day: 6, title: "Review & refactor", read: "Proiectele tale", task: "Deschide cel mai vechi component React din proiectele tale. Refactorizează-l aplicând ce ai învățat: custom hook, memo, structură clară. Compară înainte/după." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Construiești din memorie un form React complet cu validare, submit și error handling — fără tutorial." },
    ],
    checkpoint: "Construiești orice componentă React de la zero fără să cauți documentație."
  },
  {
    week: 7, phase: 1, phaseTitle: "JavaScript Solid", color: "#F5C518",
    topic: "Next.js — App Router, routing, data fetching",
    resource: "nextjs.org/docs — App Router",
    resourceUrl: "https://nextjs.org/docs",
    days: [
      { day: 1, title: "App Router overview", read: "Next.js docs — Routing fundamentals", task: "Desenează arhitectura App Router pe hârtie: root layout, page.tsx, nested routes. Creează proiect nou. Adaugă rutele: /, /facturi, /facturi/[id]. Verifică în browser." },
      { day: 2, title: "Layouts & navigare", read: "Next.js docs — Layouts + Link", task: "Creează layout.tsx pentru /facturi cu sidebar. Sidebar cu linkuri <Link>. Fiecare pagină afișează params.id în titlu. Stilizează cu Tailwind — layout persistă între pagini." },
      { day: 3, title: "Server vs Client Components", read: "Next.js docs — Server & Client Components", task: "Creează ServerTime (Server Component). Creează Counter cu useState (Client Component). Combină-le. Explică în scris de ce ServerTime nu poate folosi useState." },
      { day: 4, title: "Data Fetching", read: "Next.js docs — Data Fetching", task: "Fetch date de la jsonplaceholder.typicode.com/todos în Server Component. Adaugă revalidate: 60. Adaugă loading.tsx și error.tsx. Testează că apar corect." },
      { day: 5, title: "API Routes", read: "Next.js docs — Route Handlers", task: "Creează app/api/facturi/route.ts. GET returnează array mock. POST primește {client, suma} și validează. Dacă suma lipsește returnează 400. Testează cu Postman sau curl." },
      { day: 6, title: "Middleware & Auth", read: "Next.js docs — Middleware", task: "Creează middleware.ts. Protejează /dashboard și /api (excepție /api/webhook). Redirect la /login dacă nu ești autentificat. Testează ștergând cookie-ul manual." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Explică fără să cauți: SSR vs SSG vs ISR și când folosești fiecare. Identifică în proiect care componente sunt Server și care Client." },
    ],
    checkpoint: "Știi diferența Server/Client Component și implementezi routing + API routes fără tutorial."
  },
  {
    week: 8, phase: 1, phaseTitle: "JavaScript Solid", color: "#F5C518",
    topic: "Next.js avansat + proiect Faza 1",
    resource: "nextjs.org/docs — Optimizations + Image + Font",
    resourceUrl: "https://nextjs.org/docs/app/building-your-application/optimizing",
    days: [
      { day: 1, title: "Server Actions", read: "Next.js docs — Server Actions", task: "Convertește un API route POST simplu într-un Server Action. Apelează-l direct din componentă fără fetch. Adaugă revalidatePath după mutație." },
      { day: 2, title: "Image & Font optimization", read: "Next.js docs — Optimizations", task: "Înlocuiește orice <img> cu <Image> din next/image. Adaugă un font cu next/font. Deschide Network tab și compară dimensiunile înainte/după." },
      { day: 3, title: "Form complet cu Next.js", read: "Fără lectură", task: "Adaugă pagina /facturi/nou cu form complet: câmpuri client, sumă, dată. La submit face POST la /api/facturi. La succes redirect la /facturi. La eroare afișează mesajul lângă câmp." },
      { day: 4, title: "Responsive UI", read: "Tailwind docs — Responsive", task: "Ia pagina /facturi. Fă layout-ul responsive: mobile = o coloană, desktop = două coloane. Doar Tailwind, fără CSS custom. Testează în DevTools la diferite dimensiuni." },
      { day: 5, title: "Proiect liber Faza 1", read: "Fără lectură", task: "Construiește o pagină nouă în ECapturo sau Invoysr din memorie: routing, layout, fetch date, form, API route. Fără tutorial. Dacă te blochezi > 30 min, poți căuta." },
      { day: 6, title: "Review Faza 1", read: "Notițele tale", task: "Recitește toate notițele din GoodNotes din ultimele 8 săptămâni. Notează: ce a rămas neclar? Ce ai vrea să aprofundezi? Ce ți-a plăcut cel mai mult?" },
      { day: 7, title: "CHECKPOINT FAZA 1", read: "—", task: "CHECKPOINT FINAL FAZA 1: Construiești de la zero o pagină Next.js cu: Server Component care fetch-uiește date, Client Component cu form, API route cu validare Zod, middleware de auth. Fără tutorial." },
    ],
    checkpoint: "Construiești orice pagină Next.js de la zero, singur, fără să te uiți la alte proiecte."
  },

  // ── FAZA 2: Full Stack Independent ────────────────────────────────────────
  {
    week: 9, phase: 2, phaseTitle: "Full Stack Independent", color: "#00C896",
    topic: "SQL & Supabase în profunzime",
    resource: "sqlzoo.net + Supabase docs",
    resourceUrl: "https://sqlzoo.net",
    days: [
      { day: 1, title: "SELECT basics", read: "sqlzoo.net — SELECT basics", task: "Fă toate exercițiile SELECT basics. Apoi în Supabase SQL editor: creează tabelul facturi cu id, client_id, suma, created_at, is_paid. Inserează 5 rânduri manual." },
      { day: 2, title: "Filtrare & sortare", read: "sqlzoo.net — SELECT from World", task: "Scrie query care returnează facturile din ultima lună (created_at > NOW() - INTERVAL '30 days'). Sortează DESC după sumă. Limitează la primele 3. Combină toate trei." },
      { day: 3, title: "JOIN", read: "sqlzoo.net — JOIN", task: "Creează tabelul clienti cu id și nume. Scrie JOIN între facturi și clienti pentru a obține numele clientului la fiecare factură. Adaugă GROUP BY și COUNT(*) per client." },
      { day: 4, title: "Subqueries & agregări", read: "sqlzoo.net — SELECT within SELECT", task: "Scrie query cu subquery: facturi WHERE client_id IN (SELECT id FROM clienti WHERE...). Rescrie cu JOIN. Adaugă HAVING pentru a filtra clienții cu total > 1000." },
      { day: 5, title: "Indecși & performanță", read: "Supabase docs — Database", task: "Adaugă index pe client_id: CREATE INDEX idx_client_id ON facturi(client_id). Rulează EXPLAIN ANALYZE cu și fără index. Compară timpii. Notează când are sens un index." },
      { day: 6, title: "RLS — Row Level Security", read: "Supabase docs — RLS", task: "Activează RLS pe tabelul facturi. Adaugă policy: SELECT permis doar dacă auth.uid() = user_id. Testează din UI. Adaugă policy pentru INSERT. Verifică că un user nu vede datele altuia." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Scrie din memorie query-ul care returnează top 5 clienți după totalul facturilor din luna curentă, cu numărul de facturi și suma totală." },
    ],
    checkpoint: "Scrii queries cu JOIN, GROUP BY, subqueries și RLS policies fără să cauți sintaxa."
  },
  {
    week: 10, phase: 2, phaseTitle: "Full Stack Independent", color: "#00C896",
    topic: "Schema ECapturo + TypeScript",
    resource: "Total TypeScript (gratuit) + Supabase docs",
    resourceUrl: "https://www.totaltypescript.com/tutorials",
    days: [
      { day: 1, title: "Schema DB ECapturo", read: "Supabase docs — Relationships", task: "Pe hârtie: proiectează schema completă ECapturo — tabele, coloane, relații. Implementează în Supabase. Adaugă foreign keys. Testează că integritatea referențială funcționează." },
      { day: 2, title: "RLS pe toată schema", read: "Supabase docs — RLS", task: "Activează RLS pe TOATE tabelele ECapturo. Scrie policies pentru SELECT, INSERT, UPDATE, DELETE pe fiecare tabel. Testează cu 2 useri diferiți că nu se văd datele reciproc." },
      { day: 3, title: "TypeScript — tipuri de bază", read: "Total TypeScript — lecțiile 1–5", task: "Creează types.ts. Definește tipul Factura cu toate câmpurile. Definește Client. Creează array tipat. Încearcă să adaugi o proprietate inexistentă — observă eroarea TS." },
      { day: 4, title: "TypeScript — Interface vs Type", read: "Total TypeScript — lecțiile 6–10", task: "Definește interface și type pentru Factura. Extinde cu FacturaPlătită care adaugă datePlată. Creează union type Status = 'draft' | 'sent' | 'paid' | 'overdue'. Testează cu valori invalide." },
      { day: 5, title: "TypeScript — Generics", read: "Total TypeScript — lecțiile 11–15", task: "Scrie tip generic ApiResponse<T> = { data: T; error: string | null; loading: boolean }. Scrie funcție generică fetchData<T>(url: string). Verifică că TypeScript inferează tipul corect." },
      { day: 6, title: "TypeScript — Utility types", read: "Total TypeScript — lecțiile 16–20", task: "Folosește Partial<Factura> pentru form editare. Pick<Factura, 'id' | 'client'> pentru dropdown. Omit<Factura, 'id'> pentru creare. Scrie un type guard isFacturăPlătită." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Rulează tsc --noEmit în proiect. Trebuie să fie 0 erori și 0 'any'. Dacă nu — rezolvă toate erorile înainte să continui." },
    ],
    checkpoint: "Schema ECapturo e completă în Supabase cu RLS și proiectul compilează fără erori TS."
  },
  {
    week: 11, phase: 2, phaseTitle: "Full Stack Independent", color: "#00C896",
    topic: "TypeScript avansat + Zod",
    resource: "Total TypeScript + Zod docs",
    resourceUrl: "https://zod.dev",
    days: [
      { day: 1, title: "Elimină 'any' din proiect", read: "Proiectele tale", task: "Caută toate aparițiile de 'any' cu Ctrl+Shift+F. Pentru fiecare înlocuiește cu tipul corect. Tipează răspunsurile de la Anthropic API și Supabase. Zero 'any' la final." },
      { day: 2, title: "Tipează funcțiile", read: "Proiectele tale", task: "Deschide fiecare fișier .ts/.tsx. Adaugă tipuri explicite la parametri și return values. Dacă o funcție returnează tipuri diferite, folosește union type." },
      { day: 3, title: "Zod — validare runtime", read: "Zod docs — getting started", task: "npm install zod. Definește FacturaSchema cu toate câmpurile și validările. Adaugă în API route POST: const result = FacturaSchema.safeParse(body). Returnează 400 cu erorile dacă invalid." },
      { day: 4, title: "Zod în toată aplicația", read: "Zod docs — transforms", task: "Adaugă validare Zod pe toate API routes din proiect. Creează un helper validateBody<T>(schema, body) reutilizabil. Testează cu body-uri invalide pentru fiecare endpoint." },
      { day: 5, title: "Generic API handler", read: "Fără lectură", task: "Scrie createApiHandler<T>(schema: ZodSchema<T>) care validează body-ul, returnează eroare dacă invalid și date tipate dacă valid. Folosește-l în 2 API routes. Verifică că TypeScript inferează T corect." },
      { day: 6, title: "Teste cu Vitest", read: "Vitest docs — getting started", task: "npm install vitest. Scrie un test pentru funcția de validare. Scrie un test pentru un API route handler (mock Supabase). Rulează npx vitest. Toate verzi." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: tsc --noEmit = 0 erori. Caută 'any' = 0. Toate API routes au validare Zod. Cel puțin 3 teste verzi." },
    ],
    checkpoint: "TypeScript solid, Zod pe toate rutele, teste de bază funcționale."
  },
  {
    week: 12, phase: 2, phaseTitle: "Full Stack Independent", color: "#00C896",
    topic: "Proiect SaaS de la 0 — planificare & setup",
    resource: "Pragmatic Thinking & Learning — 20 min/zi în paralel",
    resourceUrl: null,
    days: [
      { day: 1, title: "Planificare pe hârtie", read: "Fără editor", task: "Scrie problema rezolvată în 1 frază. Listează toate paginile. Desenează schema DB cu tabele și relații. Listează toate API routes. Estimează ce termini în 4 săptămâni." },
      { day: 2, title: "Setup din memorie", read: "Fără tutorial", task: "npx create-next-app@latest cu TypeScript + Tailwind + App Router. Supabase proiect nou. .env.local cu variabilele. Instalează @supabase/ssr. Verifică conexiunea cu un query simplu." },
      { day: 3, title: "Autentificare", read: "Supabase Auth docs", task: "Pagina /login cu form email + parolă. signUp și signIn cu Supabase Auth. middleware.ts protejează /dashboard. Redirect după login. Testează ambele fluxuri." },
      { day: 4, title: "Schema DB", read: "Fără lectură", task: "Creează toate tabelele planificate în Zi 1. Adaugă foreign keys. Activează RLS pe toate. Scrie policies pentru SELECT, INSERT, UPDATE, DELETE. Testează cu user de test." },
      { day: 5, title: "Primul CRUD", read: "Fără lectură", task: "Pagina care listează entitatea principală. Form de creare cu validare Zod. API route POST care inserează în DB. Buton de ștergere cu confirmare. Loading states și error handling vizibil." },
      { day: 6, title: "Componente reutilizabile", read: "Fără lectură", task: "Extrage form-ul într-o componentă separată. Creează Table<T> generic. Creează Button cu variante: primary, secondary, danger. Creează Modal reutilizabil. Refactorizează paginile." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Proiectul rulează local cu auth funcțional, cel puțin un CRUD complet și componente reutilizabile. Push pe GitHub." },
    ],
    checkpoint: "Proiect SaaS cu auth + CRUD funcțional, rulează local, pe GitHub."
  },
  {
    week: 13, phase: 2, phaseTitle: "Full Stack Independent", color: "#00C896",
    topic: "Proiect SaaS — construcție",
    resource: "Fără tutorial — construiești singur",
    resourceUrl: null,
    days: [
      { day: 1, title: "Pagini principale", read: "Fără lectură", task: "Implementează toate paginile planificate. La final de zi notează ce ai terminat și ce a rămas. Dacă ești blocat > 30 min, poți căuta — altfel gândești singur." },
      { day: 2, title: "Construcție liberă", read: "Fără lectură", task: "Continuă construcția. Regulă: nu sări peste error handling. Fiecare operație trebuie să aibă un comportament clar la eroare — nu doar happy path." },
      { day: 3, title: "Stripe", read: "Stripe docs — Checkout", task: "Creează cont Stripe + produs cu preț lunar. API route POST /api/checkout → Checkout Session. Buton Upgrade → redirect Stripe. Testează cu cardul 4242 4242 4242 4242." },
      { day: 4, title: "Webhook Stripe", read: "Stripe docs — Webhooks", task: "stripe listen --forward-to localhost:3000/api/webhook. Verifică semnătura cu constructEvent. Tratează checkout.session.completed: marchează userul ca subscribed în DB." },
      { day: 5, title: "Construcție liberă", read: "Fără lectură", task: "Finalizează toate paginile. Testează manual fiecare flux de la cap la coadă. Fixează bug-urile găsite." },
      { day: 6, title: "Polish UI", read: "Fără lectură", task: "Adaugă loading skeleton în loc de spinner gol. Verifică că toate erorile sunt human-readable. Testează pe mobile — totul trebuie să fie responsive." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Toate paginile planificate sunt funcționale. Stripe funcționează în test mode. Niciun flux nu returnează eroare netreatată." },
    ],
    checkpoint: "Toate funcționalitățile planificate sunt implementate și testate manual."
  },
  {
    week: 14, phase: 2, phaseTitle: "Full Stack Independent", color: "#00C896",
    topic: "Proiect SaaS — deploy & backend deeper",
    resource: "Vercel docs + Upstash + Sentry",
    resourceUrl: "https://vercel.com/docs",
    days: [
      { day: 1, title: "Deploy pe Vercel", read: "Vercel docs", task: "Push pe GitHub. Deploy pe Vercel — conectează repo. Adaugă toate env variables. Testează TOATE fluxurile în producție (nu local). Fixează orice bug găsit în producție." },
      { day: 2, title: "Rate limiting", read: "Upstash docs", task: "Creează cont gratuit Upstash Redis. npm install @upstash/ratelimit @upstash/redis. Adaugă rate limiting: max 20 req/minut per IP. Testează cu 25 request-uri. Verifică 429." },
      { day: 3, title: "Error monitoring", read: "Sentry docs — Next.js", task: "Creează cont Sentry. npx @sentry/wizard@latest -i nextjs. Aruncă o eroare deliberată. Verifică că apare în dashboard cu stack trace. Adaugă Sentry.setTag('user_id', userId)." },
      { day: 4, title: "Playwright E2E", read: "Playwright docs — getting started", task: "npm install @playwright/test. npx playwright install. Test 1: verifică că pagina / există. Test 2: login flow complet. Test 3: fluxul principal al aplicației. npx playwright test --headed." },
      { day: 5, title: "Server Actions", read: "Next.js docs — Server Actions", task: "Convertește cel mai simplu API route POST într-un Server Action. Apelează direct din componentă. Adaugă revalidatePath. Compară: când folosești Server Actions vs API routes?" },
      { day: 6, title: "Documentare flux", read: "Fără lectură", task: "Alege cel mai complex flux din aplicație. Pe hârtie: desenează fiecare pas cu săgeți. Pentru fiecare pas notează ce date intră, ce ies, ce se întâmplă la eroare. Verifică că totul e acoperit." },
      { day: 7, title: "CHECKPOINT FAZA 2", read: "—", task: "CHECKPOINT FINAL FAZA 2: Proiectul e live pe Vercel, cu rate limiting, error monitoring, cel puțin 3 teste E2E verzi. Trimite link-ul unui prieten să testeze." },
    ],
    checkpoint: "SaaS complet live pe Vercel cu rate limiting, monitoring și teste E2E."
  },

  // ── FAZA 3: AI Foundations ────────────────────────────────────────────────
  {
    week: 15, phase: 3, phaseTitle: "AI Foundations", color: "#7B61FF",
    topic: "Cum funcționează LLM-urile",
    resource: "3Blue1Brown Neural Networks (YouTube) + Andrej Karpathy",
    resourceUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
    days: [
      { day: 1, title: "Ce e o rețea neurală", read: "3Blue1Brown ep. 1", task: "Vizionează. Deschide GoodNotes. Desenează o rețea neurală cu 3 layere din memorie: input, hidden, output. Etichetează weights și activations. Explică în scris de ce avem nevoie de layere multiple." },
      { day: 2, title: "Gradient descent", read: "3Blue1Brown ep. 2", task: "Vizionează. Desenează o curbă de loss function. Marchează local minimum, global minimum, learning rate prea mare și potrivit. Explică cu cuvintele tale ce face gradient descent." },
      { day: 3, title: "Backpropagation", read: "3Blue1Brown ep. 3", task: "Vizionează de 2 ori dacă e necesar. Scrie în GoodNotes ce calculează backpropagation și de ce e necesar. Desenează direcția: forward pass (stânga→dreapta), backward pass (dreapta→stânga)." },
      { day: 4, title: "Attention & Transformers", read: "3Blue1Brown ep. 5–6", task: "Vizionează ambele. Desenează mecanismul de attention: Query, Key, Value. Explică în scris de ce attention e mai bun decât RNN pentru text lung. Ce înseamnă context window?" },
      { day: 5, title: "Intro to LLMs", read: "Andrej Karpathy — Intro to LLMs (1h YouTube)", task: "Vizionează cu notițe active. Scrie: pretraining vs fine-tuning vs RLHF. 3 limitări fundamentale ale LLM-urilor. Ce face un AI Engineer diferit față de un utilizator normal?" },
      { day: 6, title: "Tokenization & Hallucinations", read: "Anthropic blog — model cards", task: "Deschide platform.openai.com/tokenizer. Testează: 'hello', 'București', un emoji. Observă că tokenizarea nu e pe cuvinte. Testează română vs engleză. Scrie 3 cauze de hallucinations și 3 mitigări." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Explică unui prieten (sau înregistrează-te) ce e un transformer și de ce LLM-urile halucinează. Maxim 2 minute, fără jargon tehnic. Dacă te blochezi, reia zilele 4–5." },
    ],
    checkpoint: "Explici tokenization, attention și hallucinations fără să te uiți la notițe."
  },
  {
    week: 16, phase: 3, phaseTitle: "AI Foundations", color: "#7B61FF",
    topic: "Anthropic API — Messages, Streaming, Tools",
    resource: "docs.anthropic.com",
    resourceUrl: "https://docs.anthropic.com",
    days: [
      { day: 1, title: "Messages API", read: "Anthropic docs — Messages", task: "Creează test-api.ts. npm install @anthropic-ai/sdk. Trimite 'Hello' cu system prompt 'Ești un asistent pentru facturi'. Loghează: răspuns, input tokens, output tokens." },
      { day: 2, title: "Streaming", read: "Anthropic docs — Streaming", task: "Creează API route /api/chat/stream. Folosește stream: true. Returnează ReadableStream. În frontend consumă stream-ul și afișează textul progresiv — nu tot dintr-o dată." },
      { day: 3, title: "System prompts", read: "Anthropic docs — System prompts", task: "Scrie 5 system prompts diferite pentru extracție facturi. Testează fiecare cu aceleași 3 facturi. Care e mai precis? Care halucinează mai puțin? Documentează în GoodNotes." },
      { day: 4, title: "Tool use", read: "Anthropic docs — Tool use", task: "Definește tool getFactura(id) care caută în Supabase. Trimite 'Arată-mi factura #123'. Claude trebuie să apeleze tool-ul automat. Testează cu id inexistent — ce face Claude?" },
      { day: 5, title: "Prompt caching", read: "Anthropic docs — Prompt caching", task: "Adaugă cache_control: { type: 'ephemeral' } pe un system prompt lung. Fă 5 request-uri. Compară cache_creation_input_tokens vs cache_read_input_tokens. Calculează diferența de cost." },
      { day: 6, title: "Vision API", read: "Anthropic docs — Vision", task: "Fotografiază o factură reală. Convertește la base64 cu fs.readFileSync().toString('base64'). Trimite lui Claude cu prompt: 'Extrage: număr, dată, furnizor, total, TVA'. Obține răspuns JSON." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Implementează într-un singur API route: tool use + streaming + prompt caching. Dacă nu funcționează, debug pas cu pas — mai întâi fără streaming, adaugă streaming, adaugă caching." },
    ],
    checkpoint: "Implementezi tool use + streaming + prompt caching într-un singur API call."
  },
  {
    week: 17, phase: 3, phaseTitle: "AI Foundations", color: "#7B61FF",
    topic: "Prompt Engineering & Evals",
    resource: "Anthropic Prompt Engineering docs + DeepLearning.AI",
    resourceUrl: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
    days: [
      { day: 1, title: "Prompt Engineering overview", read: "Anthropic docs — Prompt Engineering complet", task: "Citește complet. Notează în GoodNotes toate tehnicile cu câte un exemplu. Care sunt relevante pentru ECapturo? Ce face un prompt bun vs prost pentru extracție date structurate?" },
      { day: 2, title: "Chain of Thought", read: "Anthropic docs — CoT", task: "Ia un prompt de extracție factură fără CoT. Testează pe 5 facturi — notează acuratețea. Adaugă 'Gândește pas cu pas'. Testează pe aceleași 5. Compară. Ce câmpuri beneficiază mai mult?" },
      { day: 3, title: "Few-shot prompting", read: "Anthropic docs — Examples", task: "Alege 3 facturi cu extracții corecte. Construiește prompt: Exemplu 1: [factură] → [JSON]. Exemplu 2: ... Acum extrage din: [factură nouă]. Testează pe 5 facturi noi. Compară cu zero-shot." },
      { day: 4, title: "Evals — teorie", read: "DeepLearning.AI — Evaluating LLM Outputs lec. 1–3", task: "Completează lecțiile. Notează tipurile de metrici: exact match, fuzzy match, LLM-as-judge. Pentru ECapturo: ce metrică e cea mai relevantă pentru număr factură, dată, total, TVA?" },
      { day: 5, title: "Evals — implementare", read: "DeepLearning.AI — lec. 4–6", task: "Scrie evalExtraction(expected: Factura, actual: Factura): number — returnează scor 0-1. Testează pe 3 perechi. Verifică: 1.0 când identice, 0.0 când complet diferite." },
      { day: 6, title: "Eval dataset ECapturo", read: "Fără lectură", task: "Colectează 20 facturi reale sau generate. Extrage manual câmpurile pentru fiecare — asta e ground truth. Salvează în eval-dataset.json. Rulează promptul curent pe toate 20. Calculează acuratețea." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Rulezi eval-ul complet. Acuratețea > 80% pe câmpurile principale. Dacă nu, mai fă o iterație: uită-te la greșeli, modifică promptul, rulează din nou." },
    ],
    checkpoint: "Ai un eval framework funcțional cu scor > 80% pe extracția de facturi."
  },
  {
    week: 18, phase: 3, phaseTitle: "AI Foundations", color: "#7B61FF",
    topic: "RAG & Embeddings",
    resource: "DeepLearning.AI — RAG course (gratuit)",
    resourceUrl: "https://www.deeplearning.ai/short-courses/",
    days: [
      { day: 1, title: "Ce sunt embeddings", read: "DeepLearning.AI — RAG lec. 1–3", task: "Completează lecțiile. Desenează în GoodNotes arhitectura RAG: document → chunks → embeddings → vector DB → query → retrieval → context → LLM → răspuns. De ce e mai bun decât tot documentul în context?" },
      { day: 2, title: "pgvector în Supabase", read: "Supabase docs — pgvector", task: "CREATE EXTENSION vector în Supabase. Creează tabel: documents(id, content TEXT, embedding vector(1024), metadata JSONB). Generează un embedding pentru un text scurt. Inserează și verifică." },
      { day: 3, title: "Pipeline de indexare", read: "Fără lectură", task: "Scrie chunkText(text, chunkSize, overlap) care împarte textul în bucăți cu overlap. Testează cu document de 1000 cuvinte, chunkSize=200, overlap=50. Verifică că nu taie cuvinte la mijloc." },
      { day: 4, title: "Search semantic", read: "Fără lectură", task: "Scrie searchDocuments(query: string). Generează embedding pentru query. Caută în Supabase cu cosine similarity: ORDER BY embedding <=> queryEmbedding LIMIT 5. Compară cu ILIKE — ce e mai precis?" },
      { day: 5, title: "RAG complet în ECapturo", read: "Fără lectură", task: "Adaugă pagina /chat în ECapturo. La upload factură: extrage text, împarte în chunks, generează embeddings, stochează. La întrebare: caută chunks relevante, adaugă ca context, generează răspuns." },
      { day: 6, title: "Optimizare RAG", read: "Fără lectură", task: "Testează cu chunk sizes diferite: 100, 200, 500. Testează cu overlap diferit: 0, 50, 100. Testează cu 3, 5, 10 chunks returnate. Scrie în GoodNotes configurația optimă și de ce funcționează." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Uploadezi o factură → pui o întrebare despre ea → primești răspuns corect. Feature-ul e live în producție. Înregistrează un demo de 2 minute." },
    ],
    checkpoint: "RAG funcțional în ECapturo în producție. Demo înregistrat."
  },
  {
    week: 19, phase: 3, phaseTitle: "AI Foundations", color: "#7B61FF",
    topic: "AI Agents",
    resource: "DeepLearning.AI — Agents course (gratuit)",
    resourceUrl: "https://www.deeplearning.ai/short-courses/",
    days: [
      { day: 1, title: "Ce e un agent", read: "DeepLearning.AI — Agents lec. 1–3", task: "Completează lecțiile. Desenează diferența: chatbot simplu (input → LLM → output) vs agent (input → LLM → tool decision → tool execution → LLM → output). Când folosești agent vs API call simplu?" },
      { day: 2, title: "Tool calling pentru agenți", read: "DeepLearning.AI — Agents lec. 4–6", task: "Definește 3 tools pentru un agent de facturi: searchFacturi, getClient, calculateTotal. Scrie schema pentru fiecare. Trimite un mesaj și lasă Claude să decidă ce tool să apeleze." },
      { day: 3, title: "Agent complet", read: "Fără lectură", task: "Construiește un agent care răspunde: 'Care e totalul facturilor din luna trecută?' Trebuie să: înțeleagă → apeleze tool potrivit → primească date din DB → formuleze răspuns natural. Testează cu 5 întrebări." },
      { day: 4, title: "Error handling în agenți", read: "Anthropic docs — Tool use error handling", task: "Testează ce face agentul când: tool-ul returnează eroare, DB e gol, întrebarea e ambiguă. Adaugă fallback pentru fiecare caz. Documentează comportamentul." },
      { day: 5, title: "Agent în proiect real", read: "Fără lectură", task: "Integrează agentul în ECapturo sau Competary. Adaugă o pagină /assistant. Userul poate pune întrebări în limbaj natural despre datele lui. Agentul răspunde folosind DB-ul real." },
      { day: 6, title: "Fine-tuning vs Prompting", read: "Anthropic docs — Fine-tuning", task: "Citește docs despre fine-tuning. Notează: 3 scenarii unde fine-tuning bate prompting și 3 unde prompting e suficient. Pentru ECapturo: ai nevoie de fine-tuning? Argumentează în scris." },
      { day: 7, title: "CHECKPOINT FAZA 3", read: "—", task: "CHECKPOINT FINAL FAZA 3: Agent funcțional în producție. RAG funcțional. Eval framework cu scor documentat. Poți explica la interviu: RAG, tool use, evals, hallucinations." },
    ],
    checkpoint: "Agent AI funcțional în producție. Poți explica toate conceptele la interviu."
  },

  // ── FAZA 4: AI Engineer Ready ─────────────────────────────────────────────
  {
    week: 20, phase: 4, phaseTitle: "AI Engineer Ready", color: "#FF4D6D",
    topic: "Python pentru AI",
    resource: "Automate the Boring Stuff with Python (cartea ta)",
    resourceUrl: "https://automatetheboringstuff.com",
    days: [
      { day: 1, title: "Python basics", read: "Automate cap. 1–2", task: "Instalează Python 3.12+. Deschide REPL. Scrie hello.py. Dacă știi deja Python basic, sari direct la cap. 7. Scrie calculate_vat(total, rate=0.19) cu type hints." },
      { day: 2, title: "Functions & Lists", read: "Automate cap. 3–4", task: "Scrie process_invoices(invoices: list) care calculează totalul și TVA pentru fiecare. Testează cu 5 dicționare {client, suma}. Compară: cum diferă list comprehension față de .map() din JS?" },
      { day: 3, title: "Dicts & Strings", read: "Automate cap. 5–6", task: "Creează dicționar facturi {id: {client, suma, data}}. Scrie get_by_client(invoices, client) și get_overdue(invoices, days=30). Scrie o funcție care formatează o factură ca string." },
      { day: 4, title: "Files & CSV", read: "Automate cap. 7–8", task: "Creează facturi.csv cu 10 rânduri. Citește cu csv.DictReader. Filtrează neplătite. Calculează total neplătit. Scrie rezultatele în raport.csv. Verifică că e corect formatat." },
      { day: 5, title: "PDF & web", read: "Automate cap. 9–11", task: "Scrie script care citește un folder cu fișiere .txt (simulate facturi). Pentru fiecare extrage textul și primele 200 caractere. Salvează totul în all_invoices.txt." },
      { day: 6, title: "Anthropic API din Python", read: "Anthropic Python SDK docs", task: "pip install anthropic. Scrie extract_invoice.py: citește text factură, apelează claude-sonnet-4-20250514, parsează răspunsul JSON. Testează cu 3 facturi. Salvează în invoices_extracted.json." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Scrie din memorie un script Python: citește invoices.csv, apelează Claude pentru fiecare rând, parsează răspunsul, salvează în results.json. Rulează fără erori." },
    ],
    checkpoint: "Scrii și rulezi scripturi Python care apelează Anthropic API fără să cauți sintaxa."
  },
  {
    week: 21, phase: 4, phaseTitle: "AI Engineer Ready", color: "#FF4D6D",
    topic: "ML Fundamentals pentru interviu",
    resource: "Grokking Algorithms (cartea ta) + fast.ai lec. 1–5",
    resourceUrl: "https://course.fast.ai",
    days: [
      { day: 1, title: "Algoritmi — Big O", read: "Grokking Algorithms cap. 1–3", task: "Implementează binary_search(arr, target) în Python fără carte. Testează cu 1000 elemente. Calculează: câți pași face binary search vs linear search pentru 1000 elemente? Ce înseamnă O(log n)?" },
      { day: 2, title: "Algoritmi — Hash tables", read: "Grokking Algorithms cap. 4–6", task: "Implementează quicksort. Creează un dict și testează că lookup e O(1). Implementează BFS pe un graf de 5 noduri. Unde apar hash tables în codul tău JS/TS?" },
      { day: 3, title: "K-nearest neighbors", read: "Grokking Algorithms cap. 7–10", task: "Citește cap. 10 — KNN. Implementează knn_classify cu distanță Euclidiană. Testează: clasifică un punct față de 5 puncte existente. Leagă cu cosine similarity din RAG." },
      { day: 4, title: "fast.ai — primul model", read: "fast.ai Lesson 1", task: "Deschide Kaggle → New Notebook. Urmează lecția pas cu pas — nu copia și run all. La fiecare celulă scrie în comentariu ce face. Antrenează modelul. Testează cu o imagine proprie." },
      { day: 5, title: "Training loop", read: "fast.ai Lesson 2–3", task: "Urmează lecțiile. Scrie din memorie structura unui training loop. Explică ce face: optimizer.zero_grad(), loss.backward(), optimizer.step(). Notează: accuracy, loss, de ce diferă pe train vs validation." },
      { day: 6, title: "NLP & clasificare text", read: "fast.ai Lesson 4–5", task: "Antrenează un model de clasificare text pe Kaggle pe un dataset simplu (sentiment analysis). 3 epoci. Evaluează pe validation set. Notează: accuracy, loss, câte minute a durat." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Explică fără să cauți: overfitting, underfitting, learning rate (prea mare vs prea mic), training vs validation split. Scrie explicațiile în GoodNotes — le vei folosi la interviu." },
    ],
    checkpoint: "Explici conceptele ML de bază la interviu și ai antrenat un model real pe Kaggle."
  },
  {
    week: 22, phase: 4, phaseTitle: "AI Engineer Ready", color: "#FF4D6D",
    topic: "Proiect flagship — planificare & core AI",
    resource: "Fără tutorial",
    resourceUrl: null,
    days: [
      { day: 1, title: "Decizie & specificații", read: "Fără lectură", task: "Decide: ECapturo complet SAU un tool AI nou. Scrie 1 pagină: problema rezolvată, cine o folosește, 3 features principale, tech stack cu justificare, cum arată 'done'." },
      { day: 2, title: "Arhitectură pe hârtie", read: "Fără lectură", task: "Desenează: toate paginile, schema DB, API routes (method, path, input, output), fluxul AI (input → procesare → output). Ce e cel mai riscant tehnic? Rezolvă aia primul." },
      { day: 3, title: "Core AI feature", read: "Fără lectură", task: "Implementează feature-ul AI principal (vision + extracție, RAG, sau agent). Nu lucra la UI încă. Testează cu 5 inputs diferite și verifică că output-ul e corect." },
      { day: 4, title: "Core AI feature cont.", read: "Fără lectură", task: "Continuă implementarea feature-ului AI. Dacă ești blocat > 1 zi, simplifică scope-ul. La final de zi: funcționează feature-ul de bază? Da/Nu — notează ce a rămas." },
      { day: 5, title: "Auth + DB", read: "Fără lectură", task: "Adaugă auth (Supabase). Creează schema DB cu RLS. Conectează feature-ul AI la date reale din DB în loc de mock data." },
      { day: 6, title: "UI de bază", read: "Fără lectură", task: "Creează layout-ul de bază și pagina principală cu feature-ul AI integrat. Loading states, error states, empty states — toate trebuie să aibă UI, nu doar happy path." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Feature-ul AI funcționează end-to-end: input real → procesare AI → output afișat în UI. Dacă nu, identifică exact ce lipsește și prioritizează." },
    ],
    checkpoint: "Feature-ul AI funcționează end-to-end cu date reale."
  },
  {
    week: 23, phase: 4, phaseTitle: "AI Engineer Ready", color: "#FF4D6D",
    topic: "Proiect flagship — finalizare & deploy",
    resource: "Fără tutorial",
    resourceUrl: null,
    days: [
      { day: 1, title: "Finalizare UI", read: "Fără lectură", task: "Finalizează toate paginile planificate. Testează fiecare flux complet. Fixează ce nu merge." },
      { day: 2, title: "Eval framework", read: "Fără lectură", task: "Creează eval-dataset.json cu 20 exemple. Scrie run-evals.ts care rulează toate și calculează scorul. Rulează — notează scorul inițial. Adaugă npm run eval în package.json." },
      { day: 3, title: "Îmbunătățire prompt", read: "Fără lectură", task: "Dacă scorul e sub 75%: uită-te la greșeli, identifică pattern-ul, modifică promptul, rulează din nou. Documentează: scor înainte → modificare → scor după." },
      { day: 4, title: "Deploy", read: "Vercel docs", task: "Push pe GitHub (repo public). Deploy pe Vercel. Configurează env variables. Testează TOATE fluxurile în producție. Fixează orice bug găsit în producție." },
      { day: 5, title: "README complet", read: "Fără lectură", task: "Scrie README: 1) Ce face produsul (2-3 fraze). 2) Tech stack cu justificare. 3) Arhitectura AI. 4) Cum rulezi local. 5) Eval results. Adaugă screenshots." },
      { day: 6, title: "Demo video", read: "Fără lectură", task: "Înregistrează maxim 3 minute cu Loom: 30 sec problemă, 1 min demo live, 30 sec arhitectură (arată codul), 30 sec eval results. Nu reînregistra mai mult de 3 ori." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Timer 10 minute. Prezintă proiectul ca la un interviu: problemă → soluție → arhitectură → demo live → eval results → ce ai face diferit. Înregistrează și ascultă-te." },
    ],
    checkpoint: "Proiect live, documentat pe GitHub, demo video gata, prezentare sub 10 minute."
  },
  {
    week: 24, phase: 4, phaseTitle: "AI Engineer Ready", color: "#FF4D6D",
    topic: "Interview Prep",
    resource: "Designing ML Systems — Chip Huyen (cumpără cartea)",
    resourceUrl: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107963/",
    days: [
      { day: 1, title: "Designing ML Systems cap. 1–2", read: "Chip Huyen cap. 1–2", task: "Citește cu notițe active. Pentru fiecare concept: cum se aplică la ECapturo? Notează în GoodNotes." },
      { day: 2, title: "Designing ML Systems cap. 3–4", read: "Chip Huyen cap. 3–4", task: "Citește. Scrie un system design de 1 pagină pentru ECapturo ca și cum l-ai prezenta la interviu." },
      { day: 3, title: "Mock interview — conceptual", read: "Fără lectură", task: "Deschide o conversație nouă cu Claude: 'Ești interviewer AI engineer. Pune-mi 10 întrebări despre RAG, evals, hallucinations, fine-tuning vs prompting. Evaluează fiecare răspuns.' Răspunde fără să cauți." },
      { day: 4, title: "Mock interview — system design", read: "Fără lectură", task: "Prompt Claude: 'Dă-mi o problemă de system design AI: extracție automată din 10.000 facturi/zi.' Ai 45 minute să proiectezi. Desenează pe hârtie. Prezintă lui Claude. Cere feedback." },
      { day: 5, title: "Mock interview — coding", read: "Fără lectură", task: "Prompt Claude: 'Dă-mi 5 exerciții coding pentru AI Engineer junior: Python, string manipulation, API calls, JSON parsing, algoritmi simpli.' Rezolvă fiecare în 15 min maxim." },
      { day: 6, title: "Designing ML Systems cap. 5–8", read: "Chip Huyen cap. 5–8", task: "Citește. Focus pe: feature engineering, deployment, monitoring. Scrie 10 întrebări pe care le-ai putea primi la interviu din aceste capitole." },
      { day: 7, title: "CHECKPOINT", read: "—", task: "CHECKPOINT: Rulează din nou mock interview-ul de la Zi 3. Compară cu prima dată — ce s-a îmbunătățit? Ce mai trebuie lucrat?" },
    ],
    checkpoint: "Răspunzi fluent la întrebări despre RAG, evals, hallucinations, system design AI."
  },
  {
    week: 25, phase: 4, phaseTitle: "AI Engineer Ready", color: "#FF4D6D",
    topic: "CV, LinkedIn & Aplicări",
    resource: "Profilul tău existent",
    resourceUrl: null,
    days: [
      { day: 1, title: "CV actualizat", read: "CV-ul tău actual", task: "Pentru fiecare proiect adaugă metrici: 'Eval accuracy 87% pe 200 facturi', 'RAG cu latency < 2s', 'Reduce costul API cu 40% prin prompt caching'. Headline: 'QA Automation | AI Engineer'." },
      { day: 2, title: "LinkedIn actualizat", read: "Profilul LinkedIn", task: "Headline: 'QA Automation Engineer → AI Engineer | Building AI-powered SaaS'. About: 3 paragrafe — cine ești, ce construiești, ce cauți. Projects: ECapturo cu demo link și tech stack." },
      { day: 3, title: "Lansare publică", read: "Fără lectură", task: "Verifică că ECapturo e live și funcțional. Scrie post LinkedIn: problema rezolvată + demo video + link. Postează. Scopul nu e viral — e să ai ceva concret de arătat la interviu." },
      { day: 4, title: "Aplicări batch 1", read: "LinkedIn + remote.co", task: "Caută: 'AI Engineer', 'LLM Engineer', 'AI Developer', 'QA + AI'. Aplică la 5 roluri. Pentru fiecare customizează paragraful de intro — menționează proiectul relevant pentru ei. Trackează într-un spreadsheet." },
      { day: 5, title: "Aplicări batch 2", read: "LinkedIn + remote.co", task: "Aplică la încă 5 roluri. Total: 10 aplicări. Adaugă în spreadsheet: companie, rol, dată, status." },
      { day: 6, title: "Follow-up & networking", read: "Fără lectură", task: "Cere 2-3 recomandări LinkedIn de la colegi care îți cunosc munca. Conectează-te cu 5 AI Engineers pe LinkedIn. Comentează la 3 posturi relevante din domeniu." },
      { day: 7, title: "CHECKPOINT FINAL", read: "—", task: "CHECKPOINT FINAL: Numără interviurile programate — trebuie să fie minimum 3. Dacă nu: analizează CV-ul și aplicările — unde e problema? Continuă cu aplicări săptămânal." },
    ],
    checkpoint: "Minimum 3 interviuri tehnice programate. CV și LinkedIn actualizate cu metrici reale."
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const PHASE_COLORS = { 1: "#F5C518", 2: "#00C896", 3: "#7B61FF", 4: "#FF4D6D" };
const PHASE_NAMES = { 1: "JS Solid", 2: "Full Stack", 3: "AI Foundations", 4: "AI Engineer" };

export default function Roadmap() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [completedDays, setCompletedDays] = useState({});
  const [expandedDay, setExpandedDay] = useState(null);

  const weekData = weeks.find(w => w.week === currentWeek);
  const color = weekData?.color || "#F5C518";
  const totalDays = 25 * 7;
  const doneDays = Object.keys(completedDays).length;
  const globalPct = Math.round((doneDays / totalDays) * 100);

  const toggleDay = (key) => {
    setCompletedDays(prev => {
      const next = { ...prev };
      if (next[key]) delete next[key]; else next[key] = true;
      return next;
    });
  };

  const weekDone = weekData?.days.filter(d => completedDays[`${currentWeek}-${d.day}`]).length || 0;
  const isCheckpoint = (day) => day.day === 7;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0A",
      color: "#E8E8E8",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>

      {/* ── TOP BAR ── */}
      <div style={{
        background: "#111",
        borderBottom: "1px solid #1E1E1E",
        padding: "16px 20px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Progress global */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontSize: 13, color: "#555", fontWeight: 600, letterSpacing: 1 }}>
              FULL STACK → AI ENGINEER
            </div>
            <div style={{ fontSize: 13, color: "#555" }}>
              {doneDays} / {totalDays} zile · {globalPct}%
            </div>
          </div>
          <div style={{ height: 3, background: "#1E1E1E", borderRadius: 2, marginBottom: 16 }}>
            <div style={{ height: "100%", width: `${globalPct}%`, background: color, borderRadius: 2, transition: "width 0.3s" }} />
          </div>

          {/* Week selector */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => setCurrentWeek(w => Math.max(1, w - 1))}
              disabled={currentWeek === 1}
              style={{
                width: 36, height: 36, borderRadius: 6,
                border: "1px solid #222", background: "transparent",
                color: currentWeek === 1 ? "#333" : "#888",
                fontSize: 18, cursor: currentWeek === 1 ? "default" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >‹</button>

            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                Săptămâna {currentWeek}
                <span style={{
                  marginLeft: 10, fontSize: 12, fontWeight: 600,
                  color: color, background: color + "22",
                  padding: "2px 8px", borderRadius: 4
                }}>
                  {PHASE_NAMES[weekData?.phase]}
                </span>
              </div>
              <div style={{ fontSize: 15, color: "#666" }}>{weekData?.topic}</div>
            </div>

            <button
              onClick={() => setCurrentWeek(w => Math.min(25, w + 1))}
              disabled={currentWeek === 25}
              style={{
                width: 36, height: 36, borderRadius: 6,
                border: "1px solid #222", background: "transparent",
                color: currentWeek === 25 ? "#333" : "#888",
                fontSize: 18, cursor: currentWeek === 25 ? "default" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >›</button>
          </div>
        </div>
      </div>

      {/* ── WEEK CONTENT ── */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "24px 20px 80px" }}>

        {/* Resource */}
        <div style={{
          padding: "12px 16px",
          background: "#111",
          border: `1px solid ${color}33`,
          borderRadius: 8,
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 10
        }}>
          <span style={{ fontSize: 18 }}>📚</span>
          <div>
            <div style={{ fontSize: 11, color: "#555", letterSpacing: 1, marginBottom: 2 }}>RESURSĂ SĂPTĂMÂNA ASTA</div>
            {weekData?.resourceUrl ? (
              <a href={weekData.resourceUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 15, color: color, textDecoration: "none", fontWeight: 500 }}>
                {weekData?.resource} ↗
              </a>
            ) : (
              <div style={{ fontSize: 15, color: "#888", fontWeight: 500 }}>{weekData?.resource}</div>
            )}
          </div>
        </div>

        {/* Progress săptămână */}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#555", marginBottom: 8 }}>
          <span>Progres săptămână</span>
          <span style={{ color: weekDone === 7 ? color : "#555" }}>{weekDone}/7 zile</span>
        </div>
        <div style={{ height: 4, background: "#1A1A1A", borderRadius: 2, marginBottom: 24 }}>
          <div style={{ height: "100%", width: `${(weekDone / 7) * 100}%`, background: color, borderRadius: 2, transition: "width 0.3s" }} />
        </div>

        {/* Day cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {weekData?.days.map(day => {
            const key = `${currentWeek}-${day.day}`;
            const done = !!completedDays[key];
            const isOpen = expandedDay === key;
            const checkpoint = isCheckpoint(day);

            return (
              <div key={key} style={{
                borderRadius: 10,
                border: `1px solid ${done ? color + "55" : checkpoint ? color + "33" : "#1E1E1E"}`,
                background: done ? color + "08" : checkpoint ? "#111" : "#0E0E0E",
                overflow: "hidden",
                transition: "border-color 0.2s"
              }}>
                {/* Card header — always visible */}
                <div
                  onClick={() => setExpandedDay(isOpen ? null : key)}
                  style={{
                    padding: "16px 18px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 14
                  }}
                >
                  {/* Checkbox */}
                  <div
                    onClick={(e) => { e.stopPropagation(); toggleDay(key); }}
                    style={{
                      width: 24, height: 24, borderRadius: 5, flexShrink: 0,
                      border: `2px solid ${done ? color : "#2E2E2E"}`,
                      background: done ? color : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, color: "#000", cursor: "pointer",
                      transition: "all 0.15s"
                    }}
                  >
                    {done ? "✓" : ""}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Day label */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <span style={{
                        fontSize: 12, fontWeight: 700,
                        color: checkpoint ? color : "#555",
                        letterSpacing: 0.5
                      }}>
                        {checkpoint ? "🏁 ZI 7 — CHECKPOINT" : `ZI ${day.day}`}
                      </span>
                    </div>
                    {/* Title */}
                    <div style={{
                      fontSize: 17, fontWeight: 600,
                      color: done ? "#555" : "#E8E8E8",
                      textDecoration: done ? "line-through" : "none",
                      lineHeight: 1.3
                    }}>
                      {day.title}
                    </div>
                    {/* Read hint */}
                    {day.read && day.read !== "—" && !isOpen && (
                      <div style={{ fontSize: 13, color: "#444", marginTop: 3 }}>
                        📖 {day.read}
                      </div>
                    )}
                  </div>

                  <div style={{
                    fontSize: 18, color: "#333",
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s", flexShrink: 0
                  }}>▾</div>
                </div>

                {/* Expanded task */}
                {isOpen && (
                  <div style={{ borderTop: `1px solid #1A1A1A`, padding: "16px 18px" }}>
                    {day.read && day.read !== "—" && (
                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 12, color: "#444", letterSpacing: 1, marginBottom: 6 }}>📖 CITEȘTE AZI</div>
                        <div style={{ fontSize: 15, color: "#888" }}>{day.read}</div>
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: 12, color: "#444", letterSpacing: 1, marginBottom: 8 }}>
                        {checkpoint ? "🏁 CHECKPOINT" : "🔨 EXERCIȚIU"}
                      </div>
                      <div style={{
                        fontSize: 16, color: "#D0D0D0", lineHeight: 1.8,
                        padding: "14px 16px",
                        background: "#080808",
                        borderRadius: 8,
                        borderLeft: `3px solid ${color}`
                      }}>
                        {day.task}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleDay(key)}
                      style={{
                        marginTop: 14, padding: "10px 20px",
                        borderRadius: 6, border: `1px solid ${done ? "#222" : color}`,
                        background: done ? "transparent" : color,
                        color: done ? "#555" : "#000",
                        fontSize: 14, fontWeight: 600, cursor: "pointer",
                        fontFamily: "inherit"
                      }}
                    >
                      {done ? "Marchează ca neterminat" : "✓ Am terminat ziua asta"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Checkpoint banner */}
        {weekData?.checkpoint && (
          <div style={{
            marginTop: 20,
            padding: "14px 18px",
            background: "#111",
            borderRadius: 8,
            border: `1px solid ${color}33`
          }}>
            <div style={{ fontSize: 12, color: "#555", letterSpacing: 1, marginBottom: 6 }}>
              🏁 CHECKPOINT SĂPTĂMÂNA {currentWeek}
            </div>
            <div style={{ fontSize: 15, color: "#888", lineHeight: 1.6 }}>
              {weekData.checkpoint}
            </div>
          </div>
        )}

        {/* Week nav bottom */}
        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          {currentWeek > 1 && (
            <button onClick={() => setCurrentWeek(w => w - 1)} style={{
              flex: 1, padding: "13px", borderRadius: 8,
              border: "1px solid #222", background: "transparent",
              color: "#666", fontSize: 15, cursor: "pointer", fontFamily: "inherit"
            }}>
              ← Săptămâna {currentWeek - 1}
            </button>
          )}
          {currentWeek < 25 && (
            <button onClick={() => setCurrentWeek(w => w + 1)} style={{
              flex: 1, padding: "13px", borderRadius: 8,
              border: `1px solid ${color}`, background: "transparent",
              color: color, fontSize: 15, cursor: "pointer", fontWeight: 600, fontFamily: "inherit"
            }}>
              Săptămâna {currentWeek + 1} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
