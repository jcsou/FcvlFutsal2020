<template>
  <div id="app">
    <img alt="FCVL logo" src="./assets/logo.png" width="50">
    <Accueil msg="Tournoi en salle 2020 -  F.C. Val du Loir "/>
  </div>
</template>

<script>
import Accueil from './components/Accueil.vue'

export default {
  name: 'app',
  components: {
    Accueil
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
