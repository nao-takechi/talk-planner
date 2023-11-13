import liff from '@line/liff'
import { ILineLoginData } from '@/types/line-login-data'

const liffConfig = {
  liffId: import.meta.env.VITE_LIFF_ID,
  withLoginOnExternalBrowser: true
}

const canLineLogin = (userLoginData: ILineLoginData) => {
  return liff.isInClient() && userLoginData.accessToken == ''
}

const checkIsFriend = async (userLoginData: ILineLoginData) => {
  try {
    const res = await liff.getFriendship()
    if (!res.friendFlag) {
      userLoginData.friendFlag = false
    }
  } catch (error) {
    console.log(error)
  }
}

const updateLineLoginData = async (lineLoginData: ILineLoginData) => {
  const accessToken = liff.getAccessToken()
  lineLoginData.accessToken = accessToken || ''
}

export const lineLogin = async (lineLoginData: ILineLoginData) => {
  if (!canLineLogin(lineLoginData)) {
    lineLoginData.lineBrowser = false
    // return
  }
  try {
    await liff.init(liffConfig)
    lineLoginData.loggedIn = true
    if (!liff.isLoggedIn()) {
      liff.login()
      return
    }
    await checkIsFriend(lineLoginData)
    await updateLineLoginData(lineLoginData)
  } catch (error) {
    console.error('liff init error')
    alert('liff init error')
  }

}