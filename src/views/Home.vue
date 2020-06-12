<template>
<div>
   <div id=mm>
    <img id="logo" src="../assets/logo.png">
    <div id=mbtn>
    <router-link :to="{name: 'Prijava'}">
    <button type="button" class="btn btn-primary btn-lg">Prijava</button>
    </router-link>
    </div>
    </div>
</div>
</template>




<style>
.btn{
width:320px;
height: 60px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 28px;
}
#logo {
 height: 110px;
}
#mbtn{
position:relative;
padding: 65px;
}
#mm {
   position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
body {
  background: url(../assets/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
