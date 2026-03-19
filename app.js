const traitOptions = [
  { id: 'creative', name: 'Créatif', icon: '🎨', description: 'Imagine vite de nouvelles idées.' },
  { id: 'ambitious', name: 'Ambitieux', icon: '🚀', description: 'Veut réussir et progresser.' },
  { id: 'romantic', name: 'Romantique', icon: '💗', description: 'Aime les relations fortes.' },
  { id: 'geek', name: 'Geek', icon: '🕹️', description: 'Adore la tech et les jeux.' },
  { id: 'calm', name: 'Calme', icon: '🌙', description: 'Reste posé sous pression.' },
  { id: 'sociable', name: 'Sociable', icon: '🫶', description: 'Cherche facilement les autres.' },
  { id: 'mystic', name: 'Mystique', icon: '✨', description: 'Attiré par l’étrange.' },
  { id: 'animal', name: 'Ami des animaux', icon: '🐾', description: 'Crée un lien fort avec eux.' },
  { id: 'orderly', name: 'Ordonné', icon: '🧺', description: 'Aime tout ranger.' },
  { id: 'bold', name: 'Audacieux', icon: '⚡', description: 'Ose les grands choix.' },
];

const aspirationOptions = [
  { id: 'stardom', name: 'Étoile urbaine', icon: '🌆', description: 'Briller dans la ville et les études.' },
  { id: 'legacy', name: 'Dynastie Kims', icon: '👨‍👩‍👧', description: 'Bâtir un foyer légendaire.' },
  { id: 'arcane', name: 'Maître de magie', icon: '🔮', description: 'Apprendre les arts mystiques.' },
  { id: 'night', name: 'Seigneur de la nuit', icon: '🦇', description: 'Dominer la vie vampire.' },
  { id: 'nature', name: 'Âme rurale', icon: '🌾', description: 'Vivre près de la terre.' },
  { id: 'builder', name: 'Grand bâtisseur', icon: '🏗️', description: 'Créer des lieux magnifiques.' },
];

const worlds = [
  {
    id: 'shafak-city',
    name: 'Shafak City',
    icon: '🏙️',
    vibe: 'Vie citadine',
    description: 'Une métropole verticale remplie d’appartements, d’immeubles constructibles et d’un immense lycée.',
    rules: ['Immeubles et appartements uniquement', 'Pas de maisons individuelles', 'Lycée jouable', 'Vie étudiante et urbaine'],
    build: ['Ascenseurs', 'Appartements', 'Toits-terrasses', 'Lofts modernes'],
  },
  {
    id: 'nocteris',
    name: 'Nocteris',
    icon: '🦇',
    vibe: 'Monde vampire',
    description: 'Une ville nocturne pour les Kims vampires, avec manoirs, ruelles sombres et carrière surnaturelle.',
    rules: ['Vie nocturne', 'Pouvoirs vampires', 'Styles gothiques', 'Relations surnaturelles'],
    build: ['Cryptes', 'Manoirs', 'Jardins d’ombre', 'Tours gothiques'],
  },
  {
    id: 'auroria',
    name: 'Auroria',
    icon: '🪄',
    vibe: 'Monde magique',
    description: 'Un royaume lumineux rempli de magie, d’apprentissage des sorts et de lieux enchantés.',
    rules: ['École de magie', 'Sorts et potions', 'Portails mystiques', 'Objets enchantés'],
    build: ['Bibliothèques arcanes', 'Ateliers de potions', 'Tours magiques', 'Jardins enchantés'],
  },
  {
    id: 'verdalia',
    name: 'Verdalia',
    icon: '🌻',
    vibe: 'Campagne',
    description: 'Un monde de campagne avec fermes, grandes maisons, potagers et rythme de vie paisible.',
    rules: ['Grandes parcelles', 'Jardinage', 'Métiers agricoles', 'Vie simple'],
    build: ['Fermes', 'Granges', 'Potagers', 'Maisons familiales'],
  },
];

const jobs = [
  ['Architecte intérieur', 'Conçoit des espaces sublimes et débloque plus d’objets construction.'],
  ['Professeur de lycée', 'Travaille à Shafak et accompagne les jeunes Kims.'],
  ['Développeur de jeux', 'Crée des expériences numériques depuis son bureau.'],
  ['Chef culinaire', 'Monte en compétence cuisine et pâtisserie.'],
  ['Artiste visuel', 'Vend ses œuvres et gagne en notoriété.'],
  ['Auteur', 'Écrit romans, guides et contes magiques.'],
  ['Vampirologue', 'Étudie les créatures de la nuit à Nocteris.'],
  ['Mage chercheur', 'Progresse dans les sorts et l’alchimie à Auroria.'],
  ['Fermier', 'Cultive, récolte et vend à Verdalia.'],
  ['Soigneur animalier', 'Améliore la relation avec chats et chiens.'],
];

const state = {
  selectedTraits: [],
  selectedAspiration: null,
  selectedWorld: null,
  saveKey: 'kims-save-v1',
};

const screens = document.querySelectorAll('.screen');
const loadGameBtn = document.getElementById('loadGameBtn');
const saveStatus = document.getElementById('saveStatus');
const cakForm = document.getElementById('cakForm');
const traitsGrid = document.getElementById('traitsGrid');
const aspirationsGrid = document.getElementById('aspirationsGrid');
const animalPanel = document.getElementById('animalPanel');
const animalPreview = document.getElementById('animalPreview');
const worldGrid = document.getElementById('worldGrid');
const startSimulationBtn = document.getElementById('startSimulationBtn');
const liveSummary = document.getElementById('liveSummary');
const needsGrid = document.getElementById('needsGrid');
const jobSelect = document.getElementById('jobSelect');
const jobDescription = document.getElementById('jobDescription');
const buildCategories = document.getElementById('buildCategories');
const lotRules = document.getElementById('lotRules');
const currentWorldPill = document.getElementById('currentWorldPill');

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle('active', screen.id === id));
}

function updateSaveState() {
  const save = localStorage.getItem(state.saveKey);
  const hasSave = Boolean(save);
  loadGameBtn.disabled = !hasSave;
  saveStatus.textContent = hasSave ? 'Sauvegarde disponible' : 'Aucune sauvegarde';
}

function createChoiceCard(option, type) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'choice-card';
  button.dataset.id = option.id;
  button.innerHTML = `
    <span class="icon">${option.icon}</span>
    <strong>${option.name}</strong>
    <span class="tag">${type}</span>
    <p>${option.description}</p>
  `;
  return button;
}

function renderTraitCards() {
  traitsGrid.innerHTML = '';
  traitOptions.forEach((trait) => {
    const card = createChoiceCard(trait, 'caractère');
    card.addEventListener('click', () => {
      const alreadySelected = state.selectedTraits.includes(trait.name);
      if (alreadySelected) {
        state.selectedTraits = state.selectedTraits.filter((name) => name !== trait.name);
      } else if (state.selectedTraits.length < 3) {
        state.selectedTraits.push(trait.name);
      }
      renderTraitCards();
      updatePreview();
    });
    if (state.selectedTraits.includes(trait.name)) card.classList.add('active');
    traitsGrid.appendChild(card);
  });
}

function renderAspirationCards() {
  aspirationsGrid.innerHTML = '';
  aspirationOptions.forEach((aspiration) => {
    const card = createChoiceCard(aspiration, 'aspiration');
    card.addEventListener('click', () => {
      state.selectedAspiration = aspiration.name;
      renderAspirationCards();
      updatePreview();
    });
    if (state.selectedAspiration === aspiration.name) card.classList.add('active');
    aspirationsGrid.appendChild(card);
  });
}

function renderWorlds() {
  worldGrid.innerHTML = '';
  worlds.forEach((world) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'world-card';
    if (state.selectedWorld?.id === world.id) card.classList.add('selected');
    card.innerHTML = `
      <div class="world-visual"></div>
      <div class="panel-title-row">
        <h3>${world.icon} ${world.name}</h3>
        <span class="tiny-pill">${world.vibe}</span>
      </div>
      <p>${world.description}</p>
      <div class="build-chip-row">${world.rules.map((rule) => `<span class="build-chip">${rule}</span>`).join('')}</div>
    `;
    card.addEventListener('click', () => {
      state.selectedWorld = world;
      startSimulationBtn.disabled = false;
      renderWorlds();
    });
    worldGrid.appendChild(card);
  });
}

function updatePreview() {
  const formData = new FormData(cakForm);
  const firstName = formData.get('firstName') || 'Prénom';
  const lastName = formData.get('lastName') || 'Nom';
  const age = formData.get('age');
  const gender = formData.get('gender');
  const outfit = formData.get('outfit');
  const hairStyle = formData.get('hairStyle');
  document.getElementById('previewName').textContent = `${firstName} ${lastName}`;
  document.getElementById('previewMeta').textContent = `${gender} · ${outfit} · ${hairStyle}`;
  document.getElementById('previewAge').textContent = age;
  document.getElementById('previewTraits').textContent = state.selectedTraits.length ? state.selectedTraits.join(', ') : 'Choisis 3 caractères';
  document.getElementById('previewAspiration').textContent = state.selectedAspiration || 'Choisis une aspiration';

  const animalType = formData.get('animalType');
  animalPanel.classList.toggle('hidden', animalType === 'none');
  if (animalType !== 'none') {
    const emoji = animalType === 'chat' ? '🐱' : '🐶';
    animalPreview.innerHTML = `
      <h4>${emoji} Animal compagnon</h4>
      <p><strong>Nom :</strong> ${formData.get('animalName') || 'Nox'}</p>
      <p><strong>Race :</strong> ${formData.get('animalBreed')}</p>
      <p><strong>Vêtement :</strong> ${formData.get('animalOutfit')}</p>
    `;
  }
}

function randomizeKims() {
  const randomFirstNames = ['Lina', 'Maya', 'Sami', 'Nora', 'Amir', 'Aya'];
  const randomLastNames = ['Darine', 'Voss', 'Lumière', 'Naciri', 'Karel', 'Noor'];
  cakForm.firstName.value = randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)];
  cakForm.lastName.value = randomLastNames[Math.floor(Math.random() * randomLastNames.length)];
  cakForm.age.selectedIndex = Math.floor(Math.random() * cakForm.age.options.length);
  cakForm.gender.selectedIndex = Math.floor(Math.random() * cakForm.gender.options.length);
  cakForm.hairStyle.selectedIndex = Math.floor(Math.random() * cakForm.hairStyle.options.length);
  cakForm.outfit.selectedIndex = Math.floor(Math.random() * cakForm.outfit.options.length);
  state.selectedTraits = [...traitOptions].sort(() => 0.5 - Math.random()).slice(0, 3).map((item) => item.name);
  state.selectedAspiration = aspirationOptions[Math.floor(Math.random() * aspirationOptions.length)].name;
  renderTraitCards();
  renderAspirationCards();
  updatePreview();
}

function buildSimulation() {
  const formData = new FormData(cakForm);
  const selectedJob = jobs[0][0];
  currentWorldPill.textContent = state.selectedWorld.name;
  liveSummary.innerHTML = `
    <h3>${formData.get('firstName')} ${formData.get('lastName')}</h3>
    <p>${formData.get('age')} · ${formData.get('gender')} · ${state.selectedWorld.vibe}</p>
    <p><strong>Aspiration :</strong> ${state.selectedAspiration}</p>
    <p><strong>Caractères :</strong> ${state.selectedTraits.join(', ')}</p>
    <p><strong>Animal :</strong> ${formData.get('animalType') === 'none' ? 'Aucun' : `${formData.get('animalType')} — ${formData.get('animalName')}`}</p>
  `;

  const needs = [
    ['Faim', 72],
    ['Énergie', 64],
    ['Hygiène', 81],
    ['Social', 55],
    ['Divertissement', 76],
    ['Confort', 68],
  ];
  needsGrid.innerHTML = needs.map(([name, value]) => `
    <article class="stat-card">
      <strong>${name}</strong>
      <div class="meter"><span style="width:${value}%"></span></div>
    </article>
  `).join('');

  jobSelect.innerHTML = jobs.map(([name]) => `<option>${name}</option>`).join('');
  jobSelect.value = selectedJob;
  jobDescription.textContent = jobs.find(([name]) => name === selectedJob)[1];
  jobSelect.onchange = () => {
    jobDescription.textContent = jobs.find(([name]) => name === jobSelect.value)[1];
  };

  buildCategories.innerHTML = `
    <div>
      <h4>Objets disponibles</h4>
      <div class="build-chip-row">${state.selectedWorld.build.map((item) => `<span class="build-chip">${item}</span>`).join('')}</div>
    </div>
    <div>
      <h4>Construction de base</h4>
      <div class="build-chip-row">
        <span class="build-chip">Murs</span>
        <span class="build-chip">Fenêtres</span>
        <span class="build-chip">Portes</span>
        <span class="build-chip">Escaliers</span>
        <span class="build-chip">Lits</span>
        <span class="build-chip">Cuisine</span>
      </div>
    </div>
  `;

  lotRules.innerHTML = `
    <h4>Règles du terrain — ${state.selectedWorld.name}</h4>
    <ul>${state.selectedWorld.rules.map((rule) => `<li>${rule}</li>`).join('')}</ul>
  `;
}

function saveGame() {
  const formData = Object.fromEntries(new FormData(cakForm).entries());
  const payload = {
    formData,
    selectedTraits: state.selectedTraits,
    selectedAspiration: state.selectedAspiration,
    selectedWorld: state.selectedWorld,
    selectedJob: jobSelect.value,
  };
  localStorage.setItem(state.saveKey, JSON.stringify(payload));
  updateSaveState();
}

function loadGame() {
  const save = localStorage.getItem(state.saveKey);
  if (!save) return;
  const data = JSON.parse(save);
  Object.entries(data.formData).forEach(([key, value]) => {
    if (cakForm[key]) cakForm[key].value = value;
  });
  state.selectedTraits = data.selectedTraits || [];
  state.selectedAspiration = data.selectedAspiration || null;
  state.selectedWorld = data.selectedWorld || null;
  renderTraitCards();
  renderAspirationCards();
  renderWorlds();
  updatePreview();
  if (state.selectedWorld) {
    startSimulationBtn.disabled = false;
    buildSimulation();
    if (data.selectedJob) jobSelect.value = data.selectedJob;
    showScreen('screen-simulation');
  } else {
    showScreen('screen-cak');
  }
}

function bindNavigation() {
  document.querySelectorAll('[data-nav]').forEach((button) => {
    button.addEventListener('click', () => showScreen(button.dataset.nav));
  });

  document.getElementById('newGameBtn').addEventListener('click', () => showScreen('screen-cak'));
  document.getElementById('loadGameBtn').addEventListener('click', loadGame);
  document.getElementById('randomizeBtn').addEventListener('click', randomizeKims);
  document.getElementById('finishCakBtn').addEventListener('click', () => {
    if (state.selectedTraits.length !== 3 || !state.selectedAspiration) {
      alert('Choisis exactement 3 caractères et 1 aspiration pour continuer.');
      return;
    }
    renderWorlds();
    showScreen('screen-worlds');
  });
  document.getElementById('startSimulationBtn').addEventListener('click', () => {
    buildSimulation();
    showScreen('screen-simulation');
  });
  document.getElementById('saveGameBtn').addEventListener('click', saveGame);
}

cakForm.addEventListener('input', updatePreview);

renderTraitCards();
renderAspirationCards();
renderWorlds();
bindNavigation();
updatePreview();
updateSaveState();
