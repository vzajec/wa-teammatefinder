<template>
<body>
  <nav class="navbar navbar-default no-margin">
    
    <div class="navbar-header fixed-brand">
    <img id="navlogo" src="../assets/logo.png">
       <div class=usernav>
      <router-link to="/moj-profil"><img id="navavatar" src="../assets/pplaceholder.jpg"/>
      <span id="korime">{{ korisnickoIme }}</span></router-link>
      <div class="od">
      <a @click="logout" href="#" id=odjava>Odjava</a>
      </div>
      </div>
      </div>


  </nav>
  <div id="wrapper">

    <div id="sidebar-wrapper">
      <ul class="sidebar-nav nav-pills nav-stacked" id="menu">

        <li class="active">
          <router-link to="/igraci"><a><span class="fa-stack fa-lg pull-left"></span> Igrači</a></router-link>
        </li>
        <li>
          <router-link to="/timovi"><a><span class="fa-stack fa-lg pull-left"></span> Timovi</a></router-link>
        </li>
        <li>
          <router-link to="/mojitimovi"><a><span class="fa-stack fa-lg pull-left"></span> Moji timovi</a></router-link>
        </li>
        <li>
         <router-link to="/pozivi"> <a><span class="fa-stack fa-lg pull-left"></span>Pozivi</a></router-link>
        </li>
        <li>
          <router-link to="/chat"> <a><span class="fa-stack fa-lg pull-left"></span>Chat</a></router-link>
        </li>
      </ul>
    </div>

   
  </div>

</body>
</template>

<script>
import store from '@/store.js'
export default {
  methods: {
    logout() {
      firebase.auth().signOut()
    }
  },
data(){
return store
},
  mounted(){
    db.collection("Korisnici").doc(this.userEmail).get().then(doc =>{
        console.log("Document data:", doc.data());
      this.korisnickoIme=doc.data().korisnickoime;
      
        
}).catch(function(error) {
    console.log("Error getting document:", error);
});
  }
}
</script>

<style>

.btn-outline-primary{
font-size: 15px;
width:160px;
height: 40px;
}

#navavatar{
  margin-left:35%;
  border-radius:50%;
  height: 40px;
}

.usernav{
position: absolute;
margin-left:80%;
margin-top:-45px;
}

#korime{
margin-left:15px;
font-size: 17px;
color:white;
}

.od {
  position: relative;
  margin-left: 165px;
  margin-top:-15px;
}
#odjava{
  margin-right: 100px;
  color:rgb(8, 110, 243);
}

.sidebar-nav li a{
margin-top:20px;
font-size:15px;
}

.navbar{
background:rgb(0, 0, 0);
border-bottom: 1px solid #d2d7da;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1050;
}

#navlogo{
height: 50px;
}




#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 150px;
  width: 0;
  height: 100%;
  margin-left: -150px;
  overflow-y: auto;
  background: rgb(0, 0, 0);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-right: 1px solid #d2d7da;
}





.sidebar-nav {
  position:fixed;
  top: 70px;
  width: 200px;
  margin: 0;
  padding: 0;
  list-style: none;
}



.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #FAFAFA;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgb(36, 35, 35);
  border-left: #0e02b8 1px solid;
  width: 99%;
}





.no-margin {
  margin: 0;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 250px;
  }
  .fixed-brand {
    width: 250px;
  }

  #sidebar-wrapper {
    width: 200px;
  }

  
  }


body {
  background: #000220 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>