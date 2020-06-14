<template>
<div class="container">
  <div class="postav">
    <form @submit.prevent="submitkorisnickoime">
<div class=wndw>
<div class=sadr>
<a id="naslov"> Postavljanje profila</a>
<div id=postforma>
     <div class="form-group row">
    <label for="korisnickoime" class="naslpp">Korisničko ime:</label>
    <div >
      <input v-model="korisnickoIme" type="korisnickoIme" class="frm form-control" id="korisnickoIme" placeholder="Korisnik">
    </div>
     </div>
     <div class=row>
    <div class="izavatar">
      <label for="izabiravatara" class="izabiravatara">Odabir avatara:</label>
      <div id="kropa">
       <croppa :width="150" :height="150" v-model="imageData"></croppa>
      </div>
    </div>
  </div>


</div>
</div>

<div class=dvdr>
<a id="odb">Odabir igara</a>
</div>
<div class="igre">
<div>
   <li><a id="gms">DOTA 2</a><img id="d2" src="../assets/dota2.jpg"><input id="cb1" type="checkbox" v-model="Dota" name="Dota" value="Dota"></li>
    <li><a id="gms2">CS:GO</a><img id="csgo" src="../assets/csgo.png"><input id="cb2" type="checkbox" v-model="Csgo" name="Csgo" value="Csgo"></li>
    <li><a id="gms3">League of Legends</a><img id="lol" src="../assets/lol.png"><input id="cb3" type="checkbox" v-model="Lol" name="Lol" value="Lol"></li>
</div>
<div>
  
  
  
</div>
</div>

</div>

<button type="submit" class="btn btn-primary">Prihvati</button>

</form>
  </div>
</div> 
  

</template>


<script>
import Croppa from 'vue-croppa';
import store from '@/store.js';
import { PostaviP } from '@/services'
export default {
  data () {
    return store
    
  },
  methods:{
    async submitkorisnickoime(){
      await PostaviP.pp(this.korisnickoIme, this.Dota, this.Csgo, this.Lol);
      if (this.$route.name == 'ProfilP' && this.Dota==true)
      this.$router.push({name: 'ProfilDota'}).catch(err => console.log(err))
      else if (this.Csgo==true)
      this.$router.push({name: 'ProfilCsgo'}).catch(err => console.log(err))
      else if (this.Lol==true)
      this.$router.push({name: 'ProfilLol'}).catch(err => console.log(err))
                  

    }
  }
}
</script>

<style>

#cb1{
margin-left: 4%;
}

#cb2{
  margin-left: 4%;
}

#cb3{
  position: relative;
  margin-right: 24%;
}


#d2{
  margin-top:1%;
position: relative;
   width:130px;
    height:120px;
}

#lol{
  margin-top:1%;
  position: relative;
   width:130px;
    height:130px;
    margin-right:4%;
}

#csgo{
  margin-top:1%;
  position: relative;
   width:130px;
    height:100px;
}

#gms{
color:white;
font-size: 23px;
font-weight: bold;;
position:relative;
margin-right:22%;
}


#gms2{
color:white;
font-size: 23px;
font-weight: bold;;
margin-right:23%;
}

#gms3{
color:white;
font-size: 23px;
font-weight: bold;;
position:relative;
margin-left:15%;
margin-right:17%;
}


.igre{
margin-top:60px;
}

#odb{
color:white;
font-size: 30px;
font-weight: bold;
}

.dvdr{
margin-left:-10px;
margin-right:-10px;
height:45px;
border:solid 1px rgb(97, 97, 97);
}

#kropa{
margin-top: -30px;
margin-left:103%;
}

.form-control{
  margin-left:10px;
}

#postforma{
margin-top:2%;
padding: 20px;
}

.naslpp{
position: relative;
font-size:22px;
color:white;
}

.izabiravatara{
margin-bottom:0px;
position: inherit;
font-size:22px;
color:white;
}

.izavatar{
position: relative;
float:left;
}

.sadr {
position:relative;
padding:10px;
}
.wndw{
  margin-top:4%;
  margin-left:7%;
  margin-bottom:2%;
  position: relative;
  padding:10px;
  width:85%;
  height:900px;
  border: 1px solid rgb(97, 97, 97);
  background:rgb(0, 0, 0);
}
#naslov{
  position: relative;
  font-weight: bold;
  color: white;
  font-size: 35px;
}
body {
  background: url(../assets/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.igre li{
  list-style-type: none;
}
</style>