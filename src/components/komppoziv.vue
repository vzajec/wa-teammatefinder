<template>
<div>
<div class="pozivi">
    <div class="container">
   <div class="row" >
       <div class="col-lg-8">
  <div class="pozivuser"> 
          <img id="pozavatar" src="../assets/pplaceholder.jpg"/>
          <a id="timkorime">{{poziv.from}}</a>
          <span id="timkorime">vas poziva u</span>
           <span id="timkorime">{{poziv.game}}</span>
           <span id="timkorime">tim</span>
  </div>
      </div>
<div class="col-md">
    <button @click="prihvati(poziv.od)" type="button" class="btn btn-success">Prihvati</button>
    <button @click="odbij(poziv.od)" type="button" class="btn btn-danger">Odbij</button>

</div>
</div>

</div>
</div>

</div>
</template>



<script>
import store from '@/store.js'
import { Pozivi } from '@/services'

export default {
props:['poziv'],
  data(){
    return store
  },

  created(){

  },
  computed:{

    },
    methods: {
    prihvati(p){
db.collection("Korisnici").doc(this.userEmail).collection("pozivi").doc(p).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
    },
    odbij(p){
   db.collection("Korisnici").doc(this.userEmail).collection("pozivi").doc(p).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
    }
    }

}
</script>




<style>

.btn{
margin-left: 10%;
width:90px;
height: 35px;
font-size:15px;
}

#pr{
padding:15px;
font-size: 20px;
color:white;
}

#odb{
padding:15px;
font-size: 20px;
color:white;
}

.container{
margin-top:1%;
margin-right:70%;

}

.pozivuser{
width:50%;
}

#ranktim{
margin-top:10px;
font-size: 23px;
color:white;
position: relative;
}

#timkorime{
padding:3px;
font-size: 20px;
color:white;
}

#pozavatar{

  margin-left:17px;
  border-radius:50%;
  height: 40px;
}

.pozivi{
background: rgb(20, 20, 20);
margin-top: 1%;
width:2000px;
height:100px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>