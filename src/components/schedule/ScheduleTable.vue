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
        'text-sm grid grid-cols-10 py-5 px-5 border-b-slate-100 border': true,
        'font-semibold bg-blue-100': props.isHeader,
        'bg-gray-100': !props.isHeader && props.index % 2 === 0,
        'bg-gray-200': !props.isHeader && props.index % 2 !== 0
    })
</script>

<template>
    <div :class="classes">
        <div class="col-span-1">
            <slot name="matchDate"></slot>
        </div>
        
        <div class="col-span-2">
            <slot name="stadium"></slot>
        </div>

        <div class="text-right col-span-3">
            <slot name="homeTeam"></slot>
        </div>

        <div class="text-center col-span-1">
            <slot name="result"></slot>
        </div>

        <div class="text-left col-span-3">
            <slot name="awayTeam"></slot>
        </div>
    </div>
</template>