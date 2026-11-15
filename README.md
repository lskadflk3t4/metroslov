# Метро слов

Apprendre le vocabulaire russe sur un plan de métro — avec **3 000 mots du quotidien en images vivantes** et des **exercices de grammaire** (déclinaisons, adjectifs, chiffres, conjugaison). Interface en français et en russe.

Learn Russian vocabulary on a metro map — with **3,000 everyday words in living pictures** and **grammar drills** (cases, adjectives, numerals, verbs). French/Russian interface.

## ▶ Utiliser l'application / Use the app

**https://lskadflk3t4.github.io/metroslov/**

Elle s'installe comme une application et fonctionne ensuite **entièrement hors ligne**.
It installs like an app and then works **fully offline**.

| Appareil | Installer |
|---|---|
| Android (Chrome) | Menu ⋮ → **Installer l'application** / *Install app* |
| iPhone / iPad (Safari) | Partager ⬆ → **Sur l'écran d'accueil** / *Add to Home Screen* |
| Ordinateur (Chrome, Edge) | Icône ⊕ dans la barre d'adresse → **Installer** |

Ouvrez-la une fois avec Internet : tout est alors enregistré sur l'appareil.
Open it once while online; after that everything is stored on the device.

## 🔄 Synchroniser la progression entre appareils / Sync progress between devices

La progression (plan du métro, images vivantes, grammaire) peut être partagée entre téléphone, tablette et ordinateur grâce à un **gist secret** sur **votre propre** compte GitHub. Aucun autre serveur n’est utilisé.

1. Connectez-vous à GitHub (compte gratuit : https://github.com/signup).
2. Créez un jeton d’accès : **https://github.com/settings/tokens/new?scopes=gist&description=Metro%20slov%20sync**
   - ne cochez que **gist** (déjà coché par le lien) ;
   - choisissez une durée (*No expiration* ou 1 an) ;
   - cliquez sur **Generate token** et copiez le jeton (`ghp_…`). GitHub ne le montre qu’une fois.
3. Dans l’application : onglet **Progrès** → **Synchroniser entre appareils** → collez le jeton → **Connecter et synchroniser**.
   L’application crée automatiquement le gist secret `metro-slov-progress.json`.
4. Sur chaque autre appareil, collez **le même jeton**. Au premier branchement, l’application demande s’il faut récupérer la progression du gist (recommandé sur un nouvel appareil).

Ensuite, la synchronisation est automatique : à l’ouverture, toutes les 3 minutes et quand vous quittez l’application. Si deux appareils ont changé, la modification la plus récente l’emporte.

**Gist créé à la main (facultatif)** : sur https://gist.github.com, créez un gist **secret** contenant un fichier nommé `metro-slov-progress.json` avec le contenu `{}`, puis collez son identifiant (la fin de l’adresse du gist) dans « Option : utiliser un gist existant ».

**Sécurité** : le jeton ne permet que de lire et écrire vos gists ; il reste enregistré uniquement sur vos appareils. Pour couper l’accès : « Déconnecter cet appareil » dans l’application, ou supprimer le jeton sur https://github.com/settings/tokens.

*English:* create a classic GitHub token with only the **gist** scope (link above), paste it in **Progrès → Synchroniser entre appareils** on every device. The app creates a secret gist and keeps progress in sync automatically.

## Contenu / What's inside

- **Plan du métro** — lignes et stations thématiques, cartes, révision espacée, carnet de mots, erreurs, jeux.
- **Images vivantes / Живые картинки** — 40 scènes redessinées à chaque visite ; ~3 000 mots ; exercices à écrire et à construire, clavier russe à l'écran, séance du jour.
- **Grammaire / Падежи и спряжения** — exercices de déclinaison et de conjugaison avec tableaux et explications.

La progression est enregistrée dans le navigateur de chaque appareil ; la synchronisation par gist est facultative (voir plus haut).
Progress is saved in each device's browser; gist sync is optional (see above).

## Fichiers / Files

- `index.html` — l'application complète (un seul fichier, fonctionne aussi ouvert directement)
- `sw.js` — service worker (cache hors ligne)
- `manifest.webmanifest`, `icons/` — installation PWA
