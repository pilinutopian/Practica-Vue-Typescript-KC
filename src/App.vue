<template>
  <NavBar/>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 50;
  background: url(https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
