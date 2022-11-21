<template>
  <div>
    <h1>PERFIL LOGUEADO</h1>
    <h4>ID:{{perfil.idUsuario}}</h4>
    <h4>NOMBRE: {{perfil.nombre}}</h4>
    <h4>EMAIL {{perfil.email}}</h4>
    <h4>{{perfil.pass}}</h4>
  </div>
</template>

<script>
import CubosService from '@/services/CubosService';
const service = new CubosService;

export default {
    name:"PerfilLogueado",
    methods:{
        loadPerfilLog(){
            service.getPerfilLogueado().then(res=>{
                this.perfil = res
            });
        }
    },
    
    data(){
        return{
            perfil:{}
        }
    },
   Mounted(){
    this.loadPerfilLog();
   }
    
    
}
</script>

<style>

</style>