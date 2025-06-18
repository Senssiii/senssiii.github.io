---
title: index secret
layout: default
nav_exclude: true
---

# A quoi doivent ressembler les items 
## Le texte 
Le nom de l'item doit toujours comporter une majuscule et ne peut être accordé au pluriel, exemple : 
- `"Toile d'araignée"`
- `"Lingot d'or"`
- `"Perle rare"`

### 🧱 1. Objets classiques (commun, craftable)

* **Couleur** : blanc (`<white>` ou pas de balise)
* **Style** : sans italique ni effet
* **Exemples** :

  ```mc
  /ri name Pioche en pierre
  /ri name Couteau de cuisine
  ```

---

### 🟩 2. Objets améliorés (peu communs, outils enchantés basiques)

* **Exemples** :

  ```mc
  /ri name <#55FF55><bold>Pioche robuste
  /ri name <#55FF55><bold>Épée équilibrée
  ```

---

### 🔵 3. Objets rares (loot de boss, objets spéciaux)

* **Utilisation autorisée du lore**
* **Exemples** :

  ```mc
  /ri name <gradient:#88ccff:#3333ff><bold><italic>Lame des Profondeurs
  /ri lore add <gray>Forgée par les Anciens
  ```

---

### 🟡 5. Objets légendaires (uniques, liés à des quêtes ou au lore)

* **Lore enrichi (jusqu’à 3 lignes max), format roleplay**
* **Exemples** :

  ```mc
  /ri name <gradient:#FFD700:#AA0000><bold>Flamme de Karak
  /ri lore set 0 <gray>« Et la montagne saigna... »
  /ri lore set 1 <dark_gray>Une arme née de la guerre divine
  ```

---

### ⚠️ Règles générales

| Règle                                              | Détail                                                        |
| -------------------------------------------------- | ------------------------------------------------------------- |
| ❌ Pas de spam visuel                               | Éviter les `<obfuscated>`, surbrillance excessive             |
| 📏 Longueur max conseillée                         | 25 caractères pour les noms, 50 pour le lore                  |
| 🧾 Lore en `gray` ou `dark_gray`                   | Pour une lecture roleplay propre                              |

---

## Comment renommer un item

-> [Renommer un item](./rename_item.html)