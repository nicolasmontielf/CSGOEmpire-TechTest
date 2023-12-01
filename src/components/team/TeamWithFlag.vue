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
        <img :src="teamFlag" class="flag-icon" alt="">
    </div>
</template>

<style scoped>
    .flag-icon {
        width: 53px;
        height: 37px;
    }
</style>