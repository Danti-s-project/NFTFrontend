<template>
  <div class="flex items-center justify-center min-h-screen">
    <!-- Если идет загрузка -->
    <div v-if="loading" class="loader"></div>

    <!-- Если успешно -->
    <MainView v-else-if="status === 'success'" />

    <!-- Если ошибка -->
    <UnathorizedView v-else-if="status === 'error'" />

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"

// Подключаем "результирующие" компоненты
import MainView from "./MainView.vue"
import UnathorizedView from "./UnathorizedView.vue"

const loading = ref(false)
const status = ref("idle") // idle | success | error

onMounted(() => {
  sendRequest()
})


async function sendRequest() {
  loading.value = true
  status.value = "idle"

  try {
    // Пример запроса (можно заменить на axios.post/get)
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")

    if (res.ok) {
      status.value = "success"
    } else {
      status.value = "error"
    }
  } catch (e) {
    status.value = "error"
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Простая крутилка */
.loader {
  border: 8px solid #e5e7eb; /* серый */
  border-top: 8px solid #3b82f6; /* синий */
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>