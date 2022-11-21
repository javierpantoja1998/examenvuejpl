<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              HOME
            </router-link>
          </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul class="dropdown-menu">
            <li v-for="marca in marcas" :key="marca">
                <router-link class="dropdown-item" :to="'/marca/' + marca ">{{marca}}</router-link>
                
            </li>
          </ul>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/login">
              LOGIN
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/perfil">
              PERFIL LOG
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/compras">
              COMPRAS
            </router-link>
          </li>
      </ul>
    
    </div>
  </div>
</nav>
</template> 

<script>
import CubosService from '@/services/CubosService';
const services = new CubosService;

export default {
    name:"MenuRutas",
    methods:{
        loadMarcas(){
            services.getMarcas().then(res=>{
                this.marcas = res;
            });
        }
    },
    data(){
        return{
            marcas:[]
        }
    },
    mounted(){
        this.loadMarcas();
    }
}
</script>

<style>

</style>