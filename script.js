const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('[data-theme-label]');
const topButton = document.querySelector('[data-top]');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const descriptionMeta = document.querySelector('meta[name="description"]');
const languageToggle = document.querySelector('[data-language-toggle]');

const translations = {
  'Hopp til innhold': 'Skip to content',
  'Studie': 'Education',
  'Frivillig arbeid': 'Volunteering',
  'Arbeidserfaring': 'Work experience',
  'Prosjekter': 'Projects',
  'Kontakt meg': 'Contact',
  'Andreårsstudent på Ingeniørvitenskap og IKT ved NTNU. Ved siden av studiene er jeg nestleder i Teknologiporten og leder i Linjesamarbeidet.': 'Second-year Engineering and ICT student at NTNU. Alongside my studies, I am Vice President of Teknologiporten and Head of Linjesamarbeidet.',
  'Se bakgrunnen min': 'View my background',
  'Last ned CV': 'Download CV',
  'Ingeniørvitenskap og IKT, integrert femårig masterprogram': 'Engineering and ICT, integrated five-year master’s programme',
  'Nadderud videregående skole': 'Nadderud Upper Secondary School',
  'Studiespesialisering med realfag, inkludert IT1 og IT2': 'General studies with a specialisation in science, including IT1 and IT2',
  'Studieprogresjon': 'Academic progress',
  'Emner': 'Courses',
  '1. år': 'Year 1',
  '2. år': 'Year 2',
  'Høst 2025': 'Autumn 2025',
  'Vår 2026 · 5 fag': 'Spring 2026 · 5 courses',
  'Høst 2026': 'Autumn 2026',
  'Matematikk 2C: Diskret matematikk': 'Mathematics 2C: Discrete Mathematics',
  'Matematikk 1: Kalkulus og lineær algebra': 'Mathematics 1: Calculus and Linear Algebra',
  'Informasjonsteknologi, grunnkurs': 'Introduction to Information Technology',
  'Ingeniørvitenskap og IKT, introduksjon': 'Introduction to Engineering and ICT',
  'Matematikk 2B: Lineær algebra, differensialligninger og flervariabel analyse': 'Mathematics 2B: Linear Algebra, Differential Equations and Multivariable Analysis',
  'Statistikk': 'Statistics',
  'Mekanikk 1': 'Mechanics 1',
  'Objektorientert programmering': 'Object-Oriented Programming',
  'Examen philosophicum for naturvitenskap og teknologi': 'Examen Philosophicum for Science and Technology',
  'Exphil ligger normalt høsten 2026 i fagplanen, men ble tatt våren 2026.': 'Examen Philosophicum is normally scheduled for autumn 2026, but I completed it in spring 2026.',
  'Matematikk 3B: Vektoranalyse og funksjonsapproksimasjon': 'Mathematics 3B: Vector Analysis and Function Approximation',
  'Mekanikk 2': 'Mechanics 2',
  'Algoritmer og datastrukturer': 'Algorithms and Data Structures',
  'Bestått': 'Passed',
  'Pågår': 'Ongoing',
  '2025–nå': '2025–present',
  '2026–nå': '2026–present',
  'Nestleder · vår 2026–nå': 'Vice President · spring 2026–present',
  'Prosjektmedarbeider · høst 2025–vår 2026': 'Project team member · autumn 2025–spring 2026',
  'Teknologiporten er NTNUs største multidisiplinære bedriftskontakt og knytter studenter og næringsliv sammen.': 'Teknologiporten is NTNU’s largest multidisciplinary business liaison organisation, connecting students with employers.',
  'Nestleder med ansvar for koordinering, oppfølging og daglig drift sammen med leder.': 'Vice President, responsible for coordination, follow-up and daily operations together with the President.',
  'Planlegger og gjennomfører karrieredager, bedriftspresentasjoner og andre arrangementer mellom studenter og næringsliv.': 'Plans and delivers career fairs, company presentations and other events connecting students and employers.',
  'Hovedansvar for organisasjonens opptak og ansvarlig for Teknologiportens aktiviteter under fadderuken, blant annet en presentasjon for 450 studenter, stands, en egen Teknologiporten-dag og andre arrangementer. Dette bidro til rekordmange søkere til organisasjonen.': 'Led the organisation’s recruitment and Teknologiporten’s activities during orientation week, including a presentation for 450 students, stands, a dedicated Teknologiporten day and other events. This contributed to a record number of applicants.',
  'Leder · vår 2026–nå': 'Head · spring 2026–present',
  'Linjesamarbeidet samler bedriftskontaktene i linjeforeningene ved NTNU Gløshaugen for å samarbeide om felles saker og styrke kontakten med næringslivet.': 'Linjesamarbeidet brings together the business liaison representatives of student associations at NTNU Gløshaugen to coordinate shared matters and strengthen ties with employers.',
  'Tillitsvalgt, leder og kontaktperson.': 'Elected representative, head and primary contact.',
  'Planlegger og leder møter, følger opp representantene og koordinerer saker.': 'Plans and chairs meetings, follows up representatives and coordinates shared matters.',
  'Representerer Linjesamarbeidet i dialog med eksterne aktører og andre studentorganisasjoner.': 'Represents Linjesamarbeidet in dialogue with external stakeholders and other student organisations.',
  'Linjeforeningen for Ingeniørvitenskap og IKT': 'Student association for Engineering and ICT',
  'Medlem av promoteringskomiteen, som profilerer linjeforeningen og aktivitetene dens.': 'Member of the promotion committee, which promotes the student association and its activities.',
  'Vikar og assistent': 'Substitute teacher and assistant',
  'Jobbet som vikarlærer og på SFO, med oppfølging av enkeltelever.': 'Worked as a substitute teacher and in the after-school programme, with individual follow-up of pupils.',
  'Langrennstrener': 'Cross-country ski coach',
  'Hovedtrener og trener ved sommerskiskole.': 'Head coach and coach at a summer ski school.',
  'Gjennomførte også smørekurs for barn og voksne.': 'Also delivered ski-waxing courses for children and adults.',
  'Sommer 2022': 'Summer 2022',
  'Sommerjobb': 'Summer position',
  'Salg av drivstoff, is og kioskvarer.': 'Sales of fuel, ice cream and convenience goods.',
  'IT1 og IT2 · Videregående': 'IT1 and IT2 · Upper secondary school',
  'Nettsider og spill': 'Websites and games',
  'Enkle nettsider og mindre spillprosjekter laget for å lære programmering, webutvikling og objektorientering.': 'Simple websites and small game projects built to learn programming, web development and object-oriented programming.',
  'Objektorientering': 'Object-oriented programming',
  'Gruppeprosjekt': 'Group project',
  'IT2 · Videregående': 'IT2 · Upper secondary school',
  'Forenklet aksjeanalyse': 'Simplified stock analysis',
  'Et gruppeprosjekt som hentet markedsdata gjennom et API og brukte enkel regresjon og glidende gjennomsnitt til å undersøke kursutvikling.': 'A group project that retrieved market data through an API and used simple regression and moving averages to analyse price movements.',
  'Markedsdata': 'Market data',
  'Lineær regresjon': 'Linear regression',
  'Nettleseren din støtter ikke videoavspilling.': 'Your browser does not support video playback.',
  'Se eldre prosjekter på GitHub': 'View older projects on GitHub',
  'Ta kontakt': 'Get in touch',
  'Du når meg på e-post eller LinkedIn.': 'You can reach me by email or LinkedIn.',
  'E-post': 'Email',
  'Til toppen': 'Back to top',
  'Mørk': 'Dark',
  'Lys': 'Light',
  'Marcus Fossum, tilbake til toppen': 'Marcus Fossum, back to top',
  'Hovedmeny': 'Main navigation',
  'Bytt mellom lys og mørk modus': 'Switch between light and dark mode',
  'Portrett av Marcus Fossum': 'Portrait of Marcus Fossum',
  'Portrett av Marcus Fossum i Teknologiporten-genser': 'Portrait of Marcus Fossum wearing a Teknologiporten sweatshirt',
  'Velg studieår': 'Select academic year',
  'Teknologier og prosjekttype': 'Technologies and project type',
  'Kort demonstrasjon av spillet Diddy Jump': 'Short demonstration of the Diddy Jump game',
  'Kort demonstrasjon av aksjeanalyseprogrammet': 'Short demonstration of the stock analysis application',
  'Nærbilde av Marcus Fossum': 'Close-up portrait of Marcus Fossum'
};

const translatableTextNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
  const trimmed = textNode.nodeValue.trim();
  if (!translations[trimmed]) continue;
  translatableTextNodes.push({
    node: textNode,
    no: textNode.nodeValue,
    en: textNode.nodeValue.replace(trimmed, translations[trimmed])
  });
}

const translatableAttributes = [];
const attributeNames = ['aria-label', 'alt', 'title'];
document.querySelectorAll('*').forEach((element) => {
  attributeNames.forEach((name) => {
    const value = element.getAttribute(name);
    if (value && translations[value]) translatableAttributes.push({ element, name, no: value, en: translations[value] });
  });
});

let currentLanguage = localStorage.getItem('marcus-language') === 'en' ? 'en' : 'no';

function updateLanguageButton() {
  document.querySelectorAll('[data-language-option]').forEach((option) => {
    const active = option.dataset.languageOption === currentLanguage;
    if (active) option.setAttribute('aria-current', 'true');
    else option.removeAttribute('aria-current');
  });
  languageToggle?.setAttribute('aria-label', currentLanguage === 'no' ? 'Switch to English' : 'Bytt til norsk');
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  translatableTextNodes.forEach((item) => { item.node.nodeValue = item[language]; });
  translatableAttributes.forEach((item) => { item.element.setAttribute(item.name, item[language]); });
  document.title = language === 'en' ? 'Marcus Fossum — digital CV' : 'Marcus Fossum — digital CV';
  if (descriptionMeta) {
    descriptionMeta.content = language === 'en'
      ? 'Digital CV for Marcus Fossum — Engineering and ICT student at NTNU.'
      : 'Digital CV for Marcus Fossum — student i Ingeniørvitenskap og IKT ved NTNU.';
  }
  updateLanguageButton();
  updateThemeLabel(document.body.classList.contains('dark'));
}

function updateThemeLabel(dark) {
  if (!themeLabel) return;
  if (currentLanguage === 'en') themeLabel.textContent = dark ? 'Light' : 'Dark';
  else themeLabel.textContent = dark ? 'Lys' : 'Mørk';
}

function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeToggle?.setAttribute('aria-pressed', String(dark));
  updateThemeLabel(dark);
  if (themeMeta) themeMeta.content = dark ? '#0e1118' : '#f4f5f7';
}

applyTheme(localStorage.getItem('marcus-theme') === 'dark');
applyLanguage(currentLanguage);

languageToggle?.addEventListener('click', () => {
  const nextLanguage = currentLanguage === 'no' ? 'en' : 'no';
  applyLanguage(nextLanguage);
  localStorage.setItem('marcus-language', nextLanguage);
});

themeToggle?.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  applyTheme(dark);
  localStorage.setItem('marcus-theme', dark ? 'dark' : 'light');
});

topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const yearTabs = [...document.querySelectorAll('[data-year-tab]')];
const yearPanels = [...document.querySelectorAll('[data-year-panel]')];

function selectYear(yearId, focus = false) {
  yearTabs.forEach((tab) => {
    const selected = tab.dataset.yearTab === yearId;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  yearPanels.forEach((panel) => {
    const selected = panel.id === yearId;
    panel.hidden = !selected;
    panel.classList.toggle('active', selected);
  });
}

yearTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectYear(tab.dataset.yearTab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + yearTabs.length) % yearTabs.length;
    selectYear(yearTabs[nextIndex].dataset.yearTab, true);
  });
});

const navLinks = [...document.querySelectorAll('nav a')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  },
  { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.4] }
);

sections.forEach((section) => sectionObserver.observe(section));
