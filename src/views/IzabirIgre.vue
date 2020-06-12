<template>
<div>
    <div id=lpos>
    <img id="logo" src="../assets/logo.png">
    </div>
 <a id="naslov"> Odabir igre</a>
        

  <div class="row">
  <div class="columnigra" style="background-color:#aaa;">
    <h2>DOTA 2</h2>
    <img id="dota2" src="../assets/dota2.jpg">
  </div>
  <div class="columnigra" style="background-color:#bbb;">
    <h2>CS GO</h2>
    <p>SLIKA</p>
  </div>
  <div class="columnigra" style="background-color:#ccc;">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
  <div class="columnigra" style="background-color:#ddd;">
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
</div>
<button type="submit" class="btn btn-primary">Prihvati</button>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}
#naslov{
  color: white;
  margin-right: 0;
  font-size: 50px;
  margin-top: 0px;
}
.columnigra {
  float: left;
  width: 25%;
  padding: 10px;
  height: 300px;
  margin-top: 50px; 
}
.columnigra:hover{
  cursor:pointer;
}
.columnigra:active{
  opacity: 0.6;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
#dota2{
  width: 100%;
  height: auto;
}
</style>

