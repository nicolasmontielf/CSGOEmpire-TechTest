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
            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
            :to="link"
        >
            {{ title }}
        </RouterLink>
    </li>
</template>