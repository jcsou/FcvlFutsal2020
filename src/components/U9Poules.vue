<template>
  <div class="row">
    <button @click="update()">Update</button>
    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title">U9 - Poule A - Matchs</h4>
          <p class="card-category">Salle GLCroix puis CCVL</p>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class="text-primary">
                <th>Nu</th>
                <th>Horaire</th>
                <th>Salle</th>
                <th>Equipe1</th>
                <th></th>
                <th></th>
                <th>Equipe2</th>
              </thead>
              <tbody>
                <tr v-for="match in matchsPouleA" :key="match.id">
                  <td>{{match.id}}</td>
                  <td>{{match.horaire}}</td>
                  <td>{{match.salle}}</td>
                  <td>{{match.equipe1}}</td>
                  <td>{{match.but1}}</td>
                  <td>{{match.but2}}</td>
                  <td>{{match.equipe2}}</td>
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
    name: "U9Poules",
    data() {
      return {
        //var url = "https://fcvalduloir.pagesperso-orange.fr/TES2020/data/20_Uxx_2020a10-V2.ods",
        url: "./data/20_U9_2020a10-V2.ods",
        poulessheet: null,
        classementPouleA: null,
        matchsPouleA: null
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
        var url = "./data/20_U9_2020a10-V2.ods";

        axios(url, {
          responseType: "arraybuffer"
        }).then(function(res) {
          var data = new Uint8Array(res.data);
          var dataOds = XLSX.read(data, { type: "array" });
          let poulessheet = dataOds.Sheets["Poules"];
          // console.log(poulessheet);
          var matchsPouleATMP = new Array();
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
                horaire: poulessheet["F" + i].w,
                equipe1: poulessheet["G" + i].w,
                equipe2: poulessheet["L" + i].w,
                but1: butE1,
                but2: butE2, 
              };
              matchsPouleATMP.push(match);
            }
          }
          pageContexte.matchsPouleA = matchsPouleATMP;

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
