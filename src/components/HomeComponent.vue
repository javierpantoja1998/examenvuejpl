<template>
  <div>
    <h1>HOME</h1>
   <table class="table table-bordered table-info">
    <thead>
        <tr>
            <th>NOMBRE</th>
            <th>MARCA</th>
            <th>PRECIO</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="cubo in cubos" :key="cubo.idCubo">
            <td>{{cubo.nombre}}</td>
            <td>{{cubo.marca}}</td>
            <td>{{cubo.precio}}</td>
        </tr>
    </tbody>
   </table>
  </div>
</template>

<script>
import CubosService from '@/services/CubosService';
const services = new CubosService;

export default {
    name:"HomeComponent",
    methods:{
        loadCubos(){
            services.getCubos().then(res=>{
                this.cubos = res
            });
        }
    },
    data(){
        return{
            cubos : []
        }
    },
    mounted(){
        this.loadCubos();
    }
}
</script>

<style>

</style>