<template>
    <nav class="navbar">
        <div class="home-page">
            <!-- <span>Shop icon</span> -->
            <router-link to="/">My Store</router-link>
        </div>
        <div class="links">
            <ul>
                <li>
                    <router-link to="/profile">My profile</router-link>
                </li>
                <li>
                    <router-link to="/products">Products</router-link>
                </li>
            </ul>
        </div>
        <div class="logout">
            <button @click="logout" >
                Log out           
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';


export default defineComponent({
    name: 'NavBar',
    setup() {
        let logedIn = ref<boolean>(false) 
        const token = localStorage.getItem('accesToken')
        if(token) {
            logedIn = ref<boolean>(true)
        }

        return {
            logedIn,
            logout: () => {
                localStorage.removeItem('accessToken')
                router.push({ name: 'home' })
            }
        }
    },

})
</script>

<style scoped>
nav {
    height: 30px;
    width: auto;
    background-color: rgb(240, 174, 33);
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* justify-self: center; */
    list-style: none;
}

li {
    padding: 1rem;
}

a {
    color: white;
    text-decoration: none;
    transition: 0.30s;
    font-weight: bold;
    font-size: larger;
}

a:visited {
    color: white;
}

a:hover {
    color: rgb(98, 20, 143);
    cursor: pointer;
}

.home-page a:hover {
    color: rgb(98, 20, 143);
}

.logout {
    width: max-content;
}

.logout button:hover {
    cursor: pointer;
}
</style>

