<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <button @click="update()" class="btn btn-primary pull-right"> <i _ngcontent-pro-c19="" class="material-icons icon-image-preview">loop</i> Synchroniser</button>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <!-- MATCH PA--> 
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title">U9 - Poule A - Les Matchs</h4> 
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-primary">
              <th>Nu</th>
              <th>Equipe1</th>
              <th>Score</th>
              <th>Equipe2</th>
            </thead>
            <tbody>
              <tr v-for="match in dataPage.matchsPoules" :key="match.id">
                <td>{{match.id}}</td>
                <td>{{match.equipe1}}</td>
                <td v-if="match.but2==='' && match.but2===''" class="text-salle">{{match.horaire}} - {{match.salle}}</td>
                <td v-else class="text-score">{{match.but1}} - {{match.but2}}</td>
                <td>{{match.equipe2}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <!-- CLASSEMENT PA--> 
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title">U9 - Poule A - Classement </h4>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-primary">
              <th>Rang</th>
              <th>Equipe</th>
              <th>Points</th>
              <th>Diff Buts</th>
            </thead>
            <tbody>
              <tr v-for="equipe in dataPage.classementPouleA" :key="equipe.nom">
                <td>{{equipe.rang}}</td>
                <td>{{equipe.nom}}</td>
                <td>{{equipe.points}}</td>
                <td>{{equipe.diffButs}}</td>
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
  // import { match } from 'minimatch';

  export default {
    name: "U9Poules",
    data() {
      return {
        // url: "https://fcvalduloir.pagesperso-orange.fr/TES2020/data/20_U9_2020a10-V2.ods",
        url: process.env.VUE_APP_DATA_URL + "data/20_U9_2020a10-V2.ods",
        dataPage: {
          classementPouleA: null,
          matchsPoules: null
        }
      };
    },
    created() {
      this.loadDataOds();
    },
    methods: {
      update(){
        this.loadDataOds();
      },
      filterPoule(matchs, filtre){
        matchsPoulesFiletered: {};
        for (match in matchs) {
          if (match.poule=filtre) {
          }
        }
        // return matchsPoulesFiletered;
        return matchs;
      },
      loadDataOds() {
        const pageContexte = this;
        // var url = "./data/20_U9_2020a10-V2.ods";
        var url = this.url;

        axios(url, {
          responseType: "arraybuffer"
        }).then(function(res) {
          var data = new Uint8Array(res.data);
          var dataOds = XLSX.read(data, { type: "array" });
          let poulessheet = dataOds.Sheets["Poules"];
          // console.log(poulessheet);
          
          // Gestion des MATCHS POULES
          var matchsPoulesTMP = new Array();
          var match = {};
          for (var i = 14; i < 25; i++) {
            var butE1 = "";
            var butE2 = "";
            if (i != 20) {
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
              matchsPoulesTMP.push(match);
            }
          }
          pageContexte.dataPage.matchsPoules = matchsPoulesTMP;

          // Gestion des CLASSEMENT POULE A
          var classementPouleATMP = new Array();
          var equipe = {};
          for (var i = 16; i < 21; i++) {
            var rangE = "";
            if (typeof poulessheet["P" + i] != "undefined") {
              rangE = poulessheet["P" + i].w;
            }
            equipe = {
              rang: rangE,
              nom: poulessheet["Q" + i].w,
              points: poulessheet["R" + i].w,
              diffButs: poulessheet["S" + i].w,
            };
            classementPouleATMP.push(equipe);
            
          }
          pageContexte.dataPage.classementPouleA = classementPouleATMP;
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
