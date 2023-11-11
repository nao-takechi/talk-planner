<script setup lang="ts">
import fill from 'fill-range'

interface Props {
  maxLength?: number
}
const props = defineProps<Props>()

const items = fill(0, props.maxLength)
</script>

<template>
  <v-select :items="items" />
  <slot/>
</template>

<style lang="scss">
.v-select {
  width: 50%;
  display: inline-block;
  
}
</style>