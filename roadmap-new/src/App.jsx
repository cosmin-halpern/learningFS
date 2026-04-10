import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "JavaScript Solid",
    subtitle: "Umple găurile din fundație",
    weeks: "1–8",
    color: "#F5C518",
    textColor: "#000",
    goal: "La final înțelegi 100% fiecare linie de JS din proiectele tale",
    modules: [
      {
        id: "1-1",
        week: "1–2",
        topic: "JavaScript Fundamentals — variabile, funcții, arrays, objects",
        books: ["JavaScript: The Definitive Guide (cap. 3–6, referință)"],
        online: "javascript.info — Cap. 2 (Fundamentals) + Cap. 4 (Objects) + Cap. 5 (Data types)",
        onlineUrl: "https://javascript.info",
        checkpoint: "Scrii o funcție JS din memorie care transformă un array de obiecte fără să cauți sintaxa",
        todos: [
          { id: "1-1-1", day: "Zi 1", text: "Citește javascript.info 2.1–2.7. Exercițiu: 1) Creează test.js. 2) Declară 3 variabile cu let, const, var și observă diferențele. 3) Scrie o funcție care primește două numere și returnează suma, diferența și produsul lor. 4) Testează cu console.log." },
          { id: "1-1-2", day: "Zi 2", text: "Citește javascript.info 2.8–2.15. Exercițiu: 1) Scrie un loop care iterează de la 1 la 10 și printează doar numerele pare. 2) Scrie o funcție arrow care primește un string și returnează lungimea lui. 3) Rescrie aceeași funcție ca function declaration. Observă diferența." },
          { id: "1-1-3", day: "Zi 3", text: "Citește javascript.info 4.1–4.4. Exercițiu: 1) Creează un obiect factura cu proprietățile: id, client, suma, data. 2) Adaugă o metodă descriere() care returnează un string formatat. 3) Creează 3 facturi și pune-le într-un array. 4) Accesează proprietățile cu dot notation și bracket notation." },
          { id: "1-1-4", day: "Zi 4", text: "Citește javascript.info 5.1–5.3. Exercițiu: 1) Pornești de la array-ul de 3 facturi de ieri. 2) Folosește .filter() să returnezi doar facturile peste 500 RON. 3) Folosește .map() să returnezi doar numele clienților. 4) Folosește .reduce() să calculezi totalul tuturor facturilor. 5) Înlănțuiește toate trei într-o singură expresie." },
          { id: "1-1-5", day: "Zi 5", text: "Citește javascript.info 5.4–5.7. Exercițiu: 1) Destructurează obiectul factura: const { client, suma } = factura. 2) Creează un Map cu clientId → numeClient. 3) Creează un Set din array-ul de clienți (elimină duplicatele). 4) Folosește spread operator să combini două array-uri de facturi." },
          { id: "1-1-6", day: "Zi 6", text: "Citește javascript.info 4.5–4.8 — Object methods, optional chaining. Exercițiu: 1) Ai const user = { nume: 'Ion', adresa: { oras: 'București' } }. 2) Accesează user?.adresa?.oras — ce se întâmplă dacă adresa lipsește? 3) Scrie const port = config?.port ?? 3000 și explică ce face ??. 4) Folosește spread să copiezi un obiect și să suprascrii o proprietate: {...factura, suma: 999}. 5) Fă exercițiile de pe javascript.info la finalul capitolelor." },
          { id: "1-1-7", day: "Zi 7", text: "Citește javascript.info 5.8–5.12 — Date, JSON, Object methods. Exercițiu: 1) Creează o dată cu new Date() și formatează-o ca 'DD/MM/YYYY'. 2) Convertește un obiect factură la JSON cu JSON.stringify(). 3) Parsează un string JSON cu JSON.parse(). 4) Folosește Object.keys(), Object.values(), Object.entries() pe un obiect factură și explică ce returnează fiecare." },
          { id: "1-1-8", day: "Zi 8", text: "JS Definitive Guide cap. 3–4 — citit selectiv ca referință. Exercițiu: 1) Caută în carte: type coercion. 2) Testează: '5' + 3, '5' - 3, !!0, !!'' — ce returnează? 3) Explică în scris de ce JavaScript face asta. 4) Scrie 3 exemple reale din cod unde type coercion poate cauza bug-uri neașteptate." },
          { id: "1-1-9", day: "Zi 9", text: "Exercițiu complet fără să cauți: 1) Creează un array de 5 facturi cu {id, client, suma, luna}. 2) Scrie filterByMonth(arr, luna) care returnează facturile din luna dată. 3) Scrie totalByClient(arr, client) care returnează suma totală pentru un client. 4) Scrie topClients(arr) care returnează clienții sortați după total descrescător. 5) Testează toate funcțiile cu console.log." },
          { id: "1-1-10", day: "Zi 10 — CHECKPOINT", text: "1) Deschide un fișier .tsx din ECapturo sau Invoysr. 2) Citește-l complet. 3) Scrie pe hârtie ce face fiecare bloc de cod. 4) Dacă dai de ceva ce nu înțelegi, notează exact ce și reia ziua corespunzătoare. Nu trece mai departe dacă ai mai mult de 2 lucruri neclare." },
        ]
      },
      {
        id: "1-2",
        week: "3–4",
        topic: "JS Avansat — closures, scope, this + Async",
        books: ["JavaScript: The Definitive Guide (cap. 8 — Functions, cap. 13 — Async)"],
        online: "javascript.info — Cap. 6 (Functions avansate) + Cap. 11 (Async)",
        onlineUrl: "https://javascript.info",
        checkpoint: "Explici closures și async/await unui coleg și rescrii orice fetch din proiect fără să cauți",
        todos: [
          { id: "1-2-1", day: "Zi 1", text: "Citește javascript.info 6.1–6.3 — closures și scope. Exercițiu: 1) Scrie o funcție makeCounter() care returnează o altă funcție. 2) La fiecare apel al funcției returnate, contorul crește. 3) Creează 2 contoare independente și demonstrează că nu se influențează. 4) Explică în scris de ce funcționează — asta e un closure." },
          { id: "1-2-2", day: "Zi 2", text: "Citește javascript.info 6.4–6.6 — this și binding. Exercițiu: 1) Creează un obiect timer cu o metodă start(). 2) Pune start() într-un setTimeout și observă că this e undefined. 3) Repară cu arrow function. 4) Repară alternativ cu .bind(this). 5) Explică diferența dintre cele două soluții." },
          { id: "1-2-3", day: "Zi 3", text: "Citește javascript.info 6.7–6.9. Exercițiu: 1) Scrie o funcție delay(fn, ms) care returnează o versiune întârziată a funcției fn. 2) Testează: const delayedLog = delay(console.log, 1000). 3) Apelează delayedLog('hello') și verifică că apare după 1 secundă. 4) Asta e un decorator — notează definiția." },
          { id: "1-2-4", day: "Zi 4", text: "Citește javascript.info 11.1–11.3. Exercițiu: 1) Scrie o funcție fetchUser(id) care returnează un Promise. 2) Simulează un delay cu setTimeout în interiorul Promise-ului. 3) Înlănțuiește: fetchUser(1).then(user => fetchOrders(user.id)).then(orders => console.log(orders)). 4) Adaugă .catch() la final." },
          { id: "1-2-5", day: "Zi 5", text: "Citește javascript.info 11.4–11.5. Exercițiu: 1) Ai 3 funcții care returnează Promise-uri: fetchUser(), fetchOrders(), fetchProducts(). 2) Rulează-le în paralel cu Promise.all și loghează toate rezultatele. 3) Modifică: dacă oricare eșuează, Promise.all eșuează — testează asta. 4) Înlocuiește cu Promise.allSettled și observă diferența." },
          { id: "1-2-6", day: "Zi 6", text: "Citește javascript.info 11.6–11.7. Exercițiu: 1) Ia funcția cu .then() de la Zi 4. 2) Rescrie-o complet cu async/await. 3) Adaugă try/catch pentru error handling. 4) Deschide ECapturo. Găsește un fetch real. Rescrie-l cu .then() pur — fără async/await. Înțelege ce face await de fapt." },
          { id: "1-2-7", day: "Zi 7", text: "JS Definitive Guide cap. 8 — citit selectiv. Exercițiu: 1) Scrie o funcție memoize(fn) care cachează rezultatele. 2) Testează cu o funcție lentă (cu setTimeout). 3) Al doilea apel cu aceiași parametri trebuie să fie instant. 4) Asta combină closures + higher-order functions — identifică ambele concepte în codul tău." },
          { id: "1-2-8", day: "Zi 8", text: "Exercițiu integrat: 1) Deschide ECapturo. 2) Găsește cel mai complex bloc de cod async. 3) Desenează pe hârtie fluxul: ce se apelează, în ce ordine, ce se întâmplă dacă ceva eșuează. 4) Identifică toate closure-urile din acel bloc. 5) Dacă nu găsești niciunul, caută în altă parte din cod." },
          { id: "1-2-9", day: "Zi 9", text: "Exercițiu complet fără să cauți: 1) Scrie fetchAll(urls) care primește un array de URL-uri. 2) Face toate request-urile în paralel. 3) Dacă oricare eșuează, continuă cu celelalte (nu se oprește). 4) Returnează un array cu {url, data, error} pentru fiecare. 5) Testează cu 3 URL-uri reale și unul greșit." },
          { id: "1-2-10", day: "Zi 10 — CHECKPOINT", text: "1) Explică în scris (GoodNotes) ce e un closure — fără să copiezi definiția. 2) Deschide un API route din proiectele tale. 3) Rescrie-l fără async/await — doar .then(). 4) Dacă te blochezi la oricare din pași, reia zilele 1 și 4 înainte să continui." },
        ]
      },
      {
        id: "1-3",
        week: "5–6",
        topic: "React — cum funcționează cu adevărat",
        books: ["Head First Design Patterns (cap. 1–2) — pentru a înțelege pattern-uri în componente"],
        online: "react.dev/learn — Describing UI + Adding Interactivity",
        onlineUrl: "https://react.dev/learn",
        checkpoint: "Știi de ce se rerenderizează o componentă și cum să oprești rerenderizările inutile",
        todos: [
          { id: "1-3-1", day: "Zi 1", text: "Citește react.dev — Your First Component. Exercițiu: 1) Creează un fișier Button.tsx. 2) Exportează o componentă Button care primește prop label. 3) Randează 3 butoane cu label-uri diferite în App.tsx. 4) Verifică în browser că apar corect." },
          { id: "1-3-2", day: "Zi 2", text: "Citește react.dev — JSX + Props. Exercițiu: 1) Creează o componentă InvoiceCard cu props: client, suma, data. 2) Stilizează-o cu Tailwind — border, padding, text. 3) Randează 3 InvoiceCard-uri cu date diferite. 4) Adaugă un prop opțional isPaid cu valoare default false care schimbă culoarea border-ului." },
          { id: "1-3-3", day: "Zi 3", text: "Citește react.dev — Conditional rendering + Lists. Exercițiu: 1) Ai un array de 5 facturi. 2) Randează lista cu .map() — fiecare cu key unic. 3) Adaugă un buton 'Arată doar neplătite'. 4) Când e apăsat, lista se filtrează. 5) Dacă lista e goală, arată un mesaj 'Nicio factură găsită'." },
          { id: "1-3-4", day: "Zi 4", text: "Citește react.dev — useState. Exercițiu: 1) Creează un form cu input pentru client și sumă. 2) Controlează ambele câmpuri cu useState. 3) La submit, adaugă factura în array-ul de facturi (tot cu useState). 4) Lista se actualizează instant. 5) Curăță form-ul după submit." },
          { id: "1-3-5", day: "Zi 5", text: "Citește react.dev — State as snapshot. Exercițiu: 1) Scrie un buton care face +1 de 3 ori în același handler: setCount(count+1); setCount(count+1); setCount(count+1). 2) Observă că adaugă doar 1, nu 3. 3) Repară cu forma funcțională: setCount(c => c+1). 4) Explică în scris de ce funcționează acum." },
          { id: "1-3-6", day: "Zi 6", text: "Citește react.dev — useEffect. Exercițiu: 1) Adaugă un useEffect care loghează 'rendered' la fiecare render. 2) Adaugă dependency array gol [] — loghează doar la mount. 3) Adaugă suma în dependency array — loghează când suma se schimbă. 4) Adaugă un cleanup care loghează 'cleanup'. 5) Observă ordinea în consolă." },
          { id: "1-3-7", day: "Zi 7", text: "Citește react.dev — Lifting state up. Exercițiu: 1) Ai 2 componente surori: InvoiceList și InvoiceTotal. 2) Mută state-ul de facturi în componenta părinte. 3) Pasează lista la InvoiceList ca prop. 4) Pasează totalul calculat la InvoiceTotal ca prop. 5) Adaugă o factură din InvoiceList și verifică că totalul se actualizează." },
          { id: "1-3-8", day: "Zi 8", text: "Head First Design Patterns cap. 1–2. Exercițiu: 1) Citește despre Observer pattern. 2) Identifică unde React folosește Observer (hint: useState + re-render). 3) Scrie în GoodNotes: ce pattern-uri recunoști în codul React pe care l-ai scris săptămâna asta." },
          { id: "1-3-9", day: "Zi 9", text: "Exercițiu complet fără tutorial: 1) Creează un mini-dashboard cu 3 componente: FilterBar, InvoiceList, Summary. 2) FilterBar are un input de search și un select pentru lună. 3) InvoiceList afișează facturile filtrate. 4) Summary arată totalul facturilor vizibile. 5) Toate comunică prin state în componenta părinte." },
          { id: "1-3-10", day: "Zi 10 — CHECKPOINT", text: "1) Deschide o componentă React din ECapturo. 2) Identifică: toate useState-urile, toate useEffect-urile, ce props primește, ce props pasează mai departe. 3) Explică cu voce tare de ce se rerenderizează componenta. 4) Dacă nu poți răspunde la oricare, reia zilele 4–6." },
        ]
      },
      {
        id: "1-4",
        week: "7–8",
        topic: "Next.js — routing, API routes, server vs client",
        books: ["HTML & CSS — Jon Duckett (recitit rapid, cap. 1–8, pentru fundație solidă)"],
        online: "nextjs.org/docs — App Router fundamentals",
        onlineUrl: "https://nextjs.org/docs",
        checkpoint: "Știi diferența dintre Server Component și Client Component și când folosești fiecare",
        todos: [
          { id: "1-4-1", day: "Zi 1", text: "Citește Next.js docs — App Router overview. Exercițiu: 1) Desenează pe hârtie arhitectura App Router: root layout, page.tsx, nested routes. 2) Creează un proiect nou Next.js cu npx create-next-app. 3) Adaugă 3 rute: /, /facturi, /facturi/[id]. 4) Verifică că funcționează în browser." },
          { id: "1-4-2", day: "Zi 2", text: "Citește Next.js docs — Layouts + Pages. Exercițiu: 1) Creează un layout.tsx pentru /facturi cu un sidebar. 2) Sidebar-ul conține linkuri de navigare cu <Link>. 3) Fiecare pagină de factură afișează params.id în titlu. 4) Stilizează cu Tailwind astfel încât layout-ul să persistă între pagini." },
          { id: "1-4-3", day: "Zi 3", text: "Citește Next.js docs — Server vs Client Components. Exercițiu: 1) Creează o componentă ServerTime care afișează ora curentă — fă-o Server Component. 2) Creează un Counter cu useState — trebuie să fie Client Component ('use client'). 3) Combină-le: ServerTime în interiorul paginii, Counter ca sub-componentă. 4) Explică în scris de ce ServerTime nu poate folosi useState." },
          { id: "1-4-4", day: "Zi 4", text: "Citește Next.js docs — Data Fetching. Exercițiu: 1) Într-o Server Component, fetch date de la https://jsonplaceholder.typicode.com/todos. 2) Adaugă { next: { revalidate: 60 } } la fetch — revalidare la 60 secunde. 3) Afișează primele 10 rezultate. 4) Adaugă loading.tsx pentru pagina respectivă. 5) Adaugă error.tsx." },
          { id: "1-4-5", day: "Zi 5", text: "Citește Next.js docs — Route Handlers (API Routes). Exercițiu: 1) Creează app/api/facturi/route.ts. 2) GET returnează un array de facturi mock. 3) POST primește { client, suma } și adaugă factura. 4) Adaugă validare: dacă suma lipsește, returnează 400 cu mesaj de eroare. 5) Testează cu curl sau Postman." },
          { id: "1-4-6", day: "Zi 6", text: "Jon Duckett HTML&CSS cap. 1–8 — recitit rapid. Exercițiu: 1) Ia pagina /facturi din proiectul tău. 2) Fă layout-ul responsive: pe mobile e o coloană, pe desktop două coloane. 3) Folosește doar Tailwind (nu CSS custom). 4) Testează în DevTools la diferite dimensiuni de ecran." },
          { id: "1-4-7", day: "Zi 7", text: "Exercițiu integrat: 1) Adaugă o pagină /facturi/nou cu un form. 2) Form-ul are câmpuri pentru client, sumă, dată. 3) La submit, face POST la /api/facturi. 4) Dacă succees, redirectează la /facturi. 5) Dacă eroare, afișează mesajul de eroare lângă câmpul respectiv." },
          { id: "1-4-8", day: "Zi 8", text: "Citește Next.js docs — Middleware. Exercițiu: 1) Creează middleware.ts în root. 2) Protejează toate rutele /facturi — dacă userul nu e logat, redirect la /login. 3) Testează: accesează /facturi fără să fii logat. 4) Logează-te și verifică că funcționează normal." },
          { id: "1-4-9", day: "Zi 9", text: "Citește Next.js docs — Image + Font optimization. Exercițiu: 1) Înlocuiește orice <img> din proiect cu <Image> din next/image. 2) Adaugă un font Google cu next/font. 3) Deschide DevTools → Network tab. 4) Compară dimensiunea imaginilor înainte și după. 5) Notează diferența." },
          { id: "1-4-10", day: "Zi 10 — CHECKPOINT", text: "1) Fără să cauți, explică în scris: ce e SSR, SSG, ISR și când folosești fiecare. 2) Deschide un proiect Next.js existent. 3) Identifică: care componente sunt Server, care sunt Client și de ce. 4) Dacă nu poți explica SSR/SSG/ISR, reia zilele 3–4 înainte să continui." },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Full Stack Independent",
    subtitle: "Construiești de la 0 fără ajutor",
    weeks: "9–20",
    color: "#00C896",
    textColor: "#000",
    goal: "Poți construi orice SaaS de la 0: auth, DB, API, UI, plăți — singur",
    modules: [
      {
        id: "2-1",
        week: "9–10",
        topic: "Baze de date — SQL & Supabase în profunzime",
        books: ["Seven Databases in Seven Weeks (primele 2 capitole — PostgreSQL)"],
        online: "sqlzoo.net + Supabase docs — Database section",
        onlineUrl: "https://sqlzoo.net",
        checkpoint: "Scrii queries cu JOIN, GROUP BY, subqueries fără să cauți sintaxa",
        todos: [
          { id: "2-1-1", day: "Zi 1", text: "sqlzoo.net — SELECT basics. Exercițiu după: 1) Deschide Supabase SQL editor. 2) Creează un tabel facturi cu: id, client_id, suma, created_at, is_paid. 3) Inserează 5 rânduri de test manual. 4) Scrie SELECT * FROM facturi. 5) Scrie SELECT client_id, suma FROM facturi WHERE suma > 500." },
          { id: "2-1-2", day: "Zi 2", text: "sqlzoo.net — SELECT from World. Exercițiu: 1) Scrie un query care returnează facturile din ultima lună: WHERE created_at > NOW() - INTERVAL '30 days'. 2) Sortează după sumă descrescător: ORDER BY suma DESC. 3) Limitează la primele 3: LIMIT 3. 4) Combină toate trei într-un singur query." },
          { id: "2-1-3", day: "Zi 3", text: "sqlzoo.net — SELECT within SELECT. Exercițiu: 1) Creează un tabel clienti cu id și nume. 2) Scrie un query cu subquery: SELECT * FROM facturi WHERE client_id IN (SELECT id FROM clienti WHERE nume LIKE 'Ion%'). 3) Rescrieți cu JOIN în loc de subquery. 4) Explică în scris când preferi subquery vs JOIN." },
          { id: "2-1-4", day: "Zi 4", text: "sqlzoo.net — SUM și JOIN. Exercițiu: 1) Scrie un JOIN între facturi și clienti pentru a obține numele clientului la fiecare factură. 2) Adaugă GROUP BY client pentru a obține totalul per client. 3) Adaugă HAVING total > 1000 pentru a filtra clienții cu total mare. 4) Adaugă COUNT(*) pentru a vedea câte facturi are fiecare client." },
          { id: "2-1-5", day: "Zi 5", text: "Seven Databases — PostgreSQL ziua 1. Exercițiu: 1) Adaugă un index pe coloana client_id din facturi: CREATE INDEX idx_client_id ON facturi(client_id). 2) Rulează EXPLAIN ANALYZE pe un query cu și fără index. 3) Compară timpii. 4) Notează în GoodNotes când are sens să adaugi un index." },
          { id: "2-1-6", day: "Zi 6", text: "Supabase docs — Tables și Relationships. Exercițiu: 1) Adaugă o foreign key de la facturi.client_id la clienti.id prin Supabase UI. 2) Testează că nu poți șterge un client cu facturi existente (integritate referențială). 3) Adaugă ON DELETE CASCADE și testează din nou. 4) Decide care comportament e corect pentru ECapturo." },
          { id: "2-1-7", day: "Zi 7", text: "Supabase docs — Row Level Security. Exercițiu: 1) Activează RLS pe tabelul facturi. 2) Adaugă o policy: SELECT permis doar dacă auth.uid() = user_id. 3) Testează din Supabase UI cu un user logat. 4) Adaugă policy pentru INSERT: user_id trebuie să fie egal cu auth.uid(). 5) Testează că un user nu poate vedea facturile altui user." },
          { id: "2-1-8", day: "Zi 8", text: "Exercițiu schema ECapturo: 1) Pe hârtie, proiectează toate tabelele: users, facturi, clienti, produse. 2) Definește toate relațiile și foreign keys. 3) Implementează schema în Supabase. 4) Adaugă RLS pe toate tabelele. 5) Inserează date de test și verifică cu queries că totul funcționează." },
          { id: "2-1-9", day: "Zi 9", text: "Exercițiu queries avansate pe schema ta: 1) Total facturi per client per lună. 2) Clientul cu cele mai multe facturi neplătite. 3) Media sumei facturilor în ultimele 90 de zile. 4) Facturile create săptămâna asta, ordonate după sumă. 5) Scrie toate fără să cauți sintaxa — doar dacă te blochezi complet." },
          { id: "2-1-10", day: "Zi 10 — CHECKPOINT", text: "1) Fără să deschizi docs, scrie din memorie query-ul care returnează top 5 clienți după totalul facturilor din luna curentă, cu numărul de facturi și suma totală. 2) Dacă te blochezi la sintaxa de GROUP BY sau JOIN, reia zilele 3–4. 3) Dacă reușești, ești gata pentru TypeScript." },
        ]
      },
      {
        id: "2-2",
        week: "11–12",
        topic: "TypeScript — tipare corecte, nu de formă",
        books: ["Full Stack Testing — O'Reilly (cap. 1–3, pentru context tipare + testare)"],
        online: "Total TypeScript — Matt Pocock (gratuit)",
        onlineUrl: "https://www.totaltypescript.com/tutorials",
        checkpoint: "TypeScript îți arată erori înainte să rulezi codul, nu după",
        todos: [
          { id: "2-2-1", day: "Zi 1", text: "Total TypeScript — lecțiile 1–5. Exercițiu: 1) Creează types.ts. 2) Definește tipul Factura: { id: string; client: string; suma: number; isPaid: boolean; createdAt: Date }. 3) Definește tipul Client: { id: string; nume: string; email: string }. 4) Creează un array de 3 facturi tipate. 5) Încearcă să adaugi o proprietate inexistentă — observă eroarea TS." },
          { id: "2-2-2", day: "Zi 2", text: "Total TypeScript — lecțiile 6–10. Exercițiu: 1) Definește interface vs type pentru Factura — încearcă amândouă. 2) Extinde interfața cu FacturaPlătită care adaugă datePlată: Date. 3) Creează un union type: Status = 'draft' | 'sent' | 'paid' | 'overdue'. 4) Adaugă Status la tipul Factura. 5) Încearcă să setezi o valoare invalidă și observă eroarea." },
          { id: "2-2-3", day: "Zi 3", text: "Total TypeScript — lecțiile 11–15 (Generics). Exercițiu: 1) Scrie un tip generic ApiResponse<T> = { data: T; error: string | null; loading: boolean }. 2) Folosește-l: ApiResponse<Factura[]> pentru lista de facturi. 3) Scrie o funcție generică fetchData<T>(url: string): Promise<ApiResponse<T>>. 4) Apeleaz-o cu tipul corect și verifică că TypeScript știe exact ce returnează." },
          { id: "2-2-4", day: "Zi 4", text: "Total TypeScript — lecțiile 16–20 (Type narrowing + utility types). Exercițiu: 1) Folosește Partial<Factura> pentru un form de editare (nu toate câmpurile sunt obligatorii). 2) Folosește Pick<Factura, 'id' | 'client'> pentru un dropdown de selecție. 3) Folosește Omit<Factura, 'id'> pentru tipul de creare (fără id generat încă). 4) Scrie o funcție cu type guard: function isFacturăPlătită(f: Factura): f is FacturaPlătită." },
          { id: "2-2-5", day: "Zi 5", text: "Full Stack Testing cap. 1–3. Exercițiu: 1) Citește rapid, notează în GoodNotes ce tipuri de teste există. 2) Scrie primul test cu Jest: 1) npm install jest @types/jest ts-jest. 2) Scrie un test pentru funcția totalByClient din Faza 1. 3) Rulează npm test. 4) Testul trebuie să fie verde." },
          { id: "2-2-6", day: "Zi 6", text: "Exercițiu ECapturo — elimină 'any': 1) Deschide ECapturo. 2) Caută toate aparițiile de 'any' cu Ctrl+Shift+F. 3) Pentru fiecare, înlocuiește cu tipul corect. 4) Tipează toate răspunsurile de la Anthropic API. 5) Tipează toate răspunsurile de la Supabase. 6) Proiectul trebuie să compileze fără erori." },
          { id: "2-2-7", day: "Zi 7", text: "Exercițiu ECapturo — tipează funcțiile: 1) Deschide fiecare fișier .ts/.tsx. 2) Adaugă tipuri explicite la fiecare parametru de funcție. 3) Adaugă tipuri explicite la fiecare return value. 4) Dacă o funcție returnează tipuri diferite, folosește union type. 5) Zero erori TypeScript la final." },
          { id: "2-2-8", day: "Zi 8", text: "Exercițiu Zod: 1) npm install zod. 2) Definește un schema Zod pentru Factura. 3) Adaugă validare în API route POST /api/facturi: const result = FacturaSchema.safeParse(body). 4) Dacă validarea eșuează, returnează 400 cu erorile din result.error. 5) Testează cu un body invalid și verifică că primești eroare clară." },
          { id: "2-2-9", day: "Zi 9", text: "Exercițiu generic complet: 1) Scrie tipul ApiResponse<T> dacă nu l-ai făcut. 2) Scrie o funcție createApiHandler<T>(schema: ZodSchema<T>) care: validează body-ul, returnează eroare dacă invalid, returnează datele tipate dacă valid. 3) Folosește-o în 2 API routes diferite. 4) Verifică că TypeScript inferează corect tipul T în ambele locuri." },
          { id: "2-2-10", day: "Zi 10 — CHECKPOINT", text: "1) Rulează tsc --noEmit în terminal. 2) Trebuie să fie 0 erori. 3) Caută 'any' în tot proiectul — trebuie să fie 0. 4) Deschide un API route și explică în scris ce tip are fiecare variabilă. 5) Dacă ai erori rămase, rezolvă-le înainte să continui." },
        ]
      },
      {
        id: "2-3",
        week: "13–16",
        topic: "Proiect: SaaS de la 0, fără tutorial",
        books: ["Pragmatic Thinking & Learning — Hunt (citit în paralel, 20 min/zi)"],
        online: "Fără tutorial în săptămânile astea",
        onlineUrl: null,
        checkpoint: "Proiectul e live pe un domeniu real și funcționează fără bug-uri vizibile",
        todos: [
          { id: "2-3-1", day: "Săp. 13 Zi 1", text: "Planificare pe hârtie (nu deschizi editorul): 1) Scrie ce problemă rezolvă produsul în 1 frază. 2) Listează toate paginile: /, /login, /dashboard, etc. 3) Desenează schema DB: tabele, coloane, relații. 4) Listează toate API routes de care ai nevoie. 5) Estimează: ce poți termina în 4 săptămâni?" },
          { id: "2-3-2", day: "Săp. 13 Zi 2", text: "Setup din memorie fără copiat: 1) npx create-next-app@latest cu TypeScript + Tailwind + App Router. 2) Creează proiect Supabase nou. 3) Adaugă variabilele de mediu în .env.local. 4) Instalează @supabase/ssr. 5) Configurează clientul Supabase pentru server și client. 6) Verifică că conexiunea funcționează cu un query simplu." },
          { id: "2-3-3", day: "Săp. 13 Zi 3", text: "Autentificare: 1) Creează pagina /login cu form email + parolă. 2) Implementează signUp și signIn cu Supabase Auth. 3) Adaugă middleware.ts care protejează /dashboard. 4) Redirect la /dashboard după login reușit. 5) Redirect la /login dacă nu ești autentificat. 6) Testează ambele fluxuri." },
          { id: "2-3-4", day: "Săp. 13 Zi 4", text: "Schema DB: 1) Creează toate tabelele planificate în Zi 1. 2) Adaugă foreign keys și relații. 3) Activează RLS pe toate tabelele. 4) Scrie policies pentru SELECT, INSERT, UPDATE, DELETE. 5) Testează policies din Supabase UI cu un user de test." },
          { id: "2-3-5", day: "Săp. 13 Zi 5", text: "Primul CRUD complet: 1) Pagina care listează entitatea principală (ex: facturi). 2) Form de creare cu validare Zod. 3) API route POST care inserează în DB. 4) Buton de ștergere cu confirmare. 5) Loading states pentru fiecare operație. 6) Error handling vizibil pentru user." },
          { id: "2-3-6", day: "Săp. 14 Zi 1", text: "Componente reutilizabile: 1) Extrage form-ul de creare într-o componentă separată. 2) Creează un component generic Table<T> care acceptă orice date. 3) Creează un Button component cu variante: primary, secondary, danger. 4) Creează un Modal component reutilizabil. 5) Refactorizează paginile să le folosească." },
          { id: "2-3-7", day: "Săp. 14–15 Zi 2–5", text: "Construcție liberă: 1) Implementează toate paginile planificate. 2) Dacă ești blocat > 30 min, poți căuta — altfel gândești singur. 3) La final de fiecare zi, notează ce ai terminat și ce a mai rămas. 4) Nu sări peste error handling — fiecare operație trebuie să aibă un comportament clar la eroare." },
          { id: "2-3-8", day: "Săp. 15 Zi 1", text: "Stripe: 1) Creează cont Stripe + produs cu preț lunar. 2) Instalează stripe și @stripe/stripe-js. 3) API route POST /api/checkout care creează o Checkout Session. 4) Buton 'Upgrade' în dashboard care redirectează la Stripe. 5) Webhook /api/webhook care ascultă payment.succeeded. 6) Testează cu card de test 4242 4242 4242 4242." },
          { id: "2-3-9", day: "Săp. 15 Zi 2–5", text: "Finisare: 1) Testează manual fiecare flux de la cap la coadă. 2) Fixează orice bug găsit. 3) Adaugă loading skeleton în loc de spinner gol. 4) Verifică că toate erorile afișate sunt human-readable, nu technical. 5) Testează pe mobile — totul trebuie să fie responsive." },
          { id: "2-3-10", day: "Săp. 16 — CHECKPOINT", text: "Deploy: 1) Push pe GitHub. 2) Deploy pe Vercel — conectează repo-ul. 3) Adaugă toate variabilele de mediu în Vercel. 4) Testează toate fluxurile în producție (nu local). 5) Trimite link-ul unui prieten și roagă-l să testeze. 6) Dacă găsește bug-uri, fixează-le înainte să treci la modul următor." },
        ]
      },
      {
        id: "2-4",
        week: "17–20",
        topic: "Backend deeper — webhooks, middleware, rate limiting",
        books: ["Full Stack Testing — O'Reilly (cap. 4–8)"],
        online: "The Odin Project — NodeJS path (selectiv)",
        onlineUrl: "https://www.theodinproject.com/paths/full-stack-javascript",
        checkpoint: "Înțelegi exact ce se întâmplă între browser și baza de date la fiecare request",
        todos: [
          { id: "2-4-1", day: "Zi 1", text: "Node.js fundamentals — context, nu framework. Exercițiu: 1) Deschide un terminal. 2) Rulează node -e \"console.log(process.env, process.platform)\". 3) Creează un fișier script.js care citește un fișier de pe disk cu fs.readFileSync. 4) Rulează cu node script.js. 5) Scopul: să înțelegi că Next.js rulează pe Node.js — nu e magie, e același runtime." },
          { id: "2-4-2", day: "Zi 2", text: "Next.js middleware avansat. Exercițiu: 1) Deschide middleware.ts. 2) Adaugă rate limiting simplu cu un Map în memorie: dacă același IP face > 20 request-uri pe minut, returnează 429. 3) Adaugă header X-RateLimit-Remaining la fiecare răspuns. 4) Testează cu un loop care face 25 request-uri. 5) Notează: de ce un Map în memorie nu e suficient în producție (hint: multiple instances)." },
          { id: "2-4-3", day: "Zi 3", text: "Rate limiting în producție cu Upstash. Exercițiu: 1) Creează cont gratuit pe upstash.com — Redis serverless. 2) npm install @upstash/ratelimit @upstash/redis. 3) Înlocuiește Map-ul din ziua 2 cu Ratelimit din Upstash. 4) Deployează pe Vercel. 5) Testează în producție că rate limiting funcționează. 6) Verifică în dashboard-ul Upstash că request-urile sunt înregistrate." },
          { id: "2-4-4", day: "Zi 4", text: "Webhook Stripe complet și corect. Exercițiu: 1) Instalează Stripe CLI: brew install stripe/stripe-cli/stripe. 2) stripe login. 3) stripe listen --forward-to localhost:3000/api/webhook. 4) În handler, verifică semnătura: stripe.webhooks.constructEvent(rawBody, sig, secret). 5) Tratează checkout.session.completed (nu payment_intent — acela e pentru one-time, ăsta e pentru subscriptions). 6) La eveniment: marchează userul ca subscribed în DB. 7) Testează cu: stripe trigger checkout.session.completed." },
          { id: "2-4-5", day: "Zi 5", text: "Server Actions în Next.js 14 — alternativa modernă la API routes. Exercițiu: 1) Citește docs Next.js despre Server Actions. 2) Convertește un API route POST simplu într-un Server Action. 3) Apelează-l direct din componentă fără fetch. 4) Adaugă revalidatePath după mutație. 5) Compară: când folosești Server Actions vs API routes? Notează răspunsul în GoodNotes." },
          { id: "2-4-6", day: "Zi 6", text: "Testare API cu Vitest (modern, nu Jest). Exercițiu: 1) npm install vitest @vitest/ui. 2) Configurează vitest.config.ts. 3) Scrie un test pentru o funcție de validare din proiect. 4) Scrie un test pentru un Server Action sau API route handler (mock Supabase). 5) Rulează npx vitest — toate verzi. 6) Rulează npx vitest --ui pentru interfața vizuală." },
          { id: "2-4-7", day: "Zi 7", text: "Error monitoring cu Sentry. Exercițiu: 1) Creează cont gratuit pe sentry.io. 2) npm install @sentry/nextjs. 3) Rulează npx @sentry/wizard@latest -i nextjs — configurează automat. 4) Aruncă o eroare deliberată într-o pagină. 5) Verifică că apare în dashboard-ul Sentry cu stack trace complet. 6) Adaugă un custom tag: Sentry.setTag('user_id', userId)." },
          { id: "2-4-8", day: "Zi 8", text: "Playwright E2E. Exercițiu: 1) npm install @playwright/test. 2) npx playwright install. 3) Scrie test: deschide /, verifică că există un buton de login. 4) Scrie test: navighează la /login, completează form cu email de test, verifică redirect la /dashboard. 5) Scrie test pentru fluxul principal al aplicației. 6) Rulează npx playwright test --headed să vezi browserul în acțiune." },
          { id: "2-4-9", day: "Zi 9", text: "Documentare flux complet. Exercițiu: 1) Alege cel mai complex flux din aplicație (ex: upload factură → AI extracție → salvare DB). 2) Desenează pe hârtie fiecare pas cu săgeți. 3) Pentru fiecare pas notează: ce date intră, ce date ies, ce se întâmplă la eroare. 4) Verifică că fiecare punct de eșec are error handling implementat. 5) Dacă găsești un punct fără error handling, implementează-l." },
          { id: "2-4-10", day: "Zi 10 — CHECKPOINT", text: "1) Deschide DevTools → Network tab. 2) Fă operația principală din aplicație. 3) Explică fiecare request: de ce s-a făcut, ce headers are, ce payload, ce response. 4) Pune un console.log în middleware și în API route și urmărește ordinea execuției. 5) Dacă nu poți explica orice pas, reia ziua 9." },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "AI Foundations",
    subtitle: "De la utilizator la inginer AI",
    weeks: "21–32",
    color: "#7B61FF",
    textColor: "#fff",
    goal: "Înțelegi cum funcționează LLM-urile și construiești aplicații AI serioase",
    modules: [
      {
        id: "3-1",
        week: "21–22",
        topic: "Cum funcționează LLM-urile — conceptual",
        books: ["Algorithmic Thinking (primele 3 capitole — pentru context algoritmic)"],
        online: "3Blue1Brown Neural Networks (YouTube) + Andrej Karpathy — Intro to LLMs",
        onlineUrl: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
        checkpoint: "Poți explica tokenization, attention și hallucinations unui coleg fără background tehnic",
        todos: [
          { id: "3-1-1", day: "Zi 1", text: "3Blue1Brown — ep. 1: What is a neural network? Exercițiu după vizionare: 1) Deschide GoodNotes. 2) Desenează o rețea neurală cu 3 layere din memorie. 3) Etichetează: input layer, hidden layers, output layer, weights, activations. 4) Explică în scris: de ce avem nevoie de multiple layere?" },
          { id: "3-1-2", day: "Zi 2", text: "3Blue1Brown — ep. 2: Gradient descent. Exercițiu: 1) Vizionează. 2) În GoodNotes, desenează o curbă de loss function. 3) Marchează: local minimum, global minimum, learning rate prea mare, learning rate potrivit. 4) Explică în scris cu cuvintele tale ce face gradient descent — fără să copiezi definiția." },
          { id: "3-1-3", day: "Zi 3", text: "3Blue1Brown — ep. 3: Backpropagation. Exercițiu: 1) Vizionează de 2 ori dacă e necesar. 2) Scrie în GoodNotes: ce calculează backpropagation și de ce e necesar. 3) Desenează direcția de propagare: forward pass (stânga→dreapta), backward pass (dreapta→stânga). 4) Notează legătura cu chain rule din matematică." },
          { id: "3-1-4", day: "Zi 4", text: "3Blue1Brown — ep. 5–6: Attention + Transformers. Exercițiu: 1) Vizionează ambele. 2) Desenează mecanismul de attention: Query, Key, Value. 3) Explică în scris: de ce attention e mai bun decât RNN pentru text lung. 4) Notează: ce înseamnă 'context window' și de ce are o limită." },
          { id: "3-1-5", day: "Zi 5", text: "Andrej Karpathy — Intro to LLMs (1h). Exercițiu: 1) Vizionează cu notițe active. 2) Scrie: ce e pretraining vs fine-tuning vs RLHF. 3) Scrie: de ce LLM-urile pot părea că 'știu' lucruri. 4) Scrie: 3 limitări fundamentale ale LLM-urilor actuale. 5) Notează: ce face un AI Engineer diferit față de un utilizator normal?" },
          { id: "3-1-6", day: "Zi 6", text: "Tokenization. Exercițiu: 1) Deschide platform.openai.com/tokenizer (funcționează pentru orice LLM). 2) Testează: 'hello' → câte tokene? 'București' → câte tokene? Un emoji → câte tokene? 3) Observă că tokenizarea nu e pe cuvinte. 4) Testează un text în română vs engleză — observă diferența. 5) Explică în scris de ce tokenizarea contează pentru cost și context window." },
          { id: "3-1-7", day: "Zi 7", text: "Hallucinations. Exercițiu: 1) Citește Anthropic blog: 'Core Views on AI Safety'. 2) Întreabă Claude ceva despre care știi că nu are informații corecte. 3) Observă cum răspunde. 4) Scrie în GoodNotes: 3 cauze ale hallucinations și 3 tehnici de mitigare. 5) Leagă cu ce ai învățat despre training — de ce e structural imposibil să elimini complet hallucinations." },
          { id: "3-1-8", day: "Zi 8", text: "Algorithmic Thinking cap. 1–3. Exercițiu: 1) Citește rapid. 2) Pentru fiecare algoritm prezentat, scrie: complexitatea O(n). 3) Identifică care algoritmi apar în ML (hint: k-nearest neighbors). 4) Notează: ce înseamnă O(n²) pentru un dataset de 1 milion de rânduri — de ce contează?" },
          { id: "3-1-9", day: "Zi 9", text: "Sinteză. Exercițiu: 1) Deschide o pagină nouă în GoodNotes. 2) Fără să te uiți la notițe, scrie fluxul complet al unui LLM: de la text input → tokenizare → embedding → attention layers → output → detokenizare → text output. 3) Adaugă: unde apar hallucinations în acest flux. 4) Compară cu notițele tale — ce ai uitat?" },
          { id: "3-1-10", day: "Zi 10 — CHECKPOINT", text: "1) Explică unui prieten (sau înregistrează-te) ce e un transformer — fără jargon tehnic, maxim 2 minute. 2) Explică de ce LLM-urile halucinează — structural, nu superficial. 3) Explică ce e tokenizarea și de ce contează. 4) Dacă te blochezi la oricare, reia ziua corespunzătoare. Nu trece mai departe." },
        ]
      },
      {
        id: "3-2",
        week: "23–24",
        topic: "Anthropic API — în profunzime",
        books: [],
        online: "docs.anthropic.com — complet",
        onlineUrl: "https://docs.anthropic.com",
        checkpoint: "Știi diferența dintre prompt caching, tool use și extended thinking și când folosești fiecare",
        todos: [
          { id: "3-2-1", day: "Zi 1", text: "docs.anthropic.com — Messages API. Exercițiu: 1) Creează un fișier test-api.ts. 2) Instalează @anthropic-ai/sdk. 3) Scrie un call simplu: trimite 'Hello' și loghează răspunsul. 4) Adaugă un system prompt: 'Ești un asistent pentru facturi'. 5) Schimbă modelul la claude-sonnet-4-20250514. 6) Loghează: input tokens, output tokens, cost estimat." },
          { id: "3-2-2", day: "Zi 2", text: "Streaming. Exercițiu: 1) Citește docs despre streaming. 2) Creează API route /api/chat/stream. 3) Folosește stream: true în API call. 4) Returnează un ReadableStream către client. 5) În frontend, consumă stream-ul și afișează textul caracter cu caracter. 6) Testează: trebuie să apară progresiv, nu tot dintr-o dată." },
          { id: "3-2-3", day: "Zi 3", text: "System prompts. Exercițiu: 1) Scrie 5 system prompts diferite pentru același task (extracție facturi). 2) Testează fiecare cu aceleași 3 facturi. 3) Notează: care e mai precis? Care e mai rapid? Care halucinează mai puțin? 4) Documentează în GoodNotes ce tehnici de prompting au funcționat și de ce." },
          { id: "3-2-4", day: "Zi 4", text: "Tool use. Exercițiu: 1) Citește docs despre tool use complet. 2) Definește un tool getFactura(id: string) care caută în Supabase. 3) Trimite un mesaj: 'Arată-mi factura #123'. 4) Claude trebuie să apeleze tool-ul automat. 5) Returnează rezultatul tool-ului și lasă Claude să formuleze răspunsul. 6) Testează cu un id inexistent — ce face Claude?" },
          { id: "3-2-5", day: "Zi 5", text: "Prompt caching. Exercițiu: 1) Citește docs despre caching. 2) Ai un system prompt lung (500+ cuvinte). 3) Adaugă cache_control: { type: 'ephemeral' } pe system prompt. 4) Fă 5 request-uri consecutive. 5) Compară: cache_creation_input_tokens vs cache_read_input_tokens în răspunsuri. 6) Calculează diferența de cost cu și fără cache." },
          { id: "3-2-6", day: "Zi 6", text: "Vision API — direct pentru ECapturo. Exercițiu: 1) Găsește o factură reală (poți fotografia una). 2) Convertește la base64 în Node.js: fs.readFileSync(path).toString('base64'). 3) Trimite imaginea la Claude cu un prompt: 'Extrage: număr factură, dată, furnizor, total, TVA'. 4) Loghează răspunsul. 5) Încearcă să obții răspuns JSON structurat adăugând instrucțiuni în prompt." },
          { id: "3-2-7", day: "Zi 7", text: "Extended thinking. Exercițiu: 1) Citește docs despre extended thinking. 2) Pune o problemă complexă: 'Analizează aceste 5 facturi și identifică anomalii'. 3) Rulează cu și fără thinking: { type: 'enabled', budget_tokens: 5000 }. 4) Compară răspunsurile — e diferența vizibilă? 5) Notează: pentru ce tipuri de probleme merită costul suplimentar?" },
          { id: "3-2-8", day: "Zi 8", text: "Chatbot cu memorie. Exercițiu fără tutorial: 1) Creează o pagină /chat. 2) Menții conversationHistory ca array de { role, content }. 3) La fiecare mesaj nou, adaugi la history și trimiți tot history-ul la API. 4) Streaming activat. 5) Buton 'Clear conversation' care resetează history. 6) Testează că Claude își amintește ce i-ai spus anterior." },
          { id: "3-2-9", day: "Zi 9", text: "Testează limitele. Exercițiu: 1) Trimite un mesaj cu context window aproape plin (100k+ tokens) — ce se întâmplă? 2) Trimite un prompt ambiguu deliberat — cum răspunde? 3) Fă tool use să eșueze (returnează eroare din tool) — cum gestionează Claude eroarea? 4) Testează cu input malformat. 5) Documentează: ce edge cases trebuie să gestionezi în ECapturo?" },
          { id: "3-2-10", day: "Zi 10 — CHECKPOINT", text: "1) Implementează într-un singur API route: tool use + streaming + prompt caching. 2) Tool-ul caută date reale în Supabase. 3) Răspunsul vine în streaming. 4) System prompt-ul e cached. 5) Dacă nu funcționează, debug pas cu pas: mai întâi fără streaming, adaugă streaming, adaugă caching. Nu trece mai departe dacă oricare din trei nu merge." },
        ]
      },
      {
        id: "3-3",
        week: "25–28",
        topic: "Prompt Engineering & Evals",
        books: [],
        online: "Anthropic Prompt Engineering docs + DeepLearning.AI — Evaluating LLM Outputs (gratuit)",
        onlineUrl: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
        checkpoint: "Ai un eval framework funcțional pe un proiect real",
        todos: [
          { id: "3-3-1", day: "Zi 1", text: "Anthropic Prompt Engineering docs — citește complet. Exercițiu: 1) Deschide GoodNotes. 2) Notează toate tehnicile menționate cu câte un exemplu pentru fiecare. 3) Marchează: care tehnici sunt relevante pentru ECapturo? 4) Scrie: ce face un prompt bun vs un prompt prost pentru extracție de date structurate?" },
          { id: "3-3-2", day: "Zi 2", text: "Chain of Thought. Exercițiu: 1) Ia un prompt de extracție factură fără CoT. 2) Testează pe 5 facturi — notează acuratețea. 3) Adaugă la prompt: 'Gândește pas cu pas înainte să răspunzi'. 4) Testează pe aceleași 5 facturi. 5) Compară rezultatele. 6) Notează: pentru ce tipuri de câmpuri ajută CoT cel mai mult?" },
          { id: "3-3-3", day: "Zi 3", text: "Few-shot prompting. Exercițiu: 1) Alege 3 facturi reale cu extracții corecte. 2) Construiește un prompt cu format: 'Exemplu 1: [factură] → [extracție JSON]. Exemplu 2: ... Acum extrage din: [factură nouă]'. 3) Testează pe 5 facturi noi. 4) Compară acuratețea vs zero-shot. 5) Găsește exemplele care ajută cel mai mult." },
          { id: "3-3-4", day: "Zi 4", text: "DeepLearning.AI — Evaluating LLM Outputs, lecțiile 1–3. Exercițiu: 1) Completează lecțiile. 2) Notează: ce tipuri de metrici există (exact match, fuzzy match, LLM-as-judge). 3) Scrie: pentru ECapturo, ce metrică e cea mai relevantă pentru fiecare câmp (număr factură, dată, total, TVA)?" },
          { id: "3-3-5", day: "Zi 5", text: "DeepLearning.AI — lecțiile 4–6. Exercițiu: 1) Completează lecțiile. 2) Scrie un evaluator simplu în TypeScript: function evalExtraction(expected: Factura, actual: Factura): number — returnează scor 0-1. 3) Testează pe 3 perechi expected/actual. 4) Verifică că scorul e 1.0 când sunt identice și 0.0 când sunt complet diferite." },
          { id: "3-3-6", day: "Zi 6", text: "Construiește eval dataset. Exercițiu: 1) Colectează 20 de facturi reale sau generate. 2) Extrage manual câmpurile pentru fiecare: aceasta e 'ground truth'. 3) Salvează în eval-dataset.json: [{ input: 'imagine/text factură', expected: { numar, data, total, tva } }]. 4) Rulează promptul actual pe toate 20. 5) Calculează acuratețea per câmp." },
          { id: "3-3-7", day: "Zi 7", text: "Îmbunătățire iterativă. Exercițiu: 1) Uită-te la facturile unde extracția a greșit. 2) Identifică pattern-ul: ce tip de factură e problematic? 3) Modifică promptul să gestioneze acel caz. 4) Rulează din nou eval-ul complet. 5) Compară scorul: a crescut? 6) Repetă o dată — 2 iterații minime." },
          { id: "3-3-8", day: "Zi 8", text: "Reducing hallucinations. Exercițiu: 1) Citește docs Anthropic despre reducerea hallucinations. 2) Adaugă în promptul tău: 'Dacă un câmp nu e vizibil în factură, returnează null — nu inventa date'. 3) Testează cu o factură unde lipsește TVA-ul. 4) Verifică că returnează null și nu inventează. 5) Testează cu o factură în altă limbă." },
          { id: "3-3-9", day: "Zi 9", text: "Documentează eval framework-ul. Exercițiu: 1) Scrie un script run-evals.ts care: citește eval-dataset.json, rulează promptul pe fiecare, compară cu expected, printează raport. 2) Raportul trebuie să arate: acuratețe per câmp, acuratețe totală, cazurile unde a greșit. 3) Rulează-l și salvează rezultatele. 4) Adaugă în README al proiectului." },
          { id: "3-3-10", day: "Zi 10 — CHECKPOINT", text: "1) Rulează eval-ul complet. 2) Acuratețea trebuie să fie > 80% pe câmpurile principale. 3) Dacă e sub 80%, mai fă o iterație de îmbunătățire a promptului. 4) Demonstrează ciclul complet: modifici promptul → rulezi eval → scorul crește. 5) Dacă nu ai ajuns la ciclul ăsta funcțional, reia zilele 6–7." },
        ]
      },
      {
        id: "3-4",
        week: "29–32",
        topic: "RAG, Embeddings & AI Agents",
        books: [],
        online: "DeepLearning.AI — RAG + Agents short courses (gratuite)",
        onlineUrl: "https://www.deeplearning.ai/short-courses/",
        checkpoint: "Ai un feature cu RAG live într-un proiect real pe care îl demonstrezi la interviu",
        todos: [
          { id: "3-4-1", day: "Zi 1", text: "DeepLearning.AI — RAG course, lecțiile 1–3. Exercițiu: 1) Completează lecțiile. 2) În GoodNotes, desenează arhitectura RAG: document → chunks → embeddings → vector DB → query → retrieval → context → LLM → răspuns. 3) Notează: de ce e RAG mai bun decât a pune tot documentul în context?" },
          { id: "3-4-2", day: "Zi 2", text: "Embeddings în Supabase. Exercițiu: 1) Activează extensia pgvector în Supabase: CREATE EXTENSION vector. 2) Creează tabel: documents(id, content TEXT, embedding vector(1024), metadata JSONB). 3) Notă: folosim 1024 dimensiuni pentru Voyage AI (recomandat cu Anthropic) sau 1536 pentru OpenAI text-embedding-3-small. 4) Instalează @anthropic-ai/sdk sau voyage-ai-client. 5) Generează un embedding pentru un text scurt. 6) Inserează în tabel și verifică că s-a salvat." },
          { id: "3-4-3", day: "Zi 3", text: "Pipeline de indexare. Exercițiu: 1) Scrie funcția chunkText(text, chunkSize, overlap) care împarte textul în bucăți cu overlap. 2) Testează cu un document de 1000 cuvinte și chunkSize=200, overlap=50. 3) Verifică că nu tai cuvinte la mijloc. 4) Generează embeddings pentru fiecare chunk. 5) Inserează toate în Supabase." },
          { id: "3-4-4", day: "Zi 4", text: "Search semantic. Exercițiu: 1) Scrie funcția searchDocuments(query: string): Promise<Chunk[]>. 2) Generează embedding pentru query. 3) Caută în Supabase cu cosine similarity: ORDER BY embedding <=> queryEmbedding LIMIT 5. 4) Testează: caută 'total de plată' și verifică că găsește chunks despre sume. 5) Compară cu un search clasic cu ILIKE — ce e mai precis?" },
          { id: "3-4-5", day: "Zi 5", text: "DeepLearning.AI — Agents course, lecțiile 1–3. Exercițiu: 1) Completează lecțiile. 2) Desenează diferența: chatbot simplu (input → LLM → output) vs agent (input → LLM → tool decision → tool execution → LLM → output). 3) Notează: când are sens să folosești un agent vs un simplu API call?" },
          { id: "3-4-6", day: "Zi 6", text: "DeepLearning.AI — Agents course, lecțiile 4–6. Exercițiu: 1) Completează. 2) Definește 3 tools pentru un agent de facturi: searchFacturi, getClient, calculateTotal. 3) Scrie schema pentru fiecare tool (name, description, input_schema). 4) Trimite un mesaj și lasă Claude să decidă ce tool să apeleze. 5) Implementează execuția tool-ului și returnarea rezultatului." },
          { id: "3-4-7", day: "Zi 7", text: "Agent complet. Exercițiu: 1) Construiește un agent care răspunde la întrebări despre facturi: 'Care e totalul facturilor din luna trecută?' 2) Agentul trebuie să: înțeleagă întrebarea → apeleze tool-ul potrivit → primească date din DB → formuleze răspuns natural. 3) Testează cu 5 întrebări diferite. 4) Notează unde agentul eșuează și de ce." },
          { id: "3-4-8", day: "Zi 8", text: "RAG în ECapturo. Exercițiu: 1) Adaugă o pagină /chat în ECapturo. 2) La upload factură: extrage textul, împarte în chunks, generează embeddings, stochează în Supabase. 3) La întrebare: caută chunks relevante, adaugă ca context în prompt, generează răspuns. 4) Testează: 'Care e numărul facturii uploadate?' — trebuie să găsească răspunsul corect." },
          { id: "3-4-9", day: "Zi 9", text: "Optimizare RAG. Exercițiu: 1) Testează cu chunk sizes diferite: 100, 200, 500 cuvinte. 2) Notează care dă răspunsuri mai bune. 3) Testează cu overlap diferit: 0, 50, 100 cuvinte. 4) Testează cu număr diferit de chunks returnate: 3, 5, 10. 5) Scrie în GoodNotes configurația optimă găsită și de ce funcționează mai bine." },
          { id: "3-4-10", day: "Zi 10 — CHECKPOINT", text: "1) Feature-ul RAG e live în ECapturo în producție. 2) Testează: uploadezi o factură → pui o întrebare despre ea → primești răspuns corect. 3) Dacă nu merge în producție, debuguiești până merge. 4) Înregistrează un demo de 2 minute. 5) Poți explica la interviu: ce e RAG, cum l-ai implementat, ce probleme ai întâmpinat." },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "AI Engineer Ready",
    subtitle: "Portofoliu solid + interviu pregătit",
    weeks: "33–52",
    color: "#FF4D6D",
    textColor: "#fff",
    goal: "Portofoliu demonstrabil, CV actualizat, pregătit pentru interviuri AI engineer",
    modules: [
      {
        id: "4-1",
        week: "33–36",
        topic: "Python pentru AI — rapid și targeted",
        books: ["Automate the Boring Stuff with Python — cap. 1–11", "The Big Book of Small Python Projects — 10 proiecte selectate"],
        online: "fast.ai — Lesson 1–3",
        onlineUrl: "https://course.fast.ai",
        checkpoint: "Scrii un script Python care procesează CSV, apelează Anthropic API și salvează rezultatele",
        todos: [
          { id: "4-1-1", day: "Zi 1", text: "Automate the Boring Stuff — cap. 1–2. Exercițiu: 1) Instalează Python 3.12+. 2) Deschide REPL (python3 în terminal). 3) Testează: variabile, string-uri, numere, print(). 4) Scrie primul script hello.py care printează 'Hello from Python'. 5) Rulează cu python3 hello.py. 6) Dacă știi deja Python basic, sari la cap. 7." },
          { id: "4-1-2", day: "Zi 2", text: "Automate — cap. 3–4. Exercițiu: 1) Scrie o funcție calculate_vat(total, rate=0.19) care returnează TVA-ul. 2) Scrie o funcție process_invoices(invoices: list) care calculează totalul și TVA-ul pentru fiecare. 3) Testează cu o listă de 5 dicționare {client, suma}. 4) Adaugă type hints la funcții." },
          { id: "4-1-3", day: "Zi 3", text: "Automate — cap. 5–6. Exercițiu: 1) Creează un dicționar de facturi {id: {client, suma, data}}. 2) Adaugă funcții: get_by_client(invoices, client), get_overdue(invoices, days=30). 3) Testează fiecare. 4) Scrie o funcție care formatează o factură ca string human-readable." },
          { id: "4-1-4", day: "Zi 4", text: "Automate — cap. 7–8. Exercițiu: 1) Creează facturi.csv cu 10 rânduri: id,client,suma,data,platit. 2) Citește cu csv.DictReader. 3) Filtrează facturile neplătite. 4) Calculează totalul neplătit. 5) Scrie rezultatele într-un nou CSV: raport.csv. 6) Verifică că fișierul e corect formatat." },
          { id: "4-1-5", day: "Zi 5", text: "Automate — cap. 9–11. Exercițiu: 1) Scrie un script care: citește un folder cu PDF-uri de facturi (poți simula cu fișiere .txt). 2) Pentru fiecare fișier, extrage textul. 3) Printează primele 200 de caractere din fiecare. 4) Salvează toate textele extrase într-un singur fișier all_invoices.txt." },
          { id: "4-1-6", day: "Zi 6", text: "fast.ai — Lesson 1. Exercițiu: 1) Deschide Kaggle → New Notebook. 2) Copiază codul din lecție. 3) Rulează pas cu pas — nu copia și run all. 4) La fiecare celulă, scrie în comentariu ce face. 5) Antrenează modelul pe dataset-ul din lecție. 6) Testează cu o imagine proprie." },
          { id: "4-1-7", day: "Zi 7", text: "fast.ai — Lessons 2–3. Exercițiu: 1) Completează lecțiile în Kaggle. 2) Modifică modelul să clasifice alt tip de imagini (ex: tipuri de documente). 3) Antrenează pe cel puțin 2 epoci. 4) Notează: ce e accuracy, ce e loss, de ce diferă pe training vs validation?" },
          { id: "4-1-8", day: "Zi 8", text: "Big Book of Small Python Projects — alege 5 proiecte. Exercițiu: 1) Alege proiecte relevante: File Organizer, Password Generator, Text Statistics, etc. 2) Implementează fiecare complet, nu doar copiezi. 3) Pentru fiecare, adaugă o modificare proprie. 4) Scopul: să te simți confortabil cu Python pentru scripturi reale." },
          { id: "4-1-9", day: "Zi 9", text: "Anthropic API din Python. Exercițiu: 1) pip install anthropic. 2) Scrie extract_invoice.py care: citește o imagine de factură (sau text), apelează Claude claude-sonnet-4-20250514, parsează răspunsul JSON. 3) Testează cu 3 facturi diferite. 4) Salvează rezultatele în invoices_extracted.json. 5) Compară cu implementarea TypeScript — ce e diferit?" },
          { id: "4-1-10", day: "Zi 10 — CHECKPOINT", text: "1) Scrie din memorie un script Python complet: citește invoices.csv, apelează Claude pentru fiecare rând cu textul facturii, parsează răspunsul, salvează în results.json. 2) Rulează — trebuie să funcționeze fără erori. 3) Dacă te blochezi la sintaxa Python, reia zilele 1–3. Dacă te blochezi la API call, reia ziua 9." },
        ]
      },
      {
        id: "4-2",
        week: "37–40",
        topic: "ML Fundamentals — suficient pentru interviu",
        books: ["Grokking Algorithms (complet — e scurt și vizual)", "Algorithmic Thinking (cap. 4–6)"],
        online: "fast.ai — Lessons 4–5 + Anthropic fine-tuning docs",
        onlineUrl: "https://course.fast.ai",
        checkpoint: "Poți explica overfitting, training/validation split și learning rate la interviu",
        todos: [
          { id: "4-2-1", day: "Zi 1", text: "Grokking Algorithms — cap. 1–3. Exercițiu: 1) Citește cap. 1 (Binary search). 2) Implementează binary_search(arr, target) în Python fără să te uiți la carte. 3) Testează cu un array de 1000 elemente. 4) Calculează: câte pași face binary search vs linear search pentru 1000 elemente? 5) Notează: ce înseamnă O(log n) în practică?" },
          { id: "4-2-2", day: "Zi 2", text: "Grokking Algorithms — cap. 4–6. Exercițiu: 1) Implementează quicksort în Python. 2) Testează pe un array de 10 elemente. 3) Creează un dict și testează că lookup e O(1). 4) Implementează BFS pe un graf simplu (5 noduri). 5) Notează: unde apar hash tables în codul tău JS/TS? (hint: objects, Maps)" },
          { id: "4-2-3", day: "Zi 3", text: "Grokking Algorithms — cap. 7–10. Exercițiu: 1) Citește cap. 10 — K-nearest neighbors. 2) Acesta e baza pentru recommendation systems și clasificare. 3) Implementează knn_classify simplu cu distanță Euclidiană. 4) Testează: clasifcă un punct nou față de 5 puncte existente. 5) Notează legătura cu embeddings și cosine similarity din RAG." },
          { id: "4-2-4", day: "Zi 4", text: "fast.ai — Lesson 4: NLP. Exercițiu: 1) Deschide Kaggle notebook. 2) Urmează lecția pas cu pas. 3) Antrenează un model de clasificare text. 4) Testează cu un text scurt propriu. 5) Notează: ce e tokenizarea în contextul ML vs tokenizarea în LLMs — sunt diferite?" },
          { id: "4-2-5", day: "Zi 5", text: "fast.ai — Lesson 5: Training loop. Exercițiu: 1) Urmează lecția. 2) Scrie din memorie structura unui training loop: for epoch in range(n_epochs): for batch in dataloader: pred = model(batch), loss = criterion(pred, labels), optimizer.zero_grad(), loss.backward(), optimizer.step(). 3) Explică ce face fiecare linie." },
          { id: "4-2-6", day: "Zi 6", text: "Fine-tuning vs prompting — decizia corectă. Exercițiu: 1) Citește Anthropic docs despre fine-tuning (docs.anthropic.com/en/docs/build-with-claude/fine-tuning). 2) Notează în GoodNotes: 3 scenarii unde fine-tuning bate prompting și 3 unde prompting e suficient. 3) Pentru ECapturo: ai nevoie de fine-tuning? Argumentează în scris. 4) Calculează estimativ costul de fine-tuning vs prompt engineering pentru 10.000 facturi/lună." },
          { id: "4-2-7", day: "Zi 7", text: "Algorithmic Thinking cap. 4–6. Exercițiu: 1) Citește cap. 4–6. 2) Implementează un algoritm din carte în Python. 3) Notează complexitatea lui O(?) 4) Identifică dacă există un algoritm echivalent în NumPy sau scikit-learn. 5) Compară viteza: implementarea ta vs biblioteca." },
          { id: "4-2-8", day: "Zi 8", text: "Fine-tuning pe Kaggle. Exercițiu: 1) Găsește un dataset de clasificare text pe Kaggle (ex: sentiment analysis). 2) Fine-tunează un model mic (distilbert sau similar) — fast.ai face asta simplu. 3) Antrenează 3 epoci. 4) Evaluează pe validation set. 5) Notează: accuracy, loss, câte minute a durat." },
          { id: "4-2-9", day: "Zi 9", text: "Documentare proces ML. Exercițiu: 1) Deschide GoodNotes. 2) Scrie un 'ML experiment log' pentru fine-tuning-ul de ieri: dataset folosit, arhitectura modelului, hyperparameters (learning rate, batch size, epochs), metrici finale, ce ai fi făcut diferit. 3) Ăsta e formatul pe care trebuie să îl descrii la un interviu." },
          { id: "4-2-10", day: "Zi 10 — CHECKPOINT", text: "1) Fără să cauți, explică: overfitting (ce e, cum îl detectezi, cum îl rezolvi), learning rate (ce e prea mare, ce e prea mic), training vs validation split (de ce e necesar). 2) Dacă te blochezi la oricare, reia lecțiile fast.ai corespunzătoare. 3) Scrie explicațiile în GoodNotes — le vei folosi la interviu." },
        ]
      },
      {
        id: "4-3",
        week: "41–44",
        topic: "Proiect flagship pentru portofoliu",
        books: ["How Cybersecurity Really Works (citit în paralel — context pentru securitate în AI apps)"],
        online: "Fără tutorial",
        onlineUrl: null,
        checkpoint: "Proiectul e live, documentat pe GitHub și îl prezinți în 10 minute la un interviu",
        todos: [
          { id: "4-3-1", day: "Săp. 41 Zi 1", text: "Decizie și specificații. Exercițiu: 1) Decide: ECapturo complet SAU un tool AI nou. 2) Scrie un document de 1 pagină: problema pe care o rezolvă, cine o folosește, ce face produsul (3 features principale). 3) Listează ce tehnologii folosești și de ce. 4) Definește cum arată 'done': ce trebuie să funcționeze pentru a considera proiectul terminat?" },
          { id: "4-3-2", day: "Săp. 41 Zi 2", text: "Arhitectură pe hârtie. Exercițiu: 1) Desenează toate paginile și navigarea dintre ele. 2) Desenează schema DB cu toate tabelele și relațiile. 3) Listează toate API routes cu method, path, ce primesc, ce returnează. 4) Desenează fluxul AI: input → procesare → output. 5) Identifică: ce e cel mai riscant tehnic? Rezolvă aia primul." },
          { id: "4-3-3", day: "Săp. 41 Zi 3–5", text: "Core AI feature. Exercițiu: 1) Implementează feature-ul AI principal (vision + extracție, RAG, sau agent). 2) Nu lucra la UI încă — concentrează-te pe logica AI să funcționeze. 3) Scrie teste manuale: testezi cu 5 inputs diferite și verifici că output-ul e corect. 4) Dacă e blocat > 1 zi, simplifică scope-ul." },
          { id: "4-3-4", day: "Săp. 42", text: "UI și integrare. Exercițiu: 1) Zi 1: Auth + layout de bază. 2) Zi 2–3: Pagina principală cu feature-ul AI integrat. 3) Zi 4: Loading states, error states, empty states — toate trebuie să aibă UI. 4) Zi 5: Testează fiecare flux complet de la început până la sfârșit. Fixează ce nu merge." },
          { id: "4-3-5", day: "Săp. 43 Zi 1–3", text: "Eval framework. Exercițiu: 1) Creează eval-dataset.json cu 20 de exemple pentru feature-ul AI. 2) Scrie run-evals.ts care rulează toate exemplele și calculează scorul. 3) Rulează eval-ul — notează scorul inițial. 4) Îmbunătățește promptul dacă scorul e sub 75%. 5) Rulează din nou. 6) Adaugă un script npm run eval." },
          { id: "4-3-6", day: "Săp. 43 Zi 4–5", text: "Deploy. Exercițiu: 1) Push pe GitHub — repo public. 2) Deploy pe Vercel. 3) Configurează toate env variables. 4) Testează TOATE fluxurile în producție — nu local. 5) Fixează orice bug găsit în producție. 6) Verifică că eval-ul rulează și în producție." },
          { id: "4-3-7", day: "Săp. 44 Zi 1–2", text: "README complet. Exercițiu: 1) Deschide README.md. 2) Secțiunea 1: Ce face produsul (2–3 fraze, pentru non-tehnici). 3) Secțiunea 2: Tech stack cu justificare pentru fiecare alegere. 4) Secțiunea 3: Arhitectura AI — cum funcționează feature-ul principal. 5) Secțiunea 4: Cum rulezi local (comenzi exacte). 6) Secțiunea 5: Eval results — scorul obținut." },
          { id: "4-3-8", day: "Săp. 44 Zi 3", text: "Demo video. Exercițiu: 1) Deschide Loom sau QuickTime. 2) Înregistrează maxim 3 minute. 3) Structura: 30 sec — problema rezolvată. 1 min — demo live al feature-ului AI. 30 sec — arhitectura tehnică (arată codul). 30 sec — eval results. 4) Nu reînregistra mai mult de 3 ori — imperfecțiunile sunt ok." },
          { id: "4-3-9", day: "Săp. 44 Zi 4", text: "GitHub polish. Exercițiu: 1) Adaugă badges în README: build status, demo link, license. 2) Adaugă screenshots sau GIF în README. 3) Adaugă link la demo video. 4) Verifică că repo-ul are: .gitignore corect (fără .env), LICENSE, CONTRIBUTING.md dacă e open source. 5) Pinuiește repo-ul în profilul tău GitHub." },
          { id: "4-3-10", day: "Săp. 44 Zi 5 — CHECKPOINT", text: "Simulare interviu: 1) Setează un timer de 10 minute. 2) Prezintă proiectul ca la un interviu real: problema → soluție → arhitectură → demo live → eval results → ce ai face diferit. 3) Dacă nu termini în 10 minute sau te bâlbâi, mai exersează. 4) Înregistrează prezentarea — ascultă-te. 5) Ești gata când poți prezenta fără ezitări." },
        ]
      },
      {
        id: "4-4",
        week: "45–52",
        topic: "Interview Prep + Lansare",
        books: ["The Art of Clean Code (citit rapid — pentru interviu de coding)", "Deep Work — Cal Newport (recitit, pentru sprint final)"],
        online: "Mock interviews cu Claude",
        onlineUrl: null,
        checkpoint: "Minimum 3 interviuri tehnice programate",
        todos: [
          { id: "4-4-1", day: "Săp. 45–46 Zi 1–3", text: "Designing ML Systems — cap. 1–4. Exercițiu: 1) Citește cap. 1–2 în prima zi cu notițe active. 2) Cap. 3–4 în a doua zi. 3) Pentru fiecare concept, notează: cum se aplică la ECapturo sau produsele tale? 4) Zi 3: scrie un 'system design' de 1 pagină pentru ECapturo ca și cum l-ai prezenta la interviu." },
          { id: "4-4-2", day: "Săp. 45–46 Zi 4–5", text: "Mock interview conceptual (cu Claude). Exercițiu: 1) Deschide o conversație nouă cu Claude. 2) Spune: 'Ești un interviewer AI engineer. Pune-mi 10 întrebări conceptuale despre RAG, evals, hallucinations și fine-tuning vs prompting. Evaluează fiecare răspuns.' 3) Răspunde fără să cauți. 4) Notează ce ai greșit. 5) Reia acele concepte." },
          { id: "4-4-3", day: "Săp. 46 Zi 1–2", text: "Mock interview system design. Exercițiu: 1) Prompt Claude: 'Dă-mi o problemă de system design AI: proiectează un sistem de extracție automată de date din facturi la scară mare (10.000 facturi/zi).' 2) Ai 45 minute să proiectezi. 3) Desenează arhitectura pe hârtie. 4) Prezintă-o lui Claude. 5) Cere feedback." },
          { id: "4-4-4", day: "Săp. 47 Zi 1–3", text: "Designing ML Systems — cap. 5–8. Exercițiu: 1) Citește cu notițe. 2) Focus pe: feature engineering, model selection, deployment, monitoring. 3) Notează: ce din carte e relevant pentru un AI Engineer care lucrează cu LLMs (nu ML clasic)? 4) Scrie 10 întrebări pe care le-ai putea primi la interviu din aceste capitole." },
          { id: "4-4-5", day: "Săp. 47 Zi 4–5", text: "Mock interview coding. Exercițiu: 1) Prompt Claude: 'Dă-mi 5 exerciții de coding relevante pentru un AI Engineer junior: Python, string manipulation, API calls, JSON parsing, algoritmi simpli.' 2) Rezolvă fiecare în 15 minute maxim. 3) Cere feedback pe soluțiile tale. 4) Rezolvă din nou cele unde ai greșit." },
          { id: "4-4-6", day: "Săp. 48 Zi 1–2", text: "CV actualizat. Exercițiu: 1) Deschide CV-ul. 2) Pentru fiecare proiect, adaugă metrici concrete: 'Eval accuracy 87% pe 200 facturi de test', 'RAG cu latency < 2s', 'Reduce costul API cu 40% prin prompt caching'. 3) Adaugă skill-urile noi: RAG, Evals, Anthropic API, pgvector, Next.js 14, TypeScript. 4) Headline: 'QA Automation Engineer | AI Engineer'." },
          { id: "4-4-7", day: "Săp. 48 Zi 3–5", text: "LinkedIn actualizat. Exercițiu: 1) Headline: 'QA Automation Engineer → AI Engineer | Building AI-powered SaaS'. 2) About: 3 paragrafe — cine ești, ce construiești, ce cauți. 3) Projects: adaugă ECapturo cu demo link și tech stack. 4) Cere 2 recomandări de la colegi care știu munca ta. 5) Postează pe LinkedIn despre proiectul tău flagship." },
          { id: "4-4-8", day: "Săp. 49–50", text: "Aplicări. Exercițiu: 1) Caută: 'AI Engineer', 'LLM Engineer', 'AI Developer', 'QA Automation + AI' pe LinkedIn, Upwork, remote.co. 2) Aplică la minimum 10 roluri. 3) Pentru fiecare, customizează paragraful de intro: menționează proiectul relevant pentru ei. 4) Trackează într-un spreadsheet: companie, rol, dată, status." },
          { id: "4-4-9", day: "Săp. 51", text: "Lansare publică ECapturo. Exercițiu: 1) Verifică că produsul e live și funcțional. 2) Scrie un post LinkedIn: problema rezolvată + demo video + link. 3) Postează pe Product Hunt dacă ești pregătit. 4) Anunță pe orice comunitate relevantă. 5) Scopul nu e viral — e să ai ceva concret de arătat la interviu." },
          { id: "4-4-10", day: "Săp. 52 — CHECKPOINT FINAL", text: "1) Numără interviurile programate — trebuie să fie minimum 3. 2) Dacă ai 0 interviuri: analizează CV-ul și aplicările — unde e problema? 3) Dacă ai interviuri dar nu oferte: analizează feedback-ul — ce întrebări te-au prins? 4) Reia mock interviews pentru acele zone. 5) Dacă ai o ofertă: felicitări — planul a funcționat." },
        ]
      }
    ]
  }
];

export default function LearningPlan() {
  const [activePhase, setActivePhase] = useState(1);
  const [expandedModule, setExpandedModule] = useState(null);
  const [completedTodos, setCompletedTodos] = useState({});

  const phase = phases.find(p => p.id === activePhase);

  const getTodoStats = (module) => {
    const total = module.todos.length;
    const done = module.todos.filter(t => completedTodos[t.id]).length;
    return { total, done, pct: Math.round((done / total) * 100) };
  };

  const getPhaseStats = (ph) => {
    const total = ph.modules.reduce((acc, m) => acc + m.todos.length, 0);
    const done = ph.modules.reduce((acc, m) => acc + m.todos.filter(t => completedTodos[t.id]).length, 0);
    return { total, done, pct: Math.round((done / total) * 100) };
  };

  const globalStats = phases.reduce((acc, ph) => {
    const s = getPhaseStats(ph);
    return { total: acc.total + s.total, done: acc.done + s.done };
  }, { total: 0, done: 0 });

  const toggleTodo = (id) => {
    setCompletedTodos(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id]; else next[id] = true;
      return next;
    });
  };

  const toggleModule = (id) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080808",
      fontFamily: "'IBM Plex Mono', monospace",
      color: "#D4D4D4",
    }}>
      {/* Header */}
      <div style={{
        padding: "28px 20px 20px",
        borderBottom: "1px solid #161616",
        position: "sticky",
        top: 0,
        background: "#080808",
        zIndex: 10
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: 4, color: "#444", marginBottom: 6 }}>
            FULL STACK → AI ENGINEER · 52 SĂP · 1.5–2H/ZI
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>Plan de Învățare</div>
            <div style={{ fontSize: 13, color: "#555" }}>
              {globalStats.done}/{globalStats.total} taskuri
            </div>
          </div>

          {/* Global progress */}
          <div style={{ height: 2, background: "#161616", borderRadius: 2, marginBottom: 16 }}>
            <div style={{
              height: "100%",
              width: `${Math.round((globalStats.done / globalStats.total) * 100)}%`,
              background: phase.color,
              borderRadius: 2,
              transition: "width 0.3s"
            }} />
          </div>

          {/* Phase tabs */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {phases.map(p => {
              const s = getPhaseStats(p);
              const active = activePhase === p.id;
              return (
                <button key={p.id} onClick={() => setActivePhase(p.id)} style={{
                  padding: "7px 14px",
                  borderRadius: 3,
                  border: `1px solid ${active ? p.color : "#1E1E1E"}`,
                  background: active ? p.color : "transparent",
                  color: active ? p.textColor : "#555",
                  fontSize: 12,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  letterSpacing: 1,
                  fontWeight: 600,
                  transition: "all 0.15s"
                }}>
                  {String(p.id).padStart(2, "0")} · {p.title.toUpperCase()}
                  {s.done > 0 && <span style={{ marginLeft: 6, opacity: 0.7 }}>({s.pct}%)</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phase body */}
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px 20px 60px" }}>
        {/* Phase goal */}
        <div style={{
          borderLeft: `2px solid ${phase.color}`,
          paddingLeft: 14,
          marginBottom: 24
        }}>
          <div style={{ fontSize: 11, color: phase.color, letterSpacing: 3, marginBottom: 3 }}>
            FAZA {phase.id} · SĂP. {phase.weeks}
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{phase.title}</div>
          <div style={{ fontSize: 14, color: "#555", marginBottom: 10 }}>{phase.subtitle}</div>
          <div style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>🎯 {phase.goal}</div>
        </div>

        {/* Modules */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {phase.modules.map(mod => {
            const stats = getTodoStats(mod);
            const isOpen = expandedModule === mod.id;
            const isComplete = stats.done === stats.total;

            return (
              <div key={mod.id} style={{
                border: `1px solid ${isComplete ? phase.color + "55" : isOpen ? "#252525" : "#141414"}`,
                borderRadius: 6,
                background: isComplete ? phase.color + "06" : "#0E0E0E",
                overflow: "hidden",
                transition: "border-color 0.2s"
              }}>
                {/* Module header */}
                <div
                  onClick={() => toggleModule(mod.id)}
                  style={{
                    padding: "12px 14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 12
                  }}
                >
                  {/* Progress ring (simple) */}
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: `2px solid ${isComplete ? phase.color : "#222"}`,
                    background: isComplete ? phase.color + "22" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: isComplete ? phase.color : "#444",
                    flexShrink: 0,
                    fontWeight: 700
                  }}>
                    {isComplete ? "✓" : `${stats.done}`}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, color: "#444", letterSpacing: 2, marginBottom: 2 }}>
                      SĂP. {mod.week}
                    </div>
                    <div style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: isComplete ? "#555" : "#E0E0E0",
                      textDecoration: isComplete ? "line-through" : "none",
                      lineHeight: 1.3
                    }}>
                      {mod.topic}
                    </div>
                    {/* Mini progress bar */}
                    <div style={{ height: 2, background: "#1A1A1A", borderRadius: 1, marginTop: 6, width: "100%" }}>
                      <div style={{
                        height: "100%",
                        width: `${stats.pct}%`,
                        background: phase.color,
                        borderRadius: 1,
                        transition: "width 0.3s"
                      }} />
                    </div>
                  </div>

                  <div style={{
                    fontSize: 11,
                    color: "#333",
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                    flexShrink: 0
                  }}>▾</div>
                </div>

                {/* Expanded */}
                {isOpen && (
                  <div style={{ borderTop: "1px solid #141414" }}>
                    {/* Resources */}
                    <div style={{ padding: "12px 14px", borderBottom: "1px solid #141414" }}>
                      {mod.books.length > 0 && (
                        <div style={{ marginBottom: 10 }}>
                          <div style={{ fontSize: 11, color: "#444", letterSpacing: 3, marginBottom: 6 }}>📚 CĂRȚI</div>
                          {mod.books.map((b, i) => (
                            <div key={i} style={{ fontSize: 13, color: "#666", marginBottom: 3, paddingLeft: 8, borderLeft: `1px solid ${phase.color}55` }}>
                              {b}
                            </div>
                          ))}
                        </div>
                      )}
                      <div>
                        <div style={{ fontSize: 11, color: "#444", letterSpacing: 3, marginBottom: 6 }}>🌐 ONLINE</div>
                        {mod.onlineUrl ? (
                          <a href={mod.onlineUrl} target="_blank" rel="noopener noreferrer" style={{
                            fontSize: 13, color: phase.color, textDecoration: "none"
                          }}>
                            {mod.online} ↗
                          </a>
                        ) : (
                          <div style={{ fontSize: 13, color: "#666" }}>{mod.online}</div>
                        )}
                      </div>
                    </div>

                    {/* To-do list */}
                    <div style={{ padding: "12px 14px" }}>
                      <div style={{ fontSize: 11, color: "#444", letterSpacing: 3, marginBottom: 10 }}>
                        ✅ TO-DO — {stats.done}/{stats.total} completate
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {mod.todos.map(todo => {
                          const done = !!completedTodos[todo.id];
                          return (
                            <div
                              key={todo.id}
                              onClick={() => toggleTodo(todo.id)}
                              style={{
                                display: "flex",
                                gap: 10,
                                alignItems: "flex-start",
                                cursor: "pointer",
                                padding: "7px 10px",
                                borderRadius: 4,
                                background: done ? phase.color + "0A" : "#111",
                                border: `1px solid ${done ? phase.color + "33" : "#181818"}`,
                                transition: "all 0.15s"
                              }}
                            >
                              <div style={{
                                width: 18,
                                height: 18,
                                borderRadius: 3,
                                border: `1.5px solid ${done ? phase.color : "#2E2E2E"}`,
                                background: done ? phase.color : "transparent",
                                flexShrink: 0,
                                marginTop: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 11,
                                color: phase.textColor,
                                transition: "all 0.15s"
                              }}>
                                {done ? "✓" : ""}
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: "#444", marginBottom: 2, letterSpacing: 1 }}>
                                  {todo.day.toUpperCase()}
                                </div>
                                <div style={{
                                  fontSize: 14,
                                  color: done ? "#444" : "#AAA",
                                  textDecoration: done ? "line-through" : "none",
                                  lineHeight: 1.6
                                }}>
                                  {todo.text}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Checkpoint */}
                      <div style={{
                        marginTop: 14,
                        padding: "12px 14px",
                        background: "#080808",
                        borderRadius: 4,
                        borderLeft: `2px solid ${phase.color}`,
                        fontSize: 14,
                        color: "#666",
                        fontStyle: "italic",
                        lineHeight: 1.7
                      }}>
                        🏁 <strong style={{ color: "#888", fontStyle: "normal" }}>Checkpoint:</strong> "{mod.checkpoint}"
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: 32,
          padding: "14px",
          border: "1px solid #141414",
          borderRadius: 6,
          fontSize: 13,
          color: "#3A3A3A",
          lineHeight: 1.7
        }}>
          Regula de aur: nu treci la modulul următor până nu bifezi checkpoint-ul. Consistent 1.5h/zi bate 6h/weekend în orice zi a săptămânii.
        </div>
      </div>
    </div>
  );
}
