<template>
    <MasonryWall :items="props.recipes" :ssr-columns="3" :column-width="300" :gap="12">
        <template #default="{ item, index }">
            <RecipeMasonryGridItem :recipe="item" />
        </template>
    </MasonryWall>
</template>
<script setup lang="ts">
    const props = defineProps<{
        recipes: Recipe[]|any
    }>()
</script>