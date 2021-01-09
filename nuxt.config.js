export default {
  target: 'static',
  router: {
    base: '/andreialu/'
  },
  css: ['~/assets/main.scss'],
  head: {
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com"'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@300&Roboto+Mono:wght@300;400;600;&family=Roboto:wght@300;400;700&display=swap'
      }
    ]
  }
}
