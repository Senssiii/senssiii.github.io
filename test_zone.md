---
title: ZONE DE TEST
layout: medieval
nav_exclude: true
---
<style>
  @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&display=swap');

  :root {
    --body-background-color: #fdf6e3;
    --body-text-color: #333;
    --link-color: #5b2c6f;
    --nav-background-color: #f1e4c8;
    --nav-border-color: #c8b36b;
    --sidebar-width: 260px;
    --font-family-base: 'IM Fell English', serif;
  }
  .regles {
    background-color: #fffaf0;
    padding: 2rem;
    border: 1px solid #ccc;
    font-family: 'IM Fell English', serif;
  }
  body {
    position: relative;
    margin: 0;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      url("assets/textures/parchemin_1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1;
  }
</style>


<img src="assets/armoiries/Emerance.png" alt="Emerance" style="width: 50%; height: 50%; object-fit: cover;">

# image  côté

<div style="display: flex; height: 100vh; align-items: center;">

  <div style="flex: 1 1 50%; display: flex; align-items: center; justify-content: center; height: 100%;">
    <img src="assets/armoiries/Emerance.png" alt="Image" style="max-width: 100%; max-height: 100%; object-fit: contain;">
  </div>

  <div style="flex: 1 1 50%; padding: 2rem;">
    <h2>Texte à côté de l'image</h2>
    <p>Voici un exemple de contenu affiché à droite de l’image. Tu peux y mettre ce que tu veux.</p>
  </div>

</div>
