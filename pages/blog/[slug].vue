<template>
    <div class="mb-20">
        <div>
            <div>
                <div class="object-cover rounded-2xl max-h-[340px] overflow-hidden flex items-center">
                    <img class="w-full h-full object-center" :src="recipe.featured_image" :alt="recipe.featured_image_alt">
                </div>
                <p v-if="recipe.short">{{ recipe.short }}</p>
                <div class="overlay alignfull"></div>
            </div>
            <h1 class="text-4xl my-4 font-bold" v-html="recipe.title"></h1>
            <div class="mt-auto flex flex-wrap -mb-1">
                <NuxtLink
                    v-for="tag in recipe.tags" :key="recipe.id"
                    :to="`/recipes/search?s=${tag}`"
                    class="py-1 px-4 mr-1 mb-1 text-xs rounded-md text-white hover:text-white bg-[#1a4e48] transition-colors"

                >
                    #{{ tag }}
                </NuxtLink>
            </div>
        </div>
        <div class="recipe-content mt-3" v-html="recipe.content"></div>

        <ClickToTweet :message="'Check out this Recipe!'" :hashtags="['recipe', 'homecook']" :via="'recipes'" />

        <div class="fixed left-0 right-0 bottom-2 flex justicy-center mt-8">
            <NuxtLink :to="`/recipes/${recipe.slug}`" class="flex items-center bg-[#1a4e48] border border-black/40 hover:border-[#289e90] text-white hover:text-white inline-flex rounded-full py-2 px-4 mb-4 mx-auto shadow-lg hover:shadow-none">
                <p class="ml-2">Start Recipe</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ml-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const { data: recipe, pending: pending_recipe } = await useFetch(`/api/recipes/${useRoute().params.slug}?includes_content=true`)
    
    // set up page title
    useHead({
        titleTemplate: `%s - Blog - ${useHTMLDecode(recipe.value.title)}`,
    })
</script>

<style>
    .recipe-content {
        margin-bottom: 50px;

    }
    .recipe-content h2 {
        font-size: 36px;
        line-height: 1.3;
        margin-top: 10px;
        margin-bottom: 6px;
    }
    .recipe-content h3 {
        font-size: 30px;
        line-height: 1.3;
        margin-top: 10px;
        margin-bottom: 6px;
    }
    .recipe-content p {
        margin-bottom: 20px;
    }
    .recipe-content ul {
        padding-left: 30px;
        list-style-type: disc;
    }
    .recipe-content ul li {
        margin-bottom: 6px;
    }
</style>