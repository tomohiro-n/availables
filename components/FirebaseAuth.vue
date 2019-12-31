<template>
  <div id="firebaseui-auth-container" />
</template>

<script>
import { AUTH_PROVIDERS } from '~/plugins/firebase'

const config = {
  signInSuccessUrl: '/',
  signInOptions: AUTH_PROVIDERS
}

export default {
  mounted() {
    require('firebaseui/dist/firebaseui.css')
    const firebaseui = require('firebaseui')
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.$auth)
    ui.start('#firebaseui-auth-container', config)
  }
}
</script>
