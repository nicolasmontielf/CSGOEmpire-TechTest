<script setup>
    import { reactive } from 'vue'

    const props = defineProps({
        isHeader: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    const classes = reactive({
        'text-sm grid grid-cols-6 md:grid-cols-7 lg:grid-cols-8 text-color-text-table border-t-color-table-main border-t text-color-text-table px-4 flex items-center': true,
        'font-bold h-10 bg-color-table-main text-xs': props.isHeader,
        'h-table-grid': !props.isHeader,
    })
</script>

<template>
    <div :class="classes">
        <div class="col-span-3 lg:col-span-4">
            <slot name="teamName"></slot>
        </div>
        
        <div class="col-span-1 text-center">
            <slot name="mp"></slot>
        </div>

        <div class="hidden md:block md:col-span-1 text-center">
            <slot name="gf"></slot>
        </div>

        <div class="col-span-1 text-center">
            <slot name="ga"></slot>
        </div>

        <div class="col-span-1 text-center font-bold">
            <slot name="points"></slot>
        </div>
    </div>
</template>