<template>
    <div class="loading" v-if="isLoading">Cargando...</div>
    <div class="profile" v-else>
        <UserProfile 
        :key="user.id"
        :user="user"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserProfile from '@/components/UserProfile.vue';
import user from '@/store/user';
import useUser from '@/composables/useUser';

// import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'ProfileView',
    components: {
        UserProfile,
    },
    setup() {
        const { user, isLoading, fetchUser } = useUser();
        // const router = useRouter()
        fetchUser();
        return {
            user,
            isLoading,
        }
    }
})

</script>

<style scoped>
.user-info {
    width: 400px;
    height: 300px;
    border: 3px solid rgb(88, 67, 190);
    border-radius: 15px;
    margin: auto;
    margin-top: 100px;
}

</style>