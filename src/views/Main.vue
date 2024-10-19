<template>
  <div class="container">
    <RouterLink :to="{ name: 'welcome' }">
      <el-button type="primary" round class="back-btn"
        ><span style="color: #555">Back</span></el-button
      >
    </RouterLink>
    <div class="image-container">
      <img src="@/assets/img/Full.jpeg" alt="" class="main-image" />
    </div>

    <div ref="giftAnimation" class="fireworks-animation"></div>

    <div class="para-container">
      <span ref="typedText" class="para"></span>
    </div>

    <img src="@/assets/img/hieu.jpg" alt="" class="corner-image top-left" />
    <img src="@/assets/img/toan.jpg" alt="" class="corner-image top-right" />
    <img src="@/assets/img/duy.jpg" alt="" class="corner-image bottom-left" />
    <img src="@/assets/img/phu.jpg" alt="" class="corner-image bottom-right" />
  </div>
</template>

<script setup>
import lottie from 'lottie-web'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Typed from 'typed.js'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'

const giftAnimation = ref(null)
const typedText = ref(null)
let typedInstance = null

let backgroundAudio = new Audio(
  '/audio/dung-lam-trai-tim-anh-dau-diep-khuc-son-tung-m-tp-chuongdienthoai.net.mp3',
)

onMounted(() => {
  lottie.loadAnimation({
    container: giftAnimation.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/4deaf48b-0599-42a7-a975-f3eb8f3b2d58/hcNpARDIFL.json',
  })

  typedInstance = new Typed(typedText.value, {
    strings: [
      'Nhân ngày 20/10, Markat’s boy chúc cậu luôn rực rỡ như 🌼 hoa mai, kiên cường vượt qua mọi thử thách, như 🌸 hoa quỳnh ngọt ngào, kiêu sa, tỏa hương dịu dàng trong đêm và như 🌻 cúc vàng tươi tắn, ấm áp, lan tỏa hương sắc đến mọi người. Mong cuộc sống của cậu sẽ ngập tràn màu sắc và những điều tốt đẹp nhất sẽ đến với cậu 💖🤩🥰',
    ],
    typeSpeed: 20,
    loop: false,
    showCursor: false,
  })

  setTimeout(() => {
    backgroundAudio.load()
    backgroundAudio.play().catch(error => {
      console.error('Không thể phát âm thanh nền:', error)
    })
  }, 2000)
})

onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy()
  }
  if (!backgroundAudio.paused) {
    backgroundAudio.pause()
    backgroundAudio.currentTime = 0
  }
})

onBeforeRouteLeave((to, from, next) => {
  if (!backgroundAudio.paused) {
    backgroundAudio.pause()
    backgroundAudio.currentTime = 0
  }
  next()
})
</script>

<style scoped lang="scss">
.back-btn {
  background-color: #f8f2dc;
  border: none;
}

.container {
  height: 100vh;
  position: relative;
  padding: 20px 20px;
  background-color: pink;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image {
  margin-top: -30px;
  width: 800px;
  border-radius: 999px 999px 0px 0px;
  animation: fadeIn 10s ease-in forwards;
}

.fireworks-animation {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 90vh;
  pointer-events: none;
}

.para {
  position: absolute;
  margin-top: -70px;
  width: 781px;
  font-size: 20px;
  line-height: 27px;
  background-color: #f8f2dc;
  padding: 10px 10px;
  border-radius: 10px;
}

.para-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.corner-image {
  position: absolute;
  width: 300px;
  border-radius: 999px;
  height: auto;
  animation: swing 2s ease-in-out infinite alternate;
}

.top-left {
  top: 70px;
  left: 70px;
}

.top-right {
  top: 70px;
  right: 70px;
}

.bottom-left {
  bottom: 70px;
  left: 70px;
}

.bottom-right {
  bottom: 70px;
  right: 70px;
}

@keyframes swing {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(10deg);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
