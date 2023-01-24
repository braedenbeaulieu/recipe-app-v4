import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    let gtm_key: string = 'GTM-K5BDH39'

    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: gtm_key
        }
    }, nuxtApp.$router)
})