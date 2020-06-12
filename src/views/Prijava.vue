<template>
<div>
    <div id=lpos>
    <img id="logo" src="../assets/logo.png">
    </div>


    <div class="about">
    <a id="naslov"> Prijava</a>
<div class=pr>
      <div class="row">
        <div class="col-1">
        </div>
        <div class="col-5">
          <form @submit.prevent="login">
            <div class="form-group">
              <a id="reg1">Email adresa</a>
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unesite e-mail adresu">
            </div>
            <div class="form-group">
              <a id="regs">Lozinka</a>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Unesite lozinku">
            </div>
            <button type="submit" class="btn btn-primary">Prijava</button>
          </form>
        </div>
        <div class="h-divider"></div>
          <div class="col-5">
            <form>
              <div class="form-group">
                <a id="reg2">Nemate korisnički račun?</a>
                <router-link to="/registracija">
                 <a id=regbtn>Registracija</a>
                </router-link>
              </div>
            </form>
        </div>
      </div>
</div>
  </div>
  </div>
</template>




<style>
#naslov{
  color: white;
  margin-right: 74%;
  font-size: 40px;
}
#reg1{
  color: white;
  margin-right: 79%;
  font-size: 20px;
}

.pr{
  padding: 40px;
}

#regs{
  color: white;
  margin-right: 95%;
  font-size: 20px;
}

#reg2{
  color: white;
  margin-right:250px;
  font-size: 20px;
}

#regbtn{
   color: #007BFF;
  margin-right: 362px;
  font-size: 20px;
  font-weight: bold;

}

.h-divider{
margin-top: -95px;
margin-left:5%;
 width:8px;
 border-top:450px solid rgb(255, 255, 255);
}
 #lpos{
  margin: auto;
  width: 50%;
  padding: 80px;
}

</style>
<script>
export default {
  data () {
    return {
      email: '',
      password: '',
    }
  },
  //NAPRAVITI RUTU ZA NASLOVNICU
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error)
      });
    }
  }
}
</script>