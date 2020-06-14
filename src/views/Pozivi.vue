<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div v-for="pozivi in pozivi" :key="pozivi.from">
            <komppoziv :poziv="pozivi"/>
        </div>
</div>
</div>

</template>



<script>
import navnside from '@/components/navnside.vue'
import komppoziv from '@/components/komppoziv.vue'
import { Pozivi } from '@/services'
import store from '@/store.js'
export default {

data () {
    return store
  },

  components: {
    navnside,
    komppoziv
  },

created(){
      this.getpozivi();


  },

methods:{

    async getpozivi(){
      this.pozivi = await Pozivi.getpozivi()
    }
}
}
</script>

