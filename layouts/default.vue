<template>
    <div class="overflow-hidden position-relative bg-[#f5f3f0] min-h-screen">
        <Header />
        <div class="mb-6 max-w-[1100px] mx-auto px-4">
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
        background-color: #f5f3f0;
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