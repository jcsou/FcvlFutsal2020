<template>
  <div class="wrapper">
    <div
      class="sidebar"
      data-color="azure"
      data-background-color="white"
      data-image="./img/sidebar-1.jpg"
    >
      <div class="logo">
        <router-link tag="a" class="simple-text logo-normal" to="/Accueil">
          <img src="./assets/logo.png" alt="LogoFcvl Logo" height="30" /> FCVL
        </router-link>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <router-link tag="li" class="nav-link" active-class="nav-link active" to="/Accueil">
            <a class="nav-link">
              <i class="material-icons">dashboard</i>
              <p>Acceuil</p>
            </a>
          </router-link>
          <router-link tag="li" class="nav-link" active-class="nav-link active" to="/U9Poules">
            <a class="nav-link">
              <i class="material-icons">content_paste</i>
              <p>U9 - Poules</p>
            </a>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper"> 
            <router-link tag="a" class="navbar-brand " to="/Accueil">
              <h2><img src="./assets/logo.png" alt="LogoFcvl Logo" height="40"/> FCVL Tournoi Futsal</h2>
            </router-link>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class='navbar-form' style='display:none;'></div>
        </div>
      </nav>
      <div class="content">
        <router-view />
      </div>
      <footer class="footer">
        <div class="container-fluid">
          <div class="copyright float-right">
            &copy;2020 JcSouvignet,
            Avec
            <a href="https://vuejs.org/" target="_blank">
              <img src="https://vuejs.org/images/logo.png" alt="VueJS Logo" height="16" />VueJS
            </a>,
            et Template de presentation
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  // import Accueil from './components/Accueil.vue'
  // import U9Poules from './components/U9Poules.vue'

  export default {
    name: "app"
  };
</script>

<style>
  @import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons";
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css";
  @import "./assets/css/material-dashboard.css?v=2.1.1";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .text-score {
    color: #000000;
    text-align: center;
    font-weight: bold;
  }
  .text-salle {
    font-size: 0.75rem;
    text-align: center;
    font-style: italic;
  }
  .text-coltitle {
    text-align: center;
  }
  .text-id {
    text-align: center;
    width: "5%";
  }
  .text-eq1 {
    text-align: right;
    width: "35%";
  }
  .text-eq2 {
    text-align: left;
    width: "35%";
  }
  .text-classement {
    text-align: center;
  }

</style>
