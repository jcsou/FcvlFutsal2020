<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
       <h3>{{categorie}} Phase Finale</h3>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <!-- MATCHS --> 
      <div class="card">
        <div class="card-header card-header-info">
          <h4 class="card-title">{{categorie}} - Phase Finale - Les Matchs <button @click="update()" class="btn btn-default pull-right " style="height=15px;"><i _ngcontent-pro-c19="" class="material-icons icon-image-preview">loop</i></button></h4> 
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
              <tr v-for="match in dataPage.matchs" :key="match.id">
                <td class="text-id">{{match.id}}</td>
                <td class="text-eq1">{{match.equipe1}}</td>
                <td v-if="match.but2==='' && match.but2===''" class="text-salle">{{match.horaire}} - {{match.salle}}</td>
                <td v-else class="text-score">{{match.but1}} - {{match.but2}}</td>
                <td class="text-eq2">{{match.equipe2}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <!-- CLASSEMENT--> 
      <div class="card">
        <div class="card-header card-header-info">
          <h4 class="card-title">{{categorie}} - Classement G&eacute;n&eacute;rale </h4>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-info">
              <th class="text-coltitle">Rang</th>
              <th class="text-coltitle">Equipe</th>
            </thead>
            <tbody>
              <tr v-for="equipe in dataPage.classement" :key="equipe.nom">
                <td class="text-id">{{equipe.rang}}</td>
                <td class="text-classement">{{equipe.nom}}</td>
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
    data() {
      return {
        categorie: "U11",
        url: process.env.VUE_APP_DATA_URL + "data/30_U11_2020a12-V2.ods",
        dataPage: {
          classement: null,
          matchs: null,
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
      loadDataOds() {
        const pageContexte = this;
        var url = this.url;

        axios(url, {
          responseType: "arraybuffer"
        }).then(function(res) {
          var data = new Uint8Array(res.data);
          var dataOds = XLSX.read(data, { type: "array" });
          let poulessheet = dataOds.Sheets["Poules"];
          let finalesheet = dataOds.Sheets["PhaseFinale"];
          // console.log(poulessheet);
          
          // MATCHS
          var matchsTMP = new Array();
          var match = {};
          for (var i = 64; i < 71; i++) {
            var butE1 = "";
            var butE2 = "";
            var E1 = "";
            var E2 = "";
            if (i != 69) {
              if (typeof poulessheet["I" + i] != "undefined") {
                butE1 = poulessheet["I" + i].w;
              }
              if (typeof poulessheet["J" + i] != "undefined") {
                butE2 = poulessheet["J" + i].w;
              }
              if (typeof poulessheet["G" + i] != "undefined") {
                E1 = poulessheet["G" + i].w;
              }
              if (typeof poulessheet["L" + i] != "undefined") {
                E2 = poulessheet["L" + i].w;
              }

              match = {
                id: poulessheet["C" + i].w,
                salle: poulessheet["D" + i].w,
                horaire: poulessheet["F" + i].w,
                equipe1: E1,
                equipe2: E2,
                but1: butE1,
                but2: butE2, 
              };
              matchsTMP.push(match);
            }
          }
          pageContexte.dataPage.matchs = matchsTMP;

          // CLASSEMENT
          var classementTMP = new Array();
          var equipe = {};
          for (var i = 6; i < 18; i++) {
            var nomE = "";
            if (typeof finalesheet["H" + i] != "undefined") {
              nomE = finalesheet["H" + i].w;
            }
            equipe = {
              rang: finalesheet["G" + i].w,
              nom: nomE
            };
            classementTMP.push(equipe);
          }
          pageContexte.dataPage.classement = classementTMP;
          return dataOds;
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
