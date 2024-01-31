<script setup lang="ts">
import { computed } from 'vue'
import fill from 'fill-range'

interface Props {
  modelValue: number
  maxLength?: number
}
const props = defineProps<Props>()
interface Emits {
  (e: 'update:modelValue', data: number): void
}
const emit = defineEmits<Emits>()

const items = fill(0, props.maxLength)

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <v-select :items="items" v-model:model-value="computedValue"/>
  <slot/>
</template>

<style lang="scss">
.v-select {
  width: 50%;
  display: inline-block;
  
}
</style>