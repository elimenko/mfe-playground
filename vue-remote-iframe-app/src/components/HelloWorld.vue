<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

function onClickCounter() {
  count.value++
  document.cookie = `counter=${count.value}; SameSite=None; Secure; Path=/`;
  try {
    window.localStorage.setItem('counter', count.value.toString());
  } catch (error) {
    console.log(error)
  }
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

function grantLSAccess() {
  try {
    var promise = document.requestStorageAccess();
    promise.then(
      function () {
        console.log('storage access granted')
      },
      function () {
        console.log('storage access denied')
      }
    );
  } catch (error) {
    console.log(error)
  }
}

const updateCounterFromCookies = () => {
  document.hasStorageAccess().then((hasAccess) => {
    if (hasAccess) {
      const cookie = getCookie('counter');
      if (cookie) {
        count.value = parseInt(cookie);
      }
    } else {
      alert('No storage access');
    }
  });
}

const countFromCookies = computed(() => {
  const countDep = count.value;
  return getCookie('counter') || `${countDep} (no cookie)`
})

const countFromLS = computed(() => {
  const countDep = count.value;
  return `${countDep} (no LS)`
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
      <button type="button" @click="grantLSAccess">Grant LS Access</button>
      <button type="button" @click="updateCounterFromCookies">Update Counter From Cookies</button>
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
