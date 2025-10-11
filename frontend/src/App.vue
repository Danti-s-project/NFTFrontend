<script setup>
import LoadingComponent from "@/components/LoadingComponent.vue";
</script>

<template>
  <div class="fullscreen">
    <LoadingComponent />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.fullscreen {
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
}



</style>
