---
layout: default
---
<style>
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
      linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
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
