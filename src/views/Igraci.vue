<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class="bar">
    <div class="btni">
 <span class="fltrs">
<div class="btn-group">
  <button type="button" href="" class="btn mnb btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Igra
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="odaberidota" >Dota 2</a>
    <a class="dropdown-item" @click="odabericsgo" >CS:GO</a>
    <a class="dropdown-item" @click="odaberilol" >League of legends</a>
  </div>
</div>
 <div v-if="dotaodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="filterdotarank('&dotarank=Herald')">Herald</a>
    <a class="dropdown-item" @click="filterdotarank('&dotarank=Guardian')">Guardian</a>
    <a class="dropdown-item" @click="filterdotarank('&dotarank=Crusader')">Crusader</a>
    <a class="dropdown-item" @click="filterdotarank('&dotarank=Archon')">Archon</a>
    <a class="dropdown-item" @click="filterdotarank('&dotarank=Legend')">Legend</a>
    <a class="dropdown-item" @click="filterdotarank('&dotarank=Ancient')">Ancient</a>
    <a class="dropdown-item" @click="filterdotarank('&dotarank=Divine')">Divine</a>
    <a class="dropdown-item" @click="filterdotarank('&dotarank=Immortal')">Immortal</a>
  </div>
</div>
 <div v-if="dotaodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="filterdotareg('dotaregija=Europe')">Europe</a>
    <a class="dropdown-item" @click="filterdotareg('dotaregija=America')">America</a>
    <a class="dropdown-item" @click="filterdotareg('dotaregija=China')">China</a>
    <a class="dropdown-item" @click="filterdotareg('dotaregija=SEA')">SEA</a>
  </div>
</div>
<div v-if="dotaodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="filterdotapos('dotapos=1')">Pos1</a>
    <a class="dropdown-item" @click="filterdotapos('dotapos=2')">Pos2</a>
    <a class="dropdown-item" @click="filterdotapos('dotapos=3')">Pos3</a>
    <a class="dropdown-item" @click="filterdotapos('dotapos=4')">Pos4</a>
    <a class="dropdown-item" @click="filterdotapos('dotapos=5')">Pos5</a>
  </div>
</div>
<div v-if="dotaodabir" class="btn-group">
 <button @click="enlistdota()" type="button" id="enlistbtn" class="btn btn-outline-primary" ><i class="far fa-check-circle"></i>Enlist</button>
</div>
 <div v-if="csgoodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="filtercsgorank('&csgorank=Silver')">Silver</a>
    <a class="dropdown-item" @click="filtercsgorank('&csgorank=Gold')">Gold</a>
    <a class="dropdown-item" @click="filtercsgorank('&csgorank=Master Guardian')">Master Guardian</a>
    <a class="dropdown-item" @click="filtercsgorank('&csgorank=Legendary Eagle')">Legendary Eagle</a>
     <a class="dropdown-item" @click="filtercsgorank('&csgorank=Supreme')">Supreme</a>
    <a class="dropdown-item" @click="filtercsgorank('&csgorank=Global Elite')">Global Elite</a>
  </div>
</div>
 <div v-if="csgoodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item"  @click="filtercsgoreg('csgoregija=EU')">EU</a>
    <a class="dropdown-item"  @click="filtercsgoreg('csgoregija=US')">US</a>
    <a class="dropdown-item"  @click="filtercsgoreg('csgoregija=Brazil')">Brazil</a>
    <a class="dropdown-item"  @click="filtercsgoreg('csgoregija=Russia')">Russia</a>
    <a class="dropdown-item"  @click="filtercsgoreg('csgoregija=Africa')">Africa</a>
    <a class="dropdown-item"  @click="filtercsgoreg('csgoregija=SEA')">SEA</a>
    <a class="dropdown-item"  @click="filtercsgoreg('csgoregija=Australia')">Australia</a>
  </div>
</div>
<div v-if="csgoodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="filtercsgopos('csgopos=Entry-fragger')">Entry-fragger</a>
    <a class="dropdown-item" @click="filtercsgopos('csgopos=Rifler')">Rifler</a>
    <a class="dropdown-item" @click="filtercsgopos('csgopos=Sniper')">Sniper</a>
    <a class="dropdown-item" @click="filtercsgopos('csgopos=Support')">Support</a>
    <a class="dropdown-item" @click="filtercsgopos('csgopos=Lurker')">Lurker</a>
  </div>
</div>
<div v-if="csgoodabir" class="btn-group">
 <button @click="enlistcsgo()" type="button" id="enlistbtn" class="btn btn-outline-primary" ><i class="far fa-check-circle"></i>Enlist</button>
</div>
 <div v-if="lolodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Iron')">Iron</a>
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Bronze')">Bronze</a>
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Silver')">Silver</a>
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Gold')">Gold</a>
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Platinum')">Platinum</a>
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Diamond')">Diamond</a>
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Master')">Master</a>
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Grandmaster')">GrandMaster</a>
    <a class="dropdown-item" @click="filterlolrank('&lolrank=Challenger')">Challenger</a>
  </div>
</div>
 <div v-if="lolodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="filterlolreg('lolregija=EUW')">EUW</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=EUNE')">EUNE</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=NA')">NA</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=LAS')">LAS</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=LAN')">LAN</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=BR')">BR</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=RU')">RU</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=KR')">KR</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=OCE')">OCE</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=TR')">TR</a>
    <a class="dropdown-item" @click="filterlolreg('lolregija=Japan')">Japan</a>
  </div>
</div>
<div v-if="lolodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="filterlolpos('lolpos=ADC')">ADC</a>
    <a class="dropdown-item" @click="filterlolpos('lolpos=Mid')">Mid</a>
    <a class="dropdown-item" @click="filterlolpos('lolpos=Top')">Top</a>
    <a class="dropdown-item" @click="filterlolpos('lolpos=Jungle')">Jungle</a>
    <a class="dropdown-item" @click="filterlolpos('lolpos=Support')">Support</a>
  </div>
</div>
<div v-if="lolodabir" class="btn-group">
 <button @click="enlistlol()" type="button" id="enlistbtn" class="btn btn-outline-primary" ><i class="far fa-check-circle"></i>Enlist</button>
</div>
 </span>
    </div>
</div>


<div v-for="igrac in dotaigraci" :key="igrac.username">
            <kompigraci :korisnik="igrac" v-if="dotaodabir" />
        </div>
        <div v-for="igrac in loligraci" :key="igrac.username">
            <lolkompigraci :korisnik="igrac" v-if="lolodabir" />
        </div>
        <div v-for="igrac in csgoigraci" :key="igrac.username">
            <csgokompigraci :korisnik="igrac" v-if="csgoodabir" />
        </div>


</div>
</div>
</template>

<script>
import kompigraci from '@/components/kompigraci.vue'
import lolkompigraci from '@/components/lolkompigraci.vue'
import csgokompigraci from '@/components/csgokompigraci.vue'
import navnside from '@/components/navnside.vue'
import store from '@/store.js'
import { Igraci } from '@/services'
export default {

  data () {
    return store
  },
  components: {
    navnside,
    kompigraci,
    lolkompigraci,
    csgokompigraci
  },
   created(){
      this.dbdohvati();


  },
  methods:{

    async dbdohvati(){
      this.dotaigraci = await Igraci.getdota(this.filter.join('&'))
      this.csgoigraci = await Igraci.getcsgo(this.filter.join('&'))
      this.loligraci = await Igraci.getlol(this.filter.join('&'))
    },
      

      odaberilol(){
        this.lolodabir = false;
          this.dotaodabir = false;
          this.csgoodabir = false;
          this.lolodabir = true;
          this.filter = [''];
          this.dbdohvati();
      },
      odabericsgo(){
        this.csgoodabir = false;
        this.lolodabir = false;
          this.dotaodabir = false;
          this.csgoodabir = true;
          this.filter = [''];
          this.dbdohvati();
      },
      odaberidota(){
        this.dotaodabir = false;
        this.lolodabir = false;
          this.csgoodabir = false;
          this.dotaodabir = true;
          this.filter = [''];
          this.dbdohvati();

      },
      enlistdota(){
           db.collection("Igraci").doc(this.userEmail).set
                      ({
                      dotalist: true,
                      dotagameid:this.dotaGameId,
                      dotarank: this.dotaRank,
                      dotapos: this.dotaPos,
                      dotaregija: this.dotaRegija,
                      id:this.userEmail
                       },{ merge: true }
                       )
      },
      enlistcsgo(){
           db.collection("Igraci").doc(this.userEmail).set
                      ({
                      csgolist: true,
                      csgogameid:this.csgoGameId,
                      csgorank: this.csgoRank,
                      csgopos: this.csgoPos,
                      csgoregija: this.csgoRegija,
                      id:this.userEmail
                       },{ merge: true }
                       )
      },
      enlistlol(){
           db.collection("Igraci").doc(this.userEmail).set
                      ({
                      lollist: true,
                      lolgameid:this.lolGameId,
                      lolrank: this.lolRank,
                      lolpos: this.lolPos,
                      lolregija: this.lolRegija,
                      id:this.userEmail
                       },{ merge: true }
                       )
      },

      filterdotareg(f){
      this.filter[1]=f;
      this.dbdohvati();
      },
      filterdotapos(f){
      this.filter[2]=f;
      this.dbdohvati();
      },
      filterdotarank(f){
      this.filter[0]=f;
      this.dbdohvati();
      },

      filtercsgoreg(f){
      this.filter[1]=f;
      this.dbdohvati();
      },
      filtercsgopos(f){
      this.filter[2]=f;
      this.dbdohvati();
      },
      filtercsgorank(f){
      this.filter[0]=f;
      this.dbdohvati();
      },

      filterlolreg(f){
      this.filter[1]=f;
      this.dbdohvati();
      },
      filterlolpos(f){
      this.filter[2]=f;
      this.dbdohvati();
      },
      filterlolrank(f){
      this.filter[0]=f;
      this.dbdohvati();
      }




  }


}
</script>

<style>

#enlistbtn {
width: 120px;
}
 

.btni{
position: relative;
float:left;
}

.btn-group{
margin-top:5px;
padding:10px;
margin-right:50px;
}

.bar{
background: rgb(9, 1, 32);
height:70px;
width:100vw;
border-bottom: solid 1px white;
}

.dropdown-toggle{
font-size: 15px;
height:30px;
width:90px;
}

body {
  background: #000220 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
}


</style>