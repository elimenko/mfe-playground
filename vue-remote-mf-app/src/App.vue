<script setup lang="ts">
import { ref } from 'vue'
import { inject } from 'vue';
import { IStore } from './wrapperStore';

const count = ref(0)
const store = inject<IStore>('store');

console.log(count)
</script>

<template>
  <div>
    <h3>Vue MF MFE</h3>
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>
    <span>Counter from Host: {{ store?.rootCounter }}</span>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>