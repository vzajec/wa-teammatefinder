<template>
<div class="container">
  <div class="postav">
<div class=wndw>
<div class=sadr>
<a id="naslov"> Postavljanje profila za igru DOTA 2</a>
<div id=postforma>
<form @submit.prevent="submitprofilig">
     <div class="form-group row">
    <label for="dotaGameId" class="naslpp">Id u igri:</label>
    <div class="col-sm-10">
      <input v-model="dotaGameId" type="dotaGameId" class="frm form-control" id="dotaGameId" placeholder="Id">
    </div>
  </div>
  <div class="form-group row">
    <label for="trrank" class="naslpp">Trenutni rank:</label>
    <div class="col-sm-10">

<div class="btn-group">

  <div>
    <select v-model="dotaRank">
  <option value="Herald">Herald</option>
  <option value="Guardian">Guardian</option>
  <option value="Crusader">Crusader</option>
  <option value="Archon">Archon</option>
  <option value="Legend">Legend</option>
  <option value="Ancient">Ancient</option>
  <option value="Divine">Divine</option>
  <option value="Immortal">Immortal</option>
</select>
  </div>
</div>
    </div>
  </div>
      <div class="form-group row">
    <label for="poz" class="naslpp">Željena pozicija:</label>
    <div class="col-sm-10">

<div class="btn-group">

  <div>
    <select v-model="dotaPos">
  <option value selected="Pos1">Pos1</option>
  <option value="Pos2">Pos2</option>
  <option value="Pos3">Pos3</option>
  <option value="Pos4">Pos4</option>
  <option value="Pos5">Pos5</option>
</select>
  </div>
</div>
    </div>
  </div>
     <div class="form-group row">
    <label for="reg" class="naslpp">Regija:</label>
    <div class="col-sm-10">

<div class="btn-group">

  <div>
    <select v-model="dotaRegija">
  <option value="Centralna Hrvatska">Centralna Hrvatska</option>
  <option value="Dalmacija">Dalmacija</option>
  <option value="Slavonija">Slavonija</option>
  <option value="Istra">Istra</option>
</select>
  </div>
</div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Prihvati</button>
</form>

</div>
</div>
</div>

  </div>
  </div>

</template>


<script>
import Croppa from 'vue-croppa';
import store from '@/store.js'
export default {
  data () {
    return store
    
  },
  methods:{
    submitprofilig(){

        db.collection("Korisnici").doc(this.userEmail).set
                      ({
                      dotagameid:this.dotaGameId,
                      dotarank: this.dotaRank,
                      dotapos: this.dotaPos,
                      dotaregija: this.dotaRegija,
                       }, 
                    { merge: true }).then(function() {
                      console.log("Document successfully written!");
                        })
                    .catch(function(error) {
                      console.error("Error writing document: ", error);
                      });
                    if (this.Csgo==true) 
                    this.$router.push({name: 'ProfilCsgo'}).catch(err => console.log(err))
                    else if (this.Lol==true)
                    this.$router.push({name: 'ProfilLol'}).catch(err => console.log(err))
                    else this.$router.push({name: 'Igraci'}).catch(err => console.log(err))
    }
  }
  
}




</script>

<style>
.frm{
margin-left:36%;
}
.col-sm-10{
padding:7px;
margin-left:30px;
}

#postforma{
padding:30px;
margin-top:30px;
}
.naslpp{
position: absolute;
font-size:22px;
color:white;
}
.dropdown-toggle{
font-size: 20px;
height:37px;
width:120px;
}

.sadr {
position:absolute;
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
</style>