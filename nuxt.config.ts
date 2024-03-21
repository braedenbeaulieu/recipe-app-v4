// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    routeRules: {
        '/': { isr: true },
        '/recipes/**': { isr: true },
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        '@nuxthq/studio',
        '@nuxtjs/cloudinary',
        '@nuxt/image',
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
            link: [
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/favicon.svg'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon.png'
                },
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
    },
    image: {
        provider: 'cloudinary',
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/dn1ni2vaf/image/upload/',
            // modifiers: {
            //     effect: 'sharpen:100',
            //     quality: 'auto:best',
            // }
        }
    }
})
