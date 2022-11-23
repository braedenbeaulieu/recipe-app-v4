<template>
    <div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
    </div>
</template>
<style>
	.page-enter-active,
	.page-leave-active {
	transition: opacity .15s, filter .15s;
	}

	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(.4rem);
	}
</style>