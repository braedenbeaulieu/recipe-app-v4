export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    
    let api_url = `https://alpha.braedenbeaulieu.ca/wp-json/bb_recipes/v1/recipe?key=${config.RECIPES_API_KEY}&per_page=1&slug=${event.context.params.slug}`

    let recipes: Recipe[] = []
    
    await fetch(api_url)
        .then(response => response.json())
        .catch(err => console.log(err))
        .then(data => {
            if(data.results) {
                // @ts-ignore
                data.results.forEach(raw_recipe => {
                    let recipe: Recipe = {
                        id: raw_recipe.id,
                        title: raw_recipe.title,
                        slug: raw_recipe.slug,
                        description: raw_recipe.description,
                        featured_image: raw_recipe.featured_image[0],
                        featured_image_alt: raw_recipe.featured_image_alt,
                        has_blog: false,
                        tags: raw_recipe.tags,
                        meta: {
                            difficulty: raw_recipe.meta.difficulty,
                            servings: raw_recipe.meta.servings,
                            prep_time: raw_recipe.meta.prep_time,
                            cook_time: raw_recipe.meta.cook_time,
                            total_time: parseInt(raw_recipe.meta.prep_time) + parseInt(raw_recipe.meta.cook_time),
                            cooks_note: raw_recipe.meta.cooks_note,
                            oven: {
                                temp_unit: 'F',
                                temp: raw_recipe.meta.oven.temp
                            }
                        },
                        ingredients: raw_recipe.ingredients,
                        directions: raw_recipe.directions,
                    }

                    recipe.content = raw_recipe.content
    
                    if(raw_recipe.content) {
                        recipe.has_blog = true
                    }

                    recipes.push(recipe)
                })
            }
        })

    return recipes[0]
})