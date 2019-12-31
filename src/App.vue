<template>
  <div class="wrapper">
    <div class="sidebar" data-color="azure" data-background-color="white" data-image="./img/sidebar-1.jpg">
       <div class="logo">
        <a href="./" class="simple-text logo-normal">
          Creative Tim
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active ">
            <a class="nav-link" href="./dashboard.html">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
        <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">Table List</a>
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
          <div class="container-fluid">
            <div class="row">
                <div id="app">
                <Accueil msg="Welcome to Your Vue.js App"/>
                </div>
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title ">Simple Table</h4>
                    <p class="card-category"> Here is a subtitle for this table</p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class=" text-primary">
                          <th>
                            ID
                          </th>
                          <th>
                            Name
                          </th>
                          <th>
                            Country
                          </th>
                          <th>
                            City
                          </th>
                          <th>
                            Salary
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              1
                            </td>
                            <td>
                              Dakota Rice
                            </td>
                            <td>
                              Niger
                            </td>
                            <td>
                              Oud-Turnhout
                            </td>
                            <td class="text-primary">
                              $36,738
                            </td>
                          </tr>
                          </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
        <div class="container-fluid">
          <div class="copyright float-right">
            &copy;2020, made with <i class="material-icons">favorite</i> by
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
          </div>
        </div>
        </footer>
    </div>
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
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons';
  @import 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css';
  @import './assets/css/material-dashboard.css?v=2.1.1';
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
