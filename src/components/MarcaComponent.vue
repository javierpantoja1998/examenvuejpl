<template>
  <!-- v-for="cubo in cubos" :key="cubo.idCubo" -->
  <div>
    <h1>MARCAS Y CUBOS</h1>
    <div class="card" style="width: 18rem" v-for="cubo in cubos" :key="cubo.idCubo">
      <img  :src="cubo.imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{cubo.nombre}}</h5>
        <h5 class="card-title">{{cubo.precio}}€</h5>
        <router-link class="btn btn-info" :to="'/detalles/' + cubo.idCubo">Comentarios</router-link>

      </div>
    </div>
  </div>
</template>

<script>
import CubosService from "@/services/CubosService";
const services = new CubosService();

export default {
  name: "MarcaComponent",
  methods: {
    loadCubosMarca() {
      services.getMarca(this.$route.params.marca).then((res) => {
        this.cubos = res;
      });
    },
  },
  data() {
    return {
      cubos: [],
    }
  },
  mounted() {
    this.loadCubosMarca();
  },
  watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadCubosMarca();
      }
    },
  },
};
</script>

<style></style>
