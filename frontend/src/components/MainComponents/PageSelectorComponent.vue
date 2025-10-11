<script setup lang="ts">

</script>

<template>
  <div class="container">
    <button class="selector">
      <img src="/page_selector/profile.png" alt="profile icon">
    </button>

    <button class="selector">
      <img src="/page_selector/magnifier.png" alt="magnifier icon">
    </button>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(64, 64, 64);
  padding: 10px;
  border-radius: 20px;
}

button {
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;

  background-color: transparent;
  border: none;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

</style>