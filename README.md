# Kims

Prototype web statique d'un jeu de simulation de vie original inspiré du genre life-sim.

## Contenu

- `index.html` : interface principale du prototype.
- `styles.css` : style visuel du menu, du CAK inspiré du genre life-sim, des mondes et du mode vie/construction.
- `app.js` : logique du prototype, navigation d'écran, personnalité, mondes, tenue, animal compagnon et sauvegarde locale.
- `docs/original-life-sim-design.md` : document de design détaillé conservé comme référence.

## Fonctionnalités du prototype

- Menu principal avec **Nouvelle partie** et **Charger une partie**.
- Écran **Créer un Kims (CAK)** avec foyer multi-Kims et :
  - prénom / nom ;
  - âge ;
  - sexe ;
  - sliders visage ;
  - coiffure ;
  - tenue ;
  - **3 caractères** avec icônes ;
  - **1 aspiration** avec icône ;
  - ajout d'un **chat** ou d'un **chien** personnalisable.
- Sélection de **4 mondes** : ville, vampires, magie, campagne, chacun avec plusieurs terrains.
- Écran final avec **simulation de vie** du foyer + **construction interactive sur grille**.
- Sauvegarde locale via `localStorage`.

## Lancer le prototype

Comme le projet est purement statique, il suffit d'ouvrir `index.html` dans un navigateur.

Tu peux aussi lancer un petit serveur local, par exemple :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.
