<script setup lang="ts">
import DropDown from '@/components/DropDown.vue'
import Button from '@/components/Button.vue'

const register = () => {
  alert('register')
}
</script>

<template>
  テンプレ編集
  <br/>
  <DropDown class="DropDown" :max-length="23">時</DropDown>
  <br/>
  <Button @click="register">保存</Button>
</template>

<style lang="scss">

</style>
