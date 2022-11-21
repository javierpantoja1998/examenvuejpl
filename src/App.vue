<template>

  <MenuRutas></MenuRutas>
  <router-view></router-view>
  
</template>

<script>
import MenuRutas from './components/MenuRutas.vue'
import Global from './Global';
import CubosService from './services/CubosService';
const service = new CubosService;

export default {
  name: 'App',
  components: {
    MenuRutas
  },
  created(){
    service.getUsuarios().then(result=>{
        Global.email= result[0].email;
        Global.password = result[0].pass.toString();
        service.postLogin().then(res=>{
          console.log(res)
        });
    })
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
