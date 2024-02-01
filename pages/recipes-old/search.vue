<template>
    <div class="max-w-xl mx-auto">
        <RecipeSearch @search="search_recipes" />
        <div v-if="pending">
            <div class="animate-pulse mx-4 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mt-6 mb-4"></div>
            <div class="grid grid-cols-1 divide-y divide-gray-400">
                <div v-for="index in 6" :key="index" role="status" class="py-1 sm:py-4 px-3 flex items-center space-y-4 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                    <div class="flex-shrink-0 rounded-full flex justify-center items-center bg-gray-300 dark:bg-gray-700">
                        <div class="p-1 w-12 h-12 rounded-full text-gray-200"></div>
                    </div>
                    <div class="flex-1 min-w-0 px-4">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[240px] mb-2.5"></div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="Array.isArray(recipes)">
                <ClientOnly>
                    <h2 class="text-xl font-bold mb-3 mx-3 text-light">{{ search_subtitle }}</h2>
                </ClientOnly>
                <RecipeList>
                    <RecipeListItem v-for="recipe in recipes" :key="recipe.slug" :recipe="recipe"/>
                </RecipeList>
            </div>
            <div v-else>
                <h2 class="text-xl font-bold mb-3 mx-3 text-light" v-if="!search_term">No recipes found.</h2>
                <h2 class="text-xl font-bold mb-3 mx-3 text-light" v-else>No recipes found for {{ search_term }}.</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    useHead({
        titleTemplate: '%s - Search',
    })

    const route = useRoute()
    let search_term = ref(route.query.s)

    const { data: recipes, pending } = useLazyAsyncData('recipes', () => $fetch(`/api/recipes/search/?img_size=thumbnail&s=${search_term.value}`))

    const refresh = () => refreshNuxtData('recipes')
    
    let search_recipes = async (query: string) => {
        search_term.value = query
        await refresh()
        get_search_subtitle()
    }

    let search_subtitle = ref('')
    let get_search_subtitle = () => {
        if(!recipes.value || !recipes.value.length) {
            if(search_term.value != '' && search_term.value != undefined) {
                search_subtitle.value = `No recipes found for ${search_term.value}`
            } else {
                search_subtitle.value = 'No recipes found.'
            }
            return
        }

        if(search_term.value != '' && search_term.value != undefined) {
            search_subtitle.value = `Found ${recipes.value.length} recipes for ${search_term.value}`
        } else {
            search_subtitle.value = ''
        }
    }
    await refresh()
    get_search_subtitle()
</script>