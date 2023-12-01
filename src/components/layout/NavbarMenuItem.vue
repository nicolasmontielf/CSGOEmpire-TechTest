<script setup>
    defineProps({
        title: String,
        link: String,
        icon: String
    })
</script>

<template>
    <li>
        <RouterLink
            class="text-base block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
            :to="link"
        >
            {{ title }}
        </RouterLink>
    </li>
</template>