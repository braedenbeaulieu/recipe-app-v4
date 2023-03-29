<template>
    <div ref="container">
        <div class="grid md:grid-cols-2 gap-8 text-black">
            <div>
                <div class="object-cover rounded-2xl max-h-[340px] overflow-hidden">
                    <img :src="recipe.featured_image" :alt="recipe.featured_image_alt">
                </div>
                <h1 class="text-4xl mt-4 mb-8 font-bold text-center md:text-left" v-html="recipe.title"></h1>
                <div class="grid grid-cols-2 w-full mb-8 text-black gap-2">
                    <div>
                        <p class="ml-2 font-semibold">Prep Time</p>
                        <div class="group bg-[#00000014] text-black hover:text-[#1a4e48] rounded-lg flex items-center p-4 cursor-default">
                            <svg width="45" height="45" class="group-hover:scale-105 transition-transform" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="m61.879 40.77c-6.418 0.55859-11.445 6.1875-11.445 12.812 0 2.6758 2.1758 4.8555 4.8516 4.8555h3.4102l-0.20703 5.0664c-0.039062 0.98828 0.3125 1.9258 1 2.6406 0.68359 0.71484 1.6055 1.1055 2.5938 1.1055h1.8438c0.98828 0 1.9102-0.39453 2.5938-1.1055 0.6875-0.71484 1.0391-1.6523 1-2.6406l-0.20703-5.0664h3.4102c2.6758 0 4.8516-2.1797 4.8516-4.8555v-0.27734c0-3.5195-1.4883-6.9023-4.082-9.2812-2.6328-2.4062-6.0469-3.5625-9.6133-3.2539zm11.691 12.812c0 1.5742-1.2773 2.8555-2.8516 2.8555h-4.4531c-0.27344 0-0.53125 0.10938-0.72266 0.30859-0.1875 0.19531-0.28906 0.46094-0.27734 0.73438l0.25 6.1094c0.019531 0.44141-0.14062 0.85547-0.44531 1.1758-0.30469 0.31641-0.71094 0.49219-1.1523 0.49219h-1.8438c-0.4375 0-0.84766-0.17578-1.1523-0.49219s-0.46094-0.73438-0.44531-1.1758l0.25-6.1094c0.011719-0.27344-0.089843-0.53906-0.27734-0.73438-0.1875-0.19531-0.44922-0.30859-0.72266-0.30859h-4.4531c-1.5703 0-2.8516-1.2812-2.8516-2.8555 0-5.5977 4.2266-10.352 9.6211-10.82 0.32031-0.027344 0.64062-0.042969 0.95703-0.042969 2.6523 0 5.1523 0.96875 7.125 2.7734 2.1836 2 3.4336 4.8477 3.4336 7.8086z"></path> <path d="m15.855 90c3.2305 0 5.8555-2.625 5.8555-5.8555v-23.41h6.7227c0.47656 0 0.88281-0.33594 0.98047-0.80078 8.5156-41.59-17.867-49.816-18.133-49.895-0.046875-0.015624-0.09375-0.003906-0.14062-0.011718-0.050781-0.007813-0.089844-0.027344-0.14062-0.027344-0.019531 0-0.035156 0.011719-0.058594 0.011719-0.070312 0.003906-0.13281 0.023437-0.19922 0.039062-0.0625 0.015625-0.12109 0.03125-0.17969 0.058594-0.054688 0.027344-0.10156 0.0625-0.14844 0.10156-0.054687 0.039062-0.10937 0.078124-0.15234 0.12891-0.039063 0.042968-0.066407 0.09375-0.09375 0.14062-0.039063 0.0625-0.078125 0.12109-0.10156 0.19141-0.007812 0.015625-0.019531 0.03125-0.023437 0.046875-0.011719 0.046875-0.003907 0.089844-0.011719 0.13672s-0.03125 0.09375-0.03125 0.14453v73.145c0 3.2305 2.625 5.8555 5.8555 5.8555zm3.8555-5.8555c0 2.125-1.7266 3.8555-3.8555 3.8555-2.125 0-3.8555-1.7305-3.8555-3.8555v-23.41h7.7109zm7.9062-25.41h-15.617v-46.297c5.0117 2.1133 22.332 12.039 15.617 46.297z"></path> <path d="m42.156 10c-3.3945 0-6.1562 2.7617-6.1562 6.1562v67.684c0 3.3984 2.7617 6.1602 6.1562 6.1602h41.684c3.3984 0 6.1602-2.7617 6.1602-6.1562v-67.688c0-3.3945-2.7617-6.1562-6.1562-6.1562zm45.844 6.1562v67.684c0 2.293-1.8672 4.1602-4.1562 4.1602h-41.688c-2.2891 0-4.1562-1.8672-4.1562-4.1562v-67.688c0-2.2891 1.8672-4.1562 4.1562-4.1562h41.684c2.293 0 4.1602 1.8672 4.1602 4.1562z"></path> <path d="m72.742 18.109h-19.484c-2.8242 0-5.125 2.2969-5.125 5.1445 0 2.8242 2.2969 5.125 5.125 5.125h19.484c2.8242 0 5.125-2.2969 5.125-5.1445 0-2.8281-2.3008-5.125-5.125-5.125zm0 8.2656h-19.484c-1.7227 0-3.125-1.4023-3.125-3.1445 0-1.7227 1.4023-3.125 3.125-3.125h19.484c1.7227 0 3.125 1.4023 3.125 3.1445 0 1.7266-1.4023 3.125-3.125 3.125z"></path></g></svg>
                            <p class="text-4xl font-bold pl-3">{{ resolveTime(recipe.meta.prep_time) }}</p>
                        </div>
                    </div>
                    <div>
                        <p class="ml-2 font-semibold">Cook Time</p>
                        <div class="group bg-[#00000014] text-black hover:text-[#1a4e48] rounded-lg flex items-center p-4 cursor-default">
                            <svg width="45" height="45" class="group-hover:scale-105 transition-transform" fill="currentColor" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="m85.227 43.75h-7.1016v-3.125h-75v3.2031c0 10.297 9.8945 18.672 22.059 18.672h30.883c10.938 0 20.012-6.7773 21.738-15.625h7.4219v3.125h11.648v-9.375h-11.648zm-10.227 0.078125c0 8.5703-8.4922 15.547-18.934 15.547h-30.883c-10.441 0-18.934-6.9766-18.934-15.547v-0.078125h68.75zm13.352-0.078125h5.3984v3.125h-5.3984z"/>
                                    <path d="m16.082 33.27 2.2109 2.2109 5.207-5.207c2.0469-2.0508 2.0469-5.3711 0-7.4219l-2.6016-2.6016c-0.82813-0.82812-0.82813-2.1719 0-3l5.207-5.207-2.2109-2.2109-5.207 5.207c-2.0469 2.0508-2.0469 5.3711 0 7.4219l2.6016 2.6016c0.82813 0.82812 0.82813 2.1719 0 3z"/>
                                    <path d="m36.395 33.27 2.2109 2.2109 5.207-5.207c2.0469-2.0508 2.0469-5.3711 0-7.4219l-2.6016-2.6016c-0.82813-0.82812-0.82813-2.1719 0-3l5.207-5.207-2.2109-2.2109-5.207 5.207c-2.0469 2.0508-2.0469 5.3711 0 7.4219l2.6016 2.6016c0.82813 0.82812 0.82813 2.1719 0 3z"/>
                                    <path d="m56.707 33.27 2.2109 2.2109 5.207-5.207c2.0469-2.0508 2.0469-5.3711 0-7.4219l-2.6016-2.6016c-0.82813-0.82812-0.82813-2.1719 0-3l5.207-5.207-2.2109-2.2109-5.207 5.207c-2.0469 2.0508-2.0469 5.3711 0 7.4219l2.6016 2.6016c0.82813 0.82812 0.82813 2.1719 0 3z"/>
                                    <path d="m92.188 76.562v-4.6875h-21.875v-6.25h-9.375v3.125h6.25v3.125h-23.438v-6.25h-3.125v6.25h-23.438v-3.125h6.25v-3.125h-9.375v6.25h-10.938v20.312h89.062v-6.25c2.5898 0 4.6875-2.0977 4.6875-4.6875s-2.0977-4.6875-4.6875-4.6875zm-3.125 12.5h-82.812v-14.062h82.812zm3.125-6.25v-3.125c0.86328 0 1.5625 0.69922 1.5625 1.5625s-0.69922 1.5625-1.5625 1.5625z"/>
                                </g>
                            </svg>
                            <p class="text-4xl font-bold pl-3">{{ resolveTime(recipe.meta.cook_time) }}</p>
                        </div>
                    </div>
                    <div>
                        <p class="ml-2 font-semibold">Servings</p>
                        <div class="group bg-[#00000014] text-black hover:text-[#1a4e48] rounded-lg flex items-center p-4 cursor-default">
                            <svg fill="currentColor" class="group-hover:scale-105 transition-transform" width="35" height="45" viewBox="0 0 20 20">
							    <path d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512 c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186 c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646 c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367 c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328 C15.328,9.982,12.943,12.367,10,12.367z"></path>
						    </svg>
                            <p class="text-4xl font-bold pl-4">{{ recipe_servings }}</p>
                        </div>
                    </div>
                    <div v-if="recipe.meta.oven.temp !== ''">
                        <p class="ml-2 font-semibold">Oven</p>
                        <div class="group bg-[#00000014] text-black hover:text-[#1a4e48] rounded-lg flex items-center p-4 cursor-default">
                            <svg width="45" height="45" class="group-hover:scale-105 transition-transform" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="m91.82 6.3633h-83.641c-1.0039 0-1.8164 0.8125-1.8164 1.8164v83.637c0 1.0039 0.8125 1.8164 1.8164 1.8164h83.637c1.0039 0 1.8164-0.8125 1.8164-1.8164l0.003907-83.637c0-1.0039-0.8125-1.8164-1.8164-1.8164zm-1.8203 83.637h-80v-58.184h80zm0-61.816h-80v-18.184h80z"></path> <path d="m15.453 86.363h69.09c1.0039 0 1.8164-0.8125 1.8164-1.8164v-45.453c0-1.0039-0.8125-1.8164-1.8164-1.8164l-69.09-0.003906c-1.0039 0-1.8164 0.8125-1.8164 1.8164v45.453c0 1.0078 0.8125 1.8203 1.8164 1.8203zm1.8203-45.453h65.457v41.816h-65.457z"></path> <path d="m64.547 48.18h-29.094c-1.0039 0-1.8164 0.8125-1.8164 1.8164s0.8125 1.8164 1.8164 1.8164h29.09c1.0039 0 1.8164-0.8125 1.8164-1.8164 0.003906-1-0.80859-1.8164-1.8125-1.8164z"></path> <path d="m24.547 24.547c7.2188 0 7.2109-10.91 0-10.91-7.2188 0-7.2109 10.91 0 10.91zm1.8164-5.4531c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path> <path d="m55.453 19.094c0-3.0078-2.4453-5.4531-5.4531-5.4531s-5.4531 2.4453-5.4531 5.4531c0 7.2188 10.906 7.2109 10.906 0zm-3.6328 0c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path> <path d="m80.91 19.094c0-3.0078-2.4453-5.4531-5.4531-5.4531-3.0078 0-5.4531 2.4453-5.4531 5.4531-0.003906 7.2188 10.906 7.2109 10.906 0zm-3.6367 0c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path></g></svg>
                            <p class="text-4xl font-bold pl-3">{{ resolveTemp(recipe.meta.oven) }}</p>
                        </div>
                    </div>
                    <div>
                        <p class="ml-2 font-semibold">Grocery List</p>
                        <div @click="openGroceryList()" class="group bg-[#00000014] text-black hover:text-[#1a4e48] transition-colors rounded-lg flex items-center p-4 cursor-pointer">
                            <svg width="45" height="45" class="group-hover:scale-105 transition-transform" viewBox="0 0 20 20">
                                <path fill="currentColor" d="M16.588,3.411h-4.466c0.042-0.116,0.074-0.236,0.074-0.366c0-0.606-0.492-1.098-1.099-1.098H8.901c-0.607,0-1.098,0.492-1.098,1.098c0,0.13,0.033,0.25,0.074,0.366H3.41c-0.606,0-1.098,0.492-1.098,1.098c0,0.607,0.492,1.098,1.098,1.098h0.366V16.59c0,0.808,0.655,1.464,1.464,1.464h9.517c0.809,0,1.466-0.656,1.466-1.464V5.607h0.364c0.607,0,1.1-0.491,1.1-1.098C17.688,3.903,17.195,3.411,16.588,3.411z M8.901,2.679h2.196c0.202,0,0.366,0.164,0.366,0.366S11.3,3.411,11.098,3.411H8.901c-0.203,0-0.366-0.164-0.366-0.366S8.699,2.679,8.901,2.679z M15.491,16.59c0,0.405-0.329,0.731-0.733,0.731H5.241c-0.404,0-0.732-0.326-0.732-0.731V5.607h10.983V16.59z M16.588,4.875H3.41c-0.203,0-0.366-0.164-0.366-0.366S3.208,4.143,3.41,4.143h13.178c0.202,0,0.367,0.164,0.367,0.366S16.79,4.875,16.588,4.875zM6.705,14.027h6.589c0.202,0,0.366-0.164,0.366-0.366s-0.164-0.367-0.366-0.367H6.705c-0.203,0-0.366,0.165-0.366,0.367S6.502,14.027,6.705,14.027z M6.705,11.83h6.589c0.202,0,0.366-0.164,0.366-0.365c0-0.203-0.164-0.367-0.366-0.367H6.705c-0.203,0-0.366,0.164-0.366,0.367C6.339,11.666,6.502,11.83,6.705,11.83z M6.705,9.634h6.589c0.202,0,0.366-0.164,0.366-0.366c0-0.202-0.164-0.366-0.366-0.366H6.705c-0.203,0-0.366,0.164-0.366,0.366C6.339,9.47,6.502,9.634,6.705,9.634z"></path>
                            </svg>
                            <p class="ml-3 text-xl font-bold">Open List</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-8 mb-2 mx-[50px] md:ml-0">
                    <h3 class="text-2xl font-bold">Ingredients</h3>
                </div>
                <ul class="mb-2 ml-12 md:ml-0">
                    <li class="leading-8" v-for="ingredient in recipe.ingredients" :key="ingredient.name" :data-initial-value="ingredient.qty">
                        <p>{{ `${resolveIngredientQty(ingredient.qty)} ${ingredient.unit} ${ingredient.name}` }}<span v-if="ingredient.modifier">, {{ ingredient.modifier }}</span></p>
                    </li>
                </ul>
            </div>
            <div>
                <div class="mb-8 ml-12" v-if="recipe.meta.cooks_note">
                    <h3 class="text-2xl mb-2 font-bold">Cook's Note</h3>
                    <p class="">{{ recipe.meta.cooks_note }}</p>
                </div>

                <h3 class="text-2xl md:mt-0 mb-2 font-bold ml-[50px]">Directions</h3>
                <div class="mb-8" >
                    <div class="flex mb-4" v-for="(direction, index) in recipe.directions" :key="index">
                        <span class="block text-4xl font-bold w-[50px]">{{ parseInt(index) + 1 }}.</span>
                        <p @click="maybeDisplayIngredient" class="leading-8 mb-1 w-a w-[calc(100%_-_50px)]" v-html="resolveDirection(direction.direction)"></p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2 class="text-4xl mt-4 mb-4 font-bold md:text-left">For Next Time</h2>
            <RecipeGrid>
                <RecipeGridItem v-for="recipe in recommended_recipes" :key="recipe.id" :recipe="recipe" />
            </RecipeGrid>
        </div>

        <Notification :open="notification_open" :subtitle="notification_title" :message="notification_message"></Notification>

        <RecipeGroceryList :class="{open: grocery_list_open}" :ingredients="recipe.ingredients" @close="closeGroceryList" />
    </div>
</template>

<script setup>
    const router = useRoute()
    const { data: recipe, pending: pending_recipe } = await useFetch(`/api/recipes/${router.params.slug}?img_size=large`)
    const { data: recommended_recipes, pending: pending_recommended_recipes } = await useFetch(`/api/recipes/?per_page=6&img_size=large&orderby=rand&post__not_in=${recipe.value.id}`)

    // set up page title
    useHead({
      titleTemplate: `%s - ${useHtmlDecode(recipe.value.title)}`,
    })

    let single_qty_ingredients = recipe.value.ingredients.map((ingredient) => {
        return {
            name: ingredient.name, 
            qty: parseFloat(ingredient.qty) / parseFloat(recipe.value.meta.servings)
        }
    })
    
    let recipe_servings = ref(recipe.value.meta.servings)
    let notification_title = ref('')
    let notification_message = ref('')
    let notification_open = ref(false)
    
    let grocery_list_open = ref(false)
    let openGroceryList = () => {
        grocery_list_open.value = true
    }
    let closeGroceryList = () => {
        grocery_list_open.value = false
    }

    let temp_unit = 'F'

    let resolveTime = (mins) => {
        let hours = (mins / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        
        let time = `${rminutes}m`;

        if(rhours > 0) {
            time = `${rhours}h 13m`
            if(minutes > 0) {
                time += `${rminutes}m`
            }
        }

        return time
    }

    let maybeDisplayIngredient = (e) => {
        if(e.target.classList.contains('ingredient-popup')) {
            displayIngredient(e.target.dataset.name, 5000)
        }
    }

    let timer;
    let displayIngredient = (ingredient_name, show_for = -1) => {
        let ingredient = getIngredientByName(ingredient_name)

        notification_open.value = true
        notification_title.value = ingredient.name
        notification_message.value = `${ingredient.qty} ${ingredient.unit} ${ingredient.name}`
        if(ingredient.modifier) notification_message.value += `, <span v-if="ingredient.modifier">${ingredient.modifier}</span>`
        const runTimer = (duration) => {
            timer = setTimeout(() => {
                notification_open.value = false
            }, duration);
        }

        if(show_for > 0) {
            clearTimeout(timer)
            runTimer(show_for);
        }
    }

    let getIngredientByName = (name) => {
        let found_ingredient = false;

        recipe.value.ingredients.forEach((ingredient) => {
            if(ingredient.name == name) {
                found_ingredient = ingredient
            }
        })

        return found_ingredient
    }
    
    let resolveTemp = (oven) => {
        if(temp_unit == oven.temp_unit) {
            return `${oven.temp}°${oven.temp_unit}`
        }
    }

    let resolveDirection = (direction) => {
        // This will find anything surrounded by square brackets
        // let regex = /\[(.*?)\]/g

        // Find all of the ingredients in this direction
        let ingredients = []
        recipe.value.ingredients.forEach(ingredient => {
            let match = direction.match(ingredient.name)

            if(match) {
                ingredients.push(ingredient.name)
            }
        })

        if(ingredients) {
            ingredients.forEach(ingredient => {
                // get the ingredient
                let found_ingredient = getIngredientByName(ingredient) ?? false

                // add a span around the recipe with some data attributes
                if(found_ingredient) {
                    direction = direction.replace(ingredient, `<span class="ingredient-popup bg-[#dedcd9] px-3 py-1 rounded-lg cursor-pointer inline-block hover:bg-[#1a4e48] hover:text-white border-2 border-[#f5f3f0] transition-colors" data-name="${found_ingredient.name}" >${ingredient}</span>`)

                }
            });
        }

        return direction
    }

    let updateIngredientQty = (action = 'increment') => {
        if(action == 'increment') {
            recipe_servings.value++
        } else if(action == 'decrement' && recipe_servings.value > 1) {
            recipe_servings.value--
        } else {
            return
        }

        recipe.value.ingredients.forEach(reactive_ingredient => {
            let temp = reactive_ingredient.qty
            let single_serving
            single_qty_ingredients.forEach(ingt => {
                if(ingt.name == reactive_ingredient.name) {
                    single_serving = parseFloat(ingt.qty)
                }
            })

            if(action == 'increment') {
                reactive_ingredient.qty = parseFloat(temp) + single_serving
            } else if(action == 'decrement') {
                reactive_ingredient.qty = parseFloat(temp) - single_serving
            }
        })
    }

    let resolveIngredientQty = (value) => {
        let whole = value.toString().split('.')[0]
        if(whole == '0') whole = ''
        let decimal = value.toString().split('.')[1]

        switch(decimal) {
            case '5':
                return whole + ' 1/2'
            case '33':
                return whole + ' 1/3'
            case '66':
                return whole + ' 3/3'
            case '75':
                return whole + ' 3/4'
            case '25':
                return whole + ' 1/4'
            case '166':
                return whole + ' 1/6'
            case '125':
                return whole + ' 1/8'
            case '875':
                return whole + ' 7/8'
        }

        return value
    }
</script>