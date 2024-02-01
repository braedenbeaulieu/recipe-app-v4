// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            meta: [
                {
                    'name': 'viewport',
                    'content': 'width=device-width, initial-scale=1'
                },
                {
                    'charset': 'utf-8'
                }
            ],
            title: 'Recipedia',
        },
        pageTransition: { 
            name: 'page', mode: 'out-in' 
        }
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        '@nuxthq/studio'
    ],
})
