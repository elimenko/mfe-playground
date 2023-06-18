<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

console.log(count)
</script>

<template>
  <div>
    <h3>Vue MF MFE</h3>
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>