<script setup lang="ts">
import { ref } from 'vue'
import axios, { AxiosError } from 'axios'
import { lineLoginData } from '@/data/LineLoginData'
import { ITempData } from '@/types/template-data'

import DropDown from '@/components/DropDown.vue'
import Button from '@/components/Button.vue'

const tempData = ref<ITempData>({ sendTime: 0 })

const register = async () => {
  console.log(lineLoginData.value.accessToken);
  await axios.post('/api/user', {
    line_access_token: lineLoginData.value.accessToken,
    temp_data: tempData.value
  })
    .then((response) => {
      console.log('response')
      console.log(response)
    })
    .catch((error: AxiosError) => {
      console.log('error')
      console.log(error)
    })
  console.log('registered');
}
</script>

<template>
  テンプレ編集
  <br/>
  <DropDown class="DropDown" :max-length="23" v-model="tempData.sendTime">時</DropDown>
  <br/>
  <Button @click="register">保存</Button>
</template>

<style lang="scss">

</style>
