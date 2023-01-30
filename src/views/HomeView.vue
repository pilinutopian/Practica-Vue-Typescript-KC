<template>
  <div class="body">
    <h1>Welcome!</h1>
    <h3>A place where you can buy anything you want!</h3>
    <h5>Please take a look around :)</h5>  
    <div class="log-in"> 
      <hr>
      <h2>First, log in to begin</h2>   
    <button @click="$router.push('login')">Log In</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
});
</script>

<style scoped>
.body {
  background-color: rgba(250, 244, 226, 0.897);}
  
.log-in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    align-items: center;
    padding: 50px 0 50px 0;
    background-color: rgba(174, 35, 209, 0.295);
}
</style>
