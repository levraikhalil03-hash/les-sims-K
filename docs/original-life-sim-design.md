# Projet : **Chroniques de Brumeterre**

## 1. Vision du jeu

**Chroniques de Brumeterre** est un jeu de simulation de vie solo où le joueur crée un foyer, choisit un monde où s'installer, construit son habitat et suit la vie quotidienne de personnages avec des besoins, relations, ambitions, études, métiers et pouvoirs spéciaux selon la région explorée.

L'objectif est de proposer une expérience riche et flexible autour de quatre piliers :

1. **Créer un foyer mémorable** ;
2. **Raconter des histoires de vie** ;
3. **Construire et aménager librement** ;
4. **Explorer des mondes à identité forte**.

Le projet ci-dessous couvre ensemble les options **A, B, C et D** demandées :

- **A** : document de design complet ;
- **B** : système de création de personnage ;
- **C** : mode construction ;
- **D** : proposition de prototype technique.

---

## 2. Boucle de jeu principale

### Phase 1 — Menu principal
Le joueur arrive sur un menu clair avec :

- **Nouvelle partie** ;
- **Charger une partie** ;
- **Bibliothèque locale** (foyers et terrains sauvegardés localement) ;
- **Options** ;
- **Crédits**.

### Phase 2 — Création du foyer
Le joueur compose un foyer contenant :

- jusqu'à **8 personnages humains** ;
- jusqu'à **3 animaux de compagnie ou ferme légère** ;
- une combinaison libre d'âges, liens familiaux et statuts sociaux.

### Phase 3 — Installation dans un monde
Le joueur choisit l'un des **3 mondes de base** :

1. **Haute-Tour** : ville dense, appartements, lycée et université ;
2. **Valbrume** : campagne, fermes, vergers, rivière et vie rurale ;
3. **Aureclair** : monde magique, école d'arcane, clairières enchantées et rituels.

### Phase 4 — Vie quotidienne
Le joueur gère :

- besoins ;
- relations ;
- études ;
- carrière ;
- progression des compétences ;
- événements du foyer ;
- finances ;
- construction et décoration ;
- pouvoirs magiques dans le monde adéquat.

### Phase 5 — Progression longue
Le jeu encourage la progression via :

- aspirations ;
- étapes de vie ;
- arbres de compétences ;
- diplômes ;
- succès de foyer ;
- héritage intergénérationnel ;
- déblocage d'objets, recettes et interactions sociales.

---

## 3. Système d'âges

Chaque personnage appartient à une tranche d'âge jouable :

- **Bébé** ;
- **Petit enfant** ;
- **Enfant** ;
- **Adolescent** ;
- **Jeune adulte** ;
- **Adulte** ;
- **Senior**.

### Spécificités par âge

- **Bébé** : besoins simples, interactions de soins, objets dédiés.
- **Petit enfant** : motricité, imagination, langage, dépendance forte aux adultes.
- **Enfant** : école, premiers loisirs, amitiés, passions naissantes.
- **Adolescent** : lycée, clubs, romances légères, identité, stress scolaire.
- **Jeune adulte** : études supérieures, premiers métiers, indépendance.
- **Adulte** : carrière, famille, projets de long terme.
- **Senior** : transmission, loisirs calmes, mentorat, héritage.

---

## 4. Système de besoins

Chaque personnage possède des jauges de besoins qui influencent son humeur et ses actions :

- **Faim** ;
- **Énergie** ;
- **Hygiène** ;
- **Sociabilité** ;
- **Divertissement** ;
- **Confort** ;
- **Environnement**.

### Besoins spéciaux

Selon le profil du personnage, on peut ajouter :

- **Concentration scolaire** pour les adolescents et étudiants ;
- **Inspiration créative** pour certains artistes ;
- **Résonance arcanique** pour les mages ;
- **Lien animal** pour les personnages très proches des bêtes.

---

## 5. Humeurs et états émotionnels

Le jeu repose sur un système émotionnel lisible, utile au gameplay et aux interactions :

- **Heureux** ;
- **Tendu** ;
- **Triste** ;
- **Inspiré** ;
- **Confiant** ;
- **Gêné** ;
- **En colère** ;
- **Fatigué** ;
- **Émerveillé** ;
- **Mystiquement chargé**.

Les émotions proviennent de :

- besoins ;
- événements récents ;
- qualité du logement ;
- relations ;
- réussite ou échec ;
- météo ;
- objets spéciaux ;
- magie.

---

## 6. Option B — Création de personnage complète

## 6.1. Structure du mode création

Le mode création de personnage est conçu en plusieurs onglets :

1. **Identité** ;
2. **Corps** ;
3. **Visage** ;
4. **Cheveux et détails** ;
5. **Tenues** ;
6. **Personnalité** ;
7. **Aspiration** ;
8. **Voix et démarche** ;
9. **Relations du foyer** ;
10. **Animaux**.

### Fonctions UX recommandées

- bouton **aléatoire** par section ;
- bouton **aléatoire total** ;
- verrouillage de certains éléments pendant une randomisation ;
- rotation 3D du modèle ;
- zoom visage/corps ;
- catégories latérales claires ;
- aperçu des tenues par contexte.

## 6.2. Identité de base

Le joueur définit :

- prénom ;
- nom ;
- pronoms ;
- âge ;
- voix ;
- style de marche ;
- préférence esthétique générale ;
- éventuelle origine magique.

## 6.3. Corps

Réglages proposés :

- taille visuelle parmi plusieurs gabarits lisibles ;
- masse corporelle ;
- musculature ;
- posture ;
- largeur d'épaules ;
- longueur des jambes ;
- forme des mains ;
- détails de peau ;
- cicatrices ;
- grains de beauté ;
- taches de rousseur.

## 6.4. Visage

Le visage doit être modifiable zone par zone :

- forme générale du crâne ;
- front ;
- sourcils ;
- yeux ;
- paupières ;
- nez ;
- pommettes ;
- joues ;
- lèvres ;
- mâchoire ;
- menton ;
- oreilles.

### Détails avancés du visage

- distance entre les yeux ;
- inclinaison des yeux ;
- hauteur des pommettes ;
- largeur du nez ;
- projection du menton ;
- épaisseur des lèvres ;
- asymétries légères optionnelles.

## 6.5. Cheveux et détails

- coiffures courtes, longues, attachées, bouclées, tressées ;
- couleurs naturelles et teintures ;
- pilosité faciale ;
- maquillage léger à prononcé ;
- vernis ;
- bijoux ;
- lunettes ;
- accessoires de tête.

## 6.6. Tenues

Le personnage possède plusieurs catégories de tenues :

- **Quotidien** ;
- **Formel** ;
- **Nuit** ;
- **Sport** ;
- **Travail/études** ;
- **Extérieur** ;
- **Fête** ;
- **Occulte/Magie**.

Chaque catégorie peut contenir plusieurs variantes enregistrées.

## 6.7. Caractères / traits

Chaque personnage sélectionne **3 traits principaux** et éventuellement **1 trait d'origine** selon le monde ou l'histoire.

### Liste de traits de base

- Ambitieux ;
- Créatif ;
- Maladroit ;
- Généreux ;
- Solitaire ;
- Sociable ;
- Jaloux ;
- Calme ;
- Impulsif ;
- Perfectionniste ;
- Gourmand ;
- Aventurier ;
- Romantique ;
- Pragmatique ;
- Ordonné ;
- Désordonné ;
- Protecteur ;
- Paresseux ;
- Travailleur ;
- Curieux ;
- Mystique ;
- Campagnard ;
- Citadin ;
- Ami des animaux ;
- Geek ;
- Artiste ;
- Nerveux ;
- Optimiste ;
- Méfiant ;
- Charismatique.

### Traits d'origine spéciaux

- Héritier urbain ;
- Enfant des champs ;
- Sensible à l'arcane ;
- Élève modèle ;
- Rebelle discret ;
- Sang ancien.

## 6.8. Aspirations

Les aspirations sont de grands parcours de progression. Chacune comporte **4 étapes**, des objectifs variés et une récompense de fin.

### Famille et relations

- **Parent accompli** ;
- **Dynastie du foyer** ;
- **Âme sœur** ;
- **Cercle social parfait**.

### Études et réussite

- **Premier de promotion** ;
- **Chercheur prometteur** ;
- **Carrière exemplaire** ;
- **Prodige polyvalent**.

### Création et culture

- **Artiste reconnu** ;
- **Maître de la scène** ;
- **Auteur prolifique** ;
- **Chef inventif**.

### Nature et campagne

- **Gardien du verger** ;
- **Vie simple et heureuse** ;
- **Éleveur attentif** ;
- **Pêcheur des brumes**.

### Magie et mystère

- **Apprenti de l'aube** ;
- **Archiviste des sorts** ;
- **Mage des éléments** ;
- **Sage du voile**.

### Richesse et propriété

- **Bâtisseur prospère** ;
- **Collectionneur raffiné** ;
- **Magnat immobilier** ;
- **Vie de luxe**.

## 6.9. Foyer

Le foyer permet de définir :

- liens de parenté ;
- amis proches ;
- colocataires ;
- partenaires ;
- rivaux ;
- tuteurs ;
- animaux liés à un ou plusieurs membres.

### Limites proposées

- **8 personnages humains maximum** ;
- **3 animaux maximum** ;
- gestion des lits, chambres et budget de départ selon la taille du foyer.

## 6.10. Animaux

Le foyer peut accueillir :

- **chat** ;
- **chien** ;
- **vache miniature ou ferme** ;
- **chèvre** ;
- **lama décoratif ou de ferme** ;
- **poule** ;
- **corbeau apprivoisé** dans le monde magique.

### Paramètres animaux

- apparence ;
- nom ;
- tempérament ;
- niveau d'attachement ;
- besoins ;
- rôle utilitaire éventuel.

---

## 7. Monde 1 — Haute-Tour

## 7.1. Concept

Haute-Tour est une métropole verticale faite pour les foyers urbains, les étudiants et les carrières modernes.

## 7.2. Règles de construction

- quartiers orientés **appartements et immeubles** ;
- sur les terrains constructibles de ce monde, la construction est limitée aux **bâtiments collectifs** ;
- pas de maison individuelle dans les zones urbaines centrales ;
- certains lots sont déjà occupés par des immeubles préfabriqués ;
- d'autres lots sont vides mais réservés à la construction verticale.

## 7.3. Lieux clés

- campus universitaire ;
- lycée central ;
- bibliothèque ;
- station de tram ;
- café étudiant ;
- galerie d'art ;
- toit-terrasse communautaire ;
- parc de poche.

## 7.4. Gameplay spécifique

- vie en appartement ;
- voisinage dense ;
- plaintes sonores ;
- clubs d'étudiants ;
- examens ;
- stages ;
- ascenseurs ;
- espaces communs ;
- colocation.

---

## 8. Monde 2 — Valbrume

## 8.1. Concept

Valbrume est une campagne vivante autour des fermes, potagers, vergers, marchés locaux et grandes maisons familiales.

## 8.2. Lieux clés

- place du marché ;
- ferme communautaire ;
- moulin ;
- rivière ;
- forêt ;
- colline d'observation ;
- serre municipale ;
- école rurale.

## 8.3. Gameplay spécifique

- agriculture légère ;
- entretien d'animaux ;
- confitures, cuisine, récoltes ;
- pêche et cueillette ;
- festivals saisonniers ;
- voisinage intergénérationnel ;
- projets de rénovation de ferme.

---

## 9. Monde 3 — Aureclair

## 9.1. Concept

Aureclair est un monde magique caché derrière des portails, composé de jardins luminescents, tours d'étude, ruines anciennes et places rituelles.

## 9.2. Lieux clés

- académie d'arcane ;
- bibliothèque runique ;
- serre alchimique ;
- place des duels ;
- étang astral ;
- quartier des artisans mystiques ;
- observatoire ;
- bois chuchotant.

## 9.3. Gameplay spécifique

- apprentissage de sorts ;
- alchimie ;
- collecte de composants ;
- progression magique ;
- duels ;
- malédictions temporaires ;
- familiers ;
- rituels de soutien.

### Exemple d'écoles de magie

- **Éléments** ;
- **Illusions** ;
- **Protection** ;
- **Transmutation** ;
- **Soin**.

### Exemples de sorts

- étincelle de nettoyage ;
- réparation légère ;
- floraison accélérée ;
- sphère lumineuse ;
- pas spectral ;
- infusion de calme ;
- barrière protectrice.

---

## 10. Études, lycée et université

## 10.1. Lycée

Les adolescents peuvent :

- suivre des cours ;
- rejoindre des clubs ;
- passer des examens ;
- développer des rivalités ou amitiés ;
- participer à des événements ;
- choisir une orientation future.

### Clubs possibles

- débat ;
- théâtre ;
- sciences ;
- sport ;
- arts visuels ;
- musique.

## 10.2. Université

Les jeunes adultes peuvent intégrer le campus de Haute-Tour.

### Filières possibles

- arts ;
- sciences sociales ;
- ingénierie ;
- commerce ;
- littérature ;
- biologie ;
- études ésotériques.

### Systèmes associés

- bourses ;
- logement étudiant ;
- dette d'étude optionnelle ;
- emploi du temps ;
- projets ;
- examens finaux.

---

## 11. Compétences

Le jeu peut proposer les compétences suivantes :

- cuisine ;
- pâtisserie ;
- jardinage ;
- bricolage ;
- charisme ;
- peinture ;
- écriture ;
- musique ;
- logique ;
- programmation ;
- photographie ;
- fitness ;
- pêche ;
- soin animal ;
- recherche universitaire ;
- alchimie ;
- magie élémentaire ;
- magie de protection.

Chaque compétence débloque :

- nouvelles interactions ;
- meilleure qualité de fabrication ;
- jobs ou promotions ;
- options sociales ;
- avantages de construction ou d'entretien.

---

## 12. Carrières

### Carrières classiques

- enseignant ;
- chef ;
- artiste ;
- auteur ;
- développeur ;
- chercheur ;
- commerçant ;
- architecte d'intérieur ;
- agriculteur ;
- vétérinaire rural.

### Carrières spéciales

- conservateur d'artefacts ;
- alchimiste ;
- bibliothécaire runique ;
- médiateur magique.

Chaque carrière peut être :

- totalement passive ;
- semi-active avec choix d'actions ;
- active sur lieu dédié pour certains métiers.

---

## 13. Option C — Mode construction

## 13.1. Principes UX

Le mode construction doit être rapide, lisible et satisfaisant.

### Fonctions de base

- pause automatique du jeu à l'ouverture ;
- grille d'accrochage ;
- rotation d'objets ;
- déplacement libre ;
- duplication ;
- pipette ;
- marteau de suppression ;
- remplacement d'objet ;
- annuler / rétablir ;
- filtres par style, prix et fonction.

## 13.2. Outils architecturaux

- murs ;
- cloisons ;
- pièces automatiques ;
- portes ;
- fenêtres ;
- escaliers ;
- ascenseurs pour lots compatibles ;
- plateformes ;
- toits ;
- balcons ;
- terrasses.

## 13.3. Catégories d'objets

### Vie quotidienne

- lits ;
- canapés ;
- chaises ;
- tables ;
- bureaux ;
- bibliothèques ;
- luminaires ;
- tapis ;
- rangements.

### Cuisine

- frigos ;
- plaques ;
- fours ;
- éviers ;
- comptoirs ;
- armoires ;
- tables de cuisine.

### Salle de bain

- douches ;
- baignoires ;
- toilettes ;
- lavabos ;
- miroirs ;
- rangements.

### Enfants

- berceaux ;
- petits lits ;
- jouets ;
- bureaux d'école ;
- décor thématique.

### Études et travail

- ordinateurs ;
- tableaux ;
- établis ;
- chevalets ;
- instruments.

### Ferme et extérieur

- bacs à culture ;
- clôtures ;
- portails ;
- poulaillers ;
- granges ;
- mangeoires ;
- bancs ;
- lampadaires ;
- arbres fruitiers.

### Magie

- autels ;
- bibliothèques arcanes ;
- chaudrons ;
- cercles runiques ;
- cristaux ;
- miroirs mystiques.

## 13.4. Contraintes par monde

### Haute-Tour

- immeubles et appartements uniquement sur les lots réservés ;
- densité élevée ;
- ascenseurs ou cages d'escalier nécessaires ;
- espaces communs optionnels.

### Valbrume

- lots larges ;
- dépendances ;
- terrains agricoles ;
- bâtiments bas privilégiés.

### Aureclair

- architecture organique ou mystique ;
- objets magiques interactifs ;
- zones de rituel ;
- portails décoratifs ou fonctionnels.

## 13.5. Qualité environnementale

Chaque objet peut contribuer à des scores invisibles ou partiellement visibles :

- confort ;
- prestige ;
- inspiration ;
- fonctionnalité ;
- aura magique.

Ces scores influencent les émotions et certaines interactions.

---

## 14. Système économique

Le foyer dispose de :

- fonds de départ ;
- dépenses courantes ;
- factures ;
- loyers ou charges ;
- revenus professionnels ;
- revenus d'artisanat ;
- ventes de récoltes ;
- ventes d'œuvres ;
- bourses d'études.

### Dépenses importantes

- achat de terrain ;
- mobilier ;
- entretien ;
- frais universitaires ;
- soins animaux ;
- ingrédients rares pour magie.

---

## 15. Interactions sociales

Catégories d'interactions :

- amical ;
- drôle ;
- romantique ;
- familial ;
- conflictuel ;
- mentorat ;
- académique ;
- magique.

### Exemples

- complimenter la tenue ;
- partager une anecdote ;
- proposer une étude commune ;
- s'excuser ;
- demander un conseil ;
- offrir un repas ;
- lancer un défi de duel amical ;
- raconter une rumeur locale.

---

## 16. Événements et saisons

Événements possibles :

- fête d'anniversaire ;
- repas de famille ;
- festival de la récolte ;
- soirée étudiante ;
- marché d'artisans ;
- concours floral ;
- nuit des lanternes ;
- cérémonie des novices d'Aureclair.

Un futur système de saisons peut modifier :

- météo ;
- cultures ;
- vêtements ;
- calendrier d'événements ;
- humeur générale.

---

## 17. Option D — Proposition technique de prototype

## 17.1. Moteur conseillé

Deux pistes solides :

- **Unity** pour un pipeline 3D accessible et un outillage UI rapide ;
- **Godot** pour un prototype plus léger et très modulaire.

Pour un premier prototype, **Unity** est le choix le plus simple si l'objectif est d'avoir rapidement :

- personnages 3D ;
- interface éditable ;
- scènes multiples ;
- outils de placement d'objets ;
- sérialisation de données.

## 17.2. Architecture minimale

### Scènes principales

- `MainMenu` ;
- `HouseholdCreator` ;
- `WorldSelect` ;
- `LiveMode` ;
- `BuildMode` ;
- `LotLoader`.

### Données principales

- `CharacterData` ;
- `HouseholdData` ;
- `AnimalData` ;
- `LotData` ;
- `WorldData` ;
- `AspirationData` ;
- `TraitData` ;
- `SkillData` ;
- `CareerData` ;
- `SpellData`.

## 17.3. Exemple de structures de données

```txt
CharacterData
- id
- firstName
- lastName
- ageStage
- pronouns
- bodyPreset
- faceMorphValues
- outfitSets
- traits[]
- aspirationId
- skills{}
- needs{}
- relationships{}
- voiceProfile
- walkStyle
- occultType
```

```txt
HouseholdData
- id
- funds
- members[]
- animals[]
- homeLotId
- inventory[]
- storyFlags[]
```

```txt
LotData
- id
- worldId
- lotType
- size
- buildRules
- placedObjects[]
- walls
- floors
- ownershipType
```

## 17.4. Systèmes à prototyper dans l'ordre

### Prototype vertical 1

- menu principal ;
- création d'un personnage simple ;
- foyer d'un personnage ;
- sélection d'un monde ;
- chargement d'un terrain vide ;
- placement d'objets de base ;
- besoins simples.

### Prototype vertical 2

- foyer multi-personnages ;
- relations ;
- aspirations ;
- emplois du temps ;
- école/études simplifiées.

### Prototype vertical 3

- appartements de Haute-Tour ;
- ferme de Valbrume ;
- magie d'Aureclair ;
- animaux ;
- sauvegarde complète.

## 17.5. Système de simulation

Une architecture possible repose sur :

- un **GameClock** pour le temps ;
- un **NeedSystem** pour les besoins ;
- un **InteractionSystem** pour les actions contextuelles ;
- un **RelationshipSystem** ;
- un **BuildSystem** ;
- un **WorldRuleSystem** selon le monde ;
- un **MagicSystem** activé à Aureclair ou par personnages spéciaux.

## 17.6. IA légère des personnages

Les personnages non contrôlés peuvent utiliser :

- une liste de priorités ;
- une pondération par besoin ;
- des modificateurs émotionnels ;
- des routines liées au rôle ;
- des destinations favorites.

### Exemple de logique

1. vérifier besoins critiques ;
2. vérifier obligations horaires ;
3. vérifier interactions sociales opportunes ;
4. choisir activité agréable ou productive ;
5. réévaluer après interruption.

## 17.7. Pipeline art recommandé

Comme tu veux éviter des visuels “horribles”, la direction artistique devrait viser :

- silhouettes propres ;
- proportions stylisées mais crédibles ;
- textures simples ;
- couleurs harmonieuses ;
- éclairage doux ;
- UI moderne et lisible ;
- animations expressives mais sobres.

### Recommandations concrètes

- commencer avec un style **semi-stylisé** ;
- limiter le nombre de matériaux par objet ;
- utiliser des palettes par monde ;
- employer des icônes cohérentes ;
- prévoir des variantes de vêtements compatibles avec les morphologies.

---

## 18. Roadmap de production

## Phase 1 — Fondations

- système de données ;
- menu principal ;
- création d'un personnage de base ;
- terrain vide ;
- quelques objets ;
- besoins ;
- sauvegarde locale.

## Phase 2 — Vie quotidienne

- interactions sociales ;
- compétences ;
- carrière simple ;
- aspirations ;
- foyer multi-personnages.

## Phase 3 — Mondes

- Haute-Tour ;
- Valbrume ;
- Aureclair ;
- règles spécifiques de construction.

## Phase 4 — Profondeur

- lycée ;
- université ;
- animaux ;
- magie avancée ;
- événements ;
- équilibrage économie/IA.

---

## 19. Ce qui rend le projet original

Pour garder une identité propre, le projet s'éloigne volontairement d'une copie directe grâce à :

- ses **trois mondes originaux** ;
- son **univers magique centré sur Aureclair** ;
- ses **règles de construction propres par monde** ;
- sa **liste d'aspirations et de traits personnalisée** ;
- sa **structure de progression axée sur héritage, études et arcane** ;
- son **nom, son univers et sa direction artistique distincts**.

---

## 20. Prochaine étape idéale

Si on continue ensuite, la meilleure suite serait de produire dans l'ordre :

1. un **wireframe d'interface** du menu et de la création de personnage ;
2. une **liste exhaustive d'objets de base** ;
3. un **tableau complet des aspirations et traits avec effets chiffrés** ;
4. un **schéma technique Unity/Godot** avec scripts et responsabilités ;
5. un **prototype jouable minimal** centré sur un foyer, un terrain et un monde.
