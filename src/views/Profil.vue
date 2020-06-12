<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class=userinfo>
<img id="avatar" src="../assets/pplaceholder.jpg"/>
<center><span id="imekor">{{korisnik.korisnickoime}}</span></center>
</div>
<div class=podaci>
<a id="naslov">Podaci</a>
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" id="pbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Igra
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="poddota()" href="#">Dota 2</a>
    <a class="dropdown-item" @click="podcsgo()" href="#">CS:GO</a>
    <a class="dropdown-item" @click="podlol()" href="#">League of legends</a>
  </div>
</div>
</div>
<div v-if="dotaodabir" class=asd>
<div class="row">
  
  <div class="col">
     <li id="podaciid">Rank: {{ korisnik.dotarank }} </li>
     <li id="podaciid">Id u igri:{{ korisnik.dotagameid}} </li>
     
     <li id="podaciid">Pozicija:{{ korisnik.dotapos }}</li>
     
     <li id="podaciid">Regija:{{korisnik.dotaregija}}</li>
     
     <li id="podaciid">Trenutno u timu: <a v-if="dotatim">DA</a><a v-else>NE</a></li>
     </div>
      

  <div class="col">
  <div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div></div>
</div>
</div>

<div v-if="csgoodabir" class=asd>
<div class="row">
  
  <div class="col">
     <li id="podaciid">Rank: {{ korisnik.csgorank }} </li>
     <li id="podaciid">Id u igri:{{ korisnik.csgogameId}} </li>
     
     <li id="podaciid">Pozicija:{{ korisnik.csgopos }}</li>
     
     <li id="podaciid">Regija:{{korisnik.csgoregija}}</li>
     
     <li id="podaciid">Trenutno u timu: <a v-if="csgotim">DA</a><a v-else>NE</a></li>
     </div>
      

  <div class="col">
  <div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div></div>
</div>
</div>

<div v-if="lolodabir" class=asd>
<div class="row">
  
  <div class="col">
     <li id="podaciid">Rank: {{ korisnik.lolrank }} </li>
     <li id="podaciid">Id u igri:{{ korisnik.lolgameId}} </li>
     
     <li id="podaciid">Pozicija:{{ korisnik.lolpos }}</li>
     
     <li id="podaciid">Regija:{{korisnik.lolregija}}</li>
     
     <li id="podaciid">Trenutno u timu: <a v-if="loltim">DA</a><a v-else>NE</a></li>
     </div>
      

  <div class="col">
  <div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div></div>
</div>
</div>

<div class=komentari>
<a id="naslov2">Komentari</a>
</div>
<div class="koms">
<div class="koment" v-for="komentari in odabir" :key="komentari.id">
<div class="container">
<div class="row">
<div class="col">
<div class=poster>
<img id="komavatar" src="../assets/pplaceholder.jpg"/>
<span id="korimekom">{{ komentari.korisnik }}</span>
</div>
</div>
<div class="col">
<div class=asd>
<a id="komst"> </a>
{{komentari.komentar}}
</div>
</div>
</div>
</div>
</div>
</div>
<form @submit.prevent="submitKomentar" class="form-inline mb-5">
            <div class="form-group">
              <input v-model="komentar" type="text" class="form-control" id="imageUrl" placeholder="Any comment?">
            </div>
            <button type="submit" class="btn btn-primary ml-2">Post</button>
          </form>
</div>
</div>

</template>



<script>
import navnside from '@/components/navnside.vue'
import store from '@/store.js'
import kompkomentari from '@/components/kompkomentari.vue'



export default {
  data(){
    return store
  },

 
  components: {
    navnside,
    kompkomentari
  },
 created(){
        var kor = this.$route.params.imekorisnika 
        let korisnik = db.collection("Korisnici").doc(kor)
        korisnik.get().then((doc) =>{
            this.korisnik = doc.data()
            this.loltim = doc.data().loltim
            this.dotatim = doc.data().dotatim
            this.cgotim = doc.data().csgotim
        })    
    },
  mounted(){
    var kor = this.$route.params.imekorisnika
    db.collection('Korisnici').doc(kor).collection("komentari").get().then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
         let komentari=doc.data()
         komentari.id=doc.id;
        this.Komentari.push(komentari);
    });
});
  },
  computed:{
      odabir() {
      return this.Komentari.filter(komentari => komentari.id);
 
    }
    },

  methods:{
  poddota() {
          this.lolodabir = false;
          this.dotaodabir = true;
          this.csgoodabir = false;
  },
podcsgo() {
          this.lolodabir = false;
          this.dotaodabir = false;
          this.csgoodabir = true;
  },
podlol() {
          this.lolodabir = true;
          this.dotaodabir = false;
          this.csgoodabir = false;
  },
  
submitKomentar(){
  var kor = this.$route.params.imekorisnika
  db.collection('Korisnici').doc(kor).collection("komentari").add({
                    korisnik: this.korisnickoIme,
                    komentar: this.komentar,
                    createdAt: new Date()
                })
  }
  
} }
</script>

<style>


.koms{
margin-top:30px;
}



.col #userrate{
padding:50px;
}

li{
  list-style-type: none;
}

#podaciid{
  padding: 10px;
}
.row{
width:100%;
}


.asd {
  margin-top: 2%;
  width: 30%;
  font-size: 20px;
  color: white;
  margin-left: 4%;
  }




.row:after {
  content: "";
  display: table;
  clear: both;
}



.row {
  display: flex;
}

.column {
  flex: 50%;
}



.column {
  float: left;
}

.left {
  width: 25%;
}

.right {
  width: 75%;
}

#imekor{
position: relative;
font-size: 23px;
color:white;
}

#avatar{
margin-top:2%;
border-radius: 50%;
height:140px;
float:center;
}

#naslov{
margin-bottom:30px;
position: relative;
float:left;
font-size: 25px;
color:white;
font-weight: bold;
}

#naslov2{
margin-bottom:10px;
float: left;
position: relative;
font-size: 25px;
color:white;
font-weight: bold;
}

.podaci{
padding:10px;
background: rgb(0, 0, 0);
margin-top: 2%;
width:100vw;
height:60px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}


.komentari{
padding:10px;
background: rgb(0, 0, 0);
margin-top: 1%;
width:100vw;
height:60px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}

body {
  background: #000220 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>