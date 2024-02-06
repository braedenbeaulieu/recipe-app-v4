// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        '@nuxthq/studio',
        '@nuxtjs/cloudinary'
    ],
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
    content: {
        highlight: {
          // Theme used in all color schemes.
          theme: 'github-light'
        }
    }
})
