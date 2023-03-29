export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    let api_url = `https://alpha.braedenbeaulieu.ca/wp-json/bb_recipes/v1/recipe?key=${config.RECIPES_API_KEY}&per_page=1&orderby=rand`
    
    // @ts-ignore
    let query_params = (event.node.req.originalUrl.split('?').pop()).split('&')
    query_params = query_params.forEach((param: string) => {
        let parsed_param = param.split('=')
        api_url += `&${parsed_param[0]}=${parsed_param[1]}`
    })

    let recipes: Recipe[] = []
    
    await fetch(api_url)
        .then(response => response.json())
        .catch(err => console.log(err))
        .then(data => {
            if(data.results) {
                // @ts-ignore
                data.results.forEach(raw_recipe => {
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
                })
            }
        })

    return recipes[0]
})