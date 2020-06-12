<template>
<div class="container">
  <div class="postav">
<div class=wndw>
<div class=sadr>
<a id="naslov"> Postavljanje profila za igru League of Legends</a>
<div id=postforma>
<form @submit.prevent="submitprofilig">
     <div class="form-group row">
    <label for="lolGameId" class="naslpp">Id u igri:</label>
    <div class="col-sm-10">
      <input v-model="lolGameId" type="lolGameId" class="frm form-control" id="lolGameId" placeholder="Id">
    </div>
  </div>
  <div class="form-group row">
    <label for="trrank" class="naslpp">Trenutni rank:</label>
    <div class="col-sm-10">

<div class="btn-group">

  <div>
    <select v-model="lolRank">
  <option value="Iron">Iron</option>
  <option value="Bronze">Bronze</option>
  <option value="Silver">Silver</option>
  <option value="Gold">Gold</option>
  <option value="Platinum">Platinum</option>
  <option value="Diamond">Diamond</option>
  <option value="Master">Master</option>
  <option value="GrandMaster">GrandMaster</option>
  <option value="Challenger">Challenger</option>
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
    <select v-model="lolPos">
  <option value selected="pos1">pos1</option>
  <option value="pos2">pos2</option>
  <option value="pos3">pos3</option>
  <option value="pos4">pos4</option>
  <option value="pos5">pos5</option>
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
    <select v-model="lolRegija">
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
                      lolgameid:this.lolGameId,
                      lolrank: this.lolRank,
                      lolpos: this.lolPos,
                      lolregija: this.lolRegija
                       }, 
                    { merge: true }).then(function() {
                      console.log("Document successfully written!");
                        })
                    .catch(function(error) {
                      console.error("Error writing document: ", error);
                      });
                      this.$router.push({name: 'Igraci'}).catch(err => console.log(err))
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