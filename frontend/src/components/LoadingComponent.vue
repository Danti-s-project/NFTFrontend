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
import {useUserStore} from "@/stores/user.js";

const loading = ref(false)
const status = ref("idle") // idle | success | error
const user_data_url = "http://localhost:8080/api/v1/user_info/"


onMounted(() => {
  sendRequest()
})


async function sendRequest() {
  loading.value = true
  status.value = "idle"

  try {
    // Пример запроса (можно заменить на axios.post/get)
    const res = await fetch(user_data_url)

    if (res.ok) {
      const store = useUserStore();
      const data = await res.json();
      store.userId = data.user_id;
      store.username = data.username;
      store.fullname = data.fullname;
      store.registrationDate = data.registration_date;
      store.language = data.language;
      store.isPremium = data.is_premium;
      store.balance = data.balance;
      store.toncoinCourseLessonsCompleted = data.toncoin_course_lessons_completed;
      store.nftSellCourseLessonsCompleted = data.nft_sell_course_lessons_completed;
      store.p2pCourseLessonsCompleted = data.p2p_course_lessons_completed;
      store.scamCourseLessonsCompleted = data.scam_course_lessons_completed;

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