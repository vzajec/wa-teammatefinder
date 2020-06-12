<template>
<div class="koment">
<div class="container">
<div class="row">
<div class="col">
<div class=poster>
<img id="komavatar" src="../assets/pplaceholder.jpg"/>
<span id="korimekom">{{ korisnickoIme }}</span>
</div>
</div>
<div class="col">
<a id="komst">Urnebesan </a>


</div>
</div>
</div>
</div>
</template>




<script>
import store from '@/store.js'
export default {
  data (){
        return store 
  },
}
</script>

<style>


.container{
position: relative;
padding:15px;
float:left;
margin-left:0;
}

#korimekom{
padding:10px;
float:left;
position: relative;
font-size: 17px;
color:white;
}

#komavatar{
float:left;
position: relative;
  border-radius:50%;
  height: 40px;
}

#komst{
float: left;
font-size: 17px;
color:white;
word-wrap: break-word;
}
  
.col{
width:100%;
position: relative;
float: left;
word-wrap: break-word;
}

.koment{
background: rgb(20, 20, 20);
min-height: 70px;
position: relative;
    display: flex;
    width:100vw;
    height:100%;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>