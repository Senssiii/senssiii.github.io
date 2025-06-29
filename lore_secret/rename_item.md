---
title: Rename
layout: default
nav_exclude: true
search_exclude: false
---

# Comment changer le nom d'un item
### Utilise la commande `/ri name` avec un dégradé

La syntaxe est :

```mc
/ri name <gradient:#COULEUR1:#COULEUR2>NomPersonnalisé
```

#### 🌈 Exemple 1 : Dégradé Rouge → Bleu

```mc
/ri name <gradient:#ff0000:#0000ff>Épée Magique
```

> Affichera “Épée Magique” avec un dégradé allant du rouge vers le bleu.

---

#### 🖍 Exemple 2 : Ajouter du gras et de l’italique

```mc
/ri name <gradient:#00ff00:#ff00ff><bold><italic>Arc Stylé
```

---

#### ✨ Exemple 3 : Dégradé Arc-en-ciel automatique

```mc
/ri name <rainbow>Item Coloré
```

---

### 💡 Astuces

| Effet                   | Balise à utiliser              |
| ----------------------- | ------------------------------ |
| Couleur unie            | `<red>`, `<blue>`, `<#FFAA00>` |
| Gras                    | `<bold>`                       |
| Italique                | `<italic>`                     |
| Souligné                | `<underlined>`                 |
| Dégradé                 | `<gradient:#DEBUT:#FIN>`       |
| Arc-en-ciel             | `<rainbow>`                    |
| Supprimer le nom custom | `/ri name ""`                  |

---

### 🔗 Générateurs utiles

Si tu veux créer de longs textes avec dégradé sans te fatiguer :

* [Gradient Generator – MC Utils](https://rgb.birdflop.com/)
* [MiniMessage Gradient Maker](https://webui.mclo.gs/minimessage)

Copie simplement le texte généré et colle-le dans la commande `/ri name`.

---

### 🧪 Résultat attendu

Quand tu fais `/ri name <gradient:#ff0000:#0000ff>Épée Magique`, le nom de ton objet change et affiche "Épée Magique" en rouge → bleu, sans italique par défaut (car le mod le force à `false` sauf si tu ajoutes `<italic>`).