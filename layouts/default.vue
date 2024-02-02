<template>
    <div class="overflow-hidden relative min-h-screen">
        <Header />
        <div class="mb-6 max-w-[1100px] mx-auto px-8">
            <slot />
        </div>
    </div>
</template>

<style>
    :root {
        --sm: 576px;
        --md: 768px;
        --lg: 992px;
        --xl: 1200px;

        --heading: 'Source Serif Pro', arial, sans-serif;
        --body: arial, sans-serif;

        --primary: #283593;
        /* --primary-dark: #001064; */
        --primary-dark: #1a4e48;
        --primary-light: #5f5fc4;
        --secondary: #171a1c;
        --tertiary: #ffffff;
    }

    html {
        background-color: #ffddb9;
        background-image: linear-gradient(143deg, #f5f3f0 0%, #ffddb9 100%); 
        /* 
            background-color: #4158D0;
            background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); 
        */
    }

	a {
		text-decoration: none;
	}
    a:hover, a:active, a:focus {
        color: var(--primary-dark);
    }

	.blog-slug.container {
		padding-top: 0;
	}

	.container {
		overflow: hidden;
		position: relative;
	}

    body.noscroll {
        overflow-y: hidden;
    }
</style>