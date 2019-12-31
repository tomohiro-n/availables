<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ titleText }}
      </h1>
      <h2 class="subtitle">
        {{ subTitleText }}
      </h2>
    </div>
    <div>
      <div v-if="!isUserLoggedIn">
        <firebaseAuth />
      </div>
      <div v-if="isUserLoggedIn">
        Hello {{ this.$auth.currentUser.displayName }}<br />
        <b-button @click="logout()">Logout</b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

interface State {
  titleText: string | null
  subTitleText: string | null
}

export default Vue.extend({
  layout: 'default',
  components: {
    FirebaseAuth: () => import('~/components/FirebaseAuth.vue')
  },
  data() {
    return {
      titleText: 'availables',
      subTitleText: 'To look for available time slots'
    } as State
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: 'isUserLoggedIn'
    })
  },
  methods: {
    logout() {
      this.$auth.signOut()
      location.reload()
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
