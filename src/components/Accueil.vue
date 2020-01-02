<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 text-accueil">
        <img alt="FCVL logo" src="../assets/logo.png" />
        <h3>Tournoi en salle du FC Val Du Loir</h3>
        <h4>Samedi 04/01/2020</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-info card-header-icon">
            <div class="card-icon">Cat&eacute;gorie U9</div>
            <p class="card-category">de 12h30 &agrave; 15h</p>
            <p class="card-category">RDV : 12h</p>
            <h3 class="card-title">10 &eacute;quipes</h3>
          </div>
          <div class="card-footer">
            <router-link tag="a" active-class="nav-link active" to="/U9Poules">
            <a class="nav-link"><p><i class="material-icons">vertical_split</i> U9 - Poules</p>
            </a>
            </router-link>
            <router-link tag="a" active-class="nav-link active" to="/U9Finales">
            <a class="nav-link"><p><i class="material-icons">line_weight</i> U9 - Finales</p>
            </a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-info card-header-icon">
            <div class="card-icon">Cat&eacute;gorie U11</div>
            <p class="card-category">de 9h30 &agrave; 12h</p>
            <p class="card-category">RDV : 9h</p>
            <h3 class="card-title">12 &eacute;quipes</h3>
          </div>
          <div class="card-footer">
            <router-link tag="a" active-class="nav-link active" to="/U11Poules">
            <a class="nav-link"><p><i class="material-icons">vertical_split</i> U11 - Poules</p>
            </a>
            </router-link>
            <router-link tag="a" active-class="nav-link active" to="/U11Finales">
            <a class="nav-link"><p><i class="material-icons">line_weight</i> U11 - Finales</p>
            </a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-info card-header-icon">
            <div class="card-icon">Cat&eacute;gorie U13</div>
            <p class="card-category">de 15h30 &agrave; 18h30</p>
            <p class="card-category">RDV : 15h</p>
            <h3 class="card-title">16 &eacute;quipes</h3>
          </div>
          <div class="card-footer">
            <router-link tag="a" active-class="nav-link active" to="/U13Poules">
            <a class="nav-link"><p><i class="material-icons">vertical_split</i> U13 - Poules</p>
            </a>
            </router-link>
            <router-link tag="a" active-class="nav-link active" to="/U13Finales">
            <a class="nav-link"><p><i class="material-icons">line_weight</i> U13 - Finales</p>
            </a>
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-danger card-header-icon">
            <div class="card-icon">
              <i class="material-icons">info_outline</i>
            </div>
            <p class="card-category">Fairplay...</p>
            <h3 class="card-title">INFOS</h3>
          </div>
          <div class="card-footer">
            <div class="stats">
              <a href="./pdf/01_ReglementTournoi2020.pdf" class="nav-link" target="_reglement"><p><i class="material-icons">sports</i> R&eacute;glement</p></a>
              <br>
              <a href="./img/PlanAcces.JPG" class="nav-link" target="_reglement"><p><i class="material-icons">room</i>Plan d'acc&egrave;s</p></a>
              <br>
              <a href="./img/QRsite.png" class="nav-link" target="_reglement"><p><i class="material-icons">share</i>QRCode URL</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Accueil"
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
