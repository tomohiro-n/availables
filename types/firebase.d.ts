import { auth } from 'firebase'

declare module 'vue/types/vue' {
  interface Vue {
    readonly $auth: auth.Auth
  }
}
