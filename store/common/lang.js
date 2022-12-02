const LANG_KEY = 'LANG'

export const state = () => ({
  locales: ['vn', 'en'],
  locale: window.localStorage.getItem(LANG_KEY) || 'vn',
})

export const actions = {
  switchLang({ commit }, locale) {
    commit('SET_LANG', locale)
    this.app.i18n.locale = locale
  },
}

export const mutations = {
  SET_LANG(state, locale) {
    window.localStorage.setItem(LANG_KEY, locale)
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
