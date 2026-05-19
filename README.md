# Annuaire Utilisateurs

Application React moderne (Vite) qui consomme l'API JSONPlaceholder pour afficher une liste d'utilisateurs.

## Fonctionnalités

- Récupération des utilisateurs depuis l'API
- Affichage en cards (nom, email, téléphone, entreprise)
- Spinner de chargement
- Gestion des erreurs avec bouton « Réessayer »
- Barre de recherche (nom, email, entreprise)
- Design responsive
- Modal de détails utilisateur
- Pagination (6 utilisateurs par page)

## Technologies

- React 19 + Hooks (`useState`, `useEffect`, `useMemo`)
- Vite 8
- CSS moderne (variables, grid, flexbox)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173)

## Scripts

| Commande        | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Serveur de développement |
| `npm run build` | Build de production      |
| `npm run preview` | Prévisualiser le build |
