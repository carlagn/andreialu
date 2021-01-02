export const state = () => ({
  sidebar: "",
  title: ""
})

export const mutations = {
  setSidebar(state, payload) {
    state.sidebar = payload
  },
  setProjTitle(state, payload) {
    state.title = payload
  }
}

export const getters = {
  getProjTitle(state) {
    return state.title;
  }
}