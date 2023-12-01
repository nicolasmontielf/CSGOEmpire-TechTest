<script setup>
    import { reactive } from 'vue'

    const props = defineProps({
        isHeader: {
            type: Boolean,
            required: false,
            default: false
        },
        index: {
            type: Number,
            required: false,
            default: 0
        }
    })

    const classes = reactive({
        'text-sm grid grid-cols-5 md:grid-cols-8 lg:grid-cols-8 border-b-color-table-main border text-color-text-table px-4': true,
        'font-bold h-10 bg-color-table-main text-xs': props.isHeader,
        'h-table-grid': !props.isHeader,
        'bg-color-table-even': !props.isHeader && props.index % 2 !== 0
    })
</script>

<template>
    <div :class="classes">
        <div class="hidden md:flex items-center col-span-1 md:col-span-2 lg:col-span-1">
            <slot name="matchDate"></slot>
        </div>
        
        <div class="hidden lg:flex items-center col-span-2 lg:col-span-2 lg:pl-4">
            <slot name="stadium"></slot>
        </div>

        <div class="flex flex-row justify-end items-center col-span-2 md:col-span-2 lg:col-span-2">
            <slot name="homeTeam"></slot>
        </div>

        <div class="flex flex-row justify-center items-center col-span-1">
            <slot name="result"></slot>
        </div>

        <div class="flex flex-row justify-start items-center col-span-2 md:col-span-2 lg:col-span-2">
            <slot name="awayTeam"></slot>
        </div>
    </div>
</template>

<style>
    .h-table-grid {
        height: 70px;
    }
</style>