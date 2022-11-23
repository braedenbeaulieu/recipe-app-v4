<template>
    <div class="block relative my-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="absolute left-0 top-0" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
        </svg>
        <div class="ml-12">
            <div class="text-lg" v-html="props.message"></div>
            <p class="mb-4 font-bold text-sm">{{ '#' + props.hashtags.join(' #') }}</p>
            <a :href="click_to_tweet_link" target="_blank" class="font-medium bg-[#1a4e48] text-white hover:text-white text-left text-sm p-2 rounded-md">Click to Tweet</a>
        </div>
    </div>
</template>
<script setup lang="ts">
    let props = defineProps<{
        via: string,
        message: string,
        hashtags: string[],
    }>()

    let { fullPath } = useRoute()
    let site_url = `https://recipes.braedenbeaulieu.ca`
    let click_to_tweet_link = `https://twitter.com/intent/tweet?url=${encodeURIComponent(site_url + fullPath)}&via=${props.via}&text=${encodeURIComponent(props.message)}&hashtags=${encodeURIComponent(props.hashtags.join(','))}&original_referer=${encodeURIComponent(site_url)}`
</script>