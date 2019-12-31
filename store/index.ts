import { GetterTree, MutationTree, ActionTree } from 'vuex'

interface State {
  isUserLoggedIn: boolean
}

export const state: State = {
  isUserLoggedIn: false
}

export const mutations: MutationTree<State> = {
  setUserLoggedIn(state, isUserLoggedIn: boolean) {
    state.isUserLoggedIn = isUserLoggedIn
  }
}

export const actions: ActionTree<State, any> = {
  setUserLoggedIn({ commit }, isUserLoggedIn: boolean) {
    commit('setUserLoggedIn', isUserLoggedIn)
  }
}

export const getters: GetterTree<State, any> = {
  isUserLoggedIn: (state) => state.isUserLoggedIn
}
