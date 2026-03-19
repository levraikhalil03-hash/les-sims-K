const traitOptions = [
  { id: 'creative', name: 'Créatif', icon: '🎨', description: 'Imagine vite et aime personnaliser le monde.' },
  { id: 'ambitious', name: 'Ambitieux', icon: '🚀', description: 'Veut réussir, progresser et monter en carrière.' },
  { id: 'romantic', name: 'Romantique', icon: '💗', description: 'Cherche de grands liens et des histoires fortes.' },
  { id: 'geek', name: 'Geek', icon: '🕹️', description: 'Aime la technologie, les jeux et les idées modernes.' },
  { id: 'calm', name: 'Calme', icon: '🌙', description: 'Supporte bien le stress et apaise le foyer.' },
  { id: 'sociable', name: 'Sociable', icon: '🫶', description: 'Se fait vite des amis et adore sortir.' },
  { id: 'mystic', name: 'Mystique', icon: '✨', description: 'Se sent naturellement attiré par la magie.' },
  { id: 'animal', name: 'Ami des animaux', icon: '🐾', description: 'Développe rapidement un lien avec chat ou chien.' },
  { id: 'orderly', name: 'Ordonné', icon: '🧺', description: 'Aime les espaces propres, beaux et pratiques.' },
  { id: 'bold', name: 'Audacieux', icon: '⚡', description: 'Prend les devants, même dans l’étrange.' },
];

const aspirationOptions = [
  { id: 'city-star', name: 'Étoile de Shafak', icon: '🌆', description: 'Réussir dans la grande ville et au lycée.' },
  { id: 'legacy', name: 'Dynastie Kims', icon: '👨‍👩‍👧', description: 'Créer un foyer fort et mémorable.' },
  { id: 'arcane', name: 'Maître d’arcane', icon: '🔮', description: 'Apprendre les sorts et devenir mage.' },
  { id: 'night', name: 'Seigneur de la nuit', icon: '🦇', description: 'Dominer la vie vampire et ses secrets.' },
  { id: 'nature', name: 'Âme rurale', icon: '🌾', description: 'Vivre au calme avec la campagne.' },
  { id: 'builder', name: 'Architecte de rêve', icon: '🏗️', description: 'Créer des lieux superbes et efficaces.' },
];

const worlds = [
  {
    id: 'shafak-city',
    name: 'Shafak City',
    icon: '🏙️',
    vibe: 'Vie citadine',
    description: 'Métropole brillante avec immeubles, appartements et un grand lycée visitable.',
    rules: ['Appartements et immeubles uniquement', 'Pas de maisons individuelles', 'Grand lycée jouable', 'Vie étudiante et urbaine'],
    build: ['Ascenseurs', 'Appartements', 'Toits-terrasses', 'Lofts modernes'],
    gradient: 'linear-gradient(180deg, #72a9ff, #4c83d9)',
  },
  {
    id: 'nocteris',
    name: 'Nocteris',
    icon: '🦇',
    vibe: 'Monde vampire',
    description: 'Monde nocturne, élégant et dangereux, pensé pour les histoires surnaturelles.',
    rules: ['Pouvoirs vampires', 'Sorties nocturnes', 'Manoirs gothiques', 'Relations occultes'],
    build: ['Cryptes', 'Manoirs', 'Ruelles sombres', 'Tours gothiques'],
    gradient: 'linear-gradient(180deg, #7f6dcb, #34304d)',
  },
  {
    id: 'auroria',
    name: 'Auroria',
    icon: '🪄',
    vibe: 'Monde magique',
    description: 'Monde lumineux et mystique, avec école de magie, portails et objets enchantés.',
    rules: ['École de magie', 'Sorts et potions', 'Portails mystiques', 'Objets enchantés'],
    build: ['Tours magiques', 'Bibliothèques arcanes', 'Ateliers de potions', 'Jardins enchantés'],
    gradient: 'linear-gradient(180deg, #8fd9ff, #56c19c)',
  },
  {
    id: 'verdalia',
    name: 'Verdalia',
    icon: '🌻',
    vibe: 'Campagne',
    description: 'Campagne paisible avec grandes parcelles, potagers et maisons chaleureuses.',
    rules: ['Grandes parcelles', 'Jardinage', 'Vie simple', 'Métiers agricoles'],
    build: ['Fermes', 'Granges', 'Potagers', 'Maisons familiales'],
    gradient: 'linear-gradient(180deg, #f0d673, #7fc86d)',
  },
];

const jobs = [
  ['Architecte intérieur', 'Conçoit de beaux espaces et débloque des options de construction.'],
  ['Professeur de lycée', 'Travaille à Shafak City avec les adolescents et la progression scolaire.'],
  ['Développeur de jeux', 'Crée des projets numériques depuis un bureau moderne.'],
  ['Chef culinaire', 'Fait progresser cuisine, recettes et réputation.'],
  ['Artiste visuel', 'Produit des œuvres pour décorer et vendre.'],
  ['Auteur', 'Écrit histoires, guides et récits fantastiques.'],
  ['Vampirologue', 'Étudie la société vampire et les secrets de Nocteris.'],
  ['Mage chercheur', 'Développe sorts, potions et connaissances à Auroria.'],
  ['Fermier', 'Cultive, récolte et vit du travail rural à Verdalia.'],
  ['Soigneur animalier', 'Renforce la relation avec chats et chiens.'],
  ['Styliste', 'Débloque plus de tenues et d’options visuelles.'],
  ['Influenceur local', 'Devient populaire dans les quartiers de Shafak.'],
];

const outfitCards = {
  'Casual chic': ['🧥', '👖', '👟', '👜'],
  'Uniforme lycée': ['🎒', '👔', '📚', '🧢'],
  'Nocturne vampire': ['🖤', '🦇', '🕯️', '🧤'],
  'Robe mystique': ['🔮', '🌙', '✨', '📜'],
  'Campagne douce': ['🌾', '🧺', '👢', '🌻'],
};

const hairPalette = {
  Noir: '#342621',
  Brun: '#5b3d2d',
  Châtain: '#7b5a46',
  Blond: '#d6c07d',
  Roux: '#a85b35',
};

const state = {
  selectedTraits: [],
  selectedAspiration: null,
  selectedWorld: null,
  saveKey: 'kims-save-v2',
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
const worldDetail = document.getElementById('worldDetail');
const startSimulationBtn = document.getElementById('startSimulationBtn');
const liveSummary = document.getElementById('liveSummary');
const needsGrid = document.getElementById('needsGrid');
const jobSelect = document.getElementById('jobSelect');
const jobDescription = document.getElementById('jobDescription');
const buildCategories = document.getElementById('buildCategories');
const lotRules = document.getElementById('lotRules');
const currentWorldPill = document.getElementById('currentWorldPill');
const avatarCard = document.getElementById('avatarCard');
const outfitGallery = document.getElementById('outfitGallery');
const traitsSummaryHexes = document.getElementById('traitsSummaryHexes');

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle('active', screen.id === id));
}

function updateSaveState() {
  const hasSave = Boolean(localStorage.getItem(state.saveKey));
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
      const selected = state.selectedTraits.includes(trait.name);
      if (selected) {
        state.selectedTraits = state.selectedTraits.filter((name) => name !== trait.name);
      } else if (state.selectedTraits.length < 3) {
        state.selectedTraits.push(trait.name);
      }
      renderTraitCards();
      renderPersonalitySummary();
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
      renderPersonalitySummary();
      updatePreview();
    });
    if (state.selectedAspiration === aspiration.name) card.classList.add('active');
    aspirationsGrid.appendChild(card);
  });
}

function renderPersonalitySummary() {
  traitsSummaryHexes.innerHTML = '';
  for (let i = 0; i < 3; i += 1) {
    const item = document.createElement('div');
    item.className = `hex-placeholder ${state.selectedTraits[i] ? 'filled' : ''}`;
    item.textContent = state.selectedTraits[i] ? state.selectedTraits[i].slice(0, 1) : `${i + 1}`;
    traitsSummaryHexes.appendChild(item);
  }
  const aspirationHex = document.createElement('div');
  aspirationHex.className = `hex-placeholder aspiration ${state.selectedAspiration ? 'filled' : ''}`;
  aspirationHex.textContent = state.selectedAspiration ? '★' : '★';
  traitsSummaryHexes.appendChild(aspirationHex);
}

function renderOutfitGallery(selectedOutfit) {
  const symbols = outfitCards[selectedOutfit] || ['👕', '👖', '👟', '✨'];
  outfitGallery.innerHTML = symbols.map((symbol, index) => `
    <article class="outfit-card ${index === 0 ? 'active' : ''}">
      <div>
        <span>${symbol}</span>
        <strong>${selectedOutfit}</strong>
        <p>${index === 0 ? 'Sélection active' : 'Variante'}</p>
      </div>
    </article>
  `).join('');
}

function renderWorlds() {
  worldGrid.innerHTML = '';
  worlds.forEach((world) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `world-bubble ${state.selectedWorld?.id === world.id ? 'selected' : ''}`;
    button.innerHTML = `
      <div class="circle" style="background:${world.gradient}">${world.icon}</div>
      <h3>${world.name}</h3>
      <p>${world.vibe}</p>
    `;
    button.addEventListener('click', () => {
      state.selectedWorld = world;
      startSimulationBtn.disabled = false;
      renderWorlds();
      renderWorldDetail();
    });
    worldGrid.appendChild(button);
  });
}

function renderWorldDetail() {
  if (!state.selectedWorld) {
    worldDetail.innerHTML = '<h3>Sélectionne un monde</h3><p class="muted">Choisis un cercle pour voir les détails du monde.</p>';
    return;
  }
  const world = state.selectedWorld;
  worldDetail.innerHTML = `
    <div class="panel-title-row">
      <h3>${world.icon} ${world.name}</h3>
      <span class="tiny-pill">${world.vibe}</span>
    </div>
    <p class="muted">${world.description}</p>
    <div class="build-chip-row">
      ${world.rules.map((rule) => `<span class="build-chip">${rule}</span>`).join('')}
    </div>
  `;
}

function updateAvatarAppearance(formData) {
  const outfit = formData.get('outfit');
  const gender = formData.get('gender');
  const hairColor = formData.get('hairColor');
  const hairLayer = avatarCard.querySelector('.hair-layer');
  const torso = avatarCard.querySelector('.avatar-torso');
  const legs = avatarCard.querySelector('.avatar-legs');
  hairLayer.style.background = `linear-gradient(180deg, ${hairPalette[hairColor] || '#7b5a46'}, #392317)`;

  const outfitMap = {
    'Casual chic': ['linear-gradient(180deg, #3f4550, #5c6673)', 'linear-gradient(180deg, #cfe0f9, #9cbce2)'],
    'Uniforme lycée': ['linear-gradient(180deg, #ef8c54, #db6f40)', 'linear-gradient(180deg, #5f8baf, #456f91)'],
    'Nocturne vampire': ['linear-gradient(180deg, #241a32, #4c365f)', 'linear-gradient(180deg, #1f2537, #384159)'],
    'Robe mystique': ['linear-gradient(180deg, #7855e0, #b05ddd)', 'linear-gradient(180deg, #6b8ae5, #5fb8da)'],
    'Campagne douce': ['linear-gradient(180deg, #d89b57, #be8249)', 'linear-gradient(180deg, #698b72, #88a76a)'],
  };
  const [torsoColor, legColor] = outfitMap[outfit] || outfitMap['Casual chic'];
  torso.style.background = torsoColor;
  legs.style.background = legColor;
  avatarCard.style.transform = gender === 'Homme' ? 'scale(1.02)' : 'scale(0.98)';
}

function updatePreview() {
  const formData = new FormData(cakForm);
  const firstName = formData.get('firstName') || 'Prénom';
  const lastName = formData.get('lastName') || 'Nom';
  const age = formData.get('age');
  const gender = formData.get('gender');
  const outfit = formData.get('outfit');

  document.getElementById('previewAge').textContent = age;
  document.getElementById('previewMeta').textContent = `${gender} · ${outfit}`;
  renderOutfitGallery(outfit);
  updateAvatarAppearance(formData);

  const animalType = formData.get('animalType');
  animalPanel.classList.toggle('hidden', animalType === 'none');
  if (animalType !== 'none') {
    const icon = animalType === 'chat' ? '🐱' : '🐶';
    animalPreview.innerHTML = `
      <h4>${icon} ${formData.get('animalName') || 'Nox'}</h4>
      <p><strong>Race :</strong> ${formData.get('animalBreed')}</p>
      <p><strong>Vêtement :</strong> ${formData.get('animalOutfit')}</p>
      <p><strong>Lien :</strong> Compagnon du foyer de ${firstName} ${lastName}</p>
    `;
  }
}

function randomizeKims() {
  const firstNames = ['Lina', 'Maya', 'Sami', 'Nora', 'Amir', 'Aya', 'Nassim', 'Leïla'];
  const lastNames = ['Darine', 'Voss', 'Naciri', 'Lumière', 'Karel', 'Noor'];
  cakForm.firstName.value = firstNames[Math.floor(Math.random() * firstNames.length)];
  cakForm.lastName.value = lastNames[Math.floor(Math.random() * lastNames.length)];
  cakForm.age.selectedIndex = Math.floor(Math.random() * cakForm.age.options.length);
  cakForm.gender.selectedIndex = Math.floor(Math.random() * cakForm.gender.options.length);
  cakForm.voice.selectedIndex = Math.floor(Math.random() * cakForm.voice.options.length);
  cakForm.hairStyle.selectedIndex = Math.floor(Math.random() * cakForm.hairStyle.options.length);
  cakForm.hairColor.selectedIndex = Math.floor(Math.random() * cakForm.hairColor.options.length);
  cakForm.outfit.selectedIndex = Math.floor(Math.random() * cakForm.outfit.options.length);
  state.selectedTraits = [...traitOptions].sort(() => 0.5 - Math.random()).slice(0, 3).map((item) => item.name);
  state.selectedAspiration = aspirationOptions[Math.floor(Math.random() * aspirationOptions.length)].name;
  renderTraitCards();
  renderAspirationCards();
  renderPersonalitySummary();
  updatePreview();
}

function buildSimulation() {
  const data = new FormData(cakForm);
  currentWorldPill.textContent = state.selectedWorld.name;
  liveSummary.innerHTML = `
    <h3>${data.get('firstName')} ${data.get('lastName')}</h3>
    <p>${data.get('age')} · ${data.get('gender')} · ${state.selectedWorld.vibe}</p>
    <p><strong>Aspiration :</strong> ${state.selectedAspiration}</p>
    <p><strong>Caractères :</strong> ${state.selectedTraits.join(', ')}</p>
    <p><strong>Compagnon :</strong> ${data.get('animalType') === 'none' ? 'Aucun' : `${data.get('animalType')} — ${data.get('animalName')}`}</p>
  `;

  const needs = [
    ['Faim', 73],
    ['Énergie', 65],
    ['Hygiène', 82],
    ['Social', 58],
    ['Divertissement', 76],
    ['Confort', 69],
  ];

  needsGrid.innerHTML = needs.map(([name, value]) => `
    <article class="stat-card">
      <strong>${name}</strong>
      <div class="meter"><span style="width:${value}%"></span></div>
    </article>
  `).join('');

  jobSelect.innerHTML = jobs.map(([name]) => `<option>${name}</option>`).join('');
  jobSelect.value = jobs[0][0];
  jobDescription.textContent = jobs[0][1];
  jobSelect.onchange = () => {
    jobDescription.textContent = jobs.find(([name]) => name === jobSelect.value)[1];
  };

  buildCategories.innerHTML = `
    <div>
      <h4>Objets recommandés</h4>
      <div class="build-chip-row">${state.selectedWorld.build.map((item) => `<span class="build-chip">${item}</span>`).join('')}</div>
    </div>
    <div>
      <h4>Outils disponibles</h4>
      <div class="build-chip-row">
        <span class="build-chip">Murs</span>
        <span class="build-chip">Fenêtres</span>
        <span class="build-chip">Portes</span>
        <span class="build-chip">Escaliers</span>
        <span class="build-chip">Cuisine</span>
        <span class="build-chip">Lits</span>
      </div>
    </div>
  `;

  lotRules.innerHTML = `
    <h4>Règles du terrain — ${state.selectedWorld.name}</h4>
    <ul>${state.selectedWorld.rules.map((rule) => `<li>${rule}</li>`).join('')}</ul>
  `;
}

function saveGame() {
  const payload = {
    formData: Object.fromEntries(new FormData(cakForm).entries()),
    selectedTraits: state.selectedTraits,
    selectedAspiration: state.selectedAspiration,
    selectedWorld: state.selectedWorld,
    selectedJob: jobSelect.value,
  };
  localStorage.setItem(state.saveKey, JSON.stringify(payload));
  updateSaveState();
}

function loadGame() {
  const raw = localStorage.getItem(state.saveKey);
  if (!raw) return;
  const payload = JSON.parse(raw);
  Object.entries(payload.formData || {}).forEach(([key, value]) => {
    if (cakForm[key]) cakForm[key].value = value;
  });
  state.selectedTraits = payload.selectedTraits || [];
  state.selectedAspiration = payload.selectedAspiration || null;
  state.selectedWorld = payload.selectedWorld || null;
  renderTraitCards();
  renderAspirationCards();
  renderPersonalitySummary();
  renderWorlds();
  renderWorldDetail();
  updatePreview();

  if (state.selectedWorld) {
    startSimulationBtn.disabled = false;
    buildSimulation();
    if (payload.selectedJob) jobSelect.value = payload.selectedJob;
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
  document.getElementById('finishCakBtn').addEventListener('click', () => {
    if (state.selectedTraits.length !== 3 || !state.selectedAspiration) {
      alert('Choisis exactement 3 caractères et 1 aspiration pour continuer.');
      return;
    }
    renderWorlds();
    renderWorldDetail();
    showScreen('screen-worlds');
  });
  document.getElementById('startSimulationBtn').addEventListener('click', () => {
    if (!state.selectedWorld) return;
    buildSimulation();
    showScreen('screen-simulation');
  });
  document.getElementById('saveGameBtn').addEventListener('click', saveGame);
  document.getElementById('quickSaveBtn').addEventListener('click', saveGame);
  document.getElementById('randomizeBtn').addEventListener('click', randomizeKims);
}

cakForm.addEventListener('input', updatePreview);
renderTraitCards();
renderAspirationCards();
renderPersonalitySummary();
renderWorlds();
renderWorldDetail();
renderOutfitGallery(cakForm.outfit.value);
updatePreview();
updateSaveState();
bindNavigation();
