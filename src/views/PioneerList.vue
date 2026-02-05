<template>
  <div class="p-4 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">先锋榜</h1>
    <div v-for="quote in quotes" :key="quote.id" class="border-b py-4">
      <p class="text-lg italic">“{{ quote.content }}”</p>
      <p class="text-sm text-gray-600 mt-1">—— {{ quote.source }}</p>
      <p class="text-sm mt-2">分享人：马利</p>
      <p class="text-xs mt-1 text-gray-500">{{ quote.created_at }}</p>
      <button @click="like(quote.id)" class="mt-2 text-blue-500">👍 点赞 100</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return { quotes: [] }
  },
  async mounted() {
    const res = await axios.get('https://your-backend.onrender.com/api/quotes')
    this.quotes = res.data
  },
  methods: {
    async like(id) {
      await axios.post(`https://your-backend.onrender.com/api/quotes/${id}/like`)
      // 刷新或局部更新
    }
  }
}
</script>