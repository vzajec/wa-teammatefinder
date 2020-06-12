<template>
<div>
<div class="igraci">
<div class="row">
<div id=userinfo>
<ul id=red>
<router-link :to="{name: 'Profil', params: {imekorisnika: korisnik.username}}"><li><img id="avatar" src="../assets/pplaceholder.jpg"/></li>
<li id="imekor">{{ korisnik.username }}</li></router-link>
</ul>
</div>
<div class="column">
<div id=userpodaci>
<li id="pods">Id u igri:{{korisnik.lolgameid}}</li>
<li id="pods">Rank:{{korisnik.lolrank}}</li>
<li id="pods">Pozicija:{{korisnik.lolpos}}</li>
<li id="pods">Regija:{{korisnik.lolregija}}</li>
</div>
</div>
<div class="column2">
<div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div>

</div>

<div class="column3">
<div id=user>
<li id="dgmd"> <button @click="lolinv(korisnik.id)" type="button" class="btn btn-outline-primary" >Pozovi u tim</button></li>
</div>

</div>

</div>

</div>
</div>
</template>



<script>
import store from '@/store.js'
import { Igraci } from '@/services'

export default {
  props: ['korisnik'],

  data(){
    return store
  },

  created(){

  },
  computed:{

    },
     methods: {
      lolinv(k){
        db.collection('Korisnici').doc(k).collection("pozivi").doc(this.userEmail).set({
                    od: this.userEmail,
                    igra: "LOL"
                })
      }
    }


}
</script>

<style>

#dgmd{
margin-top: 30%;
padding:50px;
}



#pods{
color:white;
font-size: 20px;
padding:7px;
}

li{
  list-style-type: none;
}


.row{
width:100%;
}


.column {
  padding:35px;
  float: left;
  width: 50%;
}

.column2 {
  padding:60px;
  float: left;
  width: 20%;
}
.column3 {
  padding:0px;
  float: left;
  width: 10%;
}


.row:after {
  content: "";
  display: table;
  clear: both;
}

#userinfo{
margin-top:3%;
position: absolute;
}

#imekor{
position: absolute;
font-size: 20px;
color:white;
margin-top:9px;
margin-left:0%;
}

#avatar{
padding:5px;
border-radius: 50%;
height:110px;
}
.igraci{
background: rgb(20, 20, 20);
margin-top: 2%;
width:100vw;
height:240px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>