---
title: index secret
layout: default
nav_exclude: true
search: false
---

# A quoi doivent ressembler les items 
## Le texte 
Le nom de l'item doit toujours comporter une majuscule et ne peut être accordé au pluriel, exemple : 
- `"Toile d'araignée"`
- `"Lingot d'or"`
- `"Perle rare"`

Voici la suite du motif avec les couleurs et catégories indiquées, corrigée et alignée sur le format initial :

🟦 **Objet de base** (#757575) :

```
/ri name <#757575>  
/ri lore add <gray>[Objet de base]  
```

🟩 **Peu commun** (#2E7D32) :

```
/ri name <#2E7D32>  
/ri lore add <gray>[Objet peu commun]  
```

🔵 **Rare** (#1565C0) :

```
/ri name <#1565C0>  
/ri lore add <gray>[Objet rare]  
```

🟣 **Épique** (#6A1B9A) :

```
/ri name <#6A1B9A>  
/ri lore add <gray>[Objet épique]  
```

🟧 **Légendaire** (#FF6F00) :

```
/ri name <#FF6F00>  
/ri lore add <gray>[Objet légendaire]  
```

🟨 **Mythique** (#FFC107) :

```
/ri name <#FFC107>  
/ri lore add <gray>[Objet mythique]  
```
---

## Descriptions d'objets

Comment est l'objet :
```mc
/ri lore add <gray>
```

Pour les compétences :
A : Agilitée
F : Force 
C : Constitution
I : Intelligence
Ar: Artisanat
Al: Alchimie
```
/ri lore add <white>[1A; 2F; 1I]
```

```
/ri lore add <white>[]
```

Modificateur de compétences : 
```
/ri lore add <#00BCD4>[+ 1A]
```

### ⚠️ Règles générales

| Règle                                              | Détail                                                        |
| -------------------------------------------------- | ------------------------------------------------------------- |
| ❌ Pas de spam visuel                               | Éviter les `<obfuscated>`, surbrillance excessive             |
| 📏 Longueur max conseillée                         | 25 caractères pour les noms, 50 pour le lore                  |
| 🧾 Lore en `gray` ou `dark_gray`                   | Pour une lecture roleplay propre                              |

---

## Comment renommer un item

-> [Renommer un item](./rename_item.html)