import Global from "@/Global";
import axios from "axios";

export default class CubosService {

    getCubos(){
        return new Promise(function(resolve){
            var request = "api/Cubos";
            var url = Global.url + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            })
        })
    }

    getMarcas(){
        return new Promise(function(resolve){
            var request = "api/Cubos/Marcas";
            var url = Global.url + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            })
        })
    }

    getMarca(marca){
        return new Promise(function(resolve){
            var request = "api/Cubos/CubosMarca/" + marca;
            var url = Global.url + request;
            axios.get(url).then(res=>{
                resolve(res.data);
            });
        })
    }

    getDetalleCubo(id){
        return new Promise(function(resolve){
            var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
            var url = Global.url + request;
            axios.get(url).then(res=>{
                console.log(res)
                resolve(res.data)
            });
            
        });
    }

    login(){
        
    }
}