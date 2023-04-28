export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const query = getQuery(event)
    
    let api_url = `https://alpha.braedenbeaulieu.ca/wp-json/bb_recipes/v1/search?key=${config.RECIPES_API_KEY}&s=${query.s}&img_size=${query.img_size}`
    for(let [param_key, param_value] of Object.entries(query)) {
        api_url += `&${param_key}=${param_value}`
    }

    let recipes: Recipe[] = []
    
    try {
        let response = await fetch(api_url)

        let data = await response.json()
        for(let raw_recipe of data.results) {
            let is_featured = false
            if(raw_recipe.tags && Object.values(raw_recipe.tags).length > 0) {
                if(Object.values(raw_recipe.tags).indexOf('Featured') >= 0) {
                    raw_recipe.tags = Object.values(raw_recipe.tags).splice(Object.values(raw_recipe.tags).indexOf('Featured'), 1)
        
                    let tags_array = Object.values(raw_recipe.tags)
                    let featured_index = tags_array.indexOf('Featured')
                    if(featured_index !== null || featured_index !== undefined) {
                        tags_array.splice(featured_index, 1)
                        is_featured = true
                    }
                    raw_recipe.tags = tags_array
                }
            }

            let recipe: Recipe = {
                id: raw_recipe.id,
                title: raw_recipe.title,
                slug: raw_recipe.slug,
                description: raw_recipe.description,
                featured_image: raw_recipe.featured_image[0],
                featured_image_alt: raw_recipe.featured_image_alt,
                has_blog: false,
                is_featured: is_featured,
                tags: raw_recipe.tags,
                meta: {
                    video_url: raw_recipe.meta.video_url,
                    difficulty: raw_recipe.meta.difficulty,
                    servings: raw_recipe.meta.servings,
                    prep_time: raw_recipe.meta.prep_time,
                    cook_time: raw_recipe.meta.cook_time,
                    total_time: parseInt(raw_recipe.meta.prep_time) + parseInt(raw_recipe.meta.cook_time),
                    cooks_note: raw_recipe.meta.cooks_note,
                    oven: {
                        temp_unit: 'F',
                        temp: raw_recipe.meta.temp
                    }
                },
                ingredients: raw_recipe.ingredients,
                directions: raw_recipe.directions,
            }

            if(raw_recipe.content) {
                recipe.has_blog = true
            }

            recipes.push(recipe)
        }
    } catch(err) {
        console.error(err)
    }

    return recipes
})
