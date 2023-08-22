<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

function onClickCounter() {
  count.value++
  document.cookie = `counter=${count.value}; SameSite=None; Secure; Path=/; Partitioned`;
  window.localStorage.setItem('counter', count.value.toString());
}

function getCookie(name: string) {
    var cookieArr = document.cookie.split(";");

    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if the cookie by the given name does not exist
    return null;
}

const countFromCookies = computed(() => {
  const countDep = count.value;
  return getCookie('counter') || `${countDep} (no cookie)`
})

const countFromLS = computed(() => {
  const countDep = count.value;
  return window.localStorage.getItem('counter') || `${countDep} (no LS)`
})

const onLSEvent = (e: StorageEvent) => {
  console.log(`MFE received event: ${e.key} ${e.oldValue} -> ${e.newValue}`);
}

window.addEventListener('storage', onLSEvent);

</script>

<template>
  <div>
    <h3>{{ msg }}</h3>
    <div class="card">
      <button type="button" @click="onClickCounter">count is {{ countFromCookies }}</button>
      <button type="button" @click="onClickCounter">count is {{ countFromLS }}</button>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
