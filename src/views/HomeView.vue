<template>
  <h2>Welcome!</h2>
  <h4>A place where you can buy anything you want! Please take a look around :) </h4>
  <br>
  <hr>
  <h4>First, log in to begin</h4>
  <button @click="$router.push('login')">Log In</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
});
</script>
