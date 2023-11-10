<script setup lang="ts">
import { lineLoginData } from '@/data/LineLoginData'
import { ref } from 'vue'
const itemdata = ref<string[]>(['a', 'b'])
</script>

<template>
 HOME
 <br/>
 {{ lineLoginData }}
 <br/>
 {{ itemdata }}
 <br/>
  <v-container>
      <v-select :items="itemdata" class="ma-2"></v-select>
      
    </v-container>
</template>

<style lang="scss">
</style>
