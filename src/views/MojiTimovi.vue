<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class="bar">
    <div class="btni">
 <span class="fltrs">
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Igra
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">DOTA 2</a>
    <a class="dropdown-item" href="#">CS:GO</a>
    <a class="dropdown-item" href="#">League of legends</a>
  </div>
</div>
 </span>
    </div>
</div>


</div>
</div>
</template>



<script>
import navnside from '@/components/navnside.vue'
import komptimdota from '@/components/komptimdota.vue'
export default {
  components: {
    navnside,
    komptimdota
    
  },
  methods:{


      odaberilol(){
        this.lolodabir = true;
          this.dotaodabir = false;
          this.csgoodabir = false;
      },
      odabericsgo(){
        this.lolodabir = false;
          this.dotaodabir = false;
          this.csgoodabir = true;
      },
      odaberidota(){
        this.lolodabir = false;
          this.dotaodabir = true;
          this.csgoodabir = false;

      }




  }
}
</script>

<style>



.btn-group{
margin-top:5px;
padding:10px;
margin-right:50px;
}

.dropdown-toggle{
font-size: 15px;
height:30px;
width:90px;
}

.bar{
background: rgb(9, 1, 32);
height:70px;
width:100vw;
border-bottom: solid 1px white;
}

.btni{
position: relative;
float: left;
}

body {
  background: #000220 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>