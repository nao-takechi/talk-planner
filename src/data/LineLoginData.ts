import { ref } from 'vue'
import { ILineLoginData } from '@/types/line-login-data'

export const lineLoginData = ref<ILineLoginData>({
  loggedIn: false,
  friendFlag: true,
  lineBrowser: true,
  accessToken: ''
})
