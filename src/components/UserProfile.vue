<template>
    <div class="profile">
        <div class="avatar" :style="`background-image: url(${user.avatar})`">
        <img :src="user.avatar" :alt="user.name">    
        </div>
        <div class="name">{{ user.name }}</div>
        <div class="user-info">
            <span>Profile information:</span>
            <div class="email">Email: {{ user.email }}</div>
            <div class="role">Rol: {{ user.role }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from '@/models/user';

export default defineComponent({
    // name: 'UserProfile',
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
})
</script>


<style scoped>
.profile {
    background-color: white;
    box-shadow: 5px 10px 10px rgb(136, 76, 20);
    display: flex;
    text-align: justify;
    font-weight: bold;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    padding: 20px;
    flex-direction: column;

}

.avatar {
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    position: relative;
    border-radius: 25%;
    background-size: cover;
}
.avatar > img {
    object-fit: contain;
    width: 130%;
    height: auto; 
}
</style>