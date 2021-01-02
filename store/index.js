export const state = () => ({
  sidebar: "",
  title: "",
  activePage: "work"
})

export const mutations = {
  setSidebar(state, payload) {
    state.sidebar = payload
  },
  setProjTitle(state, payload) {
    state.title = payload
  },
  setActivePage(state, payload) {
    state.activePage = payload
  }
}

export const getters = {
  getProjTitle(state) {
    return state.title;
  }
}