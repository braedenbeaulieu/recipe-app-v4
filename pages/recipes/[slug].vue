<template>
    <div ref="container">
        <div class="grid md:grid-cols-2 gap-8 text-black">
            <div>
                <div class="object-cover rounded-2xl max-h-[500px] overflow-hidden shadow-xl">
                    <img :src="recipe.featured_image" :alt="recipe.featured_image_alt">
                </div>
                <h1 class="text-4xl my-4 font-bold text-center md:text-left" v-html="recipe.title"></h1>
                <div class="mt-auto flex flex-wrap mb-4">
                    <NuxtLink
                        v-for="tag in recipe.tags" :key="recipe.id"
                        :to="`/recipes/search?s=${tag}`"
                        class="bg-white bg-opacity-80 py-1 px-4 mr-1 mb-1 text-sm rounded-full text-black hover:bg-[#1a4e48] hover:text-white transition-colors shadow-sm"
                    >
                        #{{ tag }}
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 w-full mb-8 text-black gap-2">
                    <div>
                        <p class="ml-2 font-semibold">Prep Time</p>
                        <div class="shadow-lg group bg-[#00000014] text-black hover:text-[#1a4e48] rounded-lg flex items-center p-4 cursor-default">
                            <svg width="45" height="45" class="group-hover:scale-105 transition-transform" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="m61.879 40.77c-6.418 0.55859-11.445 6.1875-11.445 12.812 0 2.6758 2.1758 4.8555 4.8516 4.8555h3.4102l-0.20703 5.0664c-0.039062 0.98828 0.3125 1.9258 1 2.6406 0.68359 0.71484 1.6055 1.1055 2.5938 1.1055h1.8438c0.98828 0 1.9102-0.39453 2.5938-1.1055 0.6875-0.71484 1.0391-1.6523 1-2.6406l-0.20703-5.0664h3.4102c2.6758 0 4.8516-2.1797 4.8516-4.8555v-0.27734c0-3.5195-1.4883-6.9023-4.082-9.2812-2.6328-2.4062-6.0469-3.5625-9.6133-3.2539zm11.691 12.812c0 1.5742-1.2773 2.8555-2.8516 2.8555h-4.4531c-0.27344 0-0.53125 0.10938-0.72266 0.30859-0.1875 0.19531-0.28906 0.46094-0.27734 0.73438l0.25 6.1094c0.019531 0.44141-0.14062 0.85547-0.44531 1.1758-0.30469 0.31641-0.71094 0.49219-1.1523 0.49219h-1.8438c-0.4375 0-0.84766-0.17578-1.1523-0.49219s-0.46094-0.73438-0.44531-1.1758l0.25-6.1094c0.011719-0.27344-0.089843-0.53906-0.27734-0.73438-0.1875-0.19531-0.44922-0.30859-0.72266-0.30859h-4.4531c-1.5703 0-2.8516-1.2812-2.8516-2.8555 0-5.5977 4.2266-10.352 9.6211-10.82 0.32031-0.027344 0.64062-0.042969 0.95703-0.042969 2.6523 0 5.1523 0.96875 7.125 2.7734 2.1836 2 3.4336 4.8477 3.4336 7.8086z"></path> <path d="m15.855 90c3.2305 0 5.8555-2.625 5.8555-5.8555v-23.41h6.7227c0.47656 0 0.88281-0.33594 0.98047-0.80078 8.5156-41.59-17.867-49.816-18.133-49.895-0.046875-0.015624-0.09375-0.003906-0.14062-0.011718-0.050781-0.007813-0.089844-0.027344-0.14062-0.027344-0.019531 0-0.035156 0.011719-0.058594 0.011719-0.070312 0.003906-0.13281 0.023437-0.19922 0.039062-0.0625 0.015625-0.12109 0.03125-0.17969 0.058594-0.054688 0.027344-0.10156 0.0625-0.14844 0.10156-0.054687 0.039062-0.10937 0.078124-0.15234 0.12891-0.039063 0.042968-0.066407 0.09375-0.09375 0.14062-0.039063 0.0625-0.078125 0.12109-0.10156 0.19141-0.007812 0.015625-0.019531 0.03125-0.023437 0.046875-0.011719 0.046875-0.003907 0.089844-0.011719 0.13672s-0.03125 0.09375-0.03125 0.14453v73.145c0 3.2305 2.625 5.8555 5.8555 5.8555zm3.8555-5.8555c0 2.125-1.7266 3.8555-3.8555 3.8555-2.125 0-3.8555-1.7305-3.8555-3.8555v-23.41h7.7109zm7.9062-25.41h-15.617v-46.297c5.0117 2.1133 22.332 12.039 15.617 46.297z"></path> <path d="m42.156 10c-3.3945 0-6.1562 2.7617-6.1562 6.1562v67.684c0 3.3984 2.7617 6.1602 6.1562 6.1602h41.684c3.3984 0 6.1602-2.7617 6.1602-6.1562v-67.688c0-3.3945-2.7617-6.1562-6.1562-6.1562zm45.844 6.1562v67.684c0 2.293-1.8672 4.1602-4.1562 4.1602h-41.688c-2.2891 0-4.1562-1.8672-4.1562-4.1562v-67.688c0-2.2891 1.8672-4.1562 4.1562-4.1562h41.684c2.293 0 4.1602 1.8672 4.1602 4.1562z"></path> <path d="m72.742 18.109h-19.484c-2.8242 0-5.125 2.2969-5.125 5.1445 0 2.8242 2.2969 5.125 5.125 5.125h19.484c2.8242 0 5.125-2.2969 5.125-5.1445 0-2.8281-2.3008-5.125-5.125-5.125zm0 8.2656h-19.484c-1.7227 0-3.125-1.4023-3.125-3.1445 0-1.7227 1.4023-3.125 3.125-3.125h19.484c1.7227 0 3.125 1.4023 3.125 3.1445 0 1.7266-1.4023 3.125-3.125 3.125z"></path></g></svg>
                            <p class="text-4xl font-bold pl-3">{{ resolveTime(recipe.meta.prep_time) }}</p>
                        </div>
                    </div>
                    <div>
                        <p class="ml-2 font-semibold">Cook Time</p>
                        <div class="shadow-lg group bg-[#00000014] text-black hover:text-[#1a4e48] rounded-lg flex items-center p-4 cursor-default">
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
                        <div class="shadow-lg group bg-[#00000014] text-black hover:text-[#1a4e48] rounded-lg flex items-center p-4 cursor-default">
                            <svg fill="currentColor" class="group-hover:scale-105 transition-transform" width="35" height="45" viewBox="0 0 20 20">
							    <path d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512 c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186 c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646 c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367 c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328 C15.328,9.982,12.943,12.367,10,12.367z"></path>
						    </svg>
                            <p class="text-4xl font-bold pl-4">{{ recipe_servings }}</p>
                        </div>
                    </div>
                    <div v-if="recipe.meta.oven.temp !== ''">
                        <p class="ml-2 font-semibold">Oven</p>
                        <div class="shadow-lg group bg-[#00000014] text-black hover:text-[#1a4e48] rounded-lg flex items-center p-4 cursor-default">
                            <svg width="45" height="45" class="group-hover:scale-105 transition-transform" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="m91.82 6.3633h-83.641c-1.0039 0-1.8164 0.8125-1.8164 1.8164v83.637c0 1.0039 0.8125 1.8164 1.8164 1.8164h83.637c1.0039 0 1.8164-0.8125 1.8164-1.8164l0.003907-83.637c0-1.0039-0.8125-1.8164-1.8164-1.8164zm-1.8203 83.637h-80v-58.184h80zm0-61.816h-80v-18.184h80z"></path> <path d="m15.453 86.363h69.09c1.0039 0 1.8164-0.8125 1.8164-1.8164v-45.453c0-1.0039-0.8125-1.8164-1.8164-1.8164l-69.09-0.003906c-1.0039 0-1.8164 0.8125-1.8164 1.8164v45.453c0 1.0078 0.8125 1.8203 1.8164 1.8203zm1.8203-45.453h65.457v41.816h-65.457z"></path> <path d="m64.547 48.18h-29.094c-1.0039 0-1.8164 0.8125-1.8164 1.8164s0.8125 1.8164 1.8164 1.8164h29.09c1.0039 0 1.8164-0.8125 1.8164-1.8164 0.003906-1-0.80859-1.8164-1.8125-1.8164z"></path> <path d="m24.547 24.547c7.2188 0 7.2109-10.91 0-10.91-7.2188 0-7.2109 10.91 0 10.91zm1.8164-5.4531c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path> <path d="m55.453 19.094c0-3.0078-2.4453-5.4531-5.4531-5.4531s-5.4531 2.4453-5.4531 5.4531c0 7.2188 10.906 7.2109 10.906 0zm-3.6328 0c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path> <path d="m80.91 19.094c0-3.0078-2.4453-5.4531-5.4531-5.4531-3.0078 0-5.4531 2.4453-5.4531 5.4531-0.003906 7.2188 10.906 7.2109 10.906 0zm-3.6367 0c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path></g></svg>
                            <p class="text-4xl font-bold pl-3">{{ resolveTemp(recipe.meta.oven) }}</p>
                        </div>
                    </div>
                    <div>
                        <p class="ml-2 font-semibold">Grocery List</p>
                        <div @click="openGroceryList()" class="shadow-lg group bg-[#00000014] text-black hover:text-[#1a4e48] transition-colors rounded-lg flex items-center p-4 cursor-pointer">
                            <svg width="40" height="40" class="group-hover:scale-105 transition-transform" fill="currentColor" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="m90.707 43.316h-2.918c0.10547-0.63672 0.17969-1.2812 0.17969-1.9414 0-5.3828-3.668-9.8828-8.5703-11.078 0.66406-0.34375 1.4141-0.83594 1.9961-1.5938 1.293-1.6914 1.2031-3.9336 1.2031-3.9336s-2.1875 0.5-3.4805 2.1914c-0.27344 0.35547-0.45313 0.73828-0.61719 1.1172v-1.3711c0-0.92578-0.75391-1.6758-1.6797-1.6758-0.92578 0-1.6797 0.75-1.6797 1.6758v3.4258c-5.3594 0.83984-9.4961 5.5391-9.4961 11.242 0 0.66406 0.078125 1.3086 0.1875 1.9414h-2.4023v-9.6836c0-0.25391-0.0625-0.50391-0.17188-0.73437l-3.75-7.6992c0.54297-0.27734 0.92578-0.82812 0.92578-1.4766v-4.7148c0-0.92578-0.75391-1.6758-1.6797-1.6758h-9.3008c-0.92578 0-1.6758 0.75-1.6758 1.6758v4.7148c0 0.65234 0.38281 1.207 0.92969 1.4805l-3.75 7.6953c-0.11328 0.23047-0.17188 0.48047-0.17188 0.73437v9.6836h-2.2148v-16.352c0-1.4492-0.33594-2.8125-0.96094-3.9141l-4.0742-7.5391c0.61328-0.84766 1.0508-1.8359 1.0508-2.9648 0-2.8477-2.3203-5.168-5.168-5.168h-7.6992c-2.8477 0-5.1641 2.3203-5.1641 5.168 0 1.1289 0.4375 2.1211 1.0547 2.9727l-4.0547 7.5039c-0.66406 1.1719-1.0156 2.5352-1.0156 3.9375v16.352h-7.2539c-3.4023 0-6.168 2.7656-6.168 6.168 0 3.4023 2.7656 6.168 6.168 6.168h2.0742l5.1094 30.219c0.66016 3.9102 4.0391 6.75 8.0391 6.75h50.984c4 0 7.3789-2.8398 8.043-6.75l5.0977-30.215h2.0742c3.4023 0 6.1719-2.7656 6.1719-6.168-0.003906-3.4023-2.7734-6.168-6.1719-6.168zm-21.703-1.9375c0-4.4453 3.5117-8.0625 7.8242-8.0625 4.293 0 7.7852 3.6172 7.7852 8.0625 0 0.66406-0.10156 1.3086-0.25391 1.9414h-15.09c-0.15625-0.62109-0.26562-1.2617-0.26562-1.9414zm-17.871-20.695h5.9453v1.3633h-5.9453zm-2.9922 13.336 4.2031-8.6211h3.5352l4.1992 8.6211v9.2969h-11.938zm-22.418-16.301h7.6992c0.47656 0 0.90625-0.15234 1.3438-0.27344l3.332 6.1562h-17.035l3.3281-6.1562c0.43359 0.12109 0.85938 0.27344 1.332 0.27344zm0-6.9805h7.6992c1 0 1.8164 0.8125 1.8164 1.8164 0 1-0.8125 1.8125-1.8164 1.8125h-7.6992c-1 0-1.8125-0.8125-1.8125-1.8125 0-1.0039 0.81641-1.8164 1.8125-1.8164zm-5.8281 16.227v-0.011719h19.32v0.011719 16.352h-19.324l0.007813-16.352zm60.332 58.344c-0.37891 2.25-2.4141 3.9492-4.7344 3.9492h-50.984c-2.3555 0-4.3477-1.6602-4.7344-3.9492l-5.0078-29.656h70.465zm10.48-33.008h-81.418c-1.5547 0-2.8164-1.2617-2.8164-2.8164s1.2617-2.8164 2.8164-2.8164h2.7344c0.03125 0 0.058593 0.019531 0.089843 0.019531h55.926 0.03125 21.051c0.03125 0 0.058594-0.015625 0.089844-0.019531h1.4883c1.5547 0 2.8164 1.2617 2.8164 2.8164 0.003906 1.5547-1.2539 2.8164-2.8086 2.8164z"/>
                                    <path d="m30.605 85.973c0.92578 0 1.6758-0.75391 1.6758-1.6797v-22.324c0-0.92578-0.75-1.6797-1.6758-1.6797s-1.6758 0.75391-1.6758 1.6797v22.324c0 0.92578 0.75 1.6797 1.6758 1.6797z"/>
                                    <path d="m40.301 85.973c0.92578 0 1.6758-0.75391 1.6758-1.6797v-22.324c0-0.92578-0.75-1.6797-1.6758-1.6797s-1.6758 0.75391-1.6758 1.6797v22.324c0 0.92578 0.75 1.6797 1.6758 1.6797z"/>
                                    <path d="m50 85.973c0.92578 0 1.6758-0.75391 1.6758-1.6797v-22.324c0-0.92578-0.75-1.6797-1.6758-1.6797s-1.6758 0.75391-1.6758 1.6797v22.324c-0.003907 0.92578 0.75 1.6797 1.6758 1.6797z"/>
                                    <path d="m59.695 85.973c0.92578 0 1.6797-0.75391 1.6797-1.6797v-22.324c0-0.92578-0.75391-1.6797-1.6797-1.6797-0.92578 0-1.6797 0.75391-1.6797 1.6797v22.324c0.003906 0.92578 0.75781 1.6797 1.6797 1.6797z"/>
                                    <path d="m69.391 85.973c0.92578 0 1.6797-0.75391 1.6797-1.6797v-22.324c0-0.92578-0.75391-1.6797-1.6797-1.6797s-1.6797 0.75391-1.6797 1.6797v22.324c0.003906 0.92578 0.75781 1.6797 1.6797 1.6797z"/>
                                </g>
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
                        <span class="block text-4xl font-bold w-[50px]">{{ index + 1 }}.</span>
                        <p @click="maybeDisplayIngredient" class="leading-8 mb-1 w-a w-[calc(100%_-_50px)]" v-html="resolveDirection(direction.direction)"></p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-end my-4">
                <h2 class="text-4xl font-bold md:text-left">For Next Time</h2>
                <NuxtLink to="/recipes/search" class="text-lg font-bold">
                    See all
                </NuxtLink>
            </div>
            <RecipeGrid>
                <RecipeGridItem v-for="recipe in recommended_recipes" :key="recipe.id" :recipe="recipe" />
            </RecipeGrid>
        </div>

        <Notification :open="notification_open" :subtitle="notification_title" :message="notification_message"></Notification>

        <RecipeGroceryList :class="{open: grocery_list_open}" :ingredients="recipe.ingredients" @close="closeGroceryList" />
    </div>
</template>

<script lang="ts" setup>
    const router = useRoute()
    const { 
        //@ts-ignore
        data: recipe, 
        //@ts-ignore
        pending: pending_recipe 
    } = await useFetch<Recipe>(
        `/api/recipes/${router.params.slug}?img_size=large`
    ).catch(err => {
        console.error(err)
    })

    const {
        data: recommended_recipes,
        pending: pending_recommended_recipes,
    } = await useFetch<Recipe[]>(
        `/api/recipes/?per_page=6&img_size=large&orderby=rand&post__not_in=${recipe.value.id}`
    )

    useHead({
        titleTemplate: `%s - ${useHtmlDecode(recipe.value.title)}`,
    })

    let single_qty_ingredients = recipe.value.ingredients.map((ingredient: Ingredient): Ingredient => {
        return {
            name: ingredient.name,
            qty: (parseFloat(ingredient.qty ? ingredient.qty : '0') / parseFloat(recipe.value.meta.servings)).toFixed(2)
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

    let resolveTime = (mins: number) => {
        let hours = (mins / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        
        let time = `${rminutes}m`;

        if(rhours > 0) {
            time = `${rhours}h`
            if(minutes > 0) {
                time += `${rminutes}m`
            }
        }

        return time
    }

    let maybeDisplayIngredient = (e: Event) => {
        let target = e.target instanceof HTMLElement ? e.target : null
        if(target?.classList.contains('ingredient-popup')) {
            let ingredient_name = target.dataset.name
            if(ingredient_name) {
                displayIngredient(ingredient_name, 5000)
            }
        }
    }

    let timer: NodeJS.Timeout = {} as NodeJS.Timeout;
    let displayIngredient = (ingredient_name: string, show_for: number = -1) => {
        let ingredient: Ingredient = getIngredientByName(ingredient_name)

        notification_open.value = true
        notification_title.value = ingredient.name ? ingredient.name : ''
        notification_message.value = `${ingredient.qty} ${ingredient.unit} ${ingredient.name}`
        if(ingredient.modifier) notification_message.value += `, <span v-if="ingredient.modifier">${ingredient.modifier}</span>`
        const runTimer = (duration: number) => {
            timer = setTimeout(() => {
                notification_open.value = false
            }, duration);
        }

        if(show_for > 0) {
            clearTimeout(timer)
            runTimer(show_for);
        }
    }

    let getIngredientByName = (name: string): Ingredient => {
        if(!Array.isArray(recipe.value.ingredients)) return {}
        recipe.value.ingredients.find((ingredient: Ingredient) => {
            if(ingredient.name === name) {
                return ingredient
            }
        })

        return {}
    }
        
    
    let resolveTemp = (oven: {temp: string, temp_unit: string}) => {
        if(temp_unit == oven.temp_unit) {
            return `${oven.temp}°${oven.temp_unit}`
        }
    }

    const resolveDirection = (direction: string): string => {
        let ingredients: Ingredient[] = [];
        for(let ingredient of recipe.value.ingredients) {
            let match: string[]|null = ingredient.hasOwnProperty('name') ? direction.match(ingredient.name) : null
            if(match) {
                ingredients.push(ingredient.name);
            }
        }

        if(ingredients) {
            for(let ingredient of recipe.value.ingredients) {
                let found_ingredient: Ingredient = getIngredientByName(ingredient)
                if(Object.keys(found_ingredient).length > 0) {
                    direction = direction.replace(
                        ingredient,
                        `<span class="ingredient-popup bg-[#FFFFFF] px-3 py-1 rounded-lg cursor-pointer inline-block hover:bg-[#1a4e48] hover:text-white my-1 bdorder-2 bdorder-[transparent] transition-colors" data-name=\"${found_ingredient.name}" >${ingredient}</span>`
                    )
                }
            }
        }

        return direction;
    };

    let updateIngredientQty = (action = 'increment') => {
        if(action == 'increment') {
            recipe_servings.value++
        } else if(action == 'decrement' && recipe_servings.value > 1) {
            recipe_servings.value--
        } else {
            return
        }

        for(let reactive_ingredient of recipe.value.ingredients) {
            let temp = reactive_ingredient.qty
            let single_serving
            for(let ingt of single_qty_ingredients) {
                if(ingt.name == reactive_ingredient.name) {
                    single_serving = ingt.qty ? parseFloat(ingt.qty) : 1
                    break
                }
            }

            if(single_serving) {
                if(action == 'increment') {
                    reactive_ingredient.qty = parseFloat(temp) + single_serving
                } else if(action == 'decrement') {
                    reactive_ingredient.qty = parseFloat(temp) - single_serving
                }
            }
        }
    }

    let resolveIngredientQty = (value: string|number): string => {
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
            default: 
                return whole
        }
    }
</script>