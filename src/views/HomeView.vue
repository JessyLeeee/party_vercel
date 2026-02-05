<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div class="max-w-md mx-auto text-center">
      <h1 class="text-3xl font-bold text-gray-800 mt-10 mb-8">信息中心数字文化展厅</h1>
      
      <div class="grid grid-cols-2 gap-4 mb-10">
        <router-link to="/pioneer" class="bg-white p-4 rounded shadow hover:bg-blue-50">先锋榜</router-link>
        <router-link to="/redblack" class="bg-white p-4 rounded shadow hover:bg-red-50">红黑榜</router-link>
        <router-link to="/quotes" class="bg-white p-4 rounded shadow hover:bg-green-50">学习金句</router-link>
        <router-link to="/stories" class="bg-white p-4 rounded shadow hover:bg-yellow-50">党员故事</router-link>
      </div>

      <!-- <div class="bg-white p-4 rounded-lg shadow">
        <p class="mb-2 text-gray-700">用微信扫二维码，随时学习党建内容 👇</p>
        <ClientOnly>
          <QRCode :text="currentUrl" :size="200" />
        </ClientOnly>
      </div> -->
    </div>
  </div>
</template>

<script>
import  QRCode  from 'qrcode.vue'
export default {
  components: { QRCode },
  computed: {
    currentUrl() {
      return window.location.href
    }
  }
}
</script>