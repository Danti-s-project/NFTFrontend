<!-- SuccessView.vue -->
<template>
  <main>
    <div class="active-component">
      <ProfileComponent/>
    </div>
    <footer>
      <PageSelectorComponent/>
    </footer>
  </main>
</template>


<script setup>
import PageSelectorComponent from "@/components/MainComponents/PageSelectorComponent.vue";
import ProfileComponent from "@/components/MainComponents/ProfileComponent.vue";
</script>

<style scoped>

main {
  width: 100%;
  min-height: 100vh;
}

.active-component {
  width: 100%;
  min-height: 100vh;
  padding-bottom: 16vh;
}

footer {
  position: fixed;
  bottom: 0; /* отступ от низа */
  left: 0;
  width: 100%;
  height: 16vh; /* футер всегда 16% экрана */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh;
}


</style>