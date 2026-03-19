const traitOptions = [
  { id: 'creative', name: 'Créatif', icon: '🎨', description: 'Imagine vite et aime personnaliser le monde.' },
  { id: 'ambitious', name: 'Ambitieux', icon: '🚀', description: 'Veut réussir et monter en carrière.' },
  { id: 'romantic', name: 'Romantique', icon: '💗', description: 'Cherche de grandes histoires relationnelles.' },
  { id: 'geek', name: 'Geek', icon: '🕹️', description: 'Aime la technologie, les jeux et le moderne.' },
  { id: 'calm', name: 'Calme', icon: '🌙', description: 'Supporte bien la pression quotidienne.' },
  { id: 'sociable', name: 'Sociable', icon: '🫶', description: 'Se fait vite des amis.' },
  { id: 'mystic', name: 'Mystique', icon: '✨', description: 'Naturellement attiré par la magie.' },
  { id: 'animal', name: 'Ami des animaux', icon: '🐾', description: 'Crée vite un lien avec chat ou chien.' },
  { id: 'orderly', name: 'Ordonné', icon: '🧺', description: 'Aime les espaces propres et organisés.' },
  { id: 'bold', name: 'Audacieux', icon: '⚡', description: 'Ose les grands choix et les expériences.' },
];

const aspirationOptions = [
  { id: 'city-star', name: 'Étoile de Shafak', icon: '🌆', description: 'Réussir dans la grande ville et au lycée.' },
  { id: 'legacy', name: 'Dynastie Kims', icon: '👨‍👩‍👧', description: 'Créer un foyer fort et mémorable.' },
  { id: 'arcane', name: 'Maître d’arcane', icon: '🔮', description: 'Apprendre les sorts et devenir mage.' },
  { id: 'night', name: 'Seigneur de la nuit', icon: '🦇', description: 'Vivre la puissance vampire à Nocteris.' },
  { id: 'nature', name: 'Âme rurale', icon: '🌾', description: 'Aimer la campagne, le jardin et la tranquillité.' },
  { id: 'builder', name: 'Architecte de rêve', icon: '🏗️', description: 'Créer les plus beaux terrains.' },
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

const wardrobeConfig = {
  categories: [
    {
      id: 'everyday',
      name: 'Quotidien',
      subcategories: ['Hauts', 'Bas', 'Chaussures', 'Accessoires'],
      colors: ['#f79f79', '#5b83d7', '#5abf90', '#3f4550', '#d96583'],
      items: [
        { name: 'Veste casual', emoji: '🧥' },
        { name: 'Jean clair', emoji: '👖' },
        { name: 'Sneakers', emoji: '👟' },
        { name: 'Sac épaule', emoji: '👜' },
      ],
    },
    {
      id: 'formal',
      name: 'Formel',
      subcategories: ['Vestes', 'Robes', 'Chaussures', 'Bijoux'],
      colors: ['#1f3557', '#9c4d67', '#d9bd68', '#4d4d4d', '#ffffff'],
      items: [
        { name: 'Veste élégante', emoji: '🤵' },
        { name: 'Robe soirée', emoji: '👗' },
        { name: 'Chaussures habillées', emoji: '👠' },
        { name: 'Parure', emoji: '💎' },
      ],
    },
    {
      id: 'magic',
      name: 'Magie',
      subcategories: ['Robes', 'Capes', 'Artefacts', 'Bottes'],
      colors: ['#7855e0', '#56c19c', '#d8b4ff', '#4d6bdb', '#f4d06f'],
      items: [
        { name: 'Robe mystique', emoji: '🔮' },
        { name: 'Cape astrale', emoji: '🪄' },
        { name: 'Talisman', emoji: '📿' },
        { name: 'Bottes runiques', emoji: '🥾' },
      ],
    },
    {
      id: 'night',
      name: 'Vampire',
      subcategories: ['Hauts', 'Bas', 'Chaussures', 'Accessoires'],
      colors: ['#2f2240', '#7d2038', '#c1c1d2', '#131722', '#875ca2'],
      items: [
        { name: 'Manteau nocturne', emoji: '🖤' },
        { name: 'Pantalon sombre', emoji: '👖' },
        { name: 'Bottes nocturnes', emoji: '🦇' },
        { name: 'Broche lune', emoji: '🌙' },
      ],
    },
    {
      id: 'country',
      name: 'Campagne',
      subcategories: ['Hauts', 'Bas', 'Chaussures', 'Accessoires'],
      colors: ['#d89b57', '#698b72', '#f3d778', '#9b6347', '#c75855'],
      items: [
        { name: 'Chemise rurale', emoji: '🌾' },
        { name: 'Pantalon pratique', emoji: '🧺' },
        { name: 'Bottes ferme', emoji: '👢' },
        { name: 'Chapeau', emoji: '🤠' },
      ],
    },
  ],
};

const worlds = [
  {
    id: 'shafak-city',
    name: 'Shafak City',
    icon: '🏙️',
    vibe: 'Vie citadine',
    description: 'Métropole brillante avec immeubles, appartements et grand lycée visitable.',
    rules: ['Appartements et immeubles uniquement', 'Pas de maisons individuelles', 'Grand lycée jouable', 'Vie étudiante et urbaine'],
    build: ['Ascenseurs', 'Appartements', 'Toits-terrasses', 'Lofts modernes'],
    gradient: 'linear-gradient(180deg, #72a9ff, #4c83d9)',
    lots: [
      { id: 'shf-101', name: 'Tour Azur', type: 'Appartement', size: '20x15' },
      { id: 'shf-102', name: 'Bloc Étudiant', type: 'Appartement', size: '20x20' },
      { id: 'shf-103', name: 'Résidence Skyline', type: 'Immeuble', size: '30x20' },
    ],
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
    lots: [
      { id: 'noc-201', name: 'Crypte des Roses', type: 'Manoir', size: '30x30' },
      { id: 'noc-202', name: 'Rue Obscure', type: 'Maison sombre', size: '20x20' },
      { id: 'noc-203', name: 'Tour des Ombres', type: 'Tour', size: '25x25' },
    ],
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
    lots: [
      { id: 'aur-301', name: 'Jardin des Sorts', type: 'Terrain magique', size: '20x20' },
      { id: 'aur-302', name: 'Tour des Sages', type: 'Tour', size: '25x25' },
      { id: 'aur-303', name: 'Clairière Runique', type: 'Terrain mystique', size: '30x20' },
    ],
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
    lots: [
      { id: 'ver-401', name: 'Ferme du Levant', type: 'Ferme', size: '30x30' },
      { id: 'ver-402', name: 'Maison des Prés', type: 'Maison', size: '25x20' },
      { id: 'ver-403', name: 'Champ Fleuri', type: 'Terrain', size: '30x25' },
    ],
  },
];

const hairPalette = {
  Noir: '#342621',
  Brun: '#5b3d2d',
  Châtain: '#7b5a46',
  Blond: '#d6c07d',
  Roux: '#a85b35',
};

const state = {
  saveKey: 'kims-save-v3',
  selectedTraits: [],
  selectedAspiration: null,
  selectedWorld: null,
  selectedLot: null,
  selectedWardrobeCategory: 'everyday',
  selectedWardrobeSubcategory: 'Hauts',
  selectedColor: '#f79f79',
  buildTool: 'floor',
  household: [],
  activeHouseholdIndex: 0,
  simulationHour: 8,
  selectedJob: jobs[0][0],
  buildGrid: Array.from({ length: 64 }, () => 'empty'),
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
const lotGrid = document.getElementById('lotGrid');
const startSimulationBtn = document.getElementById('startSimulationBtn');
const liveSummary = document.getElementById('liveSummary');
const householdLiveList = document.getElementById('householdLiveList');
const jobSelect = document.getElementById('jobSelect');
const jobDescription = document.getElementById('jobDescription');
const buildCategories = document.getElementById('buildCategories');
const lotRules = document.getElementById('lotRules');
const currentWorldPill = document.getElementById('currentWorldPill');
const currentLotPill = document.getElementById('currentLotPill');
const avatarCard = document.getElementById('avatarCard');
const outfitGallery = document.getElementById('outfitGallery');
const traitsSummaryHexes = document.getElementById('traitsSummaryHexes');
const householdList = document.getElementById('householdList');
const buildGridEl = document.getElementById('buildGrid');
const wardrobeCategoryTabs = document.getElementById('wardrobeCategoryTabs');
const wardrobeSubcategoryTabs = document.getElementById('wardrobeSubcategoryTabs');
const colorPalette = document.getElementById('colorPalette');

function defaultNeeds() {
  return { faim: 74, energie: 70, hygiene: 80, social: 56, divertissement: 65 };
}

function createDefaultKim(index = 0) {
  const baseNames = [
    ['Lina', 'Darine'],
    ['Maya', 'Noor'],
    ['Sami', 'Karel'],
    ['Aya', 'Voss'],
  ];
  const [firstName, lastName] = baseNames[index] || ['Kims', `#${index + 1}`];
  return {
    firstName,
    lastName,
    age: 'Jeune adulte',
    gender: index % 2 === 0 ? 'Femme' : 'Homme',
    voice: 'Douce',
    body: 54,
    fitness: 46,
    eyes: 62,
    mouth: 48,
    nose: 56,
    jaw: 40,
    hairStyle: 'Carré souple',
    hairColor: 'Châtain',
    animalType: 'none',
    animalName: 'Nox',
    animalBreed: 'Européen',
    animalOutfit: 'Bandana',
    wardrobeCategory: 'everyday',
    wardrobeSubcategory: 'Hauts',
    wardrobeColor: '#f79f79',
    traits: [],
    aspiration: null,
    needs: defaultNeeds(),
  };
}

function ensureInitialHousehold() {
  if (!state.household.length) {
    state.household.push(createDefaultKim(0));
  }
}

function currentKim() {
  ensureInitialHousehold();
  return state.household[state.activeHouseholdIndex];
}

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle('active', screen.id === id));
}

function updateSaveState() {
  const hasSave = Boolean(localStorage.getItem(state.saveKey));
  loadGameBtn.disabled = !hasSave;
  saveStatus.textContent = hasSave ? 'Sauvegarde disponible' : 'Aucune sauvegarde';
}

function syncStateFromCurrentKim() {
  const kim = currentKim();
  state.selectedTraits = [...kim.traits];
  state.selectedAspiration = kim.aspiration;
  state.selectedWardrobeCategory = kim.wardrobeCategory || 'everyday';
  state.selectedWardrobeSubcategory = kim.wardrobeSubcategory || wardrobeConfig.categories[0].subcategories[0];
  state.selectedColor = kim.wardrobeColor || wardrobeConfig.categories[0].colors[0];
}

function syncCurrentKimFromState() {
  const kim = currentKim();
  kim.traits = [...state.selectedTraits];
  kim.aspiration = state.selectedAspiration;
  kim.wardrobeCategory = state.selectedWardrobeCategory;
  kim.wardrobeSubcategory = state.selectedWardrobeSubcategory;
  kim.wardrobeColor = state.selectedColor;
}

function populateFormFromKim() {
  const kim = currentKim();
  Object.entries(kim).forEach(([key, value]) => {
    if (cakForm[key] && typeof value !== 'object') {
      cakForm[key].value = value;
    }
  });
  syncStateFromCurrentKim();
}

function readFormIntoCurrentKim() {
  const data = Object.fromEntries(new FormData(cakForm).entries());
  const kim = currentKim();
  Object.assign(kim, {
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
    gender: data.gender,
    voice: data.voice,
    body: Number(data.body),
    fitness: Number(data.fitness),
    eyes: Number(data.eyes),
    mouth: Number(data.mouth),
    nose: Number(data.nose),
    jaw: Number(data.jaw),
    hairStyle: data.hairStyle,
    hairColor: data.hairColor,
    animalType: data.animalType,
    animalName: data.animalName,
    animalBreed: data.animalBreed,
    animalOutfit: data.animalOutfit,
  });
  syncCurrentKimFromState();
}

function createChoiceCard(option, type) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'choice-card';
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
      syncCurrentKimFromState();
      renderTraitCards();
      renderPersonalitySummary();
      renderHouseholdList();
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
      syncCurrentKimFromState();
      renderAspirationCards();
      renderPersonalitySummary();
      renderHouseholdList();
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
  aspirationHex.textContent = '★';
  traitsSummaryHexes.appendChild(aspirationHex);
}

function renderWardrobeTabs() {
  wardrobeCategoryTabs.innerHTML = '';
  wardrobeConfig.categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `category-pill ${state.selectedWardrobeCategory === category.id ? 'active' : ''}`;
    button.textContent = category.name;
    button.addEventListener('click', () => {
      state.selectedWardrobeCategory = category.id;
      state.selectedWardrobeSubcategory = category.subcategories[0];
      state.selectedColor = category.colors[0];
      syncCurrentKimFromState();
      renderWardrobeTabs();
      renderSubcategoryTabs();
      renderColorPalette();
      renderOutfitGallery();
      updatePreview();
    });
    wardrobeCategoryTabs.appendChild(button);
  });
}

function renderSubcategoryTabs() {
  const category = wardrobeConfig.categories.find((item) => item.id === state.selectedWardrobeCategory);
  wardrobeSubcategoryTabs.innerHTML = '';
  category.subcategories.forEach((sub) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `sub-category-pill ${state.selectedWardrobeSubcategory === sub ? 'active' : ''}`;
    button.textContent = sub;
    button.addEventListener('click', () => {
      state.selectedWardrobeSubcategory = sub;
      syncCurrentKimFromState();
      renderSubcategoryTabs();
      renderOutfitGallery();
    });
    wardrobeSubcategoryTabs.appendChild(button);
  });
}

function renderColorPalette() {
  const category = wardrobeConfig.categories.find((item) => item.id === state.selectedWardrobeCategory);
  colorPalette.innerHTML = '';
  category.colors.forEach((color) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `color-dot ${state.selectedColor === color ? 'active' : ''}`;
    button.style.background = color;
    button.addEventListener('click', () => {
      state.selectedColor = color;
      syncCurrentKimFromState();
      renderColorPalette();
      updatePreview();
    });
    colorPalette.appendChild(button);
  });
}

function renderOutfitGallery() {
  const category = wardrobeConfig.categories.find((item) => item.id === state.selectedWardrobeCategory);
  outfitGallery.innerHTML = category.items.map((item, index) => `
    <article class="outfit-card ${index === 0 ? 'active' : ''}">
      <div>
        <span>${item.emoji}</span>
        <strong>${item.name}</strong>
        <p>${state.selectedWardrobeSubcategory}</p>
      </div>
    </article>
  `).join('');
}

function renderHouseholdList() {
  householdList.innerHTML = '';
  state.household.forEach((kim, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `household-card ${state.activeHouseholdIndex === index ? 'active' : ''}`;
    button.innerHTML = `
      <span class="mini-avatar">${kim.gender === 'Homme' ? '🧍' : '🧍‍♀️'}</span>
      <div>
        <strong>${kim.firstName} ${kim.lastName}</strong>
        <p>${kim.age} · ${kim.aspiration || 'Pas d’aspiration'}</p>
      </div>
    `;
    button.addEventListener('click', () => {
      readFormIntoCurrentKim();
      state.activeHouseholdIndex = index;
      populateFormFromKim();
      renderTraitCards();
      renderAspirationCards();
      renderPersonalitySummary();
      renderWardrobeTabs();
      renderSubcategoryTabs();
      renderColorPalette();
      renderOutfitGallery();
      renderHouseholdList();
      updatePreview();
    });
    householdList.appendChild(button);
  });
}

function updateAvatarAppearance() {
  const data = new FormData(cakForm);
  const body = Number(data.get('body'));
  const fitness = Number(data.get('fitness'));
  const eyes = Number(data.get('eyes'));
  const mouth = Number(data.get('mouth'));
  const nose = Number(data.get('nose'));
  const jaw = Number(data.get('jaw'));
  const gender = data.get('gender');
  const hairColor = data.get('hairColor');

  const head = avatarCard.querySelector('.avatar-head');
  const hair = avatarCard.querySelector('.hair-layer');
  const torso = avatarCard.querySelector('.avatar-torso');
  const legs = avatarCard.querySelector('.avatar-legs');
  const leftEye = avatarCard.querySelector('.eye.left');
  const rightEye = avatarCard.querySelector('.eye.right');
  const mouthEl = avatarCard.querySelector('.mouth');
  const noseEl = avatarCard.querySelector('.nose');

  const torsoWidth = 160 + body * 0.65;
  const torsoHeight = 170 + fitness * 0.5;
  const legWidth = 130 + body * 0.3;
  const legHeight = 140 + fitness * 0.55;
  const headWidth = 124 + jaw * 0.2;
  const headHeight = 150 + jaw * 0.12;

  head.style.width = `${headWidth}px`;
  head.style.height = `${headHeight}px`;
  hair.style.width = `${headWidth + 14}px`;
  hair.style.background = `linear-gradient(180deg, ${hairPalette[hairColor]}, #312016)`;
  torso.style.width = `${torsoWidth}px`;
  torso.style.height = `${torsoHeight}px`;
  legs.style.width = `${legWidth}px`;
  legs.style.height = `${legHeight}px`;
  leftEye.style.width = `${14 + eyes * 0.1}px`;
  rightEye.style.width = `${14 + eyes * 0.1}px`;
  mouthEl.style.width = `${26 + mouth * 0.16}px`;
  noseEl.style.height = `${20 + nose * 0.22}px`;
  avatarCard.style.transform = `scale(${gender === 'Homme' ? 1.02 : 0.98})`;

  const categoryColor = state.selectedColor;
  torso.style.background = `linear-gradient(180deg, ${categoryColor}, rgba(40,40,70,0.75))`;
  legs.style.background = `linear-gradient(180deg, rgba(220,235,255,0.95), rgba(120,150,195,0.95))`;
}

function updatePreview() {
  readFormIntoCurrentKim();
  const data = new FormData(cakForm);
  document.getElementById('previewAge').textContent = data.get('age');
  document.getElementById('previewMeta').textContent = `${data.get('gender')} · ${wardrobeConfig.categories.find((c) => c.id === state.selectedWardrobeCategory).name}`;
  updateAvatarAppearance();
  renderHouseholdList();

  const animalType = data.get('animalType');
  animalPanel.classList.toggle('hidden', animalType === 'none');
  if (animalType !== 'none') {
    animalPreview.innerHTML = `
      <h4>${animalType === 'chat' ? '🐱' : '🐶'} ${data.get('animalName')}</h4>
      <p><strong>Race :</strong> ${data.get('animalBreed')}</p>
      <p><strong>Vêtement :</strong> ${data.get('animalOutfit')}</p>
      <p><strong>Rôle :</strong> Compagnon du foyer</p>
    `;
  }
}

function addHouseholdMember() {
  readFormIntoCurrentKim();
  if (state.household.length >= 4) return;
  state.household.push(createDefaultKim(state.household.length));
  state.activeHouseholdIndex = state.household.length - 1;
  populateFormFromKim();
  renderTraitCards();
  renderAspirationCards();
  renderPersonalitySummary();
  renderWardrobeTabs();
  renderSubcategoryTabs();
  renderColorPalette();
  renderOutfitGallery();
  renderHouseholdList();
  updatePreview();
}

function saveCurrentKim() {
  readFormIntoCurrentKim();
  renderHouseholdList();
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
  state.selectedTraits = [...traitOptions].sort(() => 0.5 - Math.random()).slice(0, 3).map((item) => item.name);
  state.selectedAspiration = aspirationOptions[Math.floor(Math.random() * aspirationOptions.length)].name;
  const randomCategory = wardrobeConfig.categories[Math.floor(Math.random() * wardrobeConfig.categories.length)];
  state.selectedWardrobeCategory = randomCategory.id;
  state.selectedWardrobeSubcategory = randomCategory.subcategories[0];
  state.selectedColor = randomCategory.colors[0];
  syncCurrentKimFromState();
  renderTraitCards();
  renderAspirationCards();
  renderPersonalitySummary();
  renderWardrobeTabs();
  renderSubcategoryTabs();
  renderColorPalette();
  renderOutfitGallery();
  updatePreview();
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
      state.selectedLot = null;
      renderWorlds();
      renderWorldDetail();
      renderLots();
      updateStartButton();
    });
    worldGrid.appendChild(button);
  });
}

function renderWorldDetail() {
  if (!state.selectedWorld) {
    worldDetail.innerHTML = '<h3>Sélectionne un monde</h3><p class="muted">Choisis un monde puis un terrain.</p>';
    return;
  }
  worldDetail.innerHTML = `
    <div class="panel-title-row">
      <h3>${state.selectedWorld.icon} ${state.selectedWorld.name}</h3>
      <span class="tiny-pill">${state.selectedWorld.vibe}</span>
    </div>
    <p class="muted">${state.selectedWorld.description}</p>
    <div class="build-chip-row">${state.selectedWorld.rules.map((rule) => `<span class="build-chip">${rule}</span>`).join('')}</div>
  `;
}

function renderLots() {
  lotGrid.innerHTML = '';
  if (!state.selectedWorld) return;
  state.selectedWorld.lots.forEach((lot) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `lot-card ${state.selectedLot?.id === lot.id ? 'selected' : ''}`;
    button.innerHTML = `<strong>${lot.name}</strong><p>${lot.type} · ${lot.size}</p>`;
    button.addEventListener('click', () => {
      state.selectedLot = lot;
      renderLots();
      updateStartButton();
    });
    lotGrid.appendChild(button);
  });
}

function updateStartButton() {
  startSimulationBtn.disabled = !(state.selectedWorld && state.selectedLot && state.household.length);
}

function renderBuildGrid() {
  buildGridEl.innerHTML = '';
  state.buildGrid.forEach((cell, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `grid-cell ${cell}`;
    button.textContent = cell === 'wall' ? '▧' : cell === 'door' ? '▢' : cell === 'floor' ? '·' : '';
    button.addEventListener('click', () => {
      state.buildGrid[index] = state.buildTool === 'erase' ? 'empty' : state.buildTool;
      renderBuildGrid();
    });
    buildGridEl.appendChild(button);
  });
}

function renderLiveSummary() {
  const names = state.household.map((kim) => `${kim.firstName} ${kim.lastName}`).join(', ');
  liveSummary.innerHTML = `
    <h3>${names}</h3>
    <p><strong>Monde :</strong> ${state.selectedWorld.name}</p>
    <p><strong>Terrain :</strong> ${state.selectedLot.name}</p>
    <p><strong>Heure :</strong> ${String(state.simulationHour).padStart(2, '0')}:00</p>
  `;
}

function renderHouseholdLiveList() {
  householdLiveList.innerHTML = '';
  state.household.forEach((kim) => {
    const article = document.createElement('article');
    article.className = 'live-kim-card';
    const bars = Object.entries(kim.needs).map(([key, value]) => `
      <div class="need-row">
        <span>${key}</span>
        <div class="meter"><span style="width:${value}%"></span></div>
      </div>
    `).join('');
    article.innerHTML = `
      <div class="panel-title-row">
        <h4>${kim.firstName} ${kim.lastName}</h4>
        <span class="tiny-pill">${kim.aspiration || 'Sans aspiration'}</span>
      </div>
      ${bars}
    `;
    householdLiveList.appendChild(article);
  });
}

function applyAction(action) {
  const deltas = {
    eat: { faim: +18, energie: -4, hygiene: -1, social: 0, divertissement: +2 },
    sleep: { faim: -6, energie: +24, hygiene: +2, social: -3, divertissement: -2 },
    fun: { faim: -3, energie: -5, hygiene: -1, social: +3, divertissement: +18 },
    social: { faim: -2, energie: -4, hygiene: 0, social: +20, divertissement: +10 },
  }[action];
  state.household.forEach((kim) => {
    Object.entries(deltas).forEach(([key, value]) => {
      kim.needs[key] = Math.max(0, Math.min(100, kim.needs[key] + value));
    });
  });
  renderHouseholdLiveList();
}

function tickSimulationHour() {
  state.simulationHour = (state.simulationHour + 1) % 24;
  state.household.forEach((kim) => {
    kim.needs.faim = Math.max(0, kim.needs.faim - 6);
    kim.needs.energie = Math.max(0, kim.needs.energie - 5);
    kim.needs.hygiene = Math.max(0, kim.needs.hygiene - 2);
    kim.needs.social = Math.max(0, kim.needs.social - 4);
    kim.needs.divertissement = Math.max(0, kim.needs.divertissement - 5);
  });
  renderLiveSummary();
  renderHouseholdLiveList();
}

function buildSimulation() {
  currentWorldPill.textContent = state.selectedWorld.name;
  currentLotPill.textContent = state.selectedLot.name;
  renderLiveSummary();
  renderHouseholdLiveList();

  jobSelect.innerHTML = jobs.map(([name]) => `<option>${name}</option>`).join('');
  jobSelect.value = state.selectedJob;
  jobDescription.textContent = jobs.find(([name]) => name === state.selectedJob)[1];
  jobSelect.onchange = () => {
    state.selectedJob = jobSelect.value;
    jobDescription.textContent = jobs.find(([name]) => name === state.selectedJob)[1];
  };

  buildCategories.innerHTML = `
    <div>
      <h4>Objets recommandés</h4>
      <div class="build-chip-row">${state.selectedWorld.build.map((item) => `<span class="build-chip">${item}</span>`).join('')}</div>
    </div>
  `;
  lotRules.innerHTML = `
    <h4>Règles du terrain — ${state.selectedLot.name}</h4>
    <ul>${state.selectedWorld.rules.map((rule) => `<li>${rule}</li>`).join('')}</ul>
  `;
  renderBuildGrid();
}

function saveGame() {
  readFormIntoCurrentKim();
  const payload = {
    household: state.household,
    activeHouseholdIndex: state.activeHouseholdIndex,
    selectedWorld: state.selectedWorld,
    selectedLot: state.selectedLot,
    selectedWardrobeCategory: state.selectedWardrobeCategory,
    selectedWardrobeSubcategory: state.selectedWardrobeSubcategory,
    selectedColor: state.selectedColor,
    buildTool: state.buildTool,
    simulationHour: state.simulationHour,
    selectedJob: state.selectedJob,
    buildGrid: state.buildGrid,
  };
  localStorage.setItem(state.saveKey, JSON.stringify(payload));
  updateSaveState();
}

function loadGame() {
  const raw = localStorage.getItem(state.saveKey);
  if (!raw) return;
  const payload = JSON.parse(raw);
  Object.assign(state, {
    household: payload.household || [createDefaultKim(0)],
    activeHouseholdIndex: payload.activeHouseholdIndex || 0,
    selectedWorld: payload.selectedWorld || null,
    selectedLot: payload.selectedLot || null,
    selectedWardrobeCategory: payload.selectedWardrobeCategory || 'everyday',
    selectedWardrobeSubcategory: payload.selectedWardrobeSubcategory || 'Hauts',
    selectedColor: payload.selectedColor || '#f79f79',
    buildTool: payload.buildTool || 'floor',
    simulationHour: payload.simulationHour || 8,
    selectedJob: payload.selectedJob || jobs[0][0],
    buildGrid: payload.buildGrid || Array.from({ length: 64 }, () => 'empty'),
  });
  populateFormFromKim();
  renderTraitCards();
  renderAspirationCards();
  renderPersonalitySummary();
  renderWardrobeTabs();
  renderSubcategoryTabs();
  renderColorPalette();
  renderOutfitGallery();
  renderHouseholdList();
  updatePreview();
  renderWorlds();
  renderWorldDetail();
  renderLots();
  updateStartButton();
  if (state.selectedWorld && state.selectedLot) {
    buildSimulation();
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
  document.getElementById('addHouseholdBtn').addEventListener('click', addHouseholdMember);
  document.getElementById('saveCurrentKimBtn').addEventListener('click', saveCurrentKim);
  document.getElementById('finishCakBtn').addEventListener('click', () => {
    readFormIntoCurrentKim();
    if (state.selectedTraits.length !== 3 || !state.selectedAspiration) {
      alert('Choisis exactement 3 caractères et 1 aspiration pour continuer.');
      return;
    }
    renderWorlds();
    renderWorldDetail();
    renderLots();
    updateStartButton();
    showScreen('screen-worlds');
  });
  document.getElementById('startSimulationBtn').addEventListener('click', () => {
    if (!state.selectedWorld || !state.selectedLot) return;
    buildSimulation();
    showScreen('screen-simulation');
  });
  document.getElementById('saveGameBtn').addEventListener('click', saveGame);
  document.getElementById('quickSaveBtn').addEventListener('click', saveGame);
  document.getElementById('tickTimeBtn').addEventListener('click', tickSimulationHour);
  document.querySelectorAll('.action-btn').forEach((button) => {
    button.addEventListener('click', () => applyAction(button.dataset.action));
  });
  document.querySelectorAll('.build-tool').forEach((button) => {
    button.addEventListener('click', () => {
      state.buildTool = button.dataset.build;
      document.querySelectorAll('.build-tool').forEach((tool) => tool.classList.toggle('active', tool === button));
    });
  });
}

ensureInitialHousehold();
populateFormFromKim();
renderTraitCards();
renderAspirationCards();
renderPersonalitySummary();
renderWardrobeTabs();
renderSubcategoryTabs();
renderColorPalette();
renderOutfitGallery();
renderHouseholdList();
renderWorlds();
renderWorldDetail();
renderLots();
updatePreview();
updateSaveState();
updateStartButton();
bindNavigation();
cakForm.addEventListener('input', updatePreview);
