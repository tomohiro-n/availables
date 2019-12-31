import firebase from 'firebase/app'
import 'firebase/auth'
import { Context } from '@nuxt/types'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    appId: process.env.APPID
  })
}

export const AUTH_PROVIDERS = [firebase.auth.GoogleAuthProvider.PROVIDER_ID]

export default (
  context: Context,
  inject: (key: string, value: any) => void
) => {
  const { store } = context
  firebase.auth().onAuthStateChanged((user) => {
    store.dispatch('setUserLoggedIn', user !== null)
  })
  inject('firebase', firebase)
  inject('auth', firebase.auth())
}
