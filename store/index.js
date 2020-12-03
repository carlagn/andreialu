export const state = () => ({
  sidebar: ""
})

export const mutations = {
  setSidebar(state, payload) {
    state.sidebar = payload
  }
}