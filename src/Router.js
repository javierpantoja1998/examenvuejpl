import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import MarcaComponent from './components/MarcaComponent.vue';
import DetallesCuboComponent from './components/DetallesCubo.vue';
import LoginComponent from './components/LoginComponent.vue';

const routes = [

    {
        path:"/", component:HomeComponent
    },
    
    {
        path:"/marca/:marca", component:MarcaComponent
    },
    {
        path:"/detalles/:id", component:DetallesCuboComponent
    },
    {
        path:"/login" , component:LoginComponent
    },
]

const router = new createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;