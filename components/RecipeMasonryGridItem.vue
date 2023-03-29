<template>
    <div class="relative before:content-[''] before:rounded-lg before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
        <NuxtLink :to="recipe_link">
            <div class="h-64">
                <img class="rounded-lg object-cover w-full h-full" :src="props.recipe.featured_image" :alt="props.recipe.featured_image_alt" />
            </div>
            <div class="absolute inset-0 p-2 md:p-4 text-white flex flex-col">
                <div class="relative bg-black/30 shadow-lg p-2 rounded-md">
                    <div class="flex">
                        <h1 class="text-lg md:text-3xl font-bold" v-html="props.recipe.title"></h1>
                        <div v-if="props.recipe.is_featured" class="mr-2 pt-1 pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                    </div>
                    <p class="font-sm font-light hidden md:inline mt-3" v-html="props.recipe.description"></p>
                </div>
                <div class="mt-auto flex flex-wrap -mb-1">
                    <NuxtLink
                        v-for="tag in props.recipe.tags" :key="recipe.id"
                        :to="`/recipes/search?s=${tag}`"
                        class="bg-white bg-opacity-80 py-1 px-4 mr-1 mb-1 text-xs rounded-full text-black hover:bg-[#1a4e48] hover:text-white transition-colors"
                    >
                        #{{ tag }}
                    </NuxtLink>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        recipe: Recipe
    }>()

    let recipe_link = ref(`/recipes/${props.recipe.slug}`)

    if(props.recipe.has_blog !== false) {
        recipe_link.value = `/blog/${props.recipe.slug}`
    }

    console.log(props.recipe.is_featured)

    // let is_featured = ref(false)
    // if(props.recipe.tags && Object.values(props.recipe.tags).length > 0) {
    //     if(Object.values(props.recipe.tags).indexOf('Featured') >= 0) {
    //         props.recipe.tags = Object.values(props.recipe.tags).splice(Object.values(props.recipe.tags).indexOf('Featured'), 1)

    //         let tags_array = Object.values(props.recipe.tags)
    //         let featured_index = tags_array.indexOf('Featured')
    //         if(featured_index !== null || featured_index !== undefined) {
    //             tags_array.splice(featured_index, 1)
    //             is_featured.value = true
    //         }
    //         props.recipe.tags = tags_array
    //     }
    // }
</script>