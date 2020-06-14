<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
import { Auth } from '@/services'
export default {
  data () {
  return {
    ...store,
    auth: Auth.state,
  };
  },
  created () {
    
    
    
  },
  
}
</script>


<style lang="scss">

body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.appp{
  
  position: absolute;
  margin-left: 201px;
  margin-top: 70px;
}
#red li{
  list-style-type: none;
}


</style>