<script setup lang="ts">
import {useUserStore} from '@/stores/user';
import {onMounted} from "vue";

const userStore = useUserStore()
onMounted(() => {
  console.log(userStore.photoUrl)
})

const formatedDate = () => {
  const date = new Date(userStore.registrationDate);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

</script>

<template>
  <div class="container">

    <div class="top-container">
      <div class="balance-container">
        <div class="balance">
          {{ userStore.balance }} 💲
        </div>
      </div>
    </div>

    <div class="info-container">

      <div class="avatar">
        <img :src="userStore.photoUrl" alt="avatar" id="avatar">
      </div>

      <div class="fullname">
        {{ userStore.fullname }}
      </div>

      <div class="username-premium">
        <div class="username">
          <a :href="`https://t.me/${userStore.username}`">@{{ userStore.username }}</a>
        </div>
        <div class="is-premium">
          <div v-if="userStore.isPremium" class="premium-active"> ● Премиум активен</div>
          <div v-else class="premium-inactive"> ● Премиум неактивен</div>
        </div>
      </div>

      <div class="info-list">
        <div class="info-list-element">
          <span class="info-list-element-label">Дата регистрации</span>
          <span class="info-list-element-value">{{formatedDate()}}</span>
        </div>
        <div class="info-list-element">
          <span class="info-list-element-label">Пройдено уроков продажи NFT</span>
          <span class="info-list-element-value">{{userStore.nftSellCourseLessonsCompleted}}</span>
        </div>
        <div class="info-list-element">
          <span class="info-list-element-label">Пройдено уроков P2P</span>
          <span class="info-list-element-value">{{userStore.p2pCourseLessonsCompleted}}</span>
        </div>
        <div class="info-list-element">
          <span class="info-list-element-label">Пройдено уроков по мошенническим схемам</span>
          <span class="info-list-element-value">{{userStore.scamCourseLessonsCompleted}}</span>
        </div>
        <div class="info-list-element">
          <span class="info-list-element-label">Пройдено уроков по TON</span>
          <span class="info-list-element-value">{{userStore.toncoinCourseLessonsCompleted}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#avatar {
  border-radius: 200px;
  width: 50vw;
  height: 50vw;
  max-width: 44vh;
  max-height: 44vh;
}

.fullname {
  color: white;
  font-weight: 1000;
  font-size: min(12vw, 10vh);
}

.premium-active {
  color: green;
}

.premium-inactive {
  color: grey;
}

.username-premium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  font-size: min(5vw, 4vh);
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-container {
  padding: 2vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}


.balance-container {
  background-color: green;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 4vw;
  padding-right: 4vw;
}

.balance {
  font-size: min(10vh, 10vw);
}

.info-list {
  padding: 2vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
}

.info-list-element {
  display: flex;
  flex-direction: column;
}

.info-list-element-label {
  color: grey;
  font-size: min(4vw, 4vh);
}

.info-list-element-value {
  font-size: min(8vw, 3vh);
}
</style>