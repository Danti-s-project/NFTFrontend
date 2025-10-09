<!-- SuccessView.vue -->
<template>
  <main>
    <footer>
      <PageSelectorComponent/>
    </footer>
  </main>
</template>


<script>
import PageSelectorComponent from "@/components/MainComponents/PageSelectorComponent.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {PageSelectorComponent}
})


</script>

<style scoped>

main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  position: fixed;
  bottom: 0;             /* отступ от низа */
  left: 0;
  width: 100%;
  height: 16vh;           /* футер всегда 16% экрана */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh;
}


</style>