<template>
    <h1>DETALLES</h1>
    
    <div class="card" style="width: 18rem" v-for="comen in comentarios" :key="comen.idComentario">
      <div class="card-body">
        <h5 class="card-title">ID: {{comen.idComentario}}</h5>
        <h5 class="card-title">Comentario: {{comen.comentario}}</h5>
        <h5 class="card-title">Fecha Comentario: {{comen.fechaComentario}}</h5>

      </div>
    </div>
</template>

<script>
import CubosService from '@/services/CubosService';
const services = new CubosService;

export default {
    name:"DetallesComponent",
    data(){
        return{
            comentarios:[]
        }
    },
    methods:{
        loadDetalles(){
            
            services.getDetalleCubo(this.$route.params.id).then(res=>{
                console.log(res)
                this.comentarios = res;
            });
        }
    },
    mounted(){
        this.loadDetalles();
    }
}
</script>

<style>

</style>