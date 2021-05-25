export const state = () => ({
  sidebar: "",
  title: "",
  activePage: "side-a",
  activeZoom: ""
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
  },
  setActiveZoom(state, payload) {
    state.activeZoom = payload
  }
}

export const getters = {
  getProjTitle(state) {
    return state.title;
  }
}
