<template>
  <div class="gift-container">
    <h1 class="title">From Markat's boys with love 💖😘</h1>
    <div ref="giftAnimation" class="gift-animation" @click="handleClick"></div>
    <p>Click the box to open</p>
  </div>
</template>

<script setup>
import lottie from 'lottie-web'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const giftAnimation = ref(null)
const router = useRouter()
let audio = new Audio('/audio/gift-open.mp3')

function handleClick() {
  try {
    audio.play()
  } catch (error) {
    console.error('Không thể phát âm thanh:', error)
  }

  router.push({ name: 'main' })
}

onMounted(() => {
  lottie.loadAnimation({
    container: giftAnimation.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/5be0f6d6-7169-467b-bdc7-3197fbf0d0a3/jTTlwzCxTb.json',
  })
})
</script>

<style scoped lang="scss">
.gift-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: pink;
}

.gift-animation {
  width: 500px;
  height: 500px;
  cursor: pointer;
  margin-bottom: 20px;
}

.title {
  font-family: 'Courgette', cursive;
  font-size: 60px;
}
</style>
