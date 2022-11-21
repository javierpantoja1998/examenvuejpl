<template>
  <div>
    <h1>COMPRAS REALIZADAS</h1>
    <div v-for="compra in compras" :key="compra.idUsuario">
        <h3>USER ID: {{compra.idUsuario}}</h3>
        <h3>FECHA: {{compra.fechaPedido}}</h3>
    </div>
  </div>
</template>

<script>
import CubosService from '@/services/CubosService';
const services = new CubosService;

export default {
    name:"ComprasComponent",
    data(){
        return{
            compras:[]
        }
    },
    methods:{
        loadCompras(){
            services.getCompras().then(res=>{
                this.compras = res
            });
        }
    },
    mounted(){
        this.loadCompras();
    }
}
</script>

<style>

</style>