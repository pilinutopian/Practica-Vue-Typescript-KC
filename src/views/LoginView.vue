<template>
    <div class="login-box">
        <h2>Log in to enter the store</h2>
        <div class="login-data">
            <form v-on:submit.prevent="login" action="post">
                <input class="email" type="email" placeholder="Correo electrónico" v-model="email" required>
                <input class="password" type="password" placeholder="Contraseña" v-model="password" required>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div class="error-alert" v-if="error">{{ error_msg }}</div>
    </div>

</template>

<script lang="ts">
import router from '@/router';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            error: false,
            error_msg: '',
        }
    },
    methods: {
        async login() {
            let data = {
                "email": this.email,
                "password": this.password
            }
            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
                console.log(response)
                localStorage.setItem('accessToken', response.data.access_token)    
                console.log('Se ha guardado el token:', response.data.access_token )

                router.push({ name: 'products' })
            } catch(err) {
                console.log(err);
                this.error = true;
                this.error_msg = `${err}`
            }

        }
    }

})

</script>


<style scoped>
.login-box {
    margin: auto;
    margin-top: 40px;
    height: 150px;
    width: 300px;
    border: 2px solid rgb(120, 7, 212);
    padding: 100px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;
    align-items: center;
}

input {
    width: 170px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}

.login-data form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.error-alert {
    background-color: rgb(249, 158, 158);
    color: white;
    padding: 1rem;
}
</style>