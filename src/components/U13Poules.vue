<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
       <h3>{{categorie}} Phase de poule</h3>
    </div>
  </div>
  <!-- PA-->
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <!-- MATCH PA--> 
      <div class="card">
        <div class="card-header card-header-info">
          <h4 class="card-title">{{categorie}} - Poule A - Les Matchs <button @click="update()" class="btn btn-default pull-right " style="height=15px;"><i _ngcontent-pro-c19="" class="material-icons icon-image-preview">loop</i></button></h4> 
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-info">
              <th class="text-coltitle">Nu</th>
              <th class="text-coltitle">Equipe1</th>
              <th class="text-coltitle">Score</th>
              <th class="text-coltitle">Equipe2</th>
            </thead>
            <tbody>
              <slot v-for="match in dataPage.matchsPouleAB" >
                <tr v-if="match.poule==='A'" :key="match.id">
                  <td class="text-id">{{match.id}}</td>
                  <td class="text-eq1">{{match.equipe1}}</td>
                  <td v-if="match.but2==='' && match.but2===''" class="text-salle">{{match.horaire}} - {{match.salle}}</td>
                  <td v-else class="text-score">{{match.but1}} - {{match.but2}}</td>
                  <td class="text-eq2">{{match.equipe2}}</td>
                </tr>
              </slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <!-- CLASSEMENT PA--> 
      <div class="card">
        <div class="card-header card-header-info">
          <h4 class="card-title">{{categorie}} - Poule A - Classement </h4>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-info">
              <th class="text-coltitle">Rang</th>
              <th class="text-coltitle">Equipe</th>
              <th class="text-coltitle">Points</th>
              <th class="text-coltitle">Diff Buts</th>
            </thead>
            <tbody>
              <tr v-for="equipe in dataPage.classementPouleA" :key="equipe.nom">
                <td class="text-id">{{equipe.rang}}</td>
                <td class="text-classement">{{equipe.nom}}</td>
                <td class="text-classement">{{equipe.points}}</td>
                <td class="text-classement">{{equipe.diffButs}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- PB-->
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <!-- MATCH PB--> 
      <div class="card">
        <div class="card-header card-header-warning">
          <h4 class="card-title">{{categorie}} - Poule B - Les Matchs <button @click="update()" class="btn btn-default pull-right " style="height=15px;"><i _ngcontent-pro-c19="" class="material-icons icon-image-preview">loop</i></button></h4> 
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-warning">
              <th class="text-coltitle">Nu</th>
              <th class="text-coltitle">Equipe1</th>
              <th class="text-coltitle">Score</th>
              <th class="text-coltitle">Equipe2</th>
            </thead>
            <tbody>
              <slot v-for="match in dataPage.matchsPouleAB" >
                <tr v-if="match.poule==='B'" :key="match.id">
                  <td class="text-id">{{match.id}}</td>
                  <td class="text-eq1">{{match.equipe1}}</td>
                  <td v-if="match.but2==='' && match.but2===''" class="text-salle">{{match.horaire}} - {{match.salle}}</td>
                  <td v-else class="text-score">{{match.but1}} - {{match.but2}}</td>
                  <td class="text-eq2">{{match.equipe2}}</td>
                </tr>
              </slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <!-- CLASSEMENT PB--> 
      <div class="card">
        <div class="card-header card-header-warning">
          <h4 class="card-title">{{categorie}} - Poule B - Classement </h4>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-warning">
              <th class="text-coltitle">Rang</th>
              <th class="text-coltitle">Equipe</th>
              <th class="text-coltitle">Points</th>
              <th class="text-coltitle">Diff Buts</th>
            </thead>
            <tbody>
              <tr v-for="equipe in dataPage.classementPouleB" :key="equipe.nom">
                <td class="text-id">{{equipe.rang}}</td>
                <td class="text-classement">{{equipe.nom}}</td>
                <td class="text-classement">{{equipe.points}}</td>
                <td class="text-classement">{{equipe.diffButs}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- PC -->
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <!-- MATCH PC--> 
      <div class="card">
        <div class="card-header card-header-success">
          <h4 class="card-title">{{categorie}} - Poule C - Les Matchs <button @click="update()" class="btn btn-default pull-right " style="height=15px;"><i _ngcontent-pro-c19="" class="material-icons icon-image-preview">loop</i></button></h4> 
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-success">
              <th class="text-coltitle">Nu</th>
              <th class="text-coltitle">Equipe1</th>
              <th class="text-coltitle">Score</th>
              <th class="text-coltitle">Equipe2</th>
            </thead>
            <tbody>
              <slot v-for="match in dataPage.matchsPouleCD" >
                <tr v-if="match.poule==='C'" :key="match.id">
                  <td class="text-id">{{match.id}}</td>
                  <td class="text-eq1">{{match.equipe1}}</td>
                  <td v-if="match.but2==='' && match.but2===''" class="text-salle">{{match.horaire}} - {{match.salle}}</td>
                  <td v-else class="text-score">{{match.but1}} - {{match.but2}}</td>
                  <td class="text-eq2">{{match.equipe2}}</td>
                </tr>
              </slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <!-- CLASSEMENT PC--> 
      <div class="card">
        <div class="card-header card-header-success">
          <h4 class="card-title">{{categorie}} - Poule C - Classement </h4>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-success">
              <th class="text-coltitle">Rang</th>
              <th class="text-coltitle">Equipe</th>
              <th class="text-coltitle">Points</th>
              <th class="text-coltitle">Diff Buts</th>
            </thead>
            <tbody>
              <tr v-for="equipe in dataPage.classementPouleC" :key="equipe.nom">
                <td class="text-id">{{equipe.rang}}</td>
                <td class="text-classement">{{equipe.nom}}</td>
                <td class="text-classement">{{equipe.points}}</td>
                <td class="text-classement">{{equipe.diffButs}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- PD -->
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <!-- MATCH PD--> 
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title">{{categorie}} - Poule D - Les Matchs <button @click="update()" class="btn btn-default pull-right " style="height=15px;"><i _ngcontent-pro-c19="" class="material-icons icon-image-preview">loop</i></button></h4> 
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-primary">
              <th class="text-coltitle">Nu</th>
              <th class="text-coltitle">Equipe1</th>
              <th class="text-coltitle">Score</th>
              <th class="text-coltitle">Equipe2</th>
            </thead>
            <tbody>
              <slot v-for="match in dataPage.matchsPouleCD" >
                <tr v-if="match.poule==='D'" :key="match.id">
                  <td class="text-id">{{match.id}}</td>
                  <td class="text-eq1">{{match.equipe1}}</td>
                  <td v-if="match.but2==='' && match.but2===''" class="text-salle">{{match.horaire}} - {{match.salle}}</td>
                  <td v-else class="text-score">{{match.but1}} - {{match.but2}}</td>
                  <td class="text-eq2">{{match.equipe2}}</td>
                </tr>
              </slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <!-- CLASSEMENT PD--> 
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title">{{categorie}} - Poule D - Classement </h4>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-primary">
              <th class="text-coltitle">Rang</th>
              <th class="text-coltitle">Equipe</th>
              <th class="text-coltitle">Points</th>
              <th class="text-coltitle">Diff Buts</th>
            </thead>
            <tbody>
              <tr v-for="equipe in dataPage.classementPouleD" :key="equipe.nom">
                <td class="text-id">{{equipe.rang}}</td>
                <td class="text-classement">{{equipe.nom}}</td>
                <td class="text-classement">{{equipe.points}}</td>
                <td class="text-classement">{{equipe.diffButs}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
  /* eslint-disable */
  import XLSX from "xlsx";
  import axios from "axios";

  export default {
    data() {
      return {
        categorie: "U13",
        url: process.env.VUE_APP_DATA_URL + "data/50_U13_2020a16-V2.ods",
        dataPage: {
          classementPouleA: null,
          classementPouleB: null,
          classementPouleC: null,
          classementPouleD: null,
          matchsPouleAB: null,
          matchsPouleCD: null,
        },
      };
    },
    created() {
      this.loadDataOds();
    },
    methods: {
      update(){
        this.loadDataOds();
      },
      loadDataOds() {
        const pageContexte = this;
        var url = this.url;

        axios(url, {
          responseType: "arraybuffer"
        }).then(function(res) {
          var data = new Uint8Array(res.data);
          var dataOds = XLSX.read(data, { type: "array" });
          let poulessheet = dataOds.Sheets["Poules"];
          // console.log(poulessheet);
          
          // Gestion des MATCHS POULE AB
          var matchsPouleABTMP = new Array();
          var match = {};
          for (var i = 13; i < 26; i++) {
            var butE1 = "";
            var butE2 = "";
            if (i != 21) {
              if (typeof poulessheet["I" + i] != "undefined") {
                butE1 = poulessheet["I" + i].w;
              }
              if (typeof poulessheet["J" + i] != "undefined") {
                butE2 = poulessheet["J" + i].w;
              }

              match = {
                id: poulessheet["C" + i].w,
                salle: poulessheet["D" + i].w,
                poule: poulessheet["E" + i].w,
                horaire: poulessheet["F" + i].w,
                equipe1: poulessheet["G" + i].w,
                equipe2: poulessheet["L" + i].w,
                but1: butE1,
                but2: butE2, 
              };
              matchsPouleABTMP.push(match);
            }
          }
          pageContexte.dataPage.matchsPouleAB = matchsPouleABTMP;

          // Gestion des MATCHS POULE CD
          var matchsPouleCDTMP = new Array();
          var match = {};
          for (var i = 35; i < 48; i++) {
            var butE1 = "";
            var butE2 = "";
            if (i != 43) {
              if (typeof poulessheet["I" + i] != "undefined") {
                butE1 = poulessheet["I" + i].w;
              }
              if (typeof poulessheet["J" + i] != "undefined") {
                butE2 = poulessheet["J" + i].w;
              }

              match = {
                id: poulessheet["C" + i].w,
                salle: poulessheet["D" + i].w,
                poule: poulessheet["E" + i].w,
                horaire: poulessheet["F" + i].w,
                equipe1: poulessheet["G" + i].w,
                equipe2: poulessheet["L" + i].w,
                but1: butE1,
                but2: butE2, 
              };
              matchsPouleCDTMP.push(match);
            }
          }
          pageContexte.dataPage.matchsPouleCD = matchsPouleCDTMP;

          // Gestion des CLASSEMENT POULE A
          var classementPouleATMP = new Array();
          var equipe = {};
          for (var i = 14; i < 18; i++) {
            var rangE = "";
            if (typeof poulessheet["O" + i] != "undefined") {
              rangE = poulessheet["O" + i].w;
            }
            equipe = {
              rang: rangE,
              nom: poulessheet["P" + i].w,
              points: poulessheet["Q" + i].w,
              diffButs: poulessheet["R" + i].w,
            };
            classementPouleATMP.push(equipe);
          }
          pageContexte.dataPage.classementPouleA = classementPouleATMP;

          // Gestion des CLASSEMENT POULE B
          var classementPouleBTMP = new Array();
          var equipe = {};
          for (var i = 22; i < 26; i++) {
            var rangE = "";
            if (typeof poulessheet["O" + i] != "undefined") {
              rangE = poulessheet["O" + i].w;
            }
            equipe = {
              rang: rangE,
              nom: poulessheet["P" + i].w,
              points: poulessheet["Q" + i].w,
              diffButs: poulessheet["R" + i].w,
            };
            classementPouleBTMP.push(equipe);
          }
          pageContexte.dataPage.classementPouleB = classementPouleBTMP;

          // Gestion des CLASSEMENT POULE C
          var classementPouleCTMP = new Array();
          var equipe = {};
          for (var i = 36; i < 40; i++) {
            var rangE = "";
            if (typeof poulessheet["O" + i] != "undefined") {
              rangE = poulessheet["O" + i].w;
            }
            equipe = {
              rang: rangE,
              nom: poulessheet["P" + i].w,
              points: poulessheet["Q" + i].w,
              diffButs: poulessheet["R" + i].w,
            };
            classementPouleCTMP.push(equipe);
          }
          pageContexte.dataPage.classementPouleC = classementPouleCTMP;

          // Gestion des CLASSEMENT POULE D
          var classementPouleDTMP = new Array();
          var equipe = {};
          for (var i = 44; i < 48; i++) {
            var rangE = "";
            if (typeof poulessheet["O" + i] != "undefined") {
              rangE = poulessheet["O" + i].w;
            }
            equipe = {
              rang: rangE,
              nom: poulessheet["P" + i].w,
              points: poulessheet["Q" + i].w,
              diffButs: poulessheet["R" + i].w,
            };
            classementPouleDTMP.push(equipe);
          }
          pageContexte.dataPage.classementPouleD = classementPouleDTMP;

          return dataOds;
        });
      }
    }
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
