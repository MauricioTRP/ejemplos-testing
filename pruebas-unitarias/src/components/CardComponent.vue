<template>
  <div class="card">
    <h2>{{ props.user.title }}</h2>
    <p class="card-text">{{ props.user.text }}</p>
    <button class="rrss">RRSS: {{ props.user.name }}</button>
  </div>
</template>
<script setup>
const props = defineProps(['user'])
</script>
