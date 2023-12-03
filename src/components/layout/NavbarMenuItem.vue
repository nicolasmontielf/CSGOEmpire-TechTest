<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        },
        link: {
            type: [String, Object],
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <li>
        <RouterLink
            class="text-base flex py-2 text-white rounded md:bg-transparent gap-1"
            :to="link"
        >
            <img :src="`/images/${icon}.png`" class="h-icon" :alt="`Menu icon for ${title} item`">
            {{ title }}
        </RouterLink>
    </li>
</template>

<style scoped>
    .h-icon {
        height: 25px;
    }
</style>