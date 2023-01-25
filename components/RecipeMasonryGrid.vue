<template>
    <ClientOnly>
        <MasonryWall :items="props.recipes" :ssr-columns="3" :column-width="column_width" :gap="12">
            <template #default="{ item, index }">
                <RecipeMasonryGridItem :recipe="item" />
            </template>
        </MasonryWall>
    </ClientOnly>
</template>
<script setup lang="ts">
    const instance = getCurrentInstance()
    
    const props = defineProps<{
        recipes: Recipe[]|any
    }>()

    let column_width = ref()
    let resolve_column_width = () => {
        switch(true) {
            case window.innerWidth < 500:
                column_width.value = 150
                break
            case window.innerWidth < 850:
                column_width.value = 200
                break
            case window.innerWidth < 1000:
                column_width.value = 250
                break
            default:
                column_width.value = 300
                break
        }

        instance?.proxy?.$forceUpdate()
    }
    
    onMounted(() => {
        resolve_column_width()
        window.addEventListener('resize', resolve_column_width)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', resolve_column_width)
    })
</script>