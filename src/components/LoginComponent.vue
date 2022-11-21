<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
            <div class="col-md-4 p-5 shadow-sm border rounded-3">
                <h2 class="text-center mb-4 text-primary">Login</h2>
                <form method="POST" >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email:</label>
                        <input
                        v-model="usuario.email"
                          type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input v-model="usuario.password" type="password" class="form-control border border-primary" id="exampleInputPassword1">
                    </div>
                    <p class="small"><a class="text-primary" href="forget-password.html">Forgot password?</a></p>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    name:"LoginComponent",
    data(){
        return{
            usuario:{
                email:"",
                password:""
            }
        }
    }
    
}
</script>

<style>

</style>