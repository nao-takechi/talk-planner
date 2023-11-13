<script setup lang="ts">
interface Emits {
  (e: 'click'): void
}
const emit = defineEmits<Emits>()

const click = () => {
  emit('click')
}
</script>

<template>
  <button @click="click">
    <slot />
  </button>
</template>

<style lang="scss">
button {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  transition: all 0.3s ease;
}
</style>