<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        team: {
            type: String,
            required: true
        },
        reverse: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    const teamFlag = computed(() => {
        return `https://flagsapi.codeaid.io/${props.team}.png`
    })

</script>

<template>
    <div :class="[reverse ? 'flex-row-reverse' : 'flex-row', 'flex gap-2 items-center justify-end text-base font-bold']">
        <p>{{ team }}</p>
        <img :src="teamFlag" class="h-8" alt="">
    </div>
</template>